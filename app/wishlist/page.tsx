export const runtime = 'edge';

import AnimatedGradientBg from "@/components/animated-gradient-bg"
import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"
import WishlistPageClient from "@/components/wishlist-page-client"

export default function WishlistPage() {
  return (
    <div className="flex min-h-screen flex-col bg-dark">
      <SiteHeader />
      <main className="flex-1 pt-20 relative overflow-hidden">
        <AnimatedGradientBg />
        <div className="py-12 md:py-24">
          <div className="relative z-10">
            <WishlistPageClient />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
