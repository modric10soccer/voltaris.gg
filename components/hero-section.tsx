import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Package, Mouse, ChevronDown, ShieldCheck, MessageCircle } from "lucide-react"
import Link from "next/link"
import AnimatedSlider from "./animated-slider"

export default function HeroSection() {
  return (
    <>
      <section className="relative flex h-[700px] items-center justify-center overflow-hidden bg-black text-center md:h-[800px]">
        <Image
          src="/images/hero-background.png"
          alt="Hero Background"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent blur-sm" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent animate-pulse" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-12 md:px-6">
          <div className="mb-6 flex items-center gap-2 rounded-full bg-voltaris-red/20 px-4 py-2 text-sm font-medium text-voltaris-red backdrop-blur-sm border border-voltaris-red/30 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
            <ShieldCheck className="h-4 w-4" />
            Trusted by 2000+ Happy Customers
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            <span className="drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Unleash Your Power</span>
            <br />
            <span className="drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Dominate The Game</span>
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-gray-300">
            Take your gaming to the next level with our premium cheats, designed to redefine how you play and dominate
            every match.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              className="group bg-voltaris-red/20 text-voltaris-red hover:bg-voltaris-red/30 border border-voltaris-red/30 px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 ease-in-out shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]"
            >
              <Link href="/products" prefetch={false}>
                <Package className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Products
              </Link>
            </Button>
            <Button
              asChild
              className="group bg-voltaris-red/20 text-voltaris-red hover:bg-voltaris-red/30 border border-voltaris-red/30 px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 ease-in-out shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]"
            >
              <Link href="https://discord.gg/voltaris" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Discord
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-scroll-bounce">
          <Mouse className="h-8 w-8 text-white" />
          <ChevronDown className="h-6 w-6 text-white -mt-2" />
        </div>
      </section>
      <AnimatedSlider />
    </>
  )
}
