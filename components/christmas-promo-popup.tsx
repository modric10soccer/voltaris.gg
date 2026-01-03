"use client"

import { useState, useEffect } from "react"
import { X, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ChristmasPromoPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Check if popup has been shown before
    const hasSeenPopup = localStorage.getItem("christmas-popup-seen")

    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("christmas-popup-seen", "true")
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText("CHRISTMAS5")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm animate-in zoom-in-95 duration-300">
        <div className="relative bg-zinc-950 border border-voltaris-red/40 rounded-xl p-8 shadow-2xl shadow-voltaris-red/20 mx-4">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="text-center space-y-6">
            {/* Title with subtle festive accent */}
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 bg-voltaris-red/10 border border-voltaris-red/30 rounded-full mb-2">
                <p className="text-xs font-semibold text-voltaris-red uppercase tracking-wider">Holiday Special</p>
              </div>
              <h2 className="text-3xl font-bold text-white">
                Save <span className="text-voltaris-red">5%</span> Today
              </h2>
              <p className="text-zinc-400 text-sm">Use this code at checkout for instant savings</p>
            </div>

            {/* Promo code box */}
            <div className="bg-black/60 border border-voltaris-red/30 rounded-lg p-4">
              <code className="text-2xl font-mono font-bold text-white tracking-widest">CHRISTMAS5</code>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleCopyCode}
                className="w-full bg-voltaris-red hover:bg-voltaris-red/90 text-white font-semibold py-6 text-base shadow-lg shadow-voltaris-red/30 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Code
                  </>
                )}
              </Button>
              <button
                onClick={handleClose}
                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors w-full"
              >
                No thanks, continue browsing
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
