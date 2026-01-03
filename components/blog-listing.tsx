import BlogCard from "@/components/blog-card"
import { blogPosts } from "@/lib/blogs"
import { Newspaper } from "lucide-react"

export default function BlogListing() {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-voltaris-red/5 via-transparent to-transparent pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-voltaris-red/20 border border-voltaris-red/30 px-4 py-2 text-sm font-medium text-voltaris-red backdrop-blur-sm">
            <Newspaper className="h-4 w-4" />
            Latest Updates
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Product Updates
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest product updates, feature releases, and important announcements from the
            Voltaris team. We're constantly improving our products to give you the best experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} isClickable={post.id !== "rocket-league-bot-updates"} />
          ))}
        </div>
      </div>
    </section>
  )
}
