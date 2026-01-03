"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqData = [
  {
    id: 1,
    question: "How do I receive my product after purchase?",
    answer:
      "After completing your purchase, you will receive an email with your login credentials and download instructions within 5-10 minutes. Check your spam folder if you don't see it in your inbox.",
  },
  {
    id: 2,
    question: "Are your products safe and undetected?",
    answer:
      "Yes, all our products are regularly updated and maintained to ensure they remain undetected. We use advanced techniques and have a dedicated team monitoring anti-cheat systems 24/7.",
  },
  {
    id: 3,
    question: "What payment methods do you accept?",
    answer:
      "We accept credit cards (Visa, Mastercard, Amex), cryptocurrency (Bitcoin, Ethereum, Litecoin), and various other payment methods through our secure payment processor.",
  },
  {
    id: 4,
    question: "Do you offer refunds?",
    answer:
      "Due to the digital nature of our products, we generally do not offer refunds. However, if you experience technical issues that we cannot resolve, please contact our support team through Discord.",
  },
  {
    id: 5,
    question: "How often are products updated?",
    answer:
      "Our products are updated regularly, typically within 24-48 hours after any game updates or anti-cheat changes. We monitor all supported games continuously to ensure maximum compatibility.",
  },
  {
    id: 6,
    question: "Can I use multiple products at the same time?",
    answer:
      "Yes, most of our products can be used together without conflicts. However, we recommend checking with our support team for specific compatibility questions to ensure optimal performance.",
  },
  {
    id: 7,
    question: "What if I get banned while using your products?",
    answer:
      "While our products are designed to be undetected, we cannot guarantee 100% safety as anti-cheat systems evolve constantly. Use at your own risk and always follow best practices for staying safe.",
  },
  {
    id: 8,
    question: "How do I get support if I have issues?",
    answer:
      "Join our Discord server and create a support ticket. Our experienced support team typically responds within 1-6 hours and will help you resolve any technical issues you may encounter.",
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-nano-blue/20 px-4 py-2 text-sm font-medium text-nano-blue backdrop-blur-sm border border-nano-blue/30">
            <HelpCircle className="h-4 w-4" />
            FAQ
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our products and services. Can't find what you're looking for?
          </p>
          <div className="mt-6">
            <Button
              asChild
              className="inline-flex items-center gap-2 bg-voltaris-red/20 text-voltaris-red hover:bg-voltaris-red/30 border border-voltaris-red/30 rounded-full backdrop-blur-sm transition-all px-6 py-5"
            >
              <Link href="https://discord.gg/voltaris" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                <span>Join our Discord for instant support</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4 md:gap-6">
            {faqData.map((faq, index) => (
              <div
                key={faq.id}
                className="group border border-zinc-800 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:border-nano-blue/50 hover:shadow-lg hover:shadow-nano-blue/10"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-nano-blue/5 transition-all duration-200 group-hover:bg-nano-blue/5"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4 group-hover:text-nano-blue transition-colors">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 transition-transform duration-300">
                    {openItems.includes(faq.id) ? (
                      <ChevronUp className="h-5 w-5 text-nano-blue" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-nano-blue transition-colors" />
                    )}
                  </div>
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    openItems.includes(faq.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <div className="px-6 pb-5 border-t border-dark-border/50">
                    <div className="pt-4">
                      <p className="text-muted-foreground leading-relaxed text-base">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-voltaris-red/20 text-voltaris-red hover:bg-voltaris-red/30 border border-voltaris-red/30 rounded-full backdrop-blur-sm transition-all px-8 py-6"
            >
              <Link href="https://discord.gg/voltaris" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-medium text-voltaris-red">Still have questions?</span>
                  </div>
                  <span className="text-voltaris-red">Our support team is available 24/7 on Discord</span>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
