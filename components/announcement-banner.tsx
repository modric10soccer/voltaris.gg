"use client"

import { useState, useEffect } from "react"
import { X, Sparkles } from 'lucide-react'
import Link from "next/link"

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has dismissed the announcement
    const dismissed = localStorage.getItem("opti-ssl-announcement-dismissed")
    if (!dismissed) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("opti-ssl-announcement-dismissed", "true")
  }

  if (!isVisible) return null

  return (
    <div className="relative bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-b border-primary/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="container mx-auto px-4 py-3 relative">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="bg-primary/10 p-2 rounded-lg border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="text-primary font-bold text-sm sm:text-base tracking-wide">🎮 NEW RELEASE</span>
              <span className="text-white font-medium text-sm sm:text-base">
                Rocket League Opti SSL Bot - Achieve SSL in 2s & GC3 in 1s!
              </span>
            </div>
            <Link
              href="/products/rocket-league-opti-ssl-bot"
              className="hidden sm:inline-flex items-center px-4 py-1.5 bg-primary text-black rounded-lg text-sm font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
            >
              Learn More
            </Link>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/40 hover:text-white transition-colors p-1.5 hover:bg-white/5 rounded"
            aria-label="Dismiss announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <Link
          href="/products/rocket-league-opti-ssl-bot"
          className="sm:hidden mt-2 flex items-center justify-center px-4 py-2 bg-primary text-black rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}
