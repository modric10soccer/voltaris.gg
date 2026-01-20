import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ExternalLink, MessageCircle } from "lucide-react"

export default function FreeKeysSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Panel */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  Want <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Free Keys</span>?
                </h2>
                <p className="text-base text-muted-foreground">
                  Join our exclusive media program and start earning rewards
                </p>
              </div>

              <ul className="space-y-6 text-left">
                <li className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-voltaris-red/10 flex items-center justify-center group-hover:bg-voltaris-red/20 transition-colors">
                    <CheckCircle className="h-5 w-5 text-voltaris-red" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-semibold text-foreground text-base">Earn Rewards</span>
                    <p className="text-sm text-muted-foreground">
                      Create content for Voltaris, gain views, and watch your channel grow with our awesome community.
                      Earn money while doing what you love.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-voltaris-red/10 flex items-center justify-center group-hover:bg-voltaris-red/20 transition-colors">
                    <CheckCircle className="h-5 w-5 text-voltaris-red" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-semibold text-foreground text-base">Be Part of Something Big</span>
                    <p className="text-sm text-muted-foreground">
                      Help us build the largest gaming community in the world!
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-voltaris-red/10 flex items-center justify-center group-hover:bg-voltaris-red/20 transition-colors">
                    <CheckCircle className="h-5 w-5 text-voltaris-red" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-semibold text-foreground text-base">Proven Success</span>
                    <p className="text-sm text-muted-foreground">
                      Over 500 Voltaris videos are already on YouTube thanks to our amazing creators. You could be next!
                    </p>
                  </div>
                </li>
              </ul>

              <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start pt-4">
                <Button
                  asChild
                  className="group bg-voltaris-red/20 text-voltaris-red hover:bg-voltaris-red/30 border border-voltaris-red/30 px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  <Link href="/media-program" prefetch={false}>
                    <ExternalLink className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Learn More
                  </Link>
                </Button>
                <Button
                  asChild
                  className="group bg-voltaris-red/20 text-voltaris-red hover:bg-voltaris-red/30 border border-voltaris-red/30 px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  <Link href="https://discord.gg/voltaris" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Join Discord
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Panel */}
            <div className="relative rounded-2xl overflow-hidden aspect-video border border-zinc-800 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 p-2">
              <div className="relative rounded-xl overflow-hidden aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/y4WciPTdd4E"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
