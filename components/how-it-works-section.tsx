"use client"

import type React from "react"

import { useState } from "react"
import { Zap } from "lucide-react"
import Link from "next/link"

export default function HowItWorksSection() {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-voltaris-red/20 px-4 py-2 text-sm font-medium text-voltaris-red backdrop-blur-sm border border-voltaris-red/30">
            <Zap className="h-4 w-4" />
            See The Difference
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            How Does It Work?
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            Experience the power of our cheats firsthand. Slide to compare gameplay with and without our enhancements.
          </p>
          <Link
            href="/products/rocket-league-multi-bot"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-voltaris-red/20 px-4 py-2 text-sm font-medium text-voltaris-red border border-voltaris-red/30 hover:bg-voltaris-red/30 transition-colors backdrop-blur-sm"
          >
            View Product
          </Link>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between mb-4 px-4">
            <div className="text-sm font-semibold text-white">Without Cheat</div>
            <div className="text-sm font-semibold text-voltaris-red">With Cheat</div>
          </div>

          <div
            className="relative rounded-xl overflow-hidden border border-voltaris-red/30 shadow-2xl cursor-ew-resize select-none"
            onMouseMove={handleMouseMove}
          >
            {/* Without Cheat Image (Base Layer) */}
            <div className="relative w-full aspect-video">
              <img src="/images/image-20-281-29.webp" alt="Without Cheat" className="w-full h-full object-cover" />
            </div>

            {/* With Cheat Image (Overlay with Clip) */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <img src="/images/image.webp" alt="With Cheat" className="w-full h-full object-cover" />
            </div>

            <div
              className="absolute top-0 bottom-0 w-[2px] bg-voltaris-red border-l border-voltaris-red/50"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-voltaris-red/20 rounded-full shadow-xl flex items-center justify-center border-2 border-voltaris-red/50 backdrop-blur-sm">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-4 bg-voltaris-red rounded-full" />
                  <div className="w-0.5 h-4 bg-voltaris-red rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
