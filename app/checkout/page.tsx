import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import CheckoutForm from "@/components/checkout-form"
import AnimatedGradientBg from "@/components/animated-gradient-bg"
import { Suspense } from "react"

function CheckoutLoading() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-dark text-foreground">
      <div className="text-xl text-muted-foreground">Loading checkout...</div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-dark">
      <SiteHeader />
      <main className="flex-1 pt-20 relative overflow-hidden">
        <AnimatedGradientBg />
        <div className="relative z-10">
          <Suspense fallback={<CheckoutLoading />}>
            <CheckoutForm />
          </Suspense>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
