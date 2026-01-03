"use client"

import { SearchIcon } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/products"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface SearchResultsProps {
  query: string
}

// Searchable pages
const searchablePages = [
  { title: "Home", path: "/", description: "Welcome to Voltaris - Premium gaming enhancements" },
  { title: "Products", path: "/products", description: "Browse our premium gaming products" },
  { title: "Status", path: "/status", description: "Check the status of our products" },
  { title: "Reviews", path: "/reviews", description: "See what our customers are saying" },
  { title: "Updates", path: "/updates", description: "Latest news and product updates" },
  { title: "Media Program", path: "/media-program", description: "Join our exclusive content creator program" },
  { title: "Reselling", path: "/reselling", description: "Become a Voltaris reseller" },
  { title: "Terms of Service", path: "/terms-of-service", description: "Our terms and conditions" },
  { title: "Cart", path: "/cart", description: "View your shopping cart" },
  { title: "Account", path: "/account", description: "Manage your account" },
]

export default function SearchResults({ query }: SearchResultsProps) {
  const lowerQuery = query.toLowerCase()

  // Search products
  const productResults = products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery),
  )

  // Search pages
  const pageResults = searchablePages.filter(
    (page) => page.title.toLowerCase().includes(lowerQuery) || page.description.toLowerCase().includes(lowerQuery),
  )

  const hasResults = productResults.length > 0 || pageResults.length > 0

  return (
    <section className="py-12 md:py-24 min-h-screen">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-voltaris-red/20 px-4 py-2 text-sm font-medium text-voltaris-red border border-voltaris-red/30">
            <SearchIcon className="h-4 w-4" />
            Search Results
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            {query ? `Results for "${query}"` : "Search Results"}
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            {hasResults
              ? `Found ${productResults.length + pageResults.length} result${productResults.length + pageResults.length !== 1 ? "s" : ""}`
              : "No results found. Try a different search term."}
          </p>
        </div>

        {/* Product Results */}
        {productResults.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-white mb-6">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productResults.map((product, idx) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-voltaris-red/50 transition-all duration-300 hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: "backwards" }}
                >
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-105"
                  />
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-voltaris-red transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-zinc-400 mb-4">{product.category}</p>
                  <p className="text-base text-voltaris-red font-bold">${product.variants[0]?.price.toFixed(2)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Page Results */}
        {pageResults.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pageResults.map((page, idx) => (
                <Link
                  key={page.path}
                  href={page.path}
                  className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-voltaris-red/50 transition-all duration-300 hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: "backwards" }}
                >
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-voltaris-red transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-sm text-zinc-400">{page.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {!hasResults && query && (
          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 rounded-full px-8 py-4 backdrop-blur-sm"
            >
              <Link href="/products">Browse All Products</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
