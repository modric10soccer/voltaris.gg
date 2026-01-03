"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import AnimatedGradientBg from "@/components/animated-gradient-bg"
import SearchResults from "@/components/search-results"

function SearchPageContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  return (
    <div className="flex min-h-screen flex-col bg-dark">
      <SiteHeader />
      <main className="flex-1 pt-20 relative overflow-hidden">
        <AnimatedGradientBg />
        <div className="relative z-10">
          <SearchResults query={query} />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  )
}
