export const dynamic = 'force-dynamic'

import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import AnimatedGradientBg from "@/components/animated-gradient-bg"
import Link from "next/link"
import { DollarSign, TrendingUp, Users, MessageCircle, CheckCircle, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResellingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-dark">
      <SiteHeader />
      <main className="flex-1 pt-20 relative overflow-hidden">
        <AnimatedGradientBg />
        <div className="py-12 md:py-24">
          <div className="relative z-10 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 rounded-full bg-voltaris-red/20 border border-voltaris-red/30 px-4 py-2 text-sm font-medium text-voltaris-red mb-4">
                  <DollarSign className="h-4 w-4" />
                  Reselling Program
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  Become a Voltaris Reseller
                </h1>
                <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                  Join our exclusive reselling program and earn competitive commissions by selling premium gaming
                  products
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8 hover:border-voltaris-red/30 transition-colors">
                  <TrendingUp className="h-12 w-12 text-voltaris-red mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">High Commission Rates</h3>
                  <p className="text-muted-foreground">
                    Earn competitive commissions on every sale with our tiered reward system
                  </p>
                </div>

                <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8 hover:border-voltaris-red/30 transition-colors">
                  <Users className="h-12 w-12 text-voltaris-red mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Dedicated Support</h3>
                  <p className="text-muted-foreground">
                    Get priority support and personalized assistance from our reseller team
                  </p>
                </div>

                <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8 hover:border-voltaris-red/30 transition-colors">
                  <Zap className="h-12 w-12 text-voltaris-red mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Marketing Materials</h3>
                  <p className="text-muted-foreground">
                    Access exclusive marketing resources, banners, and promotional content
                  </p>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8 mb-16">
                <h2 className="text-2xl font-bold text-white mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  How It Works
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-voltaris-red/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-voltaris-red" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">1. Join Our Discord</h3>
                      <p className="text-muted-foreground">
                        Connect with us on Discord and express your interest in becoming a reseller
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-voltaris-red/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-voltaris-red" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">2. Get Approved</h3>
                      <p className="text-muted-foreground">
                        Our team will review your application and provide you with reseller access
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-voltaris-red/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-voltaris-red" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">3. Start Selling</h3>
                      <p className="text-muted-foreground">
                        Receive your unique reseller links and start earning commissions on every sale
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-voltaris-red/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-voltaris-red" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">4. Earn & Grow</h3>
                      <p className="text-muted-foreground">
                        Track your sales, receive payouts, and grow your reselling business
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8 mb-16">
                <h2 className="text-2xl font-bold text-white mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  Requirements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-voltaris-red" />
                    <span className="text-foreground">Active Discord account</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-voltaris-red" />
                    <span className="text-foreground">Good standing in community</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-voltaris-red" />
                    <span className="text-foreground">Commitment to quality service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-voltaris-red" />
                    <span className="text-foreground">Understanding of our products</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-12">
                <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join our Discord server and contact our reseller team to begin your journey as a Voltaris reseller
                </p>
                <Link href="https://discord.gg/voltaris" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 rounded-full backdrop-blur-sm h-12 px-8 font-semibold transition-all">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Join Discord & Apply
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
