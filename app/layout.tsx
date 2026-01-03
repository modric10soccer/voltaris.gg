import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CurrencyProvider } from "@/contexts/currency-context"
import { CartProvider } from "@/contexts/cart-context"
import { WishlistProvider } from "@/contexts/wishlist-context"
import { LanguageProvider } from "@/contexts/language-context"
import { AuthProvider } from "@/contexts/auth-context"
import PurchaseNotifications from "@/components/purchase-notifications"
import LiveChatWidget from "@/components/live-chat-widget"
import Script from "next/script"
import PageTransition from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Voltaris",
  description:
    "Premium gaming enhancements and tools designed to elevate your gameplay experience across multiple titles. Trusted by thousands of players worldwide.",
  icons: {
    icon: "/images/voltaris-logo.png",
  },
  metadataBase: new URL("https://www.voltaris.gg"),
  other: {
    "theme-color": "#E63946",
  },
  openGraph: {
    title: "Voltaris.gg",
    description:
      "Premium gaming enhancements and tools designed to elevate your gameplay experience across multiple titles. Trusted by thousands of players worldwide.",
    url: "https://www.voltaris.gg",
    siteName: "Voltaris",
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Voltaris - Premium Gaming Enhancements",
        type: "image/png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voltaris.gg",
    description:
      "Premium gaming enhancements and tools designed to elevate your gameplay experience across multiple titles. Trusted by thousands of players worldwide.",
    images: ["/images/banner.png"],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="https://cdn.storrik.io/embed.js" strategy="afterInteractive" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <AuthProvider>
              <CurrencyProvider>
                <CartProvider>
                  <WishlistProvider>
                    <div className="relative min-h-screen bg-gradient-to-br from-black via-black to-voltaris-red/10">
                      <PageTransition>
                        <div className="relative z-10">{children}</div>
                      </PageTransition>
                    </div>
                    <PurchaseNotifications />
                    <LiveChatWidget />
                  </WishlistProvider>
                </CartProvider>
              </CurrencyProvider>
            </AuthProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
