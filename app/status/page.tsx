import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import StatusListing from "@/components/status-listing"
import AnimatedGradientBg from "@/components/animated-gradient-bg"

export default function StatusPage() {
  return (
    <div className="flex min-h-screen flex-col bg-dark">
      <SiteHeader />
      <main className="flex-1 pt-20 relative overflow-hidden">
        <AnimatedGradientBg />
        <div className="relative z-10">
          <StatusListing />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
