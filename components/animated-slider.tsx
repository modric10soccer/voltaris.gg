"use client"

import Image from "next/image"

const logos = [
  { name: "Rocket League", src: "/images/rocket-league-logo.png", width: 120, height: 40 },
  { name: "Fortnite", src: "/images/fortnite-logo.png", width: 120, height: 40 },
]

export default function AnimatedSlider() {
  const repeatedLogos = Array(10).fill(logos).flat()

  return (
    <div className="relative bg-dark/90 backdrop-blur-sm border-y-2 border-nano-blue/30 py-6 overflow-hidden">
      <div className="flex animate-scroll-infinite">
        {/* First set of repeated logos */}
        <div className="flex items-center gap-24 shrink-0">
          {repeatedLogos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        {/* Second set for seamless loop */}
        <div className="flex items-center gap-24 shrink-0">
          {repeatedLogos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
