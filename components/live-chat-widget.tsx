"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { products } from "@/lib/products"

type Message = {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! Welcome to Voltaris support. I can help with pricing, features, payment methods, delivery, and more. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase()

    if (msg.includes("price") || msg.includes("cost") || msg.includes("how much")) {
      if (msg.includes("nova") || msg.includes("novabot")) {
        const novaProduct = products.find((p) => p.slug === "rocket-league-novabot-flip-reset")
        if (novaProduct) {
          const variants = novaProduct.variants.map((v) => `${v.name}: $${v.price}`).join("\n")
          return `NovaBot (Flip Reset) pricing - Top 25 Worldwide:\n\n${variants}\n\nSSL in 1v1, GC2-GC3 in 2s with flip resets, air dribbles, and more!\n\nView full details at /products/rocket-league-novabot-flip-reset`
        }
      }

      if (msg.includes("mystery") || msg.includes("mystery bot")) {
        const mysteryProduct = products.find((p) => p.slug === "rocket-league-mystery-bot")
        if (mysteryProduct) {
          const variants = mysteryProduct.variants.map((v) => `${v.name}: $${v.price}`).join("\n")
          return `Rocket League Mystery Bot pricing:\n\n${variants}\n\nMystery Bot contains any Voltaris bot - from NovaBOT ($650.99) to Requiem, T2, and more!\n\nView full details at /products/rocket-league-mystery-bot`
        }
      }

      if (msg.includes("opti") || msg.includes("opti ssl")) {
        const optiProduct = products.find((p) => p.slug === "rocket-league-opti-ssl-bot")
        if (optiProduct) {
          const variants = optiProduct.variants.map((v) => `${v.name}: $${v.price}`).join("\n")
          return `Rocket League Opti SSL Bot pricing:\n\n${variants}\n\nView full details at /products/rocket-league-opti-ssl-bot`
        }
      }

      if (msg.includes("requiem")) {
        const requiemProduct = products.find((p) => p.slug === "rocket-league-requiem-ssl-bot")
        if (requiemProduct) {
          const variants = requiemProduct.variants.map((v) => `${v.name}: $${v.price}`).join("\n")
          return `Rocket League Requiem SSL Bot pricing:\n\n${variants}\n\nView full details at /products/rocket-league-requiem-ssl-bot`
        }
      }

      if (msg.includes("t2") || msg.includes("t2 bot")) {
        const t2Product = products.find((p) => p.slug === "rocket-league-t2-ssl-1v1-bot")
        if (t2Product) {
          const variants = t2Product.variants.map((v) => `${v.name}: $${v.price}`).join("\n")
          return `Rocket League T2 SSL 1v1 Bot pricing:\n\n${variants}\n\nView full details at /products/rocket-league-t2-ssl-1v1-bot`
        }
      }

      if (msg.includes("1s") || msg.includes("1s bot") || msg.includes("1v1") || msg.includes("1v1 bot")) {
        const botProduct = products.find((p) => p.slug === "rocket-league-1v1-bot")
        if (botProduct) {
          const variants = botProduct.variants.map((v) => `${v.name}: $${v.price}`).join("\n")
          return `Rocket League 1v1 Bot pricing:\n\n${variants}\n\nView full details at /products/rocket-league-1v1-bot`
        }
      }

      if (msg.includes("unlock all")) {
        const unlockProduct = products.find((p) => p.slug === "rocket-league-unlock-all")
        if (unlockProduct) {
          const variants = unlockProduct.variants.map((v) => `${v.name}: $${v.price}`).join("\n")
          return `Rocket League Unlock All pricing:\n\n${variants}\n\nView full details at /products/rocket-league-unlock-all`
        }
      }

      if (msg.includes("fortnite")) {
        const fortniteProduct = products.find((p) => p.slug === "fortnite-private-external")
        if (fortniteProduct) {
          const variants = fortniteProduct.variants.map((v) => `${v.name}: $${v.price}`).join("\n")
          return `Fortnite Private External pricing:\n\n${variants}\n\nView full details at /products/fortnite-private-external`
        }
      }

      return "Our products range from $5.99 to $879.99 depending on the product and duration. Visit /products to see all pricing, or ask about a specific product like 'How much is 3 month Opti key?'"
    }

    if (msg.includes("payment") || msg.includes("pay") || msg.includes("credit card")) {
      return "We accept multiple payment methods including credit/debit cards, PayPal, and cryptocurrency. All payments are processed securely with 256-bit SSL encryption."
    }

    if (msg.includes("delivery") || msg.includes("instant") || msg.includes("how long")) {
      return "All products are delivered instantly after purchase! You'll receive your download link and license key immediately via email."
    }

    if (msg.includes("refund") || msg.includes("money back") || msg.includes("return")) {
      return "We offer a satisfaction guarantee on all products. If you experience issues, please contact our support team. Note: Chargebacks are strictly prohibited and will result in permanent account suspension."
    }

    if (msg.includes("support") || msg.includes("help") || msg.includes("issue") || msg.includes("problem")) {
      return "For immediate support, join our Discord server at https://discord.gg/voltaris where our team is available 24/7. You can also check our FAQ page or submit a ticket."
    }

    if (msg.includes("game") || msg.includes("rocket league") || msg.includes("fortnite")) {
      return "We offer premium cheats and tools for various games including Rocket League, Fortnite, and more. Each product page has detailed feature lists, compatibility info, and video demonstrations."
    }

    if (msg.includes("download") || msg.includes("install") || msg.includes("setup")) {
      return "After purchase, you'll find your downloads in the Downloads page (accessible from the navigation menu). Each product comes with detailed installation instructions and video guides."
    }

    if (msg.includes("safe") || msg.includes("ban") || msg.includes("detection")) {
      return "All our products are regularly updated to maintain the highest level of security. However, please note that using cheats always carries some risk. Check individual product pages for specific safety features and update frequency."
    }

    if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
      return "Hello! I'm here to help. Feel free to ask about our products, pricing, payment methods, delivery, or anything else!"
    }

    return "I'm here to help! You can ask me about:\n\n• Product pricing and features\n• Payment methods\n• Instant delivery process\n• Support and Discord\n• Downloads and installation\n\nFor complex questions, join our Discord at https://discord.gg/voltaris for live support from our team!"
  }

  const handleSend = async () => {
    if (message.trim() && !isLoading) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: message,
        sender: "user",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, userMessage])
      setMessage("")
      setIsLoading(true)

      setTimeout(() => {
        const response = generateResponse(userMessage.text)
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: response,
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botResponse])
        setIsLoading(false)
      }, 500)
    }
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full bg-voltaris-red/20 border border-voltaris-red/30 text-voltaris-red hover:bg-voltaris-red/30 shadow-lg backdrop-blur-sm"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 z-50 w-96 max-w-[calc(100vw-2rem)] bg-dark-card border border-voltaris-red/30 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-voltaris-red/10 border-b border-voltaris-red/30 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white">{t.liveSupport}</h3>
                  <p className="text-xs text-muted-foreground">Voltaris Support 24/7</p>
                </div>
                <div className="h-3 w-3 rounded-full bg-voltaris-red animate-pulse" />
              </div>
            </div>

            <div className="h-96 p-4 space-y-4 overflow-y-auto bg-black/30 scrollbar-hide">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : ""}`}>
                  {msg.sender === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-voltaris-red/20 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-4 w-4 text-voltaris-red" />
                    </div>
                  )}
                  <div
                    className={`rounded-2xl p-3 max-w-[80%] ${
                      msg.sender === "user" ? "bg-voltaris-red/20 rounded-tr-sm" : "bg-zinc-900 rounded-tl-sm"
                    }`}
                  >
                    <p className="text-sm text-foreground whitespace-pre-wrap">{msg.text}</p>
                    <span className="text-xs text-muted-foreground mt-1 block">
                      {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-voltaris-red/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-4 w-4 text-voltaris-red" />
                  </div>
                  <div className="rounded-2xl p-3 bg-zinc-900 rounded-tl-sm">
                    <div className="flex gap-1">
                      <div
                        className="w-2 h-2 bg-voltaris-red/50 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-voltaris-red/50 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-voltaris-red/50 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-voltaris-red/30 p-4 bg-black/30">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSend()}
                  placeholder={t.typeMessage}
                  disabled={isLoading}
                  className="bg-zinc-900 border-zinc-800 text-foreground focus:border-voltaris-red"
                />
                <Button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-voltaris-red/20 border border-voltaris-red/30 text-voltaris-red hover:bg-voltaris-red/30 rounded-full p-3"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  )
}
