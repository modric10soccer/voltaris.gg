export type BlogPost = {
  id: string
  slug: string
  title: string
  description: string
  publishedDate: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "january-2025-rift-release",
    slug: "january-2025-rift-release",
    title: "Rocket League Rift SSL Bot | Official Release",
    description: "Revolutionary new bot with flip reset mechanics and GC3+ to SSL performance!",
    publishedDate: "Jan 22, 2025",
  },
  {
    id: "january-2025-mech-release",
    slug: "january-2025-mech-release",
    title: "Rocket League Mech SSL 1v1 Bot | Official Release",
    description: "The most advanced Rocket League bot with SSL 1v1 capability (2100 peak) and nasty mechanics!",
    publishedDate: "Jan 20, 2025",
  },
  {
    id: "january-2025-all-products-updated",
    slug: "january-2025-all-products-updated",
    title: "January 2025 | All Products Updated",
    description: "Major updates across all products with improved detection systems and performance!",
    publishedDate: "Jan 18, 2025",
  },
  {
    id: "december-2025-christmas-sale",
    slug: "december-2025-christmas-sale",
    title: "Christmas Sale 2025 | CHRISTMAS5 Promo Code",
    description: "Happy Holidays! Use code CHRISTMAS5 for 5% off all products this December!",
    publishedDate: "Dec 19, 2025",
  },
  {
    id: "multi-bot-release",
    slug: "multi-bot-release",
    title: "Rocket League Multi Bot | Official Release",
    description: "Revolutionary AI bot with live think view, ball ESP, trajectory prediction, and more!",
    publishedDate: "Dec 15, 2025",
  },
  {
    id: "all-products-updated-winter",
    slug: "all-products-updated-winter",
    title: "Winter 2025 | All Products Updated",
    description: "Major stability and performance updates across all products for the winter season!",
    publishedDate: "Dec 10, 2025",
  },
  {
    id: "march-2025-updates",
    slug: "march-2025-updates",
    title: "March 2025 | Spring Updates",
    description: "Spring refresh with new AI improvements and enhanced anti-detection systems!",
    publishedDate: "Mar 1, 2025",
  },
  {
    id: "fortnite-chapter5-update",
    slug: "fortnite-chapter5-update",
    title: "Fortnite External | Chapter 5 Support",
    description: "Full compatibility with Fortnite Chapter 5 Season 2 and new features.",
    publishedDate: "Feb 15, 2025",
  },
  {
    id: "rocket-league-season-13",
    slug: "rocket-league-season-13",
    title: "Rocket League Bot | Season 13 Ready",
    description: "Updated for Season 13 with improved rotation and positioning algorithms.",
    publishedDate: "Feb 10, 2025",
  },
  {
    id: "opti-ssl-bot-release",
    slug: "opti-ssl-bot-release",
    title: "Rocket League Opti GP SSL Bot | Release",
    description: "Revolutionary new bot achieving SSL in 2s and GC3 in 1s with advanced mechanics!",
    publishedDate: "Jan 31, 2025",
  },
  {
    id: "february-2025-updates",
    slug: "february-2025-updates",
    title: "February 2025 | New Features",
    description: "Major feature releases and performance improvements across all products!",
    publishedDate: "Jan 28, 2025",
  },
  {
    id: "fortnite-external-stability",
    slug: "fortnite-external-stability",
    title: "Fortnite External | Stability Improvements",
    description: "Critical stability update for Chapter 5 Season 1 with improved performance.",
    publishedDate: "Jan 23, 2025",
  },
  {
    id: "january-2025-updates",
    slug: "january-2025-updates",
    title: "January 2025 | Major Updates",
    description: "All products updated for latest game patches and new features added!",
    publishedDate: "Jan 21, 2025",
  },
  {
    id: "rocket-league-bot-updates",
    slug: "rocket-league-bot-updates",
    title: "Rocket League Bot | Updates",
    description: "SSL Bot now supports new training modes and improved AI behavior.",
    publishedDate: "Jan 19, 2025",
  },
  {
    id: "valorant-colorbot-updates",
    slug: "valorant-colorbot-updates",
    title: "Valorant Colorbot | Updates",
    description: "Enhanced color detection and new triggerbot features added.",
    publishedDate: "Jan 18, 2025",
  },
  {
    id: "r6-crusader-updates",
    slug: "r6-crusader-updates",
    title: "R6 Crusader | Updates",
    description: "Updated for latest Rainbow Six Siege patch with new ESP options.",
    publishedDate: "Jan 17, 2025",
  },
  {
    id: "hwid-spoofer-updates",
    slug: "hwid-spoofer-updates",
    title: "HWID Spoofer | Updates",
    description: "Improved compatibility with latest Windows updates and anti-cheat systems.",
    publishedDate: "Jan 16, 2025",
  },
  {
    id: "fortnite-external-updates",
    slug: "fortnite-external-updates",
    title: "Fortnite External | Updates",
    description: "Major update with new aimbot algorithms and improved undetection.",
    publishedDate: "Jan 15, 2025",
  },
  {
    id: "december-2024-updates",
    slug: "december-2024-updates",
    title: "December 2024 | Holiday Updates",
    description: "End of year updates with performance improvements across all products.",
    publishedDate: "Dec 28, 2024",
  },
  {
    id: "november-2024-updates",
    slug: "november-2024-updates",
    title: "November 2024 | Fall Updates",
    description: "Seasonal updates with new features and improved compatibility.",
    publishedDate: "Nov 15, 2024",
  },
  {
    id: "october-2024-updates",
    slug: "october-2024-updates",
    title: "October 2024 | Security Updates",
    description: "Enhanced security features and anti-detection improvements.",
    publishedDate: "Oct 22, 2024",
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
