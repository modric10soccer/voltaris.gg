"use client"

import ProductListing from "@/components/product-listing"
import { ShoppingBag } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function ProductListingClient() {
  return (
    <section className="py-12 md:py-24 min-h-screen">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-voltaris-red/20 px-4 py-2 text-sm font-medium text-voltaris-red border border-voltaris-red/30">
              <ShoppingBag className="h-4 w-4" />
              Products
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              Our Products
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Premium gaming enhancements for competitive players
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <ProductListing />
        </ScrollReveal>
      </div>
    </section>
  )
}
