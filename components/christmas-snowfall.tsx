"use client"

import { useEffect, useState } from "react"

interface Snowflake {
  id: number
  left: number
  animationDuration: number
  opacity: number
  size: number
  delay: number
}

export default function ChristmasSnowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    const flakes: Snowflake[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 8 + Math.random() * 15,
      opacity: 0.4 + Math.random() * 0.6,
      size: 3 + Math.random() * 6,
      delay: Math.random() * 8,
    }))
    setSnowflakes(flakes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-snowfall text-white/90"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.delay}s`,
            opacity: flake.opacity,
            fontSize: `${flake.size}px`,
            filter: "drop-shadow(0 0 2px rgba(255, 255, 255, 0.8))",
          }}
        >
          ❄
        </div>
      ))}
    </div>
  )
}
