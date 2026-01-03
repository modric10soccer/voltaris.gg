"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Copy, Loader2 } from "lucide-react"
import { CRYPTO_LABELS } from "@/lib/crypto-payment"
import SiteHeader from "@/components/site-header"
import AnimatedGradientBg from "@/components/animated-gradient-bg"

export default function PendingPage() {
  const router = useRouter()
  const [paymentInfo, setPaymentInfo] = useState<any>(null)

  useEffect(() => {
    const stored = sessionStorage.getItem("pendingPayment")
    if (stored) {
      setPaymentInfo(JSON.parse(stored))
    } else {
      router.push("/products")
    }
  }, [router])

  const copyTransactionId = () => {
    if (paymentInfo?.transactionId) {
      navigator.clipboard.writeText(paymentInfo.transactionId)
    }
  }

  if (!paymentInfo) {
    return null
  }

  return (
    <>
      <SiteHeader />
      <div className="min-h-[calc(100vh-64px)] bg-black text-foreground pt-20 relative overflow-hidden">
        <AnimatedGradientBg />
        <div className="py-12 md:py-24">
          <div className="max-w-3xl mx-auto relative z-10 px-4">
            <div className="text-center mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex justify-center mb-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-voltaris-red/20 px-4 py-2 text-sm font-medium text-voltaris-red backdrop-blur-sm border border-voltaris-red/30">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Processing Payment
                </span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                Verifying Your Payment
              </h1>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Your cryptocurrency payment is being verified. This usually takes up to 24 hours.
              </p>
            </div>

            <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150 hover:border-voltaris-red/50 transition-all">
              {/* Payment Details */}
              <div className="space-y-4 mb-8">
                <div className="bg-black/50 rounded-xl border border-zinc-800 p-6">
                  <h2 className="text-base font-semibold text-white mb-4">Payment Details</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-zinc-800">
                      <span className="text-muted-foreground">Cryptocurrency</span>
                      <span className="font-semibold text-foreground">
                        {CRYPTO_LABELS[paymentInfo.crypto as keyof typeof CRYPTO_LABELS]}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-800">
                      <span className="text-muted-foreground">Crypto Amount</span>
                      <span className="font-semibold text-voltaris-red">
                        {paymentInfo.cryptoAmount} {paymentInfo.crypto}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-800">
                      <span className="text-muted-foreground">Amount (USD)</span>
                      <span className="font-semibold text-foreground">${paymentInfo.total.toFixed(2)} USD</span>
                    </div>
                    {paymentInfo.userWalletAddress && (
                      <div className="flex justify-between items-start py-2 border-b border-zinc-800">
                        <span className="text-muted-foreground">Your Wallet</span>
                        <code className="text-sm font-mono text-foreground bg-zinc-900 px-2 py-1 rounded max-w-[250px] break-all text-right">
                          {paymentInfo.userWalletAddress}
                        </code>
                      </div>
                    )}
                    <div className="flex justify-between items-start py-2">
                      <span className="text-muted-foreground">Transaction ID</span>
                      <div className="flex items-center gap-2">
                        <code className="text-sm font-mono text-foreground bg-zinc-900 px-2 py-1 rounded max-w-[200px] truncate">
                          {paymentInfo.transactionId}
                        </code>
                        <Button size="sm" variant="ghost" onClick={copyTransactionId} className="h-8 w-8 p-0">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="bg-black/50 rounded-xl border border-zinc-800 p-6">
                  <h2 className="text-base font-semibold text-white mb-4">Order Items</h2>
                  <div className="space-y-3">
                    {paymentInfo.items.map((item: any, index: number) => (
                      <div key={index} className="flex justify-between items-center py-2">
                        <div>
                          <p className="font-medium text-foreground">{item.product.name}</p>
                          <p className="text-sm text-muted-foreground">{item.variant.name}</p>
                        </div>
                        <span className="font-semibold text-foreground">${item.variant.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="flex-1 h-12 bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 rounded-full transition-all backdrop-blur-sm"
                >
                  <Link href="/products">Continue Shopping</Link>
                </Button>
                <Button
                  asChild
                  className="flex-1 h-12 bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 rounded-full transition-all backdrop-blur-sm"
                >
                  <Link href="/downloads">Go to Downloads</Link>
                </Button>
              </div>

              {/* Support Link */}
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Need help?{" "}
                  <Link href="https://discord.gg/voltaris" className="text-voltaris-red hover:underline font-semibold">
                    Contact Support
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
