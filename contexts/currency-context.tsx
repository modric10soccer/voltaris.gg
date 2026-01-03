"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Currency = "USD" | "EUR" | "GBP" | "CAD" | "AUD" // Added more currencies

interface CurrencyContextType {
  currency: Currency
  setCurrency: (currency: Currency) => void
  formatPrice: (price: number) => string
  convertPrice: (price: number, fromCurrency: Currency, toCurrency: Currency) => number
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD") // Default currency changed to USD

  // Exchange rates relative to USD (approximate values for demonstration)
  const exchangeRates = {
    USD: {
      EUR: 0.92, // 1 USD = 0.92 EUR
      GBP: 0.79, // 1 USD = 0.79 GBP
      CAD: 1.37, // 1 USD = 1.37 CAD
      AUD: 1.51, // 1 USD = 1.51 AUD
      USD: 1,
    },
    EUR: {
      USD: 1.08, // 1 EUR = 1.08 USD
      GBP: 0.86, // 1 EUR = 0.86 GBP
      CAD: 1.49, // 1 EUR = 1.49 CAD
      AUD: 1.64, // 1 EUR = 1.64 AUD
      EUR: 1,
    },
    GBP: {
      USD: 1.27, // 1 GBP = 1.27 USD
      EUR: 1.16, // 1 GBP = 1.16 EUR
      CAD: 1.73, // 1 GBP = 1.73 CAD
      AUD: 1.9, // 1 GBP = 1.90 AUD
      GBP: 1,
    },
    CAD: {
      USD: 0.73, // 1 CAD = 0.73 USD
      EUR: 0.67, // 1 CAD = 0.67 EUR
      GBP: 0.58, // 1 CAD = 0.58 GBP
      AUD: 0.91, // 1 CAD = 0.91 AUD
      CAD: 1,
    },
    AUD: {
      USD: 0.66, // 1 AUD = 0.66 USD
      EUR: 0.61, // 1 AUD = 0.61 EUR
      GBP: 0.53, // 1 AUD = 0.53 GBP
      CAD: 0.91, // 1 AUD = 0.91 CAD
      AUD: 1,
    },
  }

  const convertPrice = (price: number, fromCurrency: Currency, toCurrency: Currency): number => {
    if (fromCurrency === toCurrency) {
      return price
    }
    const rate = exchangeRates[fromCurrency][toCurrency]
    return price * rate
  }

  const formatPrice = (price: number): string => {
    const convertedPrice = convertPrice(price, "USD", currency) // Assume all prices in products.ts are in USD
    switch (currency) {
      case "USD":
        return `$${convertedPrice.toFixed(2)}`
      case "EUR":
        return `€${convertedPrice.toFixed(2)}`
      case "GBP":
        return `£${convertedPrice.toFixed(2)}`
      case "CAD":
        return `C$${convertedPrice.toFixed(2)}`
      case "AUD":
        return `A$${convertedPrice.toFixed(2)}`
      default:
        return convertedPrice.toFixed(2) // Fallback
    }
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider")
  }
  return context
}
