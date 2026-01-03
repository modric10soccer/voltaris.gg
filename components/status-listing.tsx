import Image from "next/image"
import Link from "next/link"
import { getProductsByCategory, type ProductStatus } from "@/lib/products"
import { cn } from "@/lib/utils"
import { Activity } from "lucide-react"

export default function StatusListing() {
  const categorizedProducts = getProductsByCategory()
  const categories = Object.keys(categorizedProducts)

  const getStatusColorClass = (status: ProductStatus) => {
    switch (status) {
      case "Undetected":
      case "Hosting":
      case "Available":
        return "bg-primary animate-pulse"
      case "Use Under Own Risk":
        return "bg-status-red"
      case "Updating":
        return "bg-status-orange"
      case "Coming Soon":
        return "bg-status-blue"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusTextColorClass = (status: ProductStatus) => {
    switch (status) {
      case "Undetected":
      case "Hosting":
      case "Available":
        return "text-primary"
      case "Use Under Own Risk":
        return "text-status-red"
      case "Updating":
        return "text-status-orange"
      case "Coming Soon":
        return "text-status-blue"
      default:
        return "text-gray-500"
    }
  }

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary border border-primary/30 backdrop-blur-sm">
            <Activity className="h-4 w-4" />
            Status
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Product Status
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Real-time status updates for all Voltaris products. Check detection status, availability, and updates.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-bold text-foreground">{category}</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categorizedProducts[category].map((product) => (
                <Link key={product.id} href={`/products/${product.slug}`} prefetch={false}>
                  <div className="group relative overflow-hidden rounded-2xl border border-dark-border bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 p-6 text-left transition-all duration-300 hover:scale-[1.03] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 cursor-pointer">
                    <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-black/20">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-3 text-sm bg-black/20 rounded-lg p-3">
                      <span className="text-muted-foreground font-medium">Status:</span>
                      <span className={cn("h-3 w-3 rounded-full", getStatusColorClass(product.status))} />
                      <span className={cn("font-semibold", getStatusTextColorClass(product.status))}>
                        {product.status}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
