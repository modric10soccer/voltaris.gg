"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Menu, ShoppingCart, ChevronDown, MessageCircle, User, Globe, Search, X } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { useAuth } from "@/contexts/auth-context"
import { useCart } from "@/contexts/cart-context"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function SiteHeader() {
  const { language, setLanguage } = useLanguage()
  const { user } = useAuth()
  const { getTotalItems } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsSearchOpen(false)
      setSearchQuery("")
    }
  }

  const getLanguageLabel = (lang: string) => {
    const labels: { [key: string]: string } = {
      en: "English",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      pt: "Português",
      ru: "Русский",
      zh: "中文",
      ja: "日本語",
    }
    return labels[lang] || "English"
  }

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <header
        className={`w-full max-w-7xl transition-all duration-300 ${isScrolled ? "bg-black/70" : "bg-black/50"} backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden`}
      >
        <div className="container flex h-16 items-center justify-start px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-foreground" prefetch={false}>
            <Image src="/images/voltaris-logo.png" alt="Voltaris logo" width={40} height={40} className="h-10 w-10" />
            <span className="font-bold">Voltaris</span>
          </Link>
          {isSearchOpen ? (
            <form
              onSubmit={handleSearch}
              className="flex-1 mx-4 flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, pages..."
                className="flex-1 bg-voltaris-red/10 border border-voltaris-red/30 rounded-full px-4 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-voltaris-red/50 backdrop-blur-sm transition-all"
                autoFocus
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsSearchOpen(false)
                  setSearchQuery("")
                }}
                className="bg-voltaris-red/20 border border-voltaris-red/30 text-voltaris-red hover:bg-voltaris-red/30 rounded-full backdrop-blur-sm transition-all"
              >
                <X className="h-4 w-4" />
              </Button>
            </form>
          ) : (
            <nav className="hidden items-center space-x-6 lg:flex ml-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <Link
                href="/"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                Products
              </Link>
              <Link
                href="/downloads"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                Downloads
              </Link>
              <Link
                href="/status"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                Status
              </Link>
              <Link
                href="/reviews"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                Reviews
              </Link>
              <Link
                href="/updates"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                Updates
              </Link>
            </nav>
          )}
          <div className="flex items-center gap-2 ml-auto">
            {!isSearchOpen && (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hidden lg:flex items-center gap-1 text-sm text-muted-foreground hover:text-voltaris-red hover:bg-voltaris-red/10 border border-transparent hover:border-voltaris-red/30 transition-all rounded-full"
                    >
                      <Globe className="h-4 w-4 text-voltaris-red" />
                      <span className="hidden xl:inline">{getLanguageLabel(language)}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-zinc-900 border border-voltaris-red/30">
                    {["en", "es", "fr", "de", "pt", "ru", "zh", "ja"].map((lang) => (
                      <DropdownMenuItem
                        key={lang}
                        className="text-muted-foreground hover:text-voltaris-red hover:bg-voltaris-red/10 focus:text-voltaris-red focus:bg-voltaris-red/10 transition-colors"
                        onClick={() => setLanguage(lang as any)}
                      >
                        {getLanguageLabel(lang)}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-voltaris-red hover:bg-voltaris-red/10 hover:border-voltaris-red/30 border border-transparent transition-all rounded-full"
            >
              <Link href="/account" prefetch={false}>
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-voltaris-red hover:bg-voltaris-red/10 hover:border-voltaris-red/30 border border-transparent transition-all rounded-full relative"
            >
              <Link href="/cart" prefetch={false}>
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Shopping Cart</span>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-voltaris-red text-xs text-white">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-voltaris-red hover:bg-voltaris-red/10 hover:border-voltaris-red/30 border border-transparent transition-all rounded-full"
            >
              <Link href="https://discord.gg/voltaris" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">Support</span>
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-muted-foreground hover:text-voltaris-red hover:bg-voltaris-red/10 hover:border-voltaris-red/30 border border-transparent transition-all rounded-full"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-muted-foreground hover:text-voltaris-red hover:bg-voltaris-red/10 transition-colors"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-dark-card border-dark-border">
                <div className="flex flex-col gap-4 py-6">
                  <Link href="/" className="text-lg font-semibold text-foreground" prefetch={false}>
                    Home
                  </Link>
                  <Link href="/products" className="text-lg font-semibold text-foreground" prefetch={false}>
                    Products
                  </Link>
                  <Link href="/downloads" className="text-lg font-semibold text-foreground" prefetch={false}>
                    Downloads
                  </Link>
                  <Link href="/status" className="text-lg font-semibold text-foreground" prefetch={false}>
                    Status
                  </Link>
                  <Link href="/reviews" className="text-lg font-semibold text-foreground" prefetch={false}>
                    Reviews
                  </Link>
                  <Link href="/updates" className="text-lg font-semibold text-foreground" prefetch={false}>
                    Updates
                  </Link>

                  <div className="pt-4 border-t border-dark-border">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Language</p>
                    <div className="flex flex-wrap gap-2">
                      {["en", "es", "fr", "de"].map((lang) => (
                        <Button
                          key={lang}
                          variant={language === lang ? "default" : "outline"}
                          size="sm"
                          className={
                            language === lang
                              ? "bg-voltaris-red/20 text-voltaris-red border border-voltaris-red/30 hover:bg-voltaris-red/30"
                              : "border border-zinc-800"
                          }
                          onClick={() => setLanguage(lang as any)}
                        >
                          {getLanguageLabel(lang)}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/account"
                    className="text-lg font-semibold text-foreground flex items-center gap-2"
                    prefetch={false}
                  >
                    <User className="h-5 w-5" />
                    {user ? user.username : "Account"}
                  </Link>

                  <Link
                    href="/cart"
                    className="text-lg font-semibold text-foreground flex items-center gap-2"
                    prefetch={false}
                  >
                    Cart
                    {getTotalItems() > 0 && (
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-voltaris-red text-sm text-white">
                        {getTotalItems()}
                      </span>
                    )}
                  </Link>
                  <Link
                    href="https://discord.gg/voltaris"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-foreground flex items-center gap-2"
                  >
                    Support
                    <MessageCircle className="h-5 w-5" />
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  )
}
