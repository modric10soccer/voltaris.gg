import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Download, MessageCircle, Star, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedGradientBg from "@/components/animated-gradient-bg"

export const dynamic = "force-dynamic"

export default function CheckoutSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div
        className="fixed inset-0 bg-background/90 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/wallpaper.jpg')",
        }}
      />
      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 pt-20 relative overflow-hidden">
          <AnimatedGradientBg />
          <div className="py-12 md:py-24">
            <div className="container px-4 md:px-6 relative z-10">
              <div className="text-center mb-12">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-voltaris-red/20 px-4 py-2 text-sm font-medium text-voltaris-red border border-voltaris-red/30">
                  <CheckCircle className="h-4 w-4" />
                  Success
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  Payment Successful
                </h1>
                <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                  Your purchase has been completed successfully. Follow the steps below to get started with your new
                  cheats.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8 md:p-12 hover:border-voltaris-red/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
                  <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">Next Steps</h2>

                  <div className="space-y-3 mb-6 bg-black/50 rounded-xl p-6 border border-zinc-800">
                    <div className="flex gap-4 p-4 rounded-lg bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 hover:border-voltaris-red/30 transition-all">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-voltaris-red/20 text-voltaris-red flex items-center justify-center text-base font-bold border border-voltaris-red/30">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Join Our Discord Server</h3>
                        <p className="text-sm text-muted-foreground">
                          Connect with our community for key claiming, support, and updates.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-lg bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 hover:border-voltaris-red/30 transition-all">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-voltaris-red/20 text-voltaris-red flex items-center justify-center text-base font-bold border border-voltaris-red/30">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Check Your Email</h3>
                        <p className="text-sm text-muted-foreground">
                          Order confirmation and important details have been sent to your inbox.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-lg bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 hover:border-voltaris-red/30 transition-all">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-voltaris-red/20 text-voltaris-red flex items-center justify-center text-base font-bold border border-voltaris-red/30">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Access Downloads</h3>
                        <p className="text-sm text-muted-foreground">
                          Visit your downloads page to get your cheat files and instructions.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-lg bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 hover:border-voltaris-red/30 transition-all">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-voltaris-red/20 text-voltaris-red flex items-center justify-center text-base font-bold border border-voltaris-red/30">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Leave a Review</h3>
                        <p className="text-sm text-muted-foreground">
                          Share your experience on Trustpilot and help other gamers make informed decisions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      asChild
                      className="w-full bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 h-12 text-base font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
                    >
                      <Link href="https://discord.gg/voltaris" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-3 h-5 w-5" />
                        Join Discord Server
                      </Link>
                    </Button>

                    <Button
                      asChild
                      className="w-full bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 h-12 text-base font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
                    >
                      <Link href="/downloads">
                        <Download className="mr-3 h-5 w-5" />
                        View Downloads
                      </Link>
                    </Button>

                    <Button
                      asChild
                      className="w-full bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 h-12 text-base font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
                    >
                      <Link
                        href="https://www.trustpilot.com/review/voltaris.gg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Star className="mr-3 h-5 w-5" />
                        Leave a Review on Trustpilot
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="ghost"
                      className="w-full text-muted-foreground hover:text-foreground h-12 bg-transparent hover:bg-transparent transition-all duration-300"
                    >
                      <Link href="/products">Continue Shopping</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
