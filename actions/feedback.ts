"use server"

import { products } from "@/lib/products"

export async function submitFeedback(formData: FormData) {
  const rating = Number(formData.get("rating"))
  const comment = formData.get("comment") as string
  const productId = formData.get("productId") as string

  // In a real application, you would save this to a database.
  // For now, we'll just log it and simulate success.
  console.log("Received Feedback:")
  console.log("Rating:", rating)
  console.log("Comment:", comment)
  console.log("Product ID:", productId)

  const product = products.find((p) => p.id === productId)
  console.log("Product Name:", product ? product.name : "N/A")

  // Simulate a delay for network request
  await new Promise((resolve) => setTimeout(resolve, 1000))

  if (rating > 0 && comment.length > 0 && productId) {
    return { status: true, message: "" }
  }

  return { status: false, message: "Please provide a rating, comment, and select a product." }
}
