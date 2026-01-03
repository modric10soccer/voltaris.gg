import { Shield, Clock, Headphones } from "lucide-react"

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "Secure Payments",
      description: "256-bit SSL encryption",
    },
    {
      icon: Clock,
      title: "Instant Delivery",
      description: "Automated 24/7",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Always here to help",
    },
  ]

  return (
    <div className="grid grid-cols-3 gap-4">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-voltaris-red/30 transition-colors"
        >
          <badge.icon className="h-8 w-8 text-voltaris-red mb-2" />
          <p className="text-sm font-semibold text-white mb-1">{badge.title}</p>
          <p className="text-xs text-muted-foreground">{badge.description}</p>
        </div>
      ))}
    </div>
  )
}
