"use client"

import { useSearchParams } from "next/navigation"
import React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ArrowRight, Loader2, ShoppingCart, Shield, Mail, Check, Copy } from "lucide-react"
import { getProductBySlug } from "@/lib/products"
import { useCurrency } from "@/contexts/currency-context"
import { useCart } from "@/contexts/cart-context"
import { openStorrikCheckout, type StorrikCheckoutOptions } from "@/lib/storrik-integration"
import { CRYPTO_WALLETS, CRYPTO_LABELS, calculateCryptoAmount, type CryptoType } from "@/lib/crypto-payment"
import TrustBadges from "@/components/trust-badges"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

declare global {
  interface Window {
    stripe: {
      pay: (storeId: string, productId: string) => void
    }
    storrik?: {
      configure: (params: { pk: string }) => void
      pay: (
        productId: string,
        variantId?: string | StorrikCheckoutOptions,
        options?: StorrikCheckoutOptions,
      ) => void
    }
  }
}

interface CheckoutFormProps {
  productSlug: string
}

export default function CheckoutForm({ productSlug }: CheckoutFormProps) {
  const searchParams = useSearchParams()
  const variantId = searchParams.get("variantId")
  const quantityParam = Number.parseInt(searchParams.get("quantity") || "1")

  const { getCartDetails } = useCart()
  const cartDetails = getCartDetails()

  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<"storrik" | "crypto">("storrik")
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoType>("BTC")
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)
  const [copiedAmount, setCopiedAmount] = useState(false)
  const [userWalletAddress, setUserWalletAddress] = useState("")
  const currencyContext = useCurrency()
  const { formatPrice, convertPrice } = currencyContext
  const { language } = useLanguage()
  const t = translations[language]

  const itemsToProcess = React.useMemo(() => {
    if (productSlug && variantId) {
      const foundProduct = getProductBySlug(productSlug)
      const foundVariant = foundProduct?.variants.find((v) => v.id === variantId)
      if (foundProduct && foundVariant) {
        return [{ product: foundProduct, variant: foundVariant, quantity: quantityParam }]
      }
    }
    return cartDetails
  }, [productSlug, variantId, quantityParam, cartDetails])

  const subtotal = itemsToProcess.reduce((sum, item) => sum + item.variant.price * item.quantity, 0)
  const total = convertPrice(subtotal)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedAddress(label)
    setTimeout(() => setCopiedAddress(null), 2000)
  }

  const copyAmount = (amount: string) => {
    navigator.clipboard.writeText(amount)
    setCopiedAmount(true)
    setTimeout(() => setCopiedAmount(false), 2000)
  }

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!agreedToTerms) {
      setError("You must agree to the Terms of Service.")
      return
    }
    if (itemsToProcess.length === 0) {
      setError("No items to checkout.")
      return
    }

    if (isPending) return

    setIsPending(true)
    setError(null)

    try {
      if (paymentMethod === "crypto") {
        sessionStorage.setItem(
          "pendingPayment",
          JSON.stringify({
            crypto: selectedCrypto,
            userWalletAddress,
            cryptoAmount: calculateCryptoAmount(total, selectedCrypto),
            items: itemsToProcess,
            total,
            timestamp: Date.now(),
          }),
        )

        window.location.href = "/checkout/pending"
        return
      }

      console.log("[v1] Starting checkout process with new Storrik embed")

      if (itemsToProcess.length === 1) {
        const item = itemsToProcess[0]
        const storrikProductId = item.product.storrikProductId || item.product.id
        const storrikVariantId = item.variant.id

        console.log("[v1] Product ID:", storrikProductId)
        console.log("[v1] Variant ID:", storrikVariantId)
        console.log("[v1] Storrik available:", typeof window !== "undefined" && !!window.storrik)

        const started = await openStorrikCheckout(storrikProductId, storrikVariantId, { style: "compact" })

        if (!started) {
          console.error("[v1] Storrik not available or missing public key")
          throw new Error("Payment system not loaded. Please refresh the page and try again.")
        }

        console.log("[v1] Storrik checkout triggered successfully")
      } else {
        setError("Please checkout items one at a time for now.")
      }
    } catch (err) {
      console.error("[v0] Checkout error:", err)
      setError("Failed to initiate payment. Please try again.")
    } finally {
      setIsPending(false)
    }
  }

  if (itemsToProcess.length === 0) {
    return (
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center text-foreground">
        <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
          <ShoppingCart className="h-24 w-24 mb-4 text-primary/50" />
          <p className="text-xl mb-6">{t.noItemsToCheckout}</p>
          <Button asChild className="bg-primary text-black hover:bg-primary/90">
            <Link href="/products">{t.continueShopping}</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-64px)] text-foreground pt-32 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-voltaris-red/20 border border-voltaris-red/30 px-6 py-3 text-sm font-semibold text-voltaris-red backdrop-blur-sm mb-6">
            <Shield className="h-5 w-5" />
            {t.secureCheckout}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            {t.completeOrder}
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">{t.oneStepAway}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Side - Contact Information */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-voltaris-red/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-voltaris-red" />
                </div>
                <h2 className="text-2xl font-bold text-white">{t.contactInfo}</h2>
              </div>

              <form onSubmit={handleCheckout} className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-foreground">{t.paymentMethod}</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("storrik")}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        paymentMethod === "storrik"
                          ? "border-voltaris-red bg-voltaris-red/10"
                          : "border-zinc-800 bg-black hover:border-zinc-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            paymentMethod === "storrik" ? "border-voltaris-red" : "border-zinc-700"
                          }`}
                        >
                          {paymentMethod === "storrik" && <div className="w-3 h-3 rounded-full bg-voltaris-red" />}
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-foreground">{t.cardPayment}</p>
                          <p className="text-xs text-muted-foreground">{t.instantDelivery}</p>
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("crypto")}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        paymentMethod === "crypto"
                          ? "border-voltaris-red bg-voltaris-red/10"
                          : "border-zinc-800 bg-black hover:border-zinc-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            paymentMethod === "crypto" ? "border-voltaris-red" : "border-zinc-700"
                          }`}
                        >
                          {paymentMethod === "crypto" && <div className="w-3 h-3 rounded-full bg-voltaris-red" />}
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-foreground">{t.cryptoPayment}</p>
                          <p className="text-xs text-muted-foreground">{t.paymentVerification}</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {paymentMethod === "crypto" && (
                  <div className="space-y-6 p-6 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 rounded-xl border border-zinc-800">
                    <div>
                      <Label className="text-sm font-semibold text-foreground mb-3 block">{t.selectCrypto}</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {(Object.keys(CRYPTO_WALLETS) as CryptoType[]).map((crypto) => (
                          <button
                            key={crypto}
                            type="button"
                            onClick={() => setSelectedCrypto(crypto)}
                            className={`px-4 py-2 rounded-full border transition-all text-sm font-medium backdrop-blur-sm ${
                              selectedCrypto === crypto
                                ? "bg-voltaris-red/20 text-voltaris-red border-voltaris-red/30"
                                : "bg-zinc-900/50 text-muted-foreground border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700"
                            }`}
                          >
                            {CRYPTO_LABELS[crypto]}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-sm font-semibold text-foreground">
                        Your {CRYPTO_LABELS[selectedCrypto]} Wallet Address
                      </Label>
                      <input
                        type="text"
                        value={userWalletAddress}
                        onChange={(e) => setUserWalletAddress(e.target.value)}
                        placeholder={`Enter your ${CRYPTO_LABELS[selectedCrypto]} wallet address`}
                        className="w-full p-4 bg-black/50 rounded-lg border border-zinc-800 text-foreground placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-voltaris-red/50 focus:border-voltaris-red font-mono text-sm"
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        We'll use this address to verify your payment and process refunds if needed
                      </p>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-sm font-semibold text-foreground">{t.walletAddress}</Label>
                      <div className="flex items-center gap-2 p-4 bg-black/50 rounded-lg border border-zinc-800">
                        <code className="flex-1 text-sm text-foreground break-all font-mono">
                          {CRYPTO_WALLETS[selectedCrypto]}
                        </code>
                        <Button
                          type="button"
                          size="sm"
                          onClick={() => copyToClipboard(CRYPTO_WALLETS[selectedCrypto], CRYPTO_LABELS[selectedCrypto])}
                          className="flex-shrink-0 h-9 px-3 bg-zinc-900/50 hover:bg-zinc-900 text-white border border-zinc-800 rounded-full backdrop-blur-sm transition-all"
                        >
                          {copiedAddress === CRYPTO_LABELS[selectedCrypto] ? (
                            <>
                              <Check className="h-4 w-4 mr-1" />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4 mr-1" />
                              Copy
                            </>
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-sm font-semibold text-foreground">Amount to Send</Label>
                      <div className="flex items-center gap-2 p-4 bg-black/50 rounded-lg border border-zinc-800">
                        <code className="flex-1 text-sm text-foreground break-all font-mono">{formatPrice(total)}</code>
                        <Button
                          type="button"
                          size="sm"
                          onClick={() => copyAmount(formatPrice(total))}
                          className="flex-shrink-0 h-9 px-3 bg-zinc-900/50 hover:bg-zinc-900 text-white border border-zinc-800 rounded-full backdrop-blur-sm transition-all"
                        >
                          {copiedAmount ? (
                            <>
                              <Check className="h-4 w-4 mr-1" />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4 mr-1" />
                              Copy
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-voltaris-red" />
                    <h3 className="font-semibold text-foreground">{t.securePayment}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800">
                      <Check className="h-4 w-4 text-voltaris-red flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{t.sslEncryption}</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800">
                      <Check className="h-4 w-4 text-voltaris-red flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{t.instantDelivery}</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800">
                      <Check className="h-4 w-4 text-voltaris-red flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{t.support247}</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800">
                      <Check className="h-4 w-4 text-voltaris-red flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{t.moneyBack}</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <TrustBadges />
          </div>

          {/* Right Side - Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 sticky top-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-voltaris-red/10 flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 text-voltaris-red" />
                </div>
                <h2 className="text-2xl font-bold text-white">{t.orderSummary}</h2>
              </div>

              <div className="space-y-4 mb-8">
                {itemsToProcess.map((item) => (
                  <div
                    key={`${item.product.id}-${item.variant.id}`}
                    className="flex items-center gap-4 p-4 bg-black rounded-xl border border-zinc-800"
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground truncate">{item.product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.variant.name} × {item.quantity}
                      </p>
                    </div>
                    <span className="font-bold text-foreground whitespace-nowrap">
                      {formatPrice(item.variant.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-800 pt-6 mb-6 space-y-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>{t.subtotal}</span>
                  <span className="font-semibold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-white pt-4 border-t border-zinc-800">
                  <span>{t.total}</span>
                  <span className="text-voltaris-red">{formatPrice(total)}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 mb-6 p-4 bg-black rounded-xl border border-zinc-800">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(!!checked)}
                  className="border-zinc-700 data-[state=checked]:bg-voltaris-red data-[state=checked]:border-voltaris-red mt-1"
                />
                <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  {t.agreeToTerms}{" "}
                  <Link
                    href="/terms-of-service"
                    className="text-voltaris-red hover:underline font-semibold"
                    prefetch={false}
                  >
                    {t.termsOfService}
                  </Link>{" "}
                  {t.andUnderstand}
                </Label>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm flex items-start gap-3">
                  <Shield className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <Button
                onClick={handleCheckout}
                className="w-full bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 h-14 text-lg font-semibold rounded-full backdrop-blur-sm transition-all"
                disabled={isPending || !agreedToTerms}
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    {t.processing}
                  </>
                ) : (
                  <>
                    {paymentMethod === "crypto" ? t.submitPayment : t.completePurchase}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-voltaris-red" />
                <span>
                  {t.securedBy} {paymentMethod === "crypto" ? t.blockchain : t.voltarisPaymentGateway}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
