export const runtime = 'edge'

import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { ArrowLeft, MessageCircle, XCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedGradientBg from "@/components/animated-gradient-bg"

export default function CheckoutFailedPage() {
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
                  <XCircle className="h-4 w-4" />
                  Failed
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  Payment Failed
                </h1>
                <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                  Your payment could not be processed. Don't worry - no charges have been made to your account.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8 md:p-12 hover:border-voltaris-red/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
                  <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">What Happened?</h2>

                  <div className="space-y-3 mb-8 bg-black/50 rounded-xl p-6 border border-zinc-800">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800">
                      <div className="w-2 h-2 bg-voltaris-red rounded-full flex-shrink-0 mt-2"></div>
                      <p className="text-sm text-muted-foreground">
                        Payment was cancelled or declined during processing
                      </p>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800">
                      <div className="w-2 h-2 bg-voltaris-red rounded-full flex-shrink-0 mt-2"></div>
                      <p className="text-sm text-muted-foreground">No charges have been made to your payment method</p>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800">
                      <div className="w-2 h-2 bg-voltaris-red rounded-full flex-shrink-0 mt-2"></div>
                      <p className="text-sm text-muted-foreground">Your cart items are still saved and available</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      asChild
                      className="w-full bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 h-12 text-base font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
                    >
                      <Link href="/checkout">
                        <ArrowLeft className="mr-3 h-5 w-5" />
                        Try Payment Again
                      </Link>
                    </Button>

                    <Button
                      asChild
                      className="w-full bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 h-12 text-base font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
                    >
                      <Link href="https://discord.gg/voltaris" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-3 h-5 w-5" />
                        Contact Support
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
