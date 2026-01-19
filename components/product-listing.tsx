"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getProductsByCategory } from "@/lib/products"
import { formatPrice } from "@/lib/utils"
import ScrollReveal from "@/components/scroll-reveal"
import { ShoppingCart } from "lucide-react"

export default function ProductListing() {
  const categorizedProducts = getProductsByCategory()
  const categories = Object.keys(categorizedProducts)

  return (
    <div className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-voltaris-red/20 px-4 py-2 text-sm font-medium text-voltaris-red border border-voltaris-red/30 backdrop-blur-sm">
            <ShoppingCart className="h-4 w-4" />
            Products
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Our Products
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Browse our complete catalog of premium products organized by game
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-bold text-foreground">{category}</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-voltaris-red/50 to-transparent" />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categorizedProducts[category].map((product, idx) => (
                <ScrollReveal key={product.id} delay={idx * 0.1}>
                  <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 p-4 text-left transition-all duration-300 hover:scale-[1.02] hover:border-voltaris-red/50 flex flex-col h-full">
                    <Link href={`/products/${product.slug}`} prefetch={false} className="flex flex-col flex-1">
                      <div className="relative mb-4 rounded-xl overflow-hidden h-48">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                      <div className="flex items-center justify-between text-sm mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-voltaris-red font-semibold">{formatPrice(product.variants[0]?.price || 0)}</span>
                        </div>
                        <span className="text-voltaris-red text-xs">In Stock</span>
                      </div>
                    </Link>
                    <Button
                      asChild
                      className="w-full bg-voltaris-red/20 text-voltaris-red hover:bg-voltaris-red/30 border border-voltaris-red/30 py-3 text-sm font-semibold rounded-full backdrop-blur-sm transition-all duration-300 mt-auto"
                    >
                      <Link href={`/products/${product.slug}`}>Buy Now</Link>
                    </Button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
