"use client"

import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { products, type Product, type ProductVariant } from "@/lib/products"

export type CartItem = {
  productId: string
  variantId: string
  quantity: number
  product?: Product // Optional, for convenience in UI
  variant?: ProductVariant // Optional, for convenience in UI
}

interface CartContextType {
  items: CartItem[]
  isHydrated: boolean
  addItem: (productId: string, variantId: string, quantity: number) => void
  removeItem: (productId: string, variantId: string) => void
  updateQuantity: (productId: string, variantId: string, newQuantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
  getCartDetails: () => { product: Product; variant: ProductVariant; quantity: number }[]
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isHydrated, setIsHydrated] = useState(false)

  // Load cart from localStorage on initial mount
  useEffect(() => {
    const storedCart = localStorage.getItem("nano_cart")
    if (storedCart) {
      setItems(JSON.parse(storedCart))
    }
    setIsHydrated(true)
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("nano_cart", JSON.stringify(items))
  }, [items])

  const addItem = useCallback((productId: string, variantId: string, quantity: number) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.productId === productId && item.variantId === variantId,
      )

      if (existingItemIndex > -1) {
        // Update quantity if item already exists
        const newItems = [...prevItems]
        newItems[existingItemIndex].quantity += quantity
        return newItems
      } else {
        // Add new item
        return [...prevItems, { productId, variantId, quantity }]
      }
    })
  }, [])

  const removeItem = useCallback((productId: string, variantId: string) => {
    setItems((prevItems) => prevItems.filter((item) => !(item.productId === productId && item.variantId === variantId)))
  }, [])

  const updateQuantity = useCallback((productId: string, variantId: string, newQuantity: number) => {
    setItems((prevItems) => {
      const newItems = prevItems.map((item) =>
        item.productId === productId && item.variantId === variantId
          ? { ...item, quantity: Math.max(1, newQuantity) } // Ensure quantity is at least 1
          : item,
      )
      return newItems.filter((item) => item.quantity > 0) // Remove if quantity becomes 0
    })
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const getTotalItems = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }, [items])

  const getCartDetails = useCallback(() => {
    return items
      .map((item) => {
        const product = products.find((p) => p.id === item.productId)
        const variant = product?.variants.find((v) => v.id === item.variantId)
        if (product && variant) {
          return { product, variant, quantity: item.quantity }
        }
        return null
      })
      .filter(Boolean) as { product: Product; variant: ProductVariant; quantity: number }[]
  }, [items])

  const getTotalPrice = useCallback(() => {
    return getCartDetails().reduce((total, item) => total + item.variant.price * item.quantity, 0)
  }, [getCartDetails])

  const contextValue = React.useMemo(
    () => ({
      items,
      isHydrated,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      getTotalItems,
      getTotalPrice,
      getCartDetails,
    }),
    [items, isHydrated, addItem, removeItem, updateQuantity, clearCart, getTotalItems, getTotalPrice, getCartDetails],
  )

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
