"use server"
import type { Product, ProductVariant } from "@/lib/products"

export async function initiateStorrikCheckout({
  email,
  firstName,
  lastName,
  country,
  items,
}: {
  email: string
  firstName: string
  lastName: string
  country: string
  items: { product: Product; variant: ProductVariant; quantity: number }[]
}) {
  const STORRIK_STORE_ID = items[0]?.product.storrikStoreId || "STORE_4PtCG2FcnL0AsqYSEC0dui0nMvQlg690"

  // Calculate total with discount
  const subtotal = items.reduce((sum, item) => sum + item.variant.price * item.quantity, 0)
  const discount = items.length >= 2 ? subtotal * 0.1 : 0
  const totalAmount = subtotal - discount

  // Create product title from items
  const productTitle = items
    .map((item) => `${item.product.name} (${item.variant.name}) x${item.quantity}`)
    .join(", ")
    .substring(0, 255)

  // Success and cancel URLs
  const successUrl = `${process.env.NEXT_PUBLIC_BASE_URL || "https://www.voltaris.gg"}/checkout/success`
  const cancelUrl = `${process.env.NEXT_PUBLIC_BASE_URL || "https://www.voltaris.gg"}/checkout/failed`

  try {
    const firstItem = items[0]
    const checkoutUrl = `https://storrik.io/checkout/${STORRIK_STORE_ID}?product=${firstItem.product.storrikProductId}&variant=${firstItem.variant.id}&quantity=${firstItem.quantity}`

    console.log("[v0] Storrik checkout URL:", checkoutUrl)

    return {
      status: true,
      url: checkoutUrl,
      transaction_id: globalThis.crypto.randomUUID(),
    }
  } catch (error) {
    console.error("Payment Error:", error)
    return { status: false, message: "An unexpected error occurred. Please try again." }
  }
}

// Keep old function name for backward compatibility
export const initiateSellHubCheckout = initiateStorrikCheckout
