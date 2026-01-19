export const runtime = 'edge'

import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { ExternalLink, Youtube, Twitch, Users, Video, Clapperboard, MessageCircle } from "lucide-react"
import Link from "next/link"
import AnimatedGradientBg from "@/components/animated-gradient-bg"

export default function MediaCreatorsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-dark">
      <SiteHeader />
      <main className="flex-1 pt-20 relative overflow-hidden">
        <AnimatedGradientBg />
        <div className="py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-voltaris-red/20 px-4 py-2 text-sm font-medium text-voltaris-red border border-voltaris-red/30">
                <Clapperboard className="h-4 w-4" />
                Media Program
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                Media Program
              </h1>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Partner with Voltaris and unlock exclusive benefits, free products, and revenue opportunities by
                creating engaging content for your audience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl hover:border-voltaris-red/50 transition-all duration-300 hover:scale-105">
                <div className="bg-voltaris-red/10 p-4 rounded-full mb-6">
                  <Youtube className="h-12 w-12 text-voltaris-red" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-3">YouTube Creators</h2>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Create in-depth reviews, tutorials, and gameplay showcases. Earn free lifetime keys and revenue share
                  based on your channel's performance.
                </p>
                <ul className="text-left text-sm text-muted-foreground space-y-3 w-full">
                  <li className="flex items-start gap-3">
                    <div className="bg-voltaris-red/20 p-1 rounded-full mt-0.5">
                      <Users className="h-4 w-4 text-voltaris-red" />
                    </div>
                    <span>Free lifetime access to all products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-voltaris-red/20 p-1 rounded-full mt-0.5">
                      <ExternalLink className="h-4 w-4 text-voltaris-red" />
                    </div>
                    <span>Revenue share on referred sales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-voltaris-red/20 p-1 rounded-full mt-0.5">
                      <ExternalLink className="h-4 w-4 text-voltaris-red" />
                    </div>
                    <span>Early access to new releases</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl hover:border-voltaris-red/50 transition-all duration-300 hover:scale-105">
                <div className="bg-voltaris-red/10 p-4 rounded-full mb-6">
                  <Twitch className="h-12 w-12 text-voltaris-red" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-3">Twitch Streamers</h2>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Stream live gameplay with our products and engage your community. Get exclusive giveaway keys and
                  priority support for your viewers.
                </p>
                <ul className="text-left text-sm text-muted-foreground space-y-3 w-full">
                  <li className="flex items-start gap-3">
                    <div className="bg-voltaris-red/20 p-1 rounded-full mt-0.5">
                      <Users className="h-4 w-4 text-voltaris-red" />
                    </div>
                    <span>Exclusive giveaway keys for viewers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-voltaris-red/20 p-1 rounded-full mt-0.5">
                      <ExternalLink className="h-4 w-4 text-voltaris-red" />
                    </div>
                    <span>Priority support during streams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-voltaris-red/20 p-1 rounded-full mt-0.5">
                      <ExternalLink className="h-4 w-4 text-voltaris-red" />
                    </div>
                    <span>Custom affiliate dashboard</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl hover:border-voltaris-red/50 transition-all duration-300 hover:scale-105">
                <div className="bg-voltaris-red/10 p-4 rounded-full mb-6">
                  <Video className="h-12 w-12 text-voltaris-red" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-3">Content Creators</h2>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Create viral short-form content on TikTok, Instagram, or other platforms. Perfect for quick showcases
                  and highlight reels.
                </p>
                <ul className="text-left text-sm text-muted-foreground space-y-3 w-full">
                  <li className="flex items-start gap-3">
                    <div className="bg-voltaris-red/20 p-1 rounded-full mt-0.5">
                      <Users className="h-4 w-4 text-voltaris-red" />
                    </div>
                    <span>Viral content opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-voltaris-red/20 p-1 rounded-full mt-0.5">
                      <ExternalLink className="h-4 w-4 text-voltaris-red" />
                    </div>
                    <span>Exclusive campaign access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-voltaris-red/20 p-1 rounded-full mt-0.5">
                      <ExternalLink className="h-4 w-4 text-voltaris-red" />
                    </div>
                    <span>Performance-based bonuses</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-12 mb-16 shadow-xl">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Program Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="bg-voltaris-red/20 p-3 rounded-lg">
                    <ExternalLink className="h-6 w-6 text-voltaris-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Free Product Access</h3>
                    <p className="text-sm text-muted-foreground">
                      Get lifetime access to all current and future Voltaris products at no cost.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-voltaris-red/20 p-3 rounded-lg">
                    <ExternalLink className="h-6 w-6 text-voltaris-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Revenue Share</h3>
                    <p className="text-sm text-muted-foreground">
                      Earn commission on every sale generated through your unique referral link.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-voltaris-red/20 p-3 rounded-lg">
                    <ExternalLink className="h-6 w-6 text-voltaris-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Priority Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Get dedicated support from our team to ensure your content creation goes smoothly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-voltaris-red/20 p-3 rounded-lg">
                    <ExternalLink className="h-6 w-6 text-voltaris-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Early Access</h3>
                    <p className="text-sm text-muted-foreground">
                      Be the first to showcase new products and features before public release.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-12 shadow-xl text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
              <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our Discord server to connect with our team, learn about program requirements, and submit your
                application. We review applications within 24-48 hours.
              </p>
              <Button
                asChild
                className="group bg-voltaris-red/20 text-voltaris-red hover:bg-voltaris-red/30 border border-voltaris-red/30 px-10 py-6 text-base font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 backdrop-blur-sm"
              >
                <Link href="https://discord.gg/voltaris" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  Join Our Discord
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
