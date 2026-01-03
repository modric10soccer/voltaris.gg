import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import CartPageClient from "@/components/cart-page-client"
import AnimatedGradientBg from "@/components/animated-gradient-bg"

export default function CartPage() {
  return (
    <div className="flex min-h-screen flex-col bg-dark">
      <SiteHeader />
      <main className="flex-1 pt-20 relative overflow-hidden">
        <AnimatedGradientBg />
        <div className="py-12 md:py-24">
          <div className="relative z-10">
            <CartPageClient />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
