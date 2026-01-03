"use client"

import HeroSection from "@/components/hero-section"
import BestSellerProducts from "@/components/best-seller-products"
import WhyChooseSection from "@/components/why-choose-section"
import FAQSection from "@/components/faq-section"
import FreeKeysSection from "@/components/free-keys-section"
import ScrollReveal from "@/components/scroll-reveal"
import HowItWorksSection from "@/components/how-it-works-section"

export default function HomePageClientContent() {
  return (
    <main className="flex-1 animate-fade-in-up">
      <HeroSection />
      <BestSellerProducts />
      <ScrollReveal>
        <WhyChooseSection />
      </ScrollReveal>
      <ScrollReveal>
        <HowItWorksSection />
      </ScrollReveal>
      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>
      <ScrollReveal>
        <FreeKeysSection />
      </ScrollReveal>
    </main>
  )
}
