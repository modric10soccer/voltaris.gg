"use client"

import React from "react"

import { useState } from "react"
import { Download, FileText, Shield, Clock, AlertCircle, ExternalLink, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

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
    productName: "NovaBot (Flip Reset)",
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
    status: "Updating",
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
    id: "mystery-bot",
    productName: "Rocket League Mystery Bot",
    description: "Mystery box containing any Voltaris bot - from NovaBOT to Unlock All",
    expiryDate: "No Expiry",
    status: "Active",
    downloadUrl: "#",
    version: "Mystery Prize",
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

  const availableGames = React.useMemo(() => {
    const games = userPurchases.map((purchase) => {
      if (purchase.productName.includes("Fortnite")) return "Fortnite"
      if (purchase.productName.includes("Rocket League")) return "Rocket League"
      return "Other"
    })
    return ["all", ...Array.from(new Set(games))]
  }, [])

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
      "Rocket League Requiem SSL Bot": "https://transfer.it/t/o03fKZshzLiB",
      "Rocket League T2 SSL 1v1 Bot": "https://transfer.it/t/o03fKZshzLiB",
      "NovaBot (Flip Reset)": "https://transfer.it/t/o03fKZshzLiB",
      "Rocket League Mech SSL 1v1 Bot": "https://transfer.it/t/o03fKZshzLiB",
      "Rocket League Opti SSL Bot": "https://transfer.it/t/wuXPmFkzgTTZ",
      "Rocket League Multi Bot": "https://transfer.it/t/jNUozlwFVRTY",
      "Rocket League Unlock All": "https://transfer.it/t/ogqEBc1HVBSQ",
      "Rocket League Mystery Bot": "mystery",
    }

    const link = downloadLinks[productName]
    if (link === "mystery") {
      alert("Mystery Bot prizes are revealed after purchase! Check your email for your prize bot download link.")
    } else if (link) {
      window.open(link, "_blank", "noopener,noreferrer")
    } else {
      console.log("[v0] Download link not available for:", productName)
    }
  }

  return (
    <main className="flex-1 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-voltaris-red/20 px-4 py-2 text-sm font-medium text-voltaris-red border border-voltaris-red/30 backdrop-blur-sm">
            <Download className="h-4 w-4" />
            Downloads
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Your Downloads
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Access your purchased products, download the latest versions, and get installation support.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex gap-2 p-1">
            <button
              onClick={() => setActiveTab("downloads")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all backdrop-blur-sm ${
                activeTab === "downloads"
                  ? "bg-voltaris-red/20 text-voltaris-red border border-voltaris-red/30"
                  : "bg-transparent text-muted-foreground hover:text-foreground border border-transparent"
              }`}
            >
              My Downloads
            </button>
            <button
              onClick={() => setActiveTab("guides")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all backdrop-blur-sm ${
                activeTab === "guides"
                  ? "bg-voltaris-red/20 text-voltaris-red border border-voltaris-red/30"
                  : "bg-transparent text-muted-foreground hover:text-foreground border border-transparent"
              }`}
            >
              Installation Guides
            </button>
            <button
              onClick={() => setActiveTab("support")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all backdrop-blur-sm ${
                activeTab === "support"
                  ? "bg-voltaris-red/20 text-voltaris-red border border-voltaris-red/30"
                  : "bg-transparent text-muted-foreground hover:text-foreground border border-transparent"
              }`}
            >
              Support
            </button>
          </div>
        </div>

        {/* Downloads Tab */}
        {activeTab === "downloads" && (
          <div className="max-w-4xl mx-auto">
            {userPurchases.length > 0 ? (
              <div className="grid gap-6">
                {userPurchases.map((purchase) => (
                  <Card key={purchase.id} className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-zinc-800">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-foreground">{purchase.productName}</CardTitle>
                          <CardDescription className="mt-1">{purchase.description}</CardDescription>
                        </div>
                        <Badge className={getStatusColor(purchase.status)}>{purchase.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Expires:</span>
                          <span className="text-foreground">{purchase.expiryDate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Version:</span>
                          <span className="text-foreground">{purchase.version}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Shield className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Updated:</span>
                          <span className="text-foreground">{purchase.lastUpdated}</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          className="bg-voltaris-red/20 text-voltaris-red hover:bg-voltaris-red/30 border border-voltaris-red/30 rounded-full backdrop-blur-sm"
                          disabled={
                            purchase.status === "Expired" ||
                            purchase.status === "Coming Soon" ||
                            purchase.status === "Updating"
                          }
                          onClick={() => handleDownload(purchase.downloadUrl, purchase.productName)}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          {purchase.status === "Coming Soon"
                            ? "Coming Soon"
                            : purchase.status === "Updating"
                              ? "Updating"
                              : "Download"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-zinc-800 text-center py-12">
                <CardContent>
                  <Download className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No Downloads Available</h3>
                  <p className="text-muted-foreground mb-6">
                    You haven't purchased any products yet. Browse our collection to get started.
                  </p>
                  <Button
                    asChild
                    className="bg-voltaris-red/20 text-voltaris-red hover:bg-voltaris-red/30 border border-voltaris-red/30 rounded-full backdrop-blur-sm"
                  >
                    <Link href="/products">Browse Products</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Installation Guides Tab */}
        {activeTab === "guides" && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-zinc-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <FileText className="h-5 w-5" />
                  General Installation Guide
                </CardTitle>
                <CardDescription>Follow these steps to install and use your purchased products</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {installationSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-voltaris-red/20 text-voltaris-red flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-foreground pt-1">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button
                    asChild
                    className="w-full bg-voltaris-red/20 text-voltaris-red hover:bg-voltaris-red/30 border border-voltaris-red/30 rounded-full backdrop-blur-sm"
                  >
                    <Link href="https://voltaris.gitbook.io/voltaris" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Full Documentation & Guides
                    </Link>
                  </Button>
                </div>
                <div className="mt-8 p-4 rounded-lg bg-voltaris-red/10 border border-voltaris-red/30">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-voltaris-red flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-voltaris-red mb-1">Important Security Notice</h4>
                      <p className="text-sm text-voltaris-red/80">
                        Our software may be flagged by antivirus programs as a false positive. This is normal for game
                        modification tools. Always download from official sources and temporarily disable antivirus
                        during installation.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Support Tab */}
        {activeTab === "support" && (
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-zinc-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <HelpCircle className="h-5 w-5" />
                    Get Help
                  </CardTitle>
                  <CardDescription>Need assistance with your downloads or installation?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button
                      asChild
                      className="w-full bg-voltaris-red/20 text-voltaris-red hover:bg-voltaris-red/30 border border-voltaris-red/30 rounded-full backdrop-blur-sm"
                    >
                      <Link href="https://discord.gg/voltaris" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Join Discord Support
                      </Link>
                    </Button>
                    <Button
                      asChild
                      className="w-full bg-voltaris-red/20 text-voltaris-red hover:bg-voltaris-red/30 border border-voltaris-red/30 rounded-full backdrop-blur-sm"
                    >
                      <Link href="/feedback">
                        <FileText className="h-4 w-4 mr-2" />
                        Submit Feedback
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-zinc-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Shield className="h-5 w-5" />
                    Security & Safety
                  </CardTitle>
                  <CardDescription>Important information about using our products safely</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-voltaris-red mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">Always use a VPN when gaming with cheats</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-voltaris-red mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">Don't share your license keys with others</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-voltaris-red mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">Keep your products updated for best security</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-voltaris-red mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">Use at your own risk - we cannot guarantee 100% safety</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
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
