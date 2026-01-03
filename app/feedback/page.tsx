import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import FeedbackGrid from "@/components/feedback-grid"
import AnimatedGradientBg from "@/components/animated-gradient-bg"

export default function FeedbackPage() {
  return (
    <div className="flex min-h-screen flex-col bg-dark">
      <SiteHeader />
      <main className="flex-1 pt-20 relative overflow-hidden">
        <AnimatedGradientBg />
        <div className="relative z-10">
          <FeedbackGrid />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
