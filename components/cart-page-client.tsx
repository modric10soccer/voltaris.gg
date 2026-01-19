"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus, Minus, Trash2, ShoppingCart, Zap } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { formatPrice } from "@/lib/utils"
import { useState } from "react"

export default function CartPageClient() {
  const { items, updateQuantity, removeItem, getTotalPrice, getCartDetails, clearCart } = useCart()
  const cartDetails = getCartDetails()
  const [isClearing, setIsClearing] = useState(false)

  const handleUpdateQuantity = (productId: string, variantId: string, newQuantity: number) => {
    updateQuantity(productId, variantId, newQuantity)
  }

  const handleRemoveItem = (productId: string, variantId: string) => {
    removeItem(productId, variantId)
  }

  const handleProceedToCheckout = () => {
    if (cartDetails.length === 0) {
      return
    }
    window.location.href = "/checkout"
  }

  const handleClearCart = () => {
    setIsClearing(true)
    setTimeout(() => {
      clearCart()
      setIsClearing(false)
    }, 300)
  }

  return (
    <div className="container px-4 md:px-6">
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-voltaris-red/20 border border-voltaris-red/30 px-4 py-2 text-sm font-medium text-voltaris-red backdrop-blur-sm">
          <ShoppingCart className="h-4 w-4" />
          Your Cart
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Shopping Cart
        </h1>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          Review your items and proceed to checkout when ready
        </p>
      </div>

      {cartDetails.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-muted-foreground rounded-2xl border border-zinc-800 bg-zinc-900/50">
          <ShoppingCart className="h-32 w-32 mb-6 text-zinc-700" />
          <p className="text-2xl mb-2 font-semibold text-foreground">Your cart is empty</p>
          <p className="text-lg mb-8">Start shopping to add items to your cart</p>
          <Button
            asChild
            className="bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 px-8 py-6 text-lg font-bold rounded-full backdrop-blur-sm"
          >
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            className={`lg:col-span-2 space-y-6 transition-opacity duration-300 ${isClearing ? "opacity-0" : "opacity-100"}`}
          >
            {cartDetails.map((item) => (
              <div
                key={`${item.product.id}-${item.variant.id}`}
                className="group flex items-center gap-6 p-6 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 hover:border-voltaris-red/30 transition-all duration-300"
              >
                <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-black/20 flex-shrink-0">
                  <Image
                    src={item.product.image || "/placeholder.svg"}
                    alt={item.product.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-foreground mb-1 truncate">{item.product.name}</h3>
                  <p className="text-voltaris-red text-sm font-semibold mb-3">{item.variant.name}</p>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-lg border-zinc-700 text-foreground hover:bg-voltaris-red/10 hover:border-voltaris-red bg-transparent"
                      onClick={() => handleUpdateQuantity(item.product.id, item.variant.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-lg font-bold text-foreground min-w-[3ch] text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-lg border-zinc-700 text-foreground hover:bg-voltaris-red/10 hover:border-voltaris-red bg-transparent"
                      onClick={() => handleUpdateQuantity(item.product.id, item.variant.id, item.quantity + 1)}
                      disabled={item.quantity >= item.variant.stock}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3 flex-shrink-0">
                  <span className="text-2xl font-bold text-voltaris-red">
                    {formatPrice(item.variant.price * item.quantity)}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-voltaris-red hover:bg-voltaris-red/10 rounded-lg"
                    onClick={() => handleRemoveItem(item.product.id, item.variant.id)}
                  >
                    <Trash2 className="h-5 w-5" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1 h-fit sticky top-24">
            <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 p-8 space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-5 w-5 text-voltaris-red" />
                <h2 className="text-2xl font-bold text-foreground">Order Summary</h2>
              </div>

              <div className="space-y-3 border-b border-zinc-800 pb-6">
                {cartDetails.map((item) => (
                  <div key={`${item.product.id}-${item.variant.id}-summary`} className="flex justify-between text-sm">
                    <span className="text-muted-foreground truncate mr-2">
                      {item.product.name} ({item.variant.name}) ×{item.quantity}
                    </span>
                    <span className="text-foreground font-semibold whitespace-nowrap">
                      {formatPrice(item.variant.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center text-2xl font-bold pt-2">
                <span className="text-foreground">Total</span>
                <span className="text-voltaris-red">{formatPrice(getTotalPrice())}</span>
              </div>

              <Button
                onClick={handleProceedToCheckout}
                className="w-full bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 py-6 text-lg font-bold rounded-full backdrop-blur-sm transition-all duration-300"
                disabled={cartDetails.length === 0}
              >
                Proceed to Checkout
              </Button>

              <Button
                onClick={handleClearCart}
                className="w-full bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 py-6 text-lg font-bold rounded-full backdrop-blur-sm"
                disabled={cartDetails.length === 0}
              >
                Clear Cart
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
