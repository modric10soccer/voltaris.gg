"use client"

import { useState, useEffect, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Star, MapPin, Clock, X } from "lucide-react"
import { products } from "@/lib/products"
import Image from "next/image"

type PurchaseNotification = {
  id: string
  productName: string
  productImage: string
  timeAgo: string
  country: string
  rating: number
  dismissed: boolean
}

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "Australia",
  "France",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
]

const getRandomProduct = () => {
  const randomProduct = products[Math.floor(Math.random() * products.length)]
  return {
    name: randomProduct.name,
    image: randomProduct.image,
  }
}

export default function PurchaseNotifications() {
  const [notifications, setNotifications] = useState<PurchaseNotification[]>([])
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(new Set())

  const addNotification = useCallback(() => {
    const timeOptions = [
      `${Math.floor(Math.random() * 12) + 1}h ago`,
      `${Math.floor(Math.random() * 3) + 1}d ago`,
      `${Math.floor(Math.random() * 24) + 1}h ago`,
    ]

    const product = getRandomProduct()

    const newNotification: PurchaseNotification = {
      id: Date.now().toString(),
      productName: product.name,
      productImage: product.image,
      timeAgo: timeOptions[Math.floor(Math.random() * timeOptions.length)],
      country: countries[Math.floor(Math.random() * countries.length)],
      rating: 5,
      dismissed: false,
    }

    setNotifications((prev) => {
      const updated = [newNotification, ...prev]
      return updated.slice(0, 6)
    })
    return newNotification
  }, [])

  const handleDismiss = (id: string) => {
    setDismissedIds((prev) => new Set(prev).add(id))
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  useEffect(() => {
    addNotification()

    const getRandomInterval = () => {
      const minSeconds = 20
      const maxSeconds = 40
      const seconds = Math.random() * (maxSeconds - minSeconds) + minSeconds
      return seconds * 1000
    }

    const scheduleNext = () => {
      const timeout = setTimeout(() => {
        addNotification()
        scheduleNext()
      }, getRandomInterval())

      return timeout
    }

    const timeout = scheduleNext()

    return () => clearTimeout(timeout)
  }, [addNotification])

  useEffect(() => {
    if (notifications.length > 0) {
      const latestNotification = notifications[0]
      const timer = setTimeout(() => {
        if (!dismissedIds.has(latestNotification.id)) {
          setNotifications((prev) => prev.filter((n) => n.id !== latestNotification.id))
        }
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [notifications, dismissedIds])

  return (
    <div className="fixed bottom-4 left-4 z-40 flex flex-col items-start space-y-3">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.8 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="flex flex-col gap-2 bg-dark-card/95 border border-voltaris-red/30 rounded-xl p-3 shadow-2xl shadow-voltaris-red/20 backdrop-blur-xl relative w-[240px]"
          >
            <button
              onClick={() => handleDismiss(notification.id)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-voltaris-red transition-colors z-10"
            >
              <X className="h-3 w-3" />
            </button>

            <div className="relative flex-shrink-0 w-full h-24 rounded-lg overflow-hidden bg-black/30 border border-voltaris-red/20">
              <Image
                src={notification.productImage || "/placeholder.svg"}
                alt={notification.productName}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 min-w-0 pr-4">
              <p className="text-xs font-semibold text-white line-clamp-2 mb-1">{notification.productName}</p>

              <div className="flex flex-col gap-1 text-[10px] text-muted-foreground mb-1">
                <div className="flex items-center gap-1">
                  <MapPin className="h-2.5 w-2.5" />
                  <span className="truncate">{notification.country}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-2.5 w-2.5" />
                  <span>{notification.timeAgo}</span>
                </div>
              </div>

              <div className="flex items-center gap-0.5">
                {[...Array(notification.rating)].map((_, i) => (
                  <Star key={i} className="h-2.5 w-2.5 fill-voltaris-red text-voltaris-red" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
