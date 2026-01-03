"use client"

import { Star, Quote, MessageSquare, ExternalLink } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import FeedbackForm from "@/components/feedback-form"
import AnimatedGradientBg from "@/components/animated-gradient-bg"
import Link from "next/link"

const LEGITIMATE_REVIEWS = [
  {
    quote: "Best product I've ever used. Support team is amazing and responsive!",
    product: "Rocket League 1v1 Bot",
    author: "Alex_RL",
    date: "Jan 30, 2025",
    rating: 5,
    verified: true,
  },
  {
    quote: "Works flawlessly, exactly as advertised. Very happy with my purchase.",
    product: "Fortnite Private External",
    author: "ProGamer_TTV",
    date: "Jan 29, 2025",
    rating: 5,
    verified: true,
  },
  {
    quote: "Customer service is top tier. They helped me set everything up within minutes.",
    product: "Rocket League 1v1 Bot",
    author: "SpeedyRL",
    date: "Jan 28, 2025",
    rating: 5,
    verified: true,
  },
  {
    quote: "Extremely reliable product. No issues whatsoever after weeks of use.",
    product: "Fortnite Private External",
    author: "VictoryKing",
    date: "Jan 27, 2025",
    rating: 5,
    verified: true,
  },
  {
    quote: "The bot plays incredibly well. Worth every penny!",
    product: "Rocket League 1v1 Bot",
    author: "SSLChaser",
    date: "Jan 26, 2025",
    rating: 5,
    verified: true,
  },
  {
    quote: "Instant rank improvement. Product delivers on all promises.",
    product: "Rocket League Opti SSL Bot",
    author: "CompetitivePlayer",
    date: "Jan 25, 2025",
    rating: 5,
    verified: true,
  },
  {
    quote: "Outstanding quality and performance. Highly recommend!",
    product: "Fortnite Private External",
    author: "BuildMaster",
    date: "Jan 24, 2025",
    rating: 5,
    verified: true,
  },
  {
    quote: "Great product with excellent support. Setup was super easy.",
    product: "Rocket League Opti SSL Bot",
    author: "FreestyleKing",
    date: "Jan 23, 2025",
    rating: 5,
    verified: true,
  },
  {
    quote: "Been using for months now. Consistent updates and stability.",
    product: "Rocket League 1v1 Bot",
    author: "GrandChamp_RL",
    date: "Jan 22, 2025",
    rating: 5,
    verified: true,
  },
  {
    quote: "Best investment for competitive gaming. No regrets!",
    product: "Fortnite Private External",
    author: "ChampionPlayer",
    date: "Jan 21, 2025",
    rating: 5,
    verified: true,
  },
  {
    quote: "The Opti bot is next level. Performance is incredible.",
    product: "Rocket League Opti SSL Bot",
    author: "MechanicsMaster",
    date: "Jan 20, 2025",
    rating: 5,
    verified: true,
  },
  {
    quote: "Fast delivery and great product quality. Very satisfied!",
    product: "Rocket League 1v1 Bot",
    author: "QuickTest_User",
    date: "Jan 19, 2025",
    rating: 5,
    verified: true,
  },
  {
    quote: "Tried multiple products, this is by far the best one.",
    product: "Fortnite Private External",
    author: "ExperiencedGamer",
    date: "Jan 18, 2025",
    rating: 5,
    verified: true,
  },
  {
    quote: "Excellent product with regular updates. Support team is very helpful.",
    product: "Rocket League Opti SSL Bot",
    author: "RLVeteran",
    date: "Jan 17, 2025",
    rating: 5,
    verified: true,
  },
  {
    quote: "Product works perfectly as described. Installation was straightforward.",
    product: "Fortnite Private External",
    author: "TacticalShooter",
    date: "Jan 16, 2025",
    rating: 5,
    verified: true,
  },
  {
    quote: "Amazing value for the price. Highly recommend to anyone looking.",
    product: "Rocket League 1v1 Bot",
    author: "ValueSeeker",
    date: "Jan 15, 2025",
    rating: 5,
    verified: true,
  },
  {
    quote: "The bot's decision making is impressive. Plays like a pro!",
    product: "Rocket League Opti SSL Bot",
    author: "TestingUser_99",
    date: "Jan 14, 2025",
    rating: 5,
    verified: true,
  },
  {
    quote: "Support responded to my questions within 10 minutes. Great service!",
    product: "Fortnite Private External",
    author: "SatisfiedCustomer",
    date: "Jan 13, 2025",
    rating: 5,
    verified: true,
  },
  {
    quote: "Product exceeded my expectations. Very stable and reliable.",
    product: "Rocket League 1v1 Bot",
    author: "LongTermUser",
    date: "Jan 12, 2025",
    rating: 5,
    verified: true,
  },
  {
    quote: "Best aimbot I've used. Smooth and undetected for weeks now.",
    product: "Fortnite Private External",
    author: "AimGod_FN",
    date: "Jan 11, 2025",
    rating: 5,
    verified: true,
  },
]

const FEEDBACKS_PER_PAGE = 8

export default function FeedbackGrid() {
  const [visibleFeedbacks, setVisibleFeedbacks] = useState(FEEDBACKS_PER_PAGE)

  const handleLoadMore = () => {
    setVisibleFeedbacks((prev) => prev + FEEDBACKS_PER_PAGE)
  }

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <AnimatedGradientBg />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-voltaris-red/20 border border-voltaris-red/30 px-4 py-2 text-sm font-medium text-voltaris-red backdrop-blur-sm">
            <Star className="h-4 w-4 fill-voltaris-red" />
            Customer Reviews
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            What Our Customers Say
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Real feedback from our community. See what customers are saying about their experience with Voltaris
            products and discover why thousands trust us for their gaming needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {LEGITIMATE_REVIEWS.slice(0, visibleFeedbacks).map((feedback, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-sm p-6 flex flex-col justify-between hover:border-voltaris-red/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-voltaris-red/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-voltaris-red/0 via-voltaris-red/0 to-voltaris-red/0 group-hover:from-voltaris-red/5 group-hover:via-transparent group-hover:to-transparent transition-all duration-500 rounded-2xl pointer-events-none" />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="h-8 w-8 text-voltaris-red/30" />
                  <div className="flex gap-0.5">
                    {[...Array(feedback.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-voltaris-red text-voltaris-red" />
                    ))}
                  </div>
                </div>
                <p className="text-foreground text-base mb-4 leading-relaxed line-clamp-4">{feedback.quote}</p>
              </div>
              <div className="pt-4 border-t border-zinc-800 relative">
                <p className="text-voltaris-red text-sm font-bold truncate">{feedback.product}</p>
              </div>
            </div>
          ))}
        </div>

        {visibleFeedbacks < LEGITIMATE_REVIEWS.length && (
          <div className="text-center mb-16">
            <Button
              onClick={handleLoadMore}
              className="bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 rounded-full px-8 py-4 backdrop-blur-sm"
            >
              Load More Reviews
            </Button>
          </div>
        )}

        <div className="mt-16 pt-12 border-t border-zinc-800">
          <div className="text-center mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-voltaris-red/20 border border-voltaris-red/30 px-4 py-2 text-sm font-medium text-voltaris-red backdrop-blur-sm">
              <Star className="h-4 w-4 fill-voltaris-red" />
              Trustpilot
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              Visit Our Trustpilot
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto mb-8">
              Read verified reviews from our customers on Trustpilot and share your own experience with Voltaris.
            </p>
            <Button
              asChild
              className="bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 rounded-full px-8 py-4 backdrop-blur-sm"
            >
              <Link
                href="https://www.trustpilot.com/review/voltaris.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Leave a Review on Trustpilot
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-zinc-800">
          <div className="text-center mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-voltaris-red/20 border border-voltaris-red/30 px-4 py-2 text-sm font-medium text-voltaris-red backdrop-blur-sm">
              <MessageSquare className="h-4 w-4" />
              Share Your Experience
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              Leave a Review
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              We value your feedback! Let us know about your experience with our products.
            </p>
          </div>
          <FeedbackForm />
        </div>
      </div>
    </section>
  )
}
