"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Package, TrendingUp } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/products"
import { useCurrency } from "@/contexts/currency-context"
import ScrollReveal from "@/components/scroll-reveal"

export default function BestSellerProducts() {
  const { formatPrice } = useCurrency()
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4)

  return (
    <section className="py-16 md:py-24 bg-dark">
      <div className="container px-4 md:px-6 text-center">
        <ScrollReveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-nano-blue/20 px-4 py-2 text-sm font-medium text-nano-blue border border-nano-blue/30 backdrop-blur-sm">
            <TrendingUp className="h-4 w-4" />
            Best Sellers
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Most Popular Products
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            Discover our top-rated gaming enhancements trusted by thousands of players worldwide
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {featuredProducts.map((product, idx) => (
            <ScrollReveal key={product.id} delay={idx * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 p-4 text-left transition-all duration-300 hover:scale-[1.02] hover:border-nano-blue/50 flex flex-col h-full">
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
                      <span className="text-nano-blue font-semibold">
                        {formatPrice(product.variants[0]?.price || 0)}
                      </span>
                    </div>
                    <span className="text-nano-blue text-xs">In Stock</span>
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

        <ScrollReveal delay={0.4}>
          <Button
            asChild
            className="mt-12 bg-voltaris-red/20 text-voltaris-red hover:bg-voltaris-red/30 border border-voltaris-red/30 px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 ease-in-out"
          >
            <Link href="/products" prefetch={false}>
              <Package className="mr-2 h-5 w-5" />
              View All Products
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
