"use client"

import { Shield, Zap, Users, Award, Clock, HeadphonesIcon } from "lucide-react"

export default function WhyChooseSection() {
  const features = [
    {
      icon: Shield,
      title: "Undetected & Safe",
      description:
        "Our cheats are regularly updated and tested to ensure they remain undetected by anti-cheat systems.",
    },
    {
      icon: Zap,
      title: "Instant Delivery",
      description: "Get your products immediately after purchase with our automated delivery system.",
    },
    {
      icon: Users,
      title: "Trusted Community",
      description: "Join thousands of satisfied customers who trust Voltaris for their gaming needs.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "High-quality cheats developed by experienced programmers with attention to detail.",
    },
    {
      icon: Clock,
      title: "24/7 Updates",
      description: "Our team works around the clock to keep all products updated and functional.",
    },
    {
      icon: HeadphonesIcon,
      title: "Expert Support",
      description: "Get help when you need it with our dedicated customer support team.",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-nano-blue/20 px-4 py-2 text-sm font-medium text-nano-blue border border-nano-blue/30 backdrop-blur-sm">
            <Award className="h-4 w-4" />
            Why Choose Us
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Why Choose Voltaris?
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best gaming enhancement experience with unmatched quality and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 p-6 transition-all duration-300 hover:border-nano-blue/50 hover:bg-black/40"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-nano-blue/20 text-nano-blue">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                <div className="absolute inset-0 bg-gradient-to-br from-nano-blue/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
