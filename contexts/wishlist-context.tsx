"use client"

import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { products, type Product, type ProductVariant } from "@/lib/products"

export type WishlistItem = {
  productId: string
  variantId: string
}

interface WishlistContextType {
  items: WishlistItem[]
  addItem: (productId: string, variantId: string) => void
  removeItem: (productId: string, variantId: string) => void
  isInWishlist: (productId: string, variantId: string) => boolean
  clearWishlist: () => void
  getWishlistDetails: () => { product: Product; variant: ProductVariant }[]
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([])

  useEffect(() => {
    const storedWishlist = localStorage.getItem("voltaris_wishlist")
    if (storedWishlist) {
      setItems(JSON.parse(storedWishlist))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("voltaris_wishlist", JSON.stringify(items))
  }, [items])

  const addItem = useCallback((productId: string, variantId: string) => {
    setItems((prevItems) => {
      const exists = prevItems.some((item) => item.productId === productId && item.variantId === variantId)
      if (!exists) {
        return [...prevItems, { productId, variantId }]
      }
      return prevItems
    })
  }, [])

  const removeItem = useCallback((productId: string, variantId: string) => {
    setItems((prevItems) => prevItems.filter((item) => !(item.productId === productId && item.variantId === variantId)))
  }, [])

  const isInWishlist = useCallback(
    (productId: string, variantId: string) => {
      return items.some((item) => item.productId === productId && item.variantId === variantId)
    },
    [items],
  )

  const clearWishlist = useCallback(() => {
    setItems([])
  }, [])

  const getWishlistDetails = useCallback(() => {
    return items
      .map((item) => {
        const product = products.find((p) => p.id === item.productId)
        const variant = product?.variants.find((v) => v.id === item.variantId)
        if (product && variant) {
          return { product, variant }
        }
        return null
      })
      .filter(Boolean) as { product: Product; variant: ProductVariant }[]
  }, [items])

  const contextValue = React.useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      isInWishlist,
      clearWishlist,
      getWishlistDetails,
    }),
    [items, addItem, removeItem, isInWishlist, clearWishlist, getWishlistDetails],
  )

  return <WishlistContext.Provider value={contextValue}>{children}</WishlistContext.Provider>
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
