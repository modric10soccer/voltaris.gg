"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Heart, ShoppingBag, ShoppingCart, Trash2 } from "lucide-react"

import { useCart } from "@/contexts/cart-context"
import { useWishlist } from "@/contexts/wishlist-context"
import { formatPrice } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function WishlistPageClient() {
  const { addItem } = useCart()
  const { getWishlistDetails, removeItem, clearWishlist } = useWishlist()
  const wishlistDetails = getWishlistDetails()
  const [isClearing, setIsClearing] = useState(false)

  const handleAddToCart = (productId: string, variantId: string) => {
    addItem(productId, variantId, 1)
  }

  const handleClear = () => {
    setIsClearing(true)
    setTimeout(() => {
      clearWishlist()
      setIsClearing(false)
    }, 300)
  }

  return (
    <div className="container px-4 md:px-6">
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-voltaris-red/20 border border-voltaris-red/30 px-4 py-2 text-sm font-medium text-voltaris-red backdrop-blur-sm">
          <Heart className="h-4 w-4" />
          Your Wishlist
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Saved Items
        </h1>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">Keep track of the products you want to pick up next.</p>
      </div>

      {wishlistDetails.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-muted-foreground rounded-2xl border border-zinc-800 bg-zinc-900/50">
          <Heart className="h-32 w-32 mb-6 text-zinc-700" />
          <p className="text-2xl mb-2 font-semibold text-foreground">Your wishlist is empty</p>
          <p className="text-lg mb-8">Browse products and save your favorites.</p>
          <Button
            asChild
            className="bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 px-8 py-6 text-lg font-bold rounded-full backdrop-blur-sm"
          >
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      ) : (
        <div className={`space-y-6 transition-opacity duration-300 ${isClearing ? "opacity-0" : "opacity-100"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {wishlistDetails.map((item) => (
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
                  <span className="text-lg font-bold text-foreground">{formatPrice(item.variant.price)}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    onClick={() => handleAddToCart(item.product.id, item.variant.id)}
                    className="bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 rounded-full px-4"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-voltaris-red hover:bg-voltaris-red/10 rounded-lg"
                    onClick={() => removeItem(item.product.id, item.variant.id)}
                  >
                    <Trash2 className="h-5 w-5" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-6">
            <div className="flex items-center gap-3 text-foreground">
              <ShoppingBag className="h-5 w-5 text-voltaris-red" />
              <p className="font-semibold">{wishlistDetails.length} item(s) saved</p>
            </div>
            <div className="flex gap-3">
              <Button
                asChild
                variant="outline"
                className="rounded-full border border-voltaris-red/30 text-voltaris-red hover:bg-voltaris-red/10"
              >
                <Link href="/products">Continue Shopping</Link>
              </Button>
              <Button
                onClick={handleClear}
                className="rounded-full border border-voltaris-red/30 bg-voltaris-red/20 text-voltaris-red hover:bg-voltaris-red/30"
              >
                Clear Wishlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
