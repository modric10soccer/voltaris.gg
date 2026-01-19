"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Star } from "lucide-react"
import { submitFeedback } from "@/actions/feedback"
import { products } from "@/lib/products"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FeedbackForm() {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [selectedProductId, setSelectedProductId] = useState("")
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (rating === 0) {
      setError("Please select a star rating.")
      return
    }
    if (comment.trim() === "") {
      setError("Please enter a comment.")
      return
    }
    if (selectedProductId === "") {
      setError("Please select a product.")
      return
    }

    const formData = new FormData()
    formData.append("rating", rating.toString())
    formData.append("comment", comment)
    formData.append("productId", selectedProductId)

    startTransition(async () => {
      const result = await submitFeedback(formData)
      if (result.status) {
        // Reset form
        setRating(0)
        setComment("")
        setSelectedProductId("")
        setSuccess(result.message)
      } else {
        setError(result.message)
      }
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-2xl mx-auto p-6 rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90"
    >
      {/* Rating */}
      <div>
        <Label htmlFor="rating" className="text-foreground text-base mb-2 block">
          Your Rating <span className="text-voltaris-red">*</span>
        </Label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-8 w-8 cursor-pointer transition-colors ${
                star <= rating ? "fill-voltaris-red text-voltaris-red" : "text-muted-foreground"
              }`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
      </div>

      {/* Product Selection */}
      <div>
        <Label htmlFor="product" className="text-foreground text-base mb-2 block">
          Product <span className="text-voltaris-red">*</span>
        </Label>
        <Select value={selectedProductId} onValueChange={setSelectedProductId}>
          <SelectTrigger className="w-full bg-zinc-900/50 border border-voltaris-red/30 text-foreground placeholder:text-muted-foreground focus:border-voltaris-red hover:border-voltaris-red/50 rounded-lg transition-colors">
            <SelectValue placeholder="Select a product" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-900 border border-voltaris-red/30 text-foreground">
            {products.map((product) => (
              <SelectItem
                key={product.id}
                value={product.id}
                className="hover:bg-voltaris-red/20 focus:bg-voltaris-red/20 hover:text-voltaris-red focus:text-voltaris-red transition-colors"
              >
                {product.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Comment */}
      <div>
        <Label htmlFor="comment" className="text-foreground text-base mb-2 block">
          Your Comment <span className="text-voltaris-red">*</span>
        </Label>
        <Textarea
          id="comment"
          placeholder="Share your experience with us..."
          className="min-h-[120px] bg-zinc-900/50 border border-voltaris-red/30 text-foreground placeholder:text-muted-foreground focus:border-voltaris-red hover:border-voltaris-red/50 rounded-lg transition-colors"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>

      {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
      {success && <p className="text-green-500 text-sm mt-4">{success}</p>}

      <Button
        type="submit"
        className="w-full bg-voltaris-red/20 hover:bg-voltaris-red/30 text-voltaris-red border border-voltaris-red/30 px-8 py-6 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]"
        disabled={isPending || rating === 0 || comment.trim() === "" || selectedProductId === ""}
      >
        {isPending ? "Submitting..." : "Submit Feedback"}
      </Button>
    </form>
  )
}
