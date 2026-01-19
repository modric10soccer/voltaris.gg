"use client"

import React from "react"

import { useState } from "react"
import { AlertCircle, Clock, Download, ExternalLink, FileText, HelpCircle, Shield, Star } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const userPurchases = [
  {
    id: "requiem-008",
    productName: "Rocket League Requiem SSL Bot",
    description: "World's first AI engineered for 2v2 domination with apex duo logic",
    expiryDate: "No Expiry",
    status: "Active",
    downloadUrl: "#",
    version: "Latest",
    lastUpdated: "Current",
  },
  {
    id: "t2-013",
    productName: "Rocket League T2 SSL 1v1 Bot",
    description: "SSL in 1v1 and GC2 in 2s with advanced mechanics and bot controls",
    expiryDate: "No Expiry",
    status: "Active",
    downloadUrl: "#",
    version: "Latest",
    lastUpdated: "Current",
  },
  {
    id: "novabot-014",
    productName: "Rocket League Nova SSL Bot",
    description: "Top 25 worldwide - SSL in 1v1, GC2-GC3 in 2s with flip resets and air dribbles",
    expiryDate: "No Expiry",
    status: "Active",
    downloadUrl: "#",
    version: "Latest",
    lastUpdated: "Current",
  },
  {
    id: "mech-011",
    productName: "Rocket League Mech SSL 1v1 Bot",
    description: "Most advanced Rocket League bot with SSL 1v1 capability and nasty mechanics",
    expiryDate: "No Expiry",
    status: "Active",
    downloadUrl: "#",
    version: "Latest",
    lastUpdated: "Current",
  },
  {
    id: "opti-007",
    productName: "Rocket League Opti SSL Bot",
    description: "Revolutionary bot achieving SSL in 2s with walldashes and airdribbles",
    expiryDate: "No Expiry",
    status: "Active",
    downloadUrl: "#",
    version: "Latest",
    lastUpdated: "Current",
  },
  {
    id: "multi-009",
    productName: "Rocket League Multi Bot",
    description: "Advanced AI with live think view, ball ESP, and trajectory prediction",
    expiryDate: "No Expiry",
    status: "Active",
    downloadUrl: "#",
    version: "Latest",
    lastUpdated: "Current",
  },
  {
    id: "1v1-010",
    productName: "Rocket League 1v1 Bot",
    description: "Specialized AI for 1v1 dominance with advanced mechanics and prediction",
    expiryDate: "No Expiry",
    status: "Active",
    downloadUrl: "#",
    version: "Latest",
    lastUpdated: "Current",
  },
  {
    id: "unlock-all",
    productName: "Rocket League Unlock All",
    description: "Complete mod menu with custom titles, ESP, visuals, and more",
    expiryDate: "No Expiry",
    status: "Active",
    downloadUrl: "#",
    version: "Latest",
    lastUpdated: "Current",
  },
  {
    id: "ue-001",
    productName: "Fortnite Private External",
    description: "Advanced aimbot and ESP for Fortnite with undetected status",
    expiryDate: "No Expiry",
    status: "Active",
    downloadUrl: "#",
    version: "Latest",
    lastUpdated: "Current",
  },
]

export default function DownloadsPageContent() {
  const [activeTab, setActiveTab] = useState<"downloads" | "guides" | "support">("downloads")

  const totalSales = "5011"
  const rating = "5.00"
  const reviewCount = "4399"

  const getTags = (name: string) => {
    if (name.includes("Fortnite")) return ["Fortnite", "Website"]
    if (name.includes("Rust")) return ["Rust", "External"]
    if (name.includes("R6")) return ["R6", "External"]
    if (name.includes("Unlock")) return ["Rocket League", "Mod Menu"]
    return ["Rocket League", "AI Bot"]
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-voltaris-red/20 text-voltaris-red border-voltaris-red/30"
      case "expired":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "updating":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "coming soon":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const handleDownload = (downloadUrl: string, productName: string) => {
    const downloadLinks: Record<string, string> = {
      "Fortnite Private External": "https://transfer.it/t/Z1EPPVtFnZTI",
      "Rocket League Requiem SSL Bot": "https://gofile.io/d/NZjDO1",
      "Rocket League T2 SSL 1v1 Bot": "https://gofile.io/d/NZjDO1",
      "Rocket League Nova SSL Bot": "https://gofile.io/d/NZjDO1",
      "Rocket League Mech SSL 1v1 Bot": "https://gofile.io/d/NZjDO1",
      "Rocket League Opti SSL Bot": "https://transfer.it/t/wuXPmFkzgTTZ",
      "Rocket League Multi Bot": "https://transfer.it/t/jNUozlwFVRTY",
      "Rocket League Unlock All": "https://transfer.it/t/ogqEBc1HVBSQ",
      "Rocket League 1v1 Bot": "https://gofile.io/d/NZjDO1",
    }

    const link = downloadLinks[productName]
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer")
    } else {
      console.log("[v0] Download link not available for:", productName)
    }
  }

  const starfield = {
    backgroundImage:
      "radial-gradient(white, rgba(255,255,255,.18) 2px, transparent 3px)," +
      "radial-gradient(white, rgba(255,255,255,.12) 1px, transparent 2px)," +
      "radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 3px)",
    backgroundSize: "620px 620px, 380px 380px, 280px 280px",
    backgroundPosition: "0 0, 60px 80px, 140px 300px",
  }

  return (
    <main className="flex-1" style={starfield}>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(88,70,249,0.07),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(255,55,95,0.08),transparent_28%)]" />

        <div className="container relative px-4 md:px-6 py-16 md:py-24">
          <header className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 shadow-[0_0_25px_rgba(88,70,249,0.25)]">
              <Download className="h-4 w-4" />
              Software Downloads
            </div>
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                Download the latest software and tools
              </h1>
              <p className="max-w-2xl text-base md:text-lg text-white/70">
                Access your purchases, grab fresh builds, and follow streamlined install guides.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/80">
                <Star className="h-4 w-4 text-amber-400" />
                {rating} rating
                <span className="text-white/60">({reviewCount} reviews)</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/80">
                <Download className="h-4 w-4" />
                {totalSales} products delivered
              </div>
            </div>
          </header>

          <div className="mx-auto mb-10 flex w-full max-w-3xl justify-center">
            <div className="inline-flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/5 p-1">
              {["downloads", "guides", "support"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as typeof activeTab)}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-[#3b2a9e] to-[#5846f9] text-white shadow-lg shadow-[#5846f9]/30"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {tab === "downloads" && "My Downloads"}
                  {tab === "guides" && "Installation Guides"}
                  {tab === "support" && "Support"}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "downloads" && (
            <div className="max-w-6xl mx-auto space-y-8">
              {userPurchases.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {userPurchases.map((purchase) => (
                    <Card
                      key={purchase.id}
                      className="relative h-full overflow-hidden border-white/10 bg-gradient-to-br from-[#0e0e16]/90 via-[#0e0e16]/80 to-[#0c0c14]/90 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
                    >
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-20" />
                      <CardHeader className="space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-2">
                            <CardTitle className="text-white text-lg">{purchase.productName}</CardTitle>
                            <CardDescription className="text-white/70 leading-relaxed">{purchase.description}</CardDescription>
                            <div className="flex flex-wrap gap-2">
                              {getTags(purchase.productName).map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/70"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <Badge className={getStatusColor(purchase.status)}>{purchase.status}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
                          <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2">
                            <Clock className="h-4 w-4 text-white/60" />
                            <div>
                              <p className="text-white/60 text-xs">Expires</p>
                              <p className="text-white">{purchase.expiryDate}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2">
                            <FileText className="h-4 w-4 text-white/60" />
                            <div>
                              <p className="text-white/60 text-xs">Version</p>
                              <p className="text-white">{purchase.version}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2 col-span-2">
                            <Shield className="h-4 w-4 text-white/60" />
                            <div>
                              <p className="text-white/60 text-xs">Updated</p>
                              <p className="text-white">{purchase.lastUpdated}</p>
                            </div>
                          </div>
                        </div>
                        <Button
                          className="w-full rounded-lg border border-[#5846f9]/50 bg-[#3b2a9e]/40 text-white shadow-[0_10px_40px_rgba(88,70,249,0.35)] transition-all hover:-translate-y-[1px] hover:border-[#5846f9] hover:bg-[#5846f9]"
                          disabled={
                            purchase.status === "Expired" ||
                            purchase.status === "Coming Soon" ||
                            purchase.status === "Updating"
                          }
                          onClick={() => handleDownload(purchase.downloadUrl, purchase.productName)}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          {purchase.status === "Coming Soon"
                            ? "Coming Soon"
                            : purchase.status === "Updating"
                              ? "Updating"
                              : "Download Now"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="bg-gradient-to-br from-[#0e0e16]/90 to-[#0c0c14]/90 border-white/10 text-center py-12">
                  <CardContent>
                    <Download className="h-12 w-12 text-white/40 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">No Downloads Available</h3>
                    <p className="text-white/70 mb-6">
                      You have not purchased any products yet. Browse the collection to get started.
                    </p>
                    <Button
                      asChild
                      className="rounded-full border border-[#5846f9]/50 bg-[#3b2a9e]/40 text-white hover:bg-[#5846f9] hover:border-[#5846f9]"
                    >
                      <Link href="/products">Browse Products</Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {activeTab === "guides" && (
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-[#0e0e16]/90 to-[#0c0c14]/90 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <FileText className="h-5 w-5" />
                    General Installation Guide
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Follow these steps to install and use your purchased products
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {installationSteps.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#3b2a9e]/30 text-white flex items-center justify-center text-sm font-semibold border border-[#5846f9]/40">
                          {index + 1}
                        </div>
                        <p className="text-white/80 pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full rounded-lg border border-[#5846f9]/50 bg-[#3b2a9e]/40 text-white hover:bg-[#5846f9] hover:border-[#5846f9]"
                    >
                      <Link href="https://voltaris.gitbook.io/voltaris" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Full Documentation & Guides
                      </Link>
                    </Button>
                  </div>
                  <div className="mt-8 p-4 rounded-lg bg-[#3b2a9e]/15 border border-[#5846f9]/30">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-[#d76dff] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Important Security Notice</h4>
                        <p className="text-sm text-white/70">
                          Our software may be flagged by antivirus programs as a false positive. This is normal for game
                          modification tools. Always download from official sources and temporarily disable antivirus during installation.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "support" && (
            <div className="max-w-5xl mx-auto">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-gradient-to-br from-[#0e0e16]/90 to-[#0c0c14]/90 border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <HelpCircle className="h-5 w-5" />
                      Get Help
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      Need assistance with your downloads or installation?
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button
                        asChild
                        className="w-full rounded-lg border border-[#5846f9]/50 bg-[#3b2a9e]/40 text-white hover:bg-[#5846f9] hover:border-[#5846f9]"
                      >
                        <Link href="https://discord.gg/voltaris" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Join Discord Support
                        </Link>
                      </Button>
                      <Button
                        asChild
                        className="w-full rounded-lg border border-[#5846f9]/50 bg-[#3b2a9e]/40 text-white hover:bg-[#5846f9] hover:border-[#5846f9]"
                      >
                        <Link href="/feedback">
                          <FileText className="h-4 w-4 mr-2" />
                          Submit Feedback
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#0e0e16]/90 to-[#0c0c14]/90 border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Shield className="h-5 w-5" />
                      Security & Safety
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      Important information about using our products safely
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5846f9] mt-2 flex-shrink-0" />
                        <p className="text-white/75">Always use a VPN when gaming with cheats</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5846f9] mt-2 flex-shrink-0" />
                        <p className="text-white/75">Do not share your license keys</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5846f9] mt-2 flex-shrink-0" />
                        <p className="text-white/75">Keep products updated for best security</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5846f9] mt-2 flex-shrink-0" />
                        <p className="text-white/75">Use at your own risk; we cannot guarantee 100% safety</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          <footer className="mt-16 flex flex-col gap-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0e0e16]/80 to-[#0c0c14]/80 p-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-white leading-tight">
                Ready to dominate <span className="text-white/60">the game?</span>
              </h2>
              <div className="flex flex-wrap gap-3 text-sm text-white/80">
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  <Shield className="h-4 w-4 text-[#5846f9]" />
                  Fully undetected
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  <Clock className="h-4 w-4 text-[#5846f9]" />
                  Instant delivery
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
              <Link
                href="https://discord.gg/voltaris"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#5865F2] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(88,101,242,0.4)] transition hover:-translate-y-[1px] hover:bg-[#4752c4]"
              >
                Join our Discord
                <ExternalLink className="h-4 w-4" />
              </Link>
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-white font-semibold">{rating} Stars</p>
                  <p className="text-white/60 text-sm">{reviewCount} Customer Reviews</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <Shield className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  )
}

const installationSteps = [
  "Download the loader from your email or the downloads section below",
  "Disable Windows Defender and any antivirus software temporarily",
  "Extract the files to a folder on your desktop",
  "Run the loader as administrator",
  "Enter your license key when prompted",
  "Follow the on-screen instructions to inject the cheat",
]