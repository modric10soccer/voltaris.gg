"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getProductsByCategory } from "@/lib/products"
import { useCurrency } from "@/contexts/currency-context"
import { useState, useMemo } from "react"
import ScrollReveal from "@/components/scroll-reveal"

export default function ProductListing() {
  const categorizedProducts = getProductsByCategory()
  const { formatPrice } = useCurrency()
  const [selectedCategory, setSelectedCategory] = useState("All Products")

  const allProducts = useMemo(() => {
    const products = []
    for (const category in categorizedProducts) {
      products.push(...categorizedProducts[category])
    }
    return products
  }, [categorizedProducts])

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All Products") {
      return allProducts
    }
    return categorizedProducts[selectedCategory] || []
  }, [selectedCategory, categorizedProducts, allProducts])

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
      {filteredProducts.map((product, idx) => (
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
                  <span className="text-nano-blue font-semibold">{formatPrice(product.variants[0]?.price || 0)}</span>
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
  )
}
