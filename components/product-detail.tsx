"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { useWishlist } from "@/contexts/wishlist-context"
import type { Product, ProductVariant } from "@/lib/products"
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Shield,
  Zap,
  Sparkles,
  Star,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { cn, formatPrice } from "@/lib/utils"

type ProductDetailProps = {
  product: Product
  allProducts: Product[]
}

type TabType = "description" | "video" | "showcase" | "reviews"

export default function ProductDetail({ product, allProducts }: ProductDetailProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(product.variants[0] || null)
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<TabType>("description")
  const [showcaseIndex, setShowcaseIndex] = useState(0)
  const router = useRouter()
  const { addItem } = useCart()
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist()

  const [cartButtonState, setCartButtonState] = useState<"idle" | "adding" | "added">("idle")
  const [buyNowButtonState, setBuyNowButtonState] = useState<"idle" | "processing">("idle")
  const [wishlistButtonState, setWishlistButtonState] = useState<"idle" | "adding">("idle")

  const allImages = [product.image, ...(product.additionalImages || [])]

  useEffect(() => {
    if (activeTab === "showcase" && product.showcaseImages && product.showcaseImages.length > 1) {
      const interval = setInterval(() => {
        setShowcaseIndex((prev) => (prev + 1) % product.showcaseImages!.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [activeTab, product.showcaseImages])

  const handleQuantityChange = (delta: number) => {
    // Quantity locked to 1 - users can only buy 1 product at a time
    setQuantity(1)
  }

  const handleImageChange = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))
    } else {
      setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1))
    }
  }

  const handleShowcaseChange = (direction: "prev" | "next") => {
    if (!product.showcaseImages) return
    if (direction === "prev") {
      setShowcaseIndex((prev) => (prev === 0 ? product.showcaseImages!.length - 1 : prev - 1))
    } else {
      setShowcaseIndex((prev) => (prev === product.showcaseImages!.length - 1 ? 0 : prev + 1))
    }
  }

  const getTotalPrice = () => {
    if (!selectedVariant) return 0
    return selectedVariant.price * quantity
  }

  const handleBuyNow = () => {
    if (selectedVariant) {
      addItem(product.id, selectedVariant.id, quantity)
      setBuyNowButtonState("processing")
      setTimeout(() => {
        setBuyNowButtonState("idle")
        router.push("/checkout")
      }, 600)
    }
  }

  const handleToggleWishlist = () => {
    if (selectedVariant) {
      if (isInWishlist(product.id, selectedVariant.id)) {
        removeFromWishlist(product.id, selectedVariant.id)
      } else {
        addToWishlist(product.id, selectedVariant.id)
        setWishlistButtonState("adding")
        setTimeout(() => setWishlistButtonState("idle"), 1000)
      }
    }
  }

  const handleAddToCart = () => {
    if (selectedVariant) {
      addItem(product.id, selectedVariant.id, quantity)
      setCartButtonState("adding")
      setTimeout(() => setCartButtonState("added"), 600)
      setTimeout(() => setCartButtonState("idle"), 2000)
    }
  }

  const isWishlisted = selectedVariant ? isInWishlist(product.id, selectedVariant.id) : false

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  if (!product) {
    return <div className="text-center py-12 text-foreground">Product not found.</div>
  }

  const featuresList = product.description.split("\n").filter((line) => line.trim().startsWith("[+]"))
  const categorizedFeatures = organizeFeaturesIntoCategories(featuresList, product.category)

  const relatedProducts = allProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="pt-20 grid lg:grid-cols-2 gap-8">
          {/* Left Side - Product Image with Gallery */}
          <div className="space-y-4">
            <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-900/50 rounded-2xl overflow-hidden group">
              <div className="relative h-[600px] overflow-hidden rounded-xl m-4">
                <Image
                  src={allImages[currentImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {allImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-voltaris-red text-white p-2.5 rounded-xl transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-voltaris-red text-white p-2.5 rounded-xl transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {allImages.length > 1 && (
              <div className="flex gap-3 justify-center">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={cn(
                      "relative w-20 h-20 rounded-xl border-2 overflow-hidden transition-all",
                      currentImageIndex === idx
                        ? "border-voltaris-red ring-2 ring-voltaris-red/30 scale-105"
                        : "border-zinc-800 hover:border-zinc-700 opacity-60 hover:opacity-100",
                    )}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      style={{ objectFit: "contain" }}
                      className="p-2"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Side - Product Information */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{product.name}</h1>

              <div className="flex items-center gap-2">
                {product.status === "Undetected" && (
                  <div className="flex items-center gap-2 bg-voltaris-red/20 border border-voltaris-red/30 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                    <Shield className="h-4 w-4 text-voltaris-red" />
                    <span className="text-sm font-semibold text-voltaris-red uppercase tracking-wide">Undetected</span>
                  </div>
                )}
                <div className="flex items-center gap-2 bg-voltaris-red/20 border border-voltaris-red/30 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                  <Zap className="h-4 w-4 text-voltaris-red" />
                  <span className="text-sm font-semibold text-voltaris-red uppercase tracking-wide">
                    Instant Delivery
                  </span>
                </div>
              </div>
            </div>

            <div className="text-4xl font-bold text-white">
              {formatPrice(selectedVariant?.price || product.variants[0]?.price || 0)}
            </div>

            <div className="flex items-center gap-0 bg-voltaris-red/10 border border-voltaris-red/30 rounded-full p-1 w-fit">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                className="h-9 w-9 hover:bg-voltaris-red/30 text-voltaris-red rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-lg font-bold text-voltaris-red min-w-[3rem] text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
                className="h-9 w-9 hover:bg-voltaris-red/30 text-voltaris-red rounded-full transition-all"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-3">
              <div className="flex flex-col gap-3">
                {[...product.variants]
                  .sort((a, b) => a.price - b.price)
                  .map((variant) => {
                    const isSelected = selectedVariant?.id === variant.id
                    const isInStock = variant.stock > 0

                    return (
                      <button
                        key={variant.id}
                        onClick={() => isInStock && setSelectedVariant(variant)}
                        disabled={!isInStock}
                        className={cn(
                          "relative p-3 rounded-lg border-2 transition-all text-left group w-full",
                          isSelected
                            ? "border-[#ff4444] bg-[#5c1f1f]/30 shadow-lg shadow-[#ff4444]/20"
                            : "border-zinc-800 bg-zinc-900/40 hover:border-[#ff4444]/50 hover:bg-zinc-900/60",
                          !isInStock && "opacity-30 cursor-not-allowed hover:border-zinc-800 hover:bg-zinc-900/40",
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{variant.name}</p>
                            <p className="text-xl font-bold text-white">{formatPrice(variant.price)}</p>
                          </div>
                          {isSelected && (
                            <div className="bg-[#ff4444] rounded-full p-1.5 shadow-lg">
                              <Check className="h-4 w-4 text-white" />
                            </div>
                          )}
                        </div>
                      </button>
                    )
                  })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleAddToCart}
                disabled={!selectedVariant || selectedVariant.stock === 0}
                className={`flex-1 bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 py-6 text-lg font-bold rounded-full backdrop-blur-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  cartButtonState === "adding" ? "scale-95" : ""
                } ${cartButtonState === "added" ? "bg-voltaris-red/40" : ""}`}
              >
                <ShoppingCart className={`mr-2 h-5 w-5 ${cartButtonState === "adding" ? "animate-bounce" : ""}`} />
                {cartButtonState === "added" ? "Added to Cart!" : "Add to Cart"}
              </Button>
              <Button
                onClick={handleBuyNow}
                disabled={!selectedVariant || selectedVariant.stock === 0}
                className={`flex-1 bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 py-6 text-lg font-bold rounded-full backdrop-blur-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  buyNowButtonState === "processing" ? "scale-95" : ""
                }`}
              >
                <Sparkles className={`mr-2 h-5 w-5 ${buyNowButtonState === "processing" ? "animate-spin" : ""}`} />
                {buyNowButtonState === "processing" ? "Processing..." : "Buy Now"}
              </Button>
              <Button
                onClick={handleToggleWishlist}
                variant="outline"
                className={`sm:w-auto bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 py-6 px-6 rounded-full backdrop-blur-sm transition-all duration-300 ${
                  wishlistButtonState === "adding" ? "scale-110" : ""
                }`}
                disabled={!selectedVariant}
              >
                <Heart
                  className={cn(
                    "h-5 w-5",
                    isWishlisted && "fill-voltaris-red",
                    wishlistButtonState === "adding" && "animate-pulse",
                  )}
                />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-6 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button
                onClick={() => setActiveTab("description")}
                className={cn(
                  "px-8 py-3 text-sm font-medium rounded-lg transition-all whitespace-nowrap uppercase tracking-wide",
                  activeTab === "description"
                    ? "bg-voltaris-red/20 text-voltaris-red border border-voltaris-red/30 backdrop-blur-sm"
                    : "bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:bg-zinc-900/70 hover:text-zinc-300",
                )}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("video")}
                className={cn(
                  "px-8 py-3 text-sm font-medium rounded-lg transition-all whitespace-nowrap uppercase tracking-wide",
                  activeTab === "video"
                    ? "bg-voltaris-red/20 text-voltaris-red border border-voltaris-red/30 backdrop-blur-sm"
                    : "bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:bg-zinc-900/70 hover:text-zinc-300",
                )}
              >
                Video
              </button>
              <button
                onClick={() => setActiveTab("showcase")}
                className={cn(
                  "px-8 py-3 text-sm font-medium rounded-lg transition-all whitespace-nowrap uppercase tracking-wide",
                  activeTab === "showcase"
                    ? "bg-voltaris-red/20 text-voltaris-red border border-voltaris-red/30 backdrop-blur-sm"
                    : "bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:bg-zinc-900/70 hover:text-zinc-300",
                )}
              >
                Showcase
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={cn(
                  "px-8 py-3 text-sm font-medium rounded-lg transition-all whitespace-nowrap uppercase tracking-wide",
                  activeTab === "reviews"
                    ? "bg-voltaris-red/20 text-voltaris-red border border-voltaris-red/30 backdrop-blur-sm"
                    : "bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:bg-zinc-900/70 hover:text-zinc-300",
                )}
              >
                Reviews
              </button>
            </div>
          </div>

          <div className="space-y-8">
            {activeTab === "description" && (
              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8 min-h-[500px]">
                <div className="space-y-8">
                  {Object.entries(categorizedFeatures).map(([categoryName, features]) => (
                    <div key={categoryName} className="space-y-4">
                      <h3 className="text-xl font-bold text-voltaris-red flex items-center gap-2">
                        <span className="text-2xl">✦</span> {categoryName}
                      </h3>
                      <ul className="space-y-2">
                        {features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-zinc-300">
                            <Check className="h-4 w-4 text-voltaris-red flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "video" && product.videoUrl && (
              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8 min-h-[500px]">
                <div className="relative rounded-xl overflow-hidden h-[400px]">
                  <iframe
                    width="100%"
                    height="100%"
                    src={product.videoUrl}
                    title={`${product.name} Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            )}

            {activeTab === "showcase" && product.showcaseImages && product.showcaseImages.length > 0 && (
              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8 min-h-[500px]">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative rounded-xl overflow-hidden aspect-video group">
                    <Image
                      src={product.showcaseImages[showcaseIndex] || "/placeholder.svg"}
                      alt={`Showcase ${showcaseIndex + 1}`}
                      fill
                      className="object-contain"
                    />

                    {product.showcaseImages.length > 1 && (
                      <>
                        <button
                          onClick={() => handleShowcaseChange("prev")}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 p-2 rounded-full backdrop-blur-sm transition-all"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleShowcaseChange("next")}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 p-2 rounded-full backdrop-blur-sm transition-all"
                          aria-label="Next image"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Experience {product.name} in action. Our showcase highlights the key features and capabilities
                      that make this product stand out. See real gameplay footage and demonstrations of the advanced
                      mechanics and features you'll get with your purchase.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-voltaris-red/20 text-voltaris-red border border-voltaris-red/30 rounded-lg text-sm">
                        High Performance
                      </span>
                      <span className="px-3 py-1 bg-voltaris-red/20 text-voltaris-red border border-voltaris-red/30 rounded-lg text-sm">
                        Fully Undetected
                      </span>
                      <span className="px-3 py-1 bg-voltaris-red/20 text-voltaris-red border border-voltaris-red/30 rounded-lg text-sm">
                        Premium Quality
                      </span>
                    </div>
                  </div>
                </div>

                {product.showcaseImages.length > 1 && (
                  <div className="flex justify-center gap-2 mt-6">
                    {product.showcaseImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setShowcaseIndex(idx)}
                        className={cn(
                          "h-2 rounded-full transition-all",
                          idx === showcaseIndex ? "w-8 bg-voltaris-red" : "w-2 bg-zinc-700 hover:bg-voltaris-red/50",
                        )}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8 min-h-[500px]">
                <h3 className="text-2xl font-bold text-white mb-6">Customer Reviews</h3>
                {product.reviews && product.reviews.length > 0 ? (
                  <div className="space-y-4">
                    {product.reviews.map((review, idx) => (
                      <div key={idx} className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/50">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-voltaris-red font-medium">{review.variant}</span>
                          <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={cn(
                                  "h-5 w-5",
                                  i < review.rating ? "fill-voltaris-red text-voltaris-red" : "text-zinc-700",
                                )}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-zinc-300 leading-relaxed">{review.quote}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-zinc-400 text-lg">No reviews yet</p>
                    <p className="text-zinc-500 text-sm mt-2">Be the first to review this product!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">You May Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="group bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-xl overflow-hidden hover:border-voltaris-red/50 transition-all cursor-pointer"
                  onClick={() => {
                    window.location.href = `/products/${relatedProduct.slug}`
                  }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-2 group-hover:text-voltaris-red transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {relatedProduct.name.includes("1v1 Bot")
                        ? "[+] Advanced Bot in 1v1 Gameplay"
                        : relatedProduct.name.includes("Unlock All")
                          ? "[+] Advanced ESP Customization Mod"
                          : relatedProduct.description.split("\n")[0]}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-voltaris-red font-semibold">
                        ${relatedProduct.variants[0].price.toFixed(2)}+
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-voltaris-red/20 text-voltaris-red border border-voltaris-red/30">
                        {relatedProduct.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function organizeFeaturesIntoCategories(features: string[], category: string): Record<string, string[]> {
  const cleanFeatures = features.map((f) => f.replace("[+]", "").trim())

  // Define category keywords for intelligent grouping
  const aimKeywords = [
    "aimbot",
    "aim",
    "shooting",
    "targeting",
    "precision",
    "tracking",
    "smooth",
    "triggerbot",
    "shots",
    "flick",
  ]
  const visualKeywords = ["esp", "wallhack", "skeleton", "box", "visual", "see", "loot", "item", "detection", "enemy"]
  const gameplayKeywords = [
    "positioning",
    "rotation",
    "recovery",
    "dribbling",
    "wave dash",
    "wall dash",
    "demo",
    "decision",
    "adaptive",
    "playstyle",
    "mode",
  ]
  const performanceKeywords = ["lightweight", "performance", "optimized", "setup", "loader", "simple", "easy"]
  const unlockKeywords = [
    "unlock",
    "battlepass",
    "items",
    "custom",
    "title",
    "status",
    "color",
    "skip",
    "forfeit",
    "misc",
  ]

  const categorized: Record<string, string[]> = {}

  // Categorize based on product type and keywords
  if (category === "Rocket League") {
    categorized["Gameplay"] = []
    categorized["Visuals"] = []
    categorized["Customization"] = []
    categorized["Performance"] = []

    cleanFeatures.forEach((feature) => {
      const lowerFeature = feature.toLowerCase()

      if (unlockKeywords.some((kw) => lowerFeature.includes(kw))) {
        categorized["Customization"].push(feature)
      } else if (visualKeywords.some((kw) => lowerFeature.includes(kw))) {
        categorized["Visuals"].push(feature)
      } else if (performanceKeywords.some((kw) => lowerFeature.includes(kw))) {
        categorized["Performance"].push(feature)
      } else if (gameplayKeywords.some((kw) => lowerFeature.includes(kw))) {
        categorized["Gameplay"].push(feature)
      } else {
        categorized["Gameplay"].push(feature)
      }
    })
  } else if (category === "Fortnite") {
    categorized["Aim"] = []
    categorized["Visuals"] = []
    categorized["Features"] = []
    categorized["Performance"] = []

    cleanFeatures.forEach((feature) => {
      const lowerFeature = feature.toLowerCase()

      if (aimKeywords.some((kw) => lowerFeature.includes(kw))) {
        categorized["Aim"].push(feature)
      } else if (visualKeywords.some((kw) => lowerFeature.includes(kw))) {
        categorized["Visuals"].push(feature)
      } else if (performanceKeywords.some((kw) => lowerFeature.includes(kw))) {
        categorized["Performance"].push(feature)
      } else {
        categorized["Features"].push(feature)
      }
    })
  } else {
    // Default categorization
    categorized["Features"] = cleanFeatures
  }

  // Remove empty categories
  Object.keys(categorized).forEach((key) => {
    if (categorized[key].length === 0) {
      delete categorized[key]
    }
  })

  return categorized
}
