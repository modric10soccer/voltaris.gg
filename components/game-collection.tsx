"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Gamepad, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function GameCollection() {
  const games = [
    { name: "Rocket League", image: "/images/rocket-league-logo.png" },
    { name: "Fortnite", image: "/images/fortnite-logo-new.png" },
    { name: "Valorant", image: "/images/valorant-logo.png" },
    { name: "Rainbow Six Siege", image: "/images/r6-logo.png" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length)
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(interval)
  }, [games.length])

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + games.length) % games.length)
  }

  return (
    <section className="py-16 md:py-24 bg-dark">
      <div className="container px-4 md:px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-nano-blue/20 px-4 py-2 text-sm font-medium text-nano-blue border border-nano-blue/30">
          <Gamepad className="h-4 w-4" />
          Games
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Extensive Game Collection
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">Choose from a wide range of products.</p>

        <div className="relative mt-12 w-full max-w-4xl mx-auto overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {games.map((game, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="group relative overflow-hidden rounded-xl border border-dark-border bg-dark-card transition-all duration-300">
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    width={800}
                    height={450}
                    className="h-auto w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-left">
                    <h3 className="text-3xl font-semibold text-foreground">{game.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/70 hover:text-foreground hover:bg-white/10"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/70 hover:text-foreground hover:bg-white/10"
            onClick={goToNext}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {games.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full bg-white/50 transition-all",
                  currentIndex === index ? "w-6 bg-white" : "",
                )}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
