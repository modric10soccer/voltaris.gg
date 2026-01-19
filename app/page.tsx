export const dynamic = 'force-dynamic'

import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import HomePageClientContent from "@/components/home-page-client-content"
import AnimatedGradientBg from "@/components/animated-gradient-bg"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-dark">
      <SiteHeader />
      <div className="relative overflow-hidden">
        <AnimatedGradientBg />
        <div className="relative z-10">
          <HomePageClientContent />
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}
