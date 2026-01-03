import Link from "next/link"
import { MessageCircle, Clock, Headset, Zap, Users, Star } from "lucide-react"
import Image from "next/image"

export default function SiteFooter() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Image src="/images/voltaris-logo.png" alt="voltaris logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-2xl font-bold text-foreground">Voltaris</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-md">
              Premium gaming enhancements and tools designed to elevate your gameplay experience across multiple titles.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://discord.gg/voltaris"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-nano-blue transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="text-sm">Discord</span>
              </Link>
              <Link
                href="https://www.youtube.com/@HuskattenDK2.0/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="text-sm">YouTube</span>
              </Link>
              <Link
                href="https://www.trustpilot.com/review/voltaris.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Star className="h-5 w-5" />
                <span className="text-sm">Trustpilot</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Products
              </Link>
              <Link href="/downloads" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Downloads
              </Link>
              <Link href="/status" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Status
              </Link>
              <Link href="/reviews" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Reviews
              </Link>
              <Link href="/updates" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Updates
              </Link>
              <Link
                href="https://voltaris.gitbook.io/voltaris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="/media-program"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Media Program
              </Link>
              <Link href="/reselling" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Reselling
              </Link>
              <Link
                href="/terms-of-service"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Support</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Discord Support Tickets</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">1-6 hour response time</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Headset className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">24/7 availability</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Expert technical team</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Friendly community help</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Voltaris. All Rights Reserved.
          </div>
          <Link
            href="https://www.voltaris.gg"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Powered by <span className="text-primary font-semibold">Voltaris.gg</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
