export type ProductStatus =
  | "Undetected"
  | "Use Under Own Risk"
  | "Hosting"
  | "Updating"
  | "Available"
  | "Coming Soon"
  | "Preorder"
  | "active" // Added new status

export type ProductVariant = {
  id: string
  name: string
  price: number
  oldPrice?: number
  stock: number
}

export type ProductReview = {
  quote: string
  author: string
  date: string
  rating: number
  verified: boolean
  variant: string
}

export type Product = {
  id: string
  slug: string
  name: string
  image: string
  thumbnail?: string
  additionalImages?: string[]
  showcaseImages?: string[]
  description: string
  category: string
  isFeatured?: boolean
  variants: ProductVariant[]
  status: ProductStatus
  isPreorder?: boolean
  preorderMessage?: string
  storrikStoreId?: string
  storrikProductId?: string
  videoUrl?: string
  reviews?: ProductReview[]
  rating?: number
  reviewsCount?: number
  isBestSeller?: boolean
  badge?: string
  detectionStatus?: string
  downloadLink?: string // Added download link field
  downloadUrl?: string // Added downloadUrl field
}








export const products: Product[] = [
  {
    id: "prod_985a46df7189b2a13a30a8c75ee239c8",
    slug: "rocket-league-requiem-ssl-bot",
    name: "Rocket League Requiem SSL Bot",
    storrikStoreId: "STORE_4PtCG2FcnL0AsqYSEC0dui0nMvQlg690",
    storrikProductId: "prod_985a46df7189b2a13a30a8c75ee239c8",
    image: "/images/products/requiem-bot-box.png",
    showcaseImages: ["/images/showcase/ssl-requiem-gameplay.png"],
    downloadUrl: "https://gofile.io/d/NZjDO1",
    description:
      "[+] SSL Rank in 2v2 Gameplay\n" +
      "[+] Apex 2v2 duo logic\n" +
      "[+] Flawless rotation & spacing\n" +
      "[+] God-tier mechanics\n" +
      "[+] Smart passing & teamwork\n\n" +
      "**System Requirements**\n" +
      "**Game Client:** Rocket League (Epic Games or Steam)\n" +
      "**Operating System:** Windows 10/11 (64-bit)\n" +
      "**Processor:** Intel Core i5 or AMD Ryzen 5 (4 cores minimum)\n" +
      "**Graphics Card:** NVIDIA GTX 1050 Ti / AMD RX 560 or better\n" +
      "**Display Mode:** Fullscreen or Borderless Windowed\n\n" +
      "**Overview**\n" +
      "Rocket League Requiem SSL Bot is the world's first AI engineered specifically for 2v2 domination. Unlike standard bots, it understands team synergy, rotation, and passing. Whether you need a perfect duo partner to boost your main or an automated machine to climb leaderboards, Rocket League Requiem SSL Bot is the apex predator.\n\n" +
      "**Why Rocket League Requiem SSL Bot?**\n" +
      "[+] Apex Duo Logic: Flawless 2v2 rotation and spacing\n" +
      "[+] God-Tier Mechanics: Double Taps & Flicks\n" +
      "[+] Human-Like Playstyle: Strategic defender removal & smart passing\n" +
      "[+] Fully Undetected: Safe for main accounts\n\n" +
      "**Download Link**\n" +
      "https://transfer.it/t/429MysghGJzb\n\n" +
      "**Additional Info**\n" +
      "Stop losing because of bad teammates. Get the perfect AI partner, lock down the field, and reach your peak rank today.",
    category: "Rocket League",
    isFeatured: true,
    variants: [
      { id: "var_efb5f9e8e9e2bb94247251fc58c501dc", name: "3 DAY", price: 29.99, stock: 10 },
      { id: "var_dcb4dc217456c2bea81c9a3ef7cf1ac4", name: "1 WEEK", price: 59.99, stock: 8 },
      { id: "var_1dad2805d8a0974604b6b92e6de2852e", name: "1 MONTH", price: 144.99, stock: 12 },
      { id: "var_43fad353bfde6323ad72b4e4b0e9f145", name: "3 MONTH", price: 409.99, stock: 12 },
      { id: "var_11233800c69fc2f429fafa36b3ea5a2a", name: "LIFETIME", price: 879.99, stock: 20 },
    ],
    videoUrl: "https://www.youtube.com/embed/qxcWQy_XNGU",
    reviews: [
      {
        quote: "Requiem SSL Bot is insane! Perfect rotation and passing. Easily the best bot I've used.",
        author: "2s_Legend",
        date: "Dec 20, 2025",
        rating: 5,
        verified: true,
        variant: "LIFETIME",
      },
      {
        quote: "Finally hit SSL in 2s with this bot as my duo. The AI is next level!",
        author: "SSL_Grinder",
        date: "Dec 18, 2025",
        rating: 5,
        verified: true,
        variant: "3 MONTHS",
      },
      {
        quote: "Best 2v2 bot by far. Rotation and spacing are flawless.",
        author: "Apex_Duo",
        date: "Dec 15, 2025",
        rating: 5,
        verified: true,
        variant: "1 MONTH",
      },
    ],
    status: "Undetected",
  },












  {
    id: "prod_e78f83aac1a629e4e98c3a24c723384f",
    slug: "rocket-league-t2-ssl-1v1-bot",
    name: "Rocket League T2 SSL 1v1 Bot",
    storrikStoreId: "STORE_4PtCG2FcnL0AsqYSEC0dui0nMvQlg690",
    storrikProductId: "prod_e78f83aac1a629e4e98c3a24c723384f",
    image: "/images/products/t2-bot-box.png",
    showcaseImages: ["/images/showcase/t2-scoreboard.png", "/images/showcase/t2-interface.png"],
    description:
      "[+] SSL Rank in 1v1 Gameplay\n" +
      "[+] GC2 in 2s\n" +
      "[+] Bot controls\n" +
      "[+] 1v1 dominator\n" +
      "[+] Advanced mechanics\n" +
      "[+] High-rank performance\n" +
      "[+] Easy to use\n\n" +
      "**System Requirements**\n" +
      "**Game Client:** Rocket League (Epic Games or Steam)\n" +
      "**Operating System:** Windows 10/11 (64-bit)\n" +
      "**Processor:** Intel Core i5 or AMD Ryzen 5 (4 cores minimum)\n" +
      "**Graphics Card:** NVIDIA GTX 1050 Ti / AMD RX 560 or better\n" +
      "**Display Mode:** Fullscreen or Borderless Windowed\n\n" +
      "**Overview**\n" +
      "T2 Bot delivers SSL-level performance in 1v1 matches and GC2 capabilities in 2v2 gameplay. Built using KarmaSDK, it features advanced bot controls and consistently high-rank performance.\n\n" +
      "**Key Features**\n" +
      "[+] SSL 1v1 Performance: Dominate solo matches with professional-level mechanics\n" +
      "[+] GC2 2v2 Capability: Strong team play for doubles matches\n" +
      "[+] Bot Controls: Easy-to-use interface for managing bot behavior\n" +
      "[+] Advanced Mechanics: Executes complex plays and recoveries\n\n" +
      "**Additional Info**\n" +
      "T2 Bot is perfect for players looking to rank up quickly in 1v1 or maintain high performance in 2v2 matches. With its advanced mechanics and easy controls, you can achieve SSL rank with minimal effort.",
    category: "Rocket League",
    isFeatured: true,
    badge: "SSL 1v1",
    variants: [
      { id: "var_7a128844cf4ecafe21ad839fe4f10057", name: "1 Day", price: 9.99, stock: 50 },
      { id: "var_f707cd2cc081c0ca897a98a17bbfbdc7", name: "1 Week", price: 34.99, stock: 50 },
      { id: "var_37017c18bc7a3573567ee15c1b960086", name: "1 Month", price: 55.99, stock: 50 },
      { id: "var_5d535ee0dc08940b42eeef7eccb7bda2", name: "3 Month", price: 89.99, stock: 50 },
      { id: "var_27e205f7c6a5f51a10844f2ac099fbfb", name: "Lifetime", price: 125.99, stock: 50 },
    ],
    downloadUrl: "https://gofile.io/d/NZjDO1",
    status: "Undetected",
    videoUrl: "https://www.youtube.com/embed/aYa60t7grg0",
    reviews: [
      {
        quote: "SSL in 1v1s is insane! This bot really delivers on the promise.",
        author: "RocketKing",
        rating: 5,
        verified: true,
        variant: "LIFETIME",
      },
      {
        quote: "GC2 in 2s is solid. Great for grinding ranks with a friend.",
        author: "DuoMaster",
        rating: 5,
        verified: true,
        variant: "1 MONTH",
      },
      {
        quote: "Easy to use and works perfectly. Worth every penny!",
        author: "ProPlayer99",
        rating: 5,
        verified: true,
        variant: "1 WEEK",
      },
    ],
  },













  {
    id: "prod_dbb01038bef97f4efc4e1c03d2ac9c1a",
    slug: "rocket-league-novabot-flip-reset",
    name: "Rocket League Nova SSL Bot",
    storrikStoreId: "STORE_4PtCG2FcnL0AsqYSEC0dui0nMvQlg690",
    storrikProductId: "prod_dbb01038bef97f4efc4e1c03d2ac9c1a",
    image: "/images/products/novabot-box.jpg",
    showcaseImages: ["/images/showcase/novabot-showcase.jpg"],
    description:
      "[+] SSL Rank in 1v1 Gameplay\n" +
      "[+] GC2-GC3 performance in 2v2\n" +
      "[+] Advanced flip reset mechanics\n" +
      "[+] Mastered air dribble execution\n" +
      "[+] Strategic bump plays\n" +
      "[+] Double tap accuracy\n" +
      "[+] Ground-to-air dribble control\n" +
      "[+] Top 25 ranked bot worldwide\n\n" +
      "**Elite Performance**\n" +
      "NovaBot represents the pinnacle of Rocket League AI technology. Achieving SSL rank in 1v1 matches and consistently performing at GC2-GC3 level in 2v2 gameplay, this bot is recognized as one of the top 25 bots in the world.\n\n" +
      "**Advanced Mechanics**\n" +
      "Specializing in flip resets and advanced aerial mechanics, NovaBot executes complex maneuvers that rival professional players. From precise air dribbles to devastating double taps, every move is calculated for maximum effectiveness.\n\n" +
      "**Strategic Gameplay**\n" +
      "[+] Flip reset chains for unpredictable offense\n" +
      "[+] Air dribble pressure to maintain control\n" +
      "[+] Bump plays to disrupt opponent positioning\n" +
      "[+] Double tap goals from backboard reads\n" +
      "[+] Ground-to-air transitions for fluid attacks\n\n" +
      "**Why NovaBot?**\n" +
      "For players seeking the absolute best AI performance, NovaBot delivers world-class gameplay with a focus on mechanical mastery. Perfect for those who want to dominate high-rank matches with flashy, effective plays.\n\n" +
      "**Additional Info**\n" +
      "NovaBot is the premium choice for serious players. With SSL-level decision making and GC2-GC3 consistency in team play, this bot will elevate your game to professional levels.",
    category: "Rocket League",
    isFeatured: true,
    badge: "Top 25 Worldwide",
    variants: [
      { id: "var_0e30cd8b290c3009136b2775f50a8ea3", name: "1 Day", price: 25.99, stock: 50 },
      { id: "var_7afa308d2fb3dbf96fba96e89c22c4e9", name: "1 Week", price: 49.99, stock: 50 },
      { id: "var_b0c60bfe8e77dd8c5aaf8bcb5e234039", name: "1 Month", price: 75.99, stock: 50 },
      { id: "var_83ed1f1943b0d95294713012603934d9", name: "Lifetime", price: 475.99, stock: 50 },
    ],
    downloadUrl: "https://gofile.io/d/NZjDO1",
    status: "Undetected",
    videoUrl: "https://www.youtube.com/embed/GojV6ruv6Pk",
    reviews: [
      {
        quote: "The flip resets are insane! Consistently hitting SSL in 1v1s with this bot.",
        author: "MechanicGod",
        rating: 5,
        verified: true,
        variant: "LIFETIME",
      },
      {
        quote: "Top 25 worldwide is no joke. This bot is on another level!",
        author: "ProLeaguePlayer",
        rating: 5,
        verified: true,
        variant: "3 MONTHS",
      },
      {
        quote: "Air dribbles and double taps look so clean. Best bot I've ever used.",
        author: "AerialAce",
        rating: 5,
        verified: true,
        variant: "1 MONTH",
      },
    ],
  },









  // Mech SSL Bot - ACTIVATED
{
  id: "prod_d60acaa56fe45ddbb86c995fdc4f1fbd",
  slug: "rocket-league-mech-ssl-1v1-bot",
  name: "Rocket League Mech SSL 1v1 Bot",
  storrikStoreId: "STORE_4PtCG2FcnL0AsqYSEC0dui0nMvQlg690",
  storrikProductId: "prod_d60acaa56fe45ddbb86c995fdc4f1fbd",
  image: "/images/products/mech-bot-box.jpg",
  showcaseImages: [
    "/images/showcase/mech-ballcam-aerial.png",
    "/images/showcase/mech-aerial-defense.png",
    "/images/showcase/mech-kickoff-start.png",
    "/images/showcase/mech-demo-play.png",
    "/images/showcase/mech-wall-shot.png",
    "/images/showcase/mech-demo-mode.png",
  ],
  description:
    "[+] SSL Rank in 1v1 Gameplay\n" +
    "Introducing Rocket League Mech SSL 1v1 Bot - The Next Evolution in Rocket League AI\n\n" +
    "Mech is the most advanced Rocket League bot on the market, capable of reaching SSL in 1v1 gameplay with unmatched precision and nasty mechanics. This is not just another bot—it's a game-changer, built for serious players who demand the best.\n\n" +
    "**Main Functionality**\n" +
    "[+] Enable / Disable Bot\n" +
    "[+] Freestyle Bot\n" +
    "[+] Mode: 1s, 2s, 3s, Bot 1s, Training\n" +
    "[+] Demoing on/off\n" +
    "[+] Half-flip on/off\n" +
    "[+] Wavedash on/off\n" +
    "[+] Turtle on/off\n" +
    "[+] Ball cam on/off\n" +
    "[+] Stall on/off\n" +
    "[+] Speedflip on/off\n" +
    "[+] Matchmaking ban (auto forfeits + auto quits lobby on ban)\n\n" +
    "**System Requirements**\n" +
    "**Game Client:** Rocket League (Epic Games or Steam)\n" +
    "**Operating System:** Windows 10/11 (64-bit)\n" +
    "**Processor:** Intel Core i5 or AMD Ryzen 5 (4 cores minimum)\n" +
    "**Graphics Card:** NVIDIA GTX 1050 Ti / AMD RX 560 or better\n" +
    "**Display Mode:** Fullscreen or Borderless Windowed\n\n" +
    "**Overview**\n" +
    "Mech SSL Bot is engineered for domination. Whether you're grinding ranks or showcasing your skills, Mech delivers SSL-level performance with an arsenal of advanced mechanics. From half-flips to speedflips, demoing to freestyling, Mech does it all with surgical precision.\n\n" +
    "**Key Features**\n" +
    "[+] SSL 1v1 Dominance: Optimized for 1v1 gameplay, Mech reaches SSL ranks with ease\n" +
    "[+] Nasty Mechanics: Half-flips, wavedashes, speedflips, stalls, and more\n" +
    "[+] Freestyle Mode: For when you want to show off with style\n" +
    "[+] Demo Control: Toggle demoing on/off for strategic plays\n" +
    "[+] Multi-Mode Support: Works in 1s, 2s, 3s, Bot 1s, and Training\n" +
    "[+] Ban Protection: Auto-forfeit and lobby quit on matchmaking bans\n\n" +
    "**Why Mech?**\n" +
    "Mech isn't just powerful—it's versatile. With customizable mechanics and modes, you can tailor the bot to your playstyle. Whether you're a mechanical god or just starting out, Mech adapts to your needs and delivers results.\n\n" +
    "**Additional Info**\n" +
    "Mech is the product of cutting-edge AI development, designed for players who refuse to settle. If you want the best, Mech is your answer. Don't just play Rocket League—dominate it with Mech.",
  category: "Rocket League",
  isFeatured: true,
  badge: "SSL 1v1",
  variants: [
    { id: "var_b08564474a8a7580072c79927257d224", name: "1 DAY", price: 11.99, stock: 50 },
    { id: "var_24eb02ad7d5c2ff7f3c88176ca33c52d", name: "1 WEEK", price: 45.99, stock: 50 },
    { id: "var_4b3a4924b2178972d32d839cadb6fe83", name: "1 MONTH", price: 91.99, stock: 50 },
    { id: "var_6d06585b7d2dfdbb73fecf03dfe0a551", name: "3 MONTHS", price: 229.99, stock: 50 },
    { id: "var_c279ad43bc5822e09aa9a65aad171a84", name: "LIFETIME", price: 275.99, stock: 50 },
  ],
  downloadUrl: "https://gofile.io/d/NZjDO1",
  status: "Undetected",
  videoUrl: "https://www.youtube.com/embed/WoL0NSLGMzU",
  reviews: [
    {
      quote: "Mech is insane! Hit SSL in 1v1s and the mechanics are super clean.",
      author: "MechGod",
      rating: 5,
      verified: true,
      variant: "LIFETIME",
    },
    {
      quote: "The freestyle mode is so fun! Best bot for showcasing skills.",
      author: "FreestylePro",
      rating: 5,
      verified: true,
      variant: "1 MONTH",
    },
    {
      quote: "Demoing is op! Easily outplay opponents with this bot.",
      author: "DemoKing",
      rating: 5,
      verified: true,
      variant: "3 MONTHS",
    },
  ],
},


  {
    id: "prod_546f00597b816de223cf98ac3e253a4a",
    slug: "rocket-league-opti-ssl-bot",
    name: "Rocket League Opti SSL Bot",
    storrikStoreId: "STORE_4PtCG2FcnL0AsqYSEC0dui0nMvQlg690",
    storrikProductId: "prod_546f00597b816de223cf98ac3e253a4a",
    image: "/images/products/opti-bot-box.png",
    showcaseImages: ["/images/showcase/opti-ssl-1v1-gameplay.png"],
    description:
      "[+] SSL Rank in 2v2 Gameplay\n" +
      "[+] Modular plugin system\n" +
      "[+] Wall dashes\n" +
      "[+] Wave dashes\n" +
      "[+] Fast recoveries\n" +
      "[+] Custom playstyles\n" +
      "[+] SSL-level decision making\n" +
      "[+] High-precision control\n" +
      "[+] Perfect dribbles\n" +
      "[+] Airdribble pack\n" +
      "[+] Flawless flick\n" +
      "[+] Demo avoidance\n" +
      "[+] Dynamic adaptation\n" +
      "[+] Lightweight performance\n" +
      "[+] Simple setup via loader\n\n" +
      "**System Requirements**\n" +
      "**Game Client:** Rocket League (Epic Games or Steam)\n" +
      "**Operating System:** Windows 10/11 (64-bit)\n" +
      "**Processor:** Intel Core i5 or AMD Ryzen 5 (4 cores minimum)\n" +
      "**Graphics Card:** NVIDIA GTX 1050 Ti / AMD RX 560 or better\n" +
      "**Display Mode:** Fullscreen or Borderless Windowed",
    category: "Rocket League",
    isFeatured: true,
    variants: [
      { id: "var_0748d072c32a6a3bd72357d0315f1bea", name: "1 DAY", price: 9.99, stock: 10 },
      { id: "var_259386a1834ac086a8e0fe073eb9b5e8", name: "1 WEEK", price: 24.99, stock: 8 },
      { id: "var_bc01fc50921360b67493a8b9ad17dcc3", name: "1 MONTH", price: 44.99, stock: 12 },
      { id: "var_08102115e4f82b3a1053a5624b57830e", name: "3 MONTHS", price: 64.99, stock: 15 },
      { id: "var_3655aed8efbedaffcb7d6ae75ec5f3b2", name: "LIFETIME", price: 99.99, stock: 20 },
    ],
    status: "Undetected",
    videoUrl: "https://www.youtube.com/embed/a3iaoOV7Oz4",
    reviews: [
      {
        quote: "Instant rank improvement. Product delivers on all promises.",
        author: "CompetitivePlayer",
        date: "Jan 25, 2025",
        rating: 5,
        verified: true,
        variant: "1 WEEK",
      },
      {
        quote: "Great product with excellent support. Setup was super easy.",
        author: "SpeedyRL",
        date: "Jan 23, 2025",
        rating: 5,
        verified: true,
        variant: "1 MONTH",
      },
      {
        quote: "The Opti bot is next level. Performance is incredible.",
        author: "MechanicsMaster",
        date: "Jan 20, 2025",
        rating: 5,
        verified: true,
        variant: "3 MONTHS",
      },
      {
        quote: "Excellent product with regular updates. Support team is very helpful.",
        author: "RLVeteran",
        date: "Jan 17, 2025",
        rating: 5,
        verified: true,
        variant: "LIFETIME",
      },
      {
        quote: "The bot's decision making is impressive. Plays like a pro!",
        author: "TestingUser_99",
        date: "Jan 14, 2025",
        rating: 5,
        verified: true,
        variant: "1 DAY",
      },
      {
        quote: "Freestyle mode is insane! Pulls off shots I can only dream of.",
        author: "AerialAce_RL",
        date: "Jan 11, 2025",
        rating: 5,
        verified: true,
        variant: "1 MONTH",
      },
      {
        quote: "Best bot on the market. The modular system is genius!",
        author: "PluginMaster",
        date: "Jan 9, 2025",
        rating: 5,
        verified: true,
        variant: "LIFETIME",
      },
      {
        quote: "Adaptive gameplay is unmatched. Feels like playing with a real SSL.",
        author: "SSL_Wannabe",
        date: "Jan 7, 2025",
        rating: 5,
        verified: true,
        variant: "3 MONTHS",
      },
      {
        quote: "Perfect for training and learning new mechanics. Highly recommended!",
        author: "LearnerRL",
        date: "Jan 5, 2025",
        rating: 5,
        verified: true,
        variant: "1 WEEK",
      },
    ],
  },












  {
    id: "prod_88824ae452e487d4691fe0dcdc433564",
    slug: "rocket-league-multi-bot",
    name: "Rocket League Multi Bot",
    storrikStoreId: "STORE_XHjWmh6cHxlNs8p92HBtTN6HwCNVqwxv",
    storrikProductId: "prod_88824ae452e487d4691fe0dcdc433564",
    image: "/images/products/multibot-bot-box.png",
    showcaseImages: ["/images/showcase/multi-bot-gc2-gameplay.png"],
    description:
      "[+] GC2 Rank Automation\n" +
      "[+] Advanced AI gameplay automation\n" +
      "[+] Real-time decision visualization\n\n" +
      "**System Requirements**\n" +
      "**Game Client:** Rocket League (Epic Games or Steam)\n" +
      "**Operating System:** Windows 10/11 (64-bit)\n" +
      "**Processor:** Intel Core i5 or AMD Ryzen 5 (4 cores minimum)\n" +
      "**Graphics Card:** NVIDIA GTX 1050 Ti / AMD RX 560 or better\n" +
      "**Display Mode:** Fullscreen or Borderless Windowed\n\n" +
      "**Overview**\n" +
      "Experience unparalleled gameplay with our state-of-the-art Multi Bot. Featuring advanced mechanics, real-time decision making, and seamless integration. Suitable for full automated boosting services up to Grand Champ 2.\n\n" +
      "**Key Features**\n" +
      "[+] Undetectable: Advanced protection with human-like behavior for safe gameplay\n" +
      "[+] Live Think View: Real-time visualization of the bot's decision-making process\n" +
      "[+] Status Overlay: Displays live bot status directly in the Rocket League window\n" +
      "[+] Bot Model Switching: Choose between bot models (e.g., Stable) and apply instantly\n" +
      "[+] Custom Key Binds: Fully rebindable keys for toggling and hold mode\n" +
      "[+] Hold Mode: Activate the bot only while a specific key is held\n" +
      "[+] Dead Switch: Instantly disable the bot when any other input is detected\n" +
      "[+] Gamepad Support: Bind features to controller buttons for full control\n" +
      "[+] Ball ESP: Displays a 3D wireframe sphere around the ball for better tracking\n" +
      "[+] Ball Trajectory Predictor: Shows the predicted ball path using physics simulation\n" +
      "[+] Boost Pad Timers: Visual indicators for pad respawn timing\n" +
      "[+] Familiar GUI: Clean, modern, and intuitive interface\n" +
      "[+] Kill Switch: Instantly deactivate all bot functions for manual play\n\n" +
      "**Additional Info**\n" +
      "The most advanced Rocket League bot on the market, combining cutting-edge AI with professional-grade features for serious players and boosting services.",
    category: "Rocket League",
    isFeatured: true,
    variants: [
      { id: "var_734e865a46754127c1892b581fdd388c", name: "1 Day", price: 4.99, stock: 8 },
      { id: "var_6473bff0f6038f7d6d84d5e558adc453", name: "1 WEEK", price: 9.99, stock: 8 },
      { id: "var_495c536afcb1da714f31900c774821ea", name: "1 MONTH", price: 19.99, stock: 12 },
      { id: "var_d962c122ad89f0ab4802d16013a42ed5", name: "3 MONTHS", price: 29.99, stock: 15 },
      { id: "var_dd9c6d57dc23ca7086af2baed2a45e7d", name: "LIFETIME", price: 44.99, stock: 20 },
    ],
    videoUrl: "",
    reviews: [
      {
        quote: "The live think view is incredible! I can see exactly what the bot is planning.",
        author: "VisualizerPro",
        date: "Feb 2, 2025",
        rating: 5,
        verified: true,
        variant: "LIFETIME",
      },
      {
        quote: "Most advanced bot I've ever used. The dead switch is genius!",
        author: "SafetyFirst_RL",
        date: "Feb 1, 2025",
        rating: 5,
        verified: true,
        variant: "3 MONTHS",
      },
      {
        quote: "Ball trajectory predictor alone is worth the price. Amazing tool!",
        author: "PredictorFan",
        date: "Jan 31, 2025",
        rating: 5,
        verified: true,
        variant: "1 MONTH",
      },
      {
        quote: "Custom key binds make this so versatile. Perfect for my playstyle!",
        author: "CustomPlayer",
        date: "Jan 30, 2025",
        rating: 5,
        verified: true,
        variant: "1 WEEK",
      },
      {
        quote: "Gamepad support is flawless. Works perfectly with my controller!",
        author: "GamepadGamer",
        date: "Jan 29, 2025",
        rating: 5,
        verified: true,
        variant: "LIFETIME",
      },
      {
        quote: "Ball ESP is crystal clear. Never lose track of the ball again!",
        author: "ESPMaster",
        date: "Jan 28, 2025",
        rating: 5,
        verified: true,
        variant: "1 MONTH",
      },
      {
        quote: "The GUI is so clean and intuitive. Easy to configure everything!",
        author: "UIEnthusiast",
        date: "Jan 27, 2025",
        rating: 5,
        verified: true,
        variant: "3 MONTHS",
      },
      {
        quote: "Perfect for boosting services. Got my client to GC2 in a week!",
        author: "BoostingPro_RL",
        date: "Jan 26, 2025",
        rating: 5,
        verified: true,
        variant: "LIFETIME",
      },
      {
        quote: "Status overlay is super helpful. Always know what the bot is doing!",
        author: "OverlayFan",
        date: "Jan 25, 2025",
        rating: 5,
        verified: true,
        variant: "1 WEEK",
      },
    ],
    status: "Undetected",
    detectionStatus: "Undetected", // Added detection status
  },









  {
    id: "PROD_jv3Nf0UdvWGR1iSeSBl5VYd7f9LidYVy",
    slug: "rocket-league-1v1-bot",
    name: "Rocket League 1v1 Bot",
    storrikStoreId: "STORE_4PtCG2FcnL0AsqYSEC0dui0nMvQlg690",
    storrikProductId: "prod_c351e9cc66418858122f19ac3ce52d35",
    image: "/images/products/1v1-bot-box.png",
    showcaseImages: ["/images/showcase/1v1-bot-champ-gameplay.png"],
    description:
      "[+] Optimized for 1v1 gameplay\n" +
      "[+] Advanced positioning and rotations\n" +
      "[+] Fast recoveries and wave dashes\n" +
      "[+] Accurate shooting and goal prediction\n" +
      "[+] Dribbling and flick packs\n" +
      "[+] Airdribble execution\n" +
      "[+] Demo avoidance\n" +
      "[+] Adaptive in-game decision-making\n" +
      "[+] Lightweight and easy to run\n" +
      "[+] Simple setup via loader\n\n" +
      "**System Requirements**\n" +
      "**Game Client:** Rocket League (Epic Games or Steam)\n" +
      "**Operating System:** Windows 10/11 (64-bit)\n" +
      "**Processor:** Intel Core i5 or AMD Ryzen 5 (4 cores minimum)\n" +
      "**Graphics Card:** NVIDIA GTX 1050 Ti / AMD RX 560 or better\n" +
      "**Display Mode:** Fullscreen or Borderless Windowed",
    category: "Rocket League",
    isFeatured: false,
    variants: [
      { id: "var_ac4d095cc480bfc3ac24746fe8c4b3eb", name: "1 DAY", price: 4.99, stock: 50 },
      { id: "var_dcf91fd7c972b62ae44243f03676a41b", name: "1 WEEK", price: 14.99, stock: 50 },
      { id: "var_56a706845e3e41db33e465c14eada128", name: "1 MONTH", price: 29.99, stock: 50 },
      { id: "var_7309957f0d3b161662896fe92e2e4764", name: "3 MONTHS", price: 59.99, stock: 50 },
      { id: "var_8218a6b7d5e0669fad216b1e82f9a411", name: "LIFETIME", price: 99.99, stock: 50 },
    ],
    status: "Undetected",
    videoUrl: "https://www.youtube.com/embed/I_IyCKcb61E",
    reviews: [
      {
        quote: "Best product I've ever used. Support team is amazing and responsive!",
        author: "Alex_RL",
        date: "Jan 30, 2025",
        rating: 5,
        verified: true,
        variant: "1 MONTH",
      },
      {
        quote: "Customer service is top tier. They helped me set everything up within minutes.",
        author: "SpeedyRL",
        date: "Jan 28, 2025",
        rating: 5,
        verified: true,
        variant: "1 WEEK",
      },
      {
        quote: "The bot plays incredibly well. Worth every penny!",
        author: "SSLChaser",
        date: "Jan 26, 2025",
        rating: 5,
        verified: true,
        variant: "LIFETIME",
      },
      {
        quote: "Been using for months now. Consistent updates and stability.",
        author: "GrandChamp_RL",
        date: "Jan 22, 2025",
        rating: 5,
        verified: true,
        variant: "3 MONTHS",
      },
      {
        quote: "Fast delivery and great product quality. Very satisfied!",
        author: "QuickTest_User",
        date: "Jan 19, 2025",
        rating: 5,
        verified: true,
        variant: "1 DAY",
      },
      {
        quote: "Amazing value for the price. Highly recommend to anyone looking.",
        author: "ValueSeeker",
        date: "Jan 15, 2025",
        rating: 5,
        verified: true,
        variant: "1 MONTH",
      },
      {
        quote: "Product exceeded my expectations. Very stable and reliable.",
        author: "LongTermUser",
        date: "Jan 12, 2025",
        rating: 5,
        verified: true,
        variant: "LIFETIME",
      },
      {
        quote: "Setup was incredibly easy. Works like a charm every time!",
        author: "EasySetup_RL",
        date: "Jan 10, 2025",
        rating: 5,
        verified: true,
        variant: "1 WEEK",
      },
      {
        quote: "The bot's mechanics are on point. Plays better than most GCs!",
        author: "MechanicsExpert",
        date: "Jan 8, 2025",
        rating: 5,
        verified: true,
        variant: "3 MONTHS",
      },
    ],
  },












  {
    id: "PROD_74HIHjb5X7p3zZJUWP0FwJ3IBNJ9daHj",
    slug: "rocket-league-unlock-all",
    name: "Rocket League Unlock All",
    storrikStoreId: "STORE_4PtCG2FcnL0AsqYSEC0dui0nMvQlg690",
    storrikProductId: "prod_8a3c72e57efccbb6e7cdb6d933dc7eb8",
    image: "/images/products/unlock-all-box.png",
    showcaseImages: ["/images/showcase/unlock-all-items.png"],
    description:
      "[+] Custom titles\n" +
      "[+] ESP (Enemy detection)\n" +
      "[+] Misc features\n" +
      "[+] Visual enhancements\n" +
      "[+] Unlock battlepass\n" +
      "[+] Unlock all items\n" +
      "[+] Black car color\n" +
      "[+] Custom online status\n" +
      "[+] Skip replay\n" +
      "[+] Auto forfeit\n" +
      "[+] Lightweight and optimized\n" +
      "[+] Simple loader setup\n\n" +
      "**System Requirements**\n" +
      "**Game Client:** Rocket League (Epic Games or Steam)\n" +
      "**Operating System:** Windows 10/11 (64-bit)\n" +
      "**Processor:** Intel Core i5 or AMD Ryzen 5 (4 cores minimum)\n" +
      "**Graphics Card:** NVIDIA GTX 1050 Ti / AMD RX 560 or better\n" +
      "**Display Mode:** Fullscreen or Borderless Windowed\n\n" +
      "**Overview**\n" +
      "Experience unparalleled gameplay with our state-of-the-art Multi Bot. Featuring advanced mechanics, real-time decision making, and seamless integration. Suitable for full automated boosting services up to Grand Champ 2.\n\n" +
      "**Key Features**\n" +
      "[+] Undetectable: Advanced protection with human-like behavior for safe gameplay\n" +
      "[+] Live Think View: Real-time visualization of the bot's decision-making process\n" +
      "[+] Status Overlay: Displays live bot status directly in the Rocket League window\n" +
      "[+] Bot Model Switching: Choose between bot models (e.g., Stable) and apply instantly\n" +
      "[+] Custom Key Binds: Fully rebindable keys for toggling and hold mode\n" +
      "[+] Hold Mode: Activate the bot only while a specific key is held\n" +
      "[+] Dead Switch: Instantly disable the bot when any other input is detected\n" +
      "[+] Gamepad Support: Bind features to controller buttons for full control\n" +
      "[+] Ball ESP: Displays a 3D wireframe sphere around the ball for better tracking\n" +
      "[+] Ball Trajectory Predictor: Shows the predicted ball path using physics simulation\n" +
      "[+] Boost Pad Timers: Visual indicators for pad respawn timing\n" +
      "[+] Familiar GUI: Clean, modern, and intuitive interface\n" +
      "[+] Kill Switch: Instantly deactivate all bot functions for manual play\n\n" +
      "**Additional Info**\n" +
      "The most advanced Rocket League bot on the market, combining cutting-edge AI with professional-grade features for serious players and boosting services.",
    category: "Rocket League",
    isFeatured: false,
    variants: [
      { id: "var_cde854f196c8bf676f0b19cffe56154c", name: "1 DAY", price: 4.99, stock: 50 },
      { id: "var_a15f5314ef4501b9ae90220810cf9d89", name: "1 WEEK", price: 14.99, stock: 50 },
      { id: "var_d7c67cb898ef56c068add1ed7417cd86", name: "1 MONTH", price: 29.99, stock: 50 },
      { id: "var_37b6a28129a19c7e88f82a91e001aba6", name: "3 MONTHS", price: 59.99, stock: 50 },
      { id: "var_2a213cb3ce0a0fceb9bf6beb66f86d47", name: "LIFETIME", price: 99.99, stock: 50 },
    ],
    status: "Undetected",
    videoUrl: "https://www.youtube.com/embed/I6fMA5OWiDw",
    reviews: [
      {
        quote: "All items unlocked instantly! The customization options are endless.",
        author: "CustomizerPro",
        date: "Jan 30, 2025",
        rating: 5,
        verified: true,
        variant: "1 MONTH",
      },
      {
        quote: "Black car color looks amazing! Finally got the look I wanted.",
        author: "StyleMaster_RL",
        date: "Jan 28, 2025",
        rating: 5,
        verified: true,
        variant: "1 WEEK",
      },
      {
        quote: "Skip replay feature alone is worth it. Saves so much time!",
        author: "EfficientPlayer",
        date: "Jan 26, 2025",
        rating: 5,
        verified: true,
        variant: "LIFETIME",
      },
      {
        quote: "Custom titles are sick! Everyone asks where I got them.",
        author: "UniqueName_RL",
        date: "Jan 24, 2025",
        rating: 5,
        verified: true,
        variant: "3 MONTHS",
      },
      {
        quote: "Great value for money. All the features work perfectly!",
        author: "BudgetGamer",
        date: "Jan 22, 2025",
        rating: 5,
        verified: true,
        variant: "1 DAY",
      },
      {
        quote: "ESP feature is super useful for tracking teammates and opponents.",
        author: "TacticalRL",
        date: "Jan 20, 2025",
        rating: 5,
        verified: true,
        variant: "1 MONTH",
      },
      {
        quote: "Battlepass unlocked immediately! No more grinding for hours.",
        author: "UnlockMaster",
        date: "Jan 18, 2025",
        rating: 5,
        verified: true,
        variant: "1 WEEK",
      },
      {
        quote: "Custom online status is hilarious. My friends love it!",
        author: "FunnyGuy_RL",
        date: "Jan 16, 2025",
        rating: 5,
        verified: true,
        variant: "3 MONTHS",
      },
      {
        quote: "Auto forfeit is perfect for quick ranking sessions. Game changer!",
        author: "RankGrinder",
        date: "Jan 14, 2025",
        rating: 5,
        verified: true,
        variant: "LIFETIME",
      },
    ],
  },














  {
    id: "prod_7ba50b85e062b1872ecf6b791e4e1928",
    slug: "fortnite-private-external",
    name: "Fortnite Private External",
    storrikStoreId: "STORE_XHjWmh6cHxlNs8p92HBtTN6HwCNVqwxv",
    storrikProductId: "prod_7ba50b85e062b1872ecf6b791e4e1928",
    image: "/images/products/fortnite-private-box.jpg",
    showcaseImages: ["/images/showcase/fortnite-aimbot.png"],
    description:
      "[+] Private External Cheat\n" +
      "[+] Aimbot with smooth, customizable aim\n" +
      "[+] Triggerbot for precise shots\n" +
      "[+] ESP / Wallhack – see enemies through walls\n" +
      "[+] Loot and item ESP\n" +
      "[+] Skeleton or box visuals\n" +
      "[+] Customizable settings for playstyle\n" +
      "[+] No impact on game performance\n" +
      "[+] Simple loader setup\n\n" +
      "**System Requirements**\n" +
      "**Game Client:** Fortnite (Epic Games Launcher)\n" +
      "**Operating System:** Windows 10/11 (64-bit)\n" +
      "**Processor:** Intel Core i5 or AMD Ryzen 5 (4 cores minimum)\n" +
      "**Graphics Card:** NVIDIA GTX 1060 / AMD RX 580 or better\n" +
      "**Display Mode:** Fullscreen or Borderless Windowed",
    category: "Fortnite",
    isFeatured: false,
    variants: [
      { id: "var_5597d4bf4a2e4326496d8fc468f91340", name: "1 DAY", price: 4.99, stock: 50 },
      { id: "var_b4931053257eab328c1fe41502322841", name: "1 WEEK", price: 9.99, stock: 40 },
      { id: "var_470a8ea35b094df8c7c9ebc08b178904", name: "1 MONTH", price: 19.99, stock: 30 },
      { id: "var_6123aab41ea021296d7f802336a0d4e0", name: "3 MONTHS", price: 29.99, stock: 25 },
      { id: "var_41f679bc1fd9b9c0474ff1db734c1a86", name: "LIFETIME", price: 44.99, stock: 20 },
    ],
    status: "Undetected",
    videoUrl: "https://www.youtube.com/embed/vQ75Q5D6pMA",
    reviews: [
      {
        quote: "Works flawlessly, exactly as advertised. Very happy with my purchase.",
        author: "ProGamer_TTV",
        date: "Jan 29, 2025",
        rating: 5,
        verified: true,
        variant: "1 WEEK",
      },
      {
        quote: "Extremely reliable product. No issues whatsoever after weeks of use.",
        author: "VictoryKing",
        date: "Jan 27, 2025",
        rating: 5,
        verified: true,
        variant: "1 MONTH",
      },
      {
        quote: "Outstanding quality and performance. Highly recommend!",
        author: "BuildMaster",
        date: "Jan 24, 2025",
        rating: 5,
        verified: true,
        variant: "LIFETIME",
      },
      {
        quote: "Best investment for competitive gaming. No regrets!",
        author: "ChampionPlayer",
        date: "Jan 21, 2025",
        rating: 5,
        verified: true,
        variant: "3 MONTHS",
      },
      {
        quote: "Tried multiple products, this is by far the best one.",
        author: "ExperiencedGamer",
        date: "Jan 18, 2025",
        rating: 5,
        verified: true,
        variant: "1 WEEK",
      },
      {
        quote: "Product works perfectly as described. Installation was straightforward.",
        author: "TacticalShooter",
        date: "Jan 16, 2025",
        rating: 5,
        verified: true,
        variant: "1 MONTH",
      },
      {
        quote: "Support responded to my questions within 10 minutes. Great service!",
        author: "SatisfiedCustomer",
        date: "Jan 13, 2025",
        rating: 5,
        verified: true,
        variant: "LIFETIME",
      },
      {
        quote: "Best aimbot I've used. Smooth and undetected for weeks now.",
        author: "AimGod_FN",
        date: "Jan 11, 2025",
        rating: 5,
        verified: true,
        variant: "3 MONTHS",
      },
      {
        quote: "ESP is crystal clear. Makes spotting enemies so easy!",
        author: "VisionPro_FN",
        date: "Jan 9, 2025",
        rating: 5,
        verified: true,
        variant: "1 MONTH",
      },
    ],
  },













  // {
  //   id: "PROD_wUH2CNK4KQCdeH99x3Illr2PG7NWFJ0z",
  //   slug: "rocket-league-mystery-bot",
  //   name: "Rocket League Mystery Bot",
  //   storrikStoreId: "STORE_XHjWmh6cHxlNs8p92HBtTN6HwCNVqwxv",
  //   storrikProductId: "PROD_wUH2CNK4KQCdeH99x3Illr2PG7NWFJ0z",
  //   image: "/images/products/mystery-bot.jpg",
  //   showcaseImages: ["/images/showcase/mystery-bot-showcase.jpg"],
  //   description:
  //     "[+] Mystery box containing any Voltaris bot\n" +
  //     "[+] Instant prize reveal after purchase\n" +
  //     "[+] Email delivery with download link\n\n" +
  //     "**What's Inside?**\n" +
  //     "[+] Possible rewards: Requiem, T2, Nova, Mech, Opti\n" +
  //     "[+] Each ticket = 1 mystery bot\n" +
  //     "[+] All prizes are lifetime licenses\n\n" +
  //     "**Prize Pool**\n" +
  //     "Our mystery box contains some of the best Rocket League bots in the world:\n\n" +
  //     "**Premium Tier ($475.99+ value)**\n" +
  //     "- NovaBot SSL - Top 25 worldwide, flip reset specialist\n\n" +
  //     "**High Tier ($125-475 value)**\n" +
  //     "- Requiem SSL Bot - 2v2 dominator\n" +
  //     "- T2 SSL Bot - 1v1 specialist\n" +
  //     "- Mech SSL Bot - Mechanical monster\n\n" +
  //     "**Standard Tier ($99-125 value)**\n" +
  //     "- Opti SSL Bot - SSL in 2s with advanced features\n" +
  //     "- Multi Bot - AI with ESP and trajectory prediction\n" +
  //     "- Unlock All - Complete customization toolkit\n\n" +
  //     "**How It Works**\n" +
  //     "1. Purchase mystery tickets (1x or 2x)\n" +
  //     "2. Instant prize reveal after checkout\n" +
  //     "3. Receive download link via email\n" +
  //     "4. Redeem your lifetime bot license\n\n" +
  //     "**Why Mystery Box?**\n" +
  //     "Get premium bots at a fraction of the cost! Every prize is a lifetime license worth up to $650.99. Whether you're hunting for the legendary NovaBot or hoping to score a premium SSL bot, the mystery box offers incredible value.\n\n" +
  //     "**Additional Info**\n" +
  //     "All mystery prizes are instantly revealed. No waiting, no delays. Check your email for your prize bot download link and license key immediately after purchase.",
  //   category: "Rocket League",
  //   isFeatured: true,
  //   badge: "Mystery Box",
  //   variants: [
  //     { id: "VAR_StqqpkfpoXK8cYLfbmgMDjMMmrUnwcrV", name: "1x Mystery Ticket", price: 45.99, stock: 100 },
  //     { id: "VAR_McIPDjCbi6irzPnQZtqmxjf4CAGdlkPv", name: "2x Mystery Tickets", price: 99.99, stock: 100 },
  //   ],
  //   status: "Undetected",
  //   videoUrl: "https://www.youtube.com/embed/QDxqg5n4Bzo",
  //   reviews: [
  //     {
  //       quote: "Got Requiem SSL on my first ticket! Best $29.99 I ever spent!",
  //       author: "LuckyWinner",
  //       date: "Jan 30, 2025",
  //       rating: 5,
  //       verified: true,
  //       variant: "1x Mystery Ticket",
  //     },
  //     {
  //       quote: "Bought 2 tickets, got T2 and Mech. Insane value compared to buying separately!",
  //       author: "MysteryHunter",
  //       date: "Jan 29, 2025",
  //       rating: 5,
  //       verified: true,
  //       variant: "2x Mystery Tickets",
  //     },
  //     {
  //       quote: "Even though I got Multi Bot, still worth it for the excitement. Will try again!",
  //       author: "GamblerGG",
  //       date: "Jan 27, 2025",
  //       rating: 4,
  //       verified: true,
  //       variant: "1x Mystery Ticket",
  //     },
  //     {
  //       quote: "My friend got NovaBOT from this, I'm so jealous! Definitely buying more tickets.",
  //       author: "ChaseTheDream",
  //       date: "Jan 25, 2025",
  //       rating: 5,
  //       verified: true,
  //       variant: "2x Mystery Tickets",
  //     },
  //     {
  //       quote: "Love the mystery box concept. Got Rift SSL which I've been wanting!",
  //       author: "MysteryFan",
  //       date: "Jan 23, 2025",
  //       rating: 5,
  //       verified: true,
  //       variant: "1x Mystery Ticket",
  //     },
  //   ],
  // },
  {
    id: "prod_c8fb8c4a0d7627858b32a6f7fc054424",
    slug: "arc-raiders-frost",
    name: "Arc Raiders Frost",
    storrikStoreId: "STORE_4PtCG2FcnL0AsqYSEC0dui0nMvQlg690",
    storrikProductId: "prod_c8fb8c4a0d7627858b32a6f7fc054424",
    image: "/images/products/arc-raiders-frost-box.png",
    description:
      "[+] Windows 10 & 11 Support\n" +
      "[+] External Client\n" +
      "[+] Intel & AMD CPU Compatible\n" +
      "[+] Advanced Aimbot System\n" +
      "[+] Magnetic Triggerbot\n" +
      "[+] Full Player & Loot ESP\n" +
      "[+] Draggable ESP System\n" +
      "[+] Config Management\n" +
      "[+] Developer Mode\n\n" +
      "**System Requirements**\n" +
      "**Operating System:** Windows 10 & 11\n" +
      "**Client Type:** External\n" +
      "**CPU Support:** Intel & AMD\n\n" +
      "**Aimbot Features**\n" +
      "Full targeting control with customizable speed, field of view, and max distance. Features hitbox selection interface with retarget and detach timing controls. Advanced filtering options to ignore invisible targets, with visual FOV circle overlay.\n\n" +
      "**Triggerbot**\n" +
      "Intelligent triggerbot with hitbox expansion and magnetic mode for enhanced accuracy. Includes retarget timing and filtering to ensure clean, invisible-target-free engagement.\n\n" +
      "**Player ESP**\n" +
      "Complete ESP suite featuring box, head dot, skeleton, and out-of-FOV arrows. Display distance, name, visibility status, and team information. Fully draggable ESP system for custom screen positioning.\n\n" +
      "**Loot ESP**\n" +
      "Track valuable items and loot with dedicated ESP features.\n\n" +
      "**Config System**\n" +
      "Built-in configuration management with the ability to create, save, load, delete, and clear configs. Name and organize multiple setups for different playstyles.\n\n" +
      "**Miscellaneous**\n" +
      "Overlay FPS display and developer mode for advanced users.\n\n" +
      "**Overview**\n" +
      "Arc Raiders Frost delivers a comprehensive external cheat solution with industry-leading aimbot, ESP, and customization features. Designed for both casual and competitive players seeking an edge in Arc Raiders.",
    category: "Arc Raiders",
    isFeatured: false,
    variants: [
      { id: "var_2780f0659e2d69ce2a04f365f01193d0", name: "1 DAY", price: 12.99, stock: 50 },
      { id: "var_73833cf395a22aa3f41d300c01c42812", name: "1 MONTH", price: 63.99, stock: 50 },
      { id: "var_e22338ce8724e41b0bb613e05c9dc4c5", name: "3 DAY", price: 16.70, stock: 50 },
      { id: "var_e8a19e414a74674fd9b63be01e6a4ff7", name: "1 WEEK", price: 28.99, stock: 50 },
      { id: "var_f8eb4b39657027e3f40db1e8bca7b941", name: "LIFETIME", price: 270.79, stock: 50 },
    ],
    status: "Available",
  },
  {
    id: "prod_0084ffd824317d81ee0fe58c05ad913f",
    slug: "r6-siege-perc",
    name: "R6 Siege Perc",
    storrikStoreId: "STORE_4PtCG2FcnL0AsqYSEC0dui0nMvQlg690",
    storrikProductId: "prod_0084ffd824317d81ee0fe58c05ad913f",
    image: "/images/products/r6-perc.png",
    description:
      "[+] Advanced Aimbot System\n" +
      "[+] Wall ESP Detection\n" +
      "[+] Team Highlight\n" +
      "[+] Predicted Shots\n" +
      "[+] Recoil Reduction\n" +
      "[+] Custom Aim Speed\n" +
      "[+] Hitbox Customization\n" +
      "[+] FOV Adjustment\n" +
      "[+] Trigger Bot\n" +
      "[+] Undetected External\n\n" +
      "**System Requirements**\n" +
      "**Game Client:** Rainbow Six Siege (Ubisoft+)\n" +
      "**Operating System:** Windows 10/11 (64-bit)\n" +
      "**Processor:** Intel Core i5 or AMD Ryzen 5\n" +
      "**RAM:** 8GB minimum\n" +
      "**GPU:** NVIDIA GTX 960 / AMD RX 470 or better\n\n" +
      "**Overview**\n" +
      "The Perc operator cheat provides advanced aiming capabilities with wall detection and team awareness. Dominate tactical gameplay with precision targeting and enhanced map awareness.\n\n" +
      "**Key Features**\n" +
      "[+] Real-time wall penetration ESP\n" +
      "[+] Smooth, configurable aimbot\n" +
      "[+] Team identification system\n" +
      "[+] Advanced trajectory prediction\n" +
      "[+] Minimal performance impact\n" +
      "[+] Easy loader setup",
    category: "Rainbow Six Siege",
    isFeatured: false,
    variants: [
      { id: "var_e2c343748502e614d2c32f71c0ec25f4", name: "1 DAY", price: 9.99, stock: 50 },
      { id: "var_700623bf6f5fabefbd263e3c67d1369d", name: "1 WEEK", price: 29.99, stock: 50 },
      { id: "var_af3aa6519622c3f964898939afc1cd75", name: "1 MONTH", price: 59.99, stock: 50 },
    ],
    status: "Available",
  },
  {
    id: "prod_dc36c7b479e2bb47764069013c107e70",
    slug: "r6-siege-crusader",
    name: "R6 Siege Crusader",
    storrikStoreId: "STORE_4PtCG2FcnL0AsqYSEC0dui0nMvQlg690",
    storrikProductId: "prod_dc36c7b479e2bb47764069013c107e70",
    image: "/images/products/r6-crusader.png",
    showcaseImages: [
      "/images/showcase/r6-crusader-esp.png",
      "/images/showcase/r6-crusader-gameplay1.png",
      "/images/showcase/r6-crusader-gameplay2.png",
    ],
    description:
      "[+] Professional Grade Aimbot\n" +
      "[+] Full Map ESP\n" +
      "[+] Enemy Detection\n" +
      "[+] Operator Identification\n" +
      "[+] Ability Tracking\n" +
      "[+] Smooth Aim Curves\n" +
      "[+] Anti-Aim Detection\n" +
      "[+] Distance Based Adjustment\n" +
      "[+] Auto Trigger\n" +
      "[+] External Undetected\n\n" +
      "**System Requirements**\n" +
      "**Game Client:** Rainbow Six Siege (Ubisoft+)\n" +
      "**Operating System:** Windows 10/11 (64-bit)\n" +
      "**Processor:** Intel Core i5 or AMD Ryzen 5\n" +
      "**RAM:** 8GB minimum\n" +
      "**GPU:** NVIDIA GTX 960 / AMD RX 470 or better\n\n" +
      "**Overview**\n" +
      "Crusader delivers professional-grade cheats for Rainbow Six Siege with comprehensive ESP and intelligent aimbot systems. Perfect for competitive play with advanced operator tracking and ability detection.\n\n" +
      "**Key Features**\n" +
      "[+] Real-time operator detection\n" +
      "[+] Ability cooldown tracking\n" +
      "[+] Full map visualization\n" +
      "[+] Professional aim smoothing\n" +
      "[+] Distance-based adjustments\n" +
      "[+] Completely undetected",
    category: "Rainbow Six Siege",
    isFeatured: false,
    variants: [
      { id: "var_4183b78bfdb480360a6d7d8f067eddc7", name: "1 DAY", price: 4.99, stock: 50 },
      { id: "var_cb4169758261650c60d3cb08b0a5ba7e", name: "1 WEEK", price: 24.99, stock: 50 },
      { id: "var_6aa6e423ebd250498397478007b0d03e", name: "1 MONTH", price: 44.99, stock: 50 },
    ],
    status: "Available",
  },
  {
    id: "prod_e6e5a51add7e069b2e4f30cf92f7ca85",
    slug: "r6-siege-onyx-lite",
    name: "R6 Siege Onyx Lite",
    storrikStoreId: "STORE_4PtCG2FcnL0AsqYSEC0dui0nMvQlg690",
    storrikProductId: "prod_e6e5a51add7e069b2e4f30cf92f7ca85",
    image: "/images/products/r6-onyx-lite.png",
    description:
      "[+] Lightweight Aimbot\n" +
      "[+] Basic ESP\n" +
      "[+] Enemy Outline\n" +
      "[+] Distance Display\n" +
      "[+] Low Resource Usage\n" +
      "[+] Quick Setup\n" +
      "[+] Minimal Configuration\n" +
      "[+] Stability Focused\n" +
      "[+] Silent Operation\n" +
      "[+] External Hack\n\n" +
      "**System Requirements**\n" +
      "**Game Client:** Rainbow Six Siege (Ubisoft+)\n" +
      "**Operating System:** Windows 10/11 (64-bit)\n" +
      "**Processor:** Intel Core i5 or AMD Ryzen 5\n" +
      "**RAM:** 6GB minimum\n" +
      "**GPU:** NVIDIA GTX 750 / AMD RX 460 or better\n\n" +
      "**Overview**\n" +
      "Onyx Lite is the streamlined version for casual players seeking essential features without bloat. Lightweight yet effective with minimal system impact and lightning-fast setup.\n\n" +
      "**Key Features**\n" +
      "[+] Minimal system footprint\n" +
      "[+] Fast, reliable aimbot\n" +
      "[+] Clean ESP visualization\n" +
      "[+] One-click configuration\n" +
      "[+] Ultra-stable operation\n" +
      "[+] Perfect for entry-level use",
    category: "Rainbow Six Siege",
    isFeatured: false,
    variants: [
      { id: "var_5d83e1a89a233fb4be1add35b2386d41", name: "1 DAY", price: 5.99, stock: 50 },
      { id: "var_eabbb90d5202126a5b56ee30a0b42200", name: "1 WEEK", price: 12.99, stock: 50 },
      { id: "var_5e22d339643671a92a9b96c7bb82be76", name: "1 MONTH", price: 27.99, stock: 50 },
    ],
    status: "Available",
  },
  {
    id: "prod_642fc916af1891e181b6e0c08739b9e2",
    slug: "r6-siege-viper",
    name: "R6 Siege Viper",
    storrikStoreId: "STORE_4PtCG2FcnL0AsqYSEC0dui0nMvQlg690",
    storrikProductId: "prod_642fc916af1891e181b6e0c08739b9e2",
    image: "/images/products/r6-viper.png",
    description:
      "[+] Premium Aimbot\n" +
      "[+] Advanced ESP System\n" +
      "[+] Tactical HUD\n" +
      "[+] Custom Filtering\n" +
      "[+] Velocity Prediction\n" +
      "[+] Fine Aim Control\n" +
      "[+] Multiple Aim Modes\n" +
      "[+] Loadout Detection\n" +
      "[+] Visual Customization\n" +
      "[+] Undetected External\n\n" +
      "**System Requirements**\n" +
      "**Game Client:** Rainbow Six Siege (Ubisoft+)\n" +
      "**Operating System:** Windows 10/11 (64-bit)\n" +
      "**Processor:** Intel Core i5 or AMD Ryzen 5\n" +
      "**RAM:** 8GB minimum\n" +
      "**GPU:** NVIDIA GTX 960 / AMD RX 470 or better\n\n" +
      "**Overview**\n" +
      "Viper represents the apex of R6 Siege cheats with premium features and tactical intelligence. Advanced velocity prediction and loadout detection give you the ultimate competitive edge.\n\n" +
      "**Key Features**\n" +
      "[+] Predictive ballistics system\n" +
      "[+] Enemy loadout detection\n" +
      "[+] Customizable tactical HUD\n" +
      "[+] Multiple aiming profiles\n" +
      "[+] Advanced filtering options\n" +
      "[+] Premium undetection",
    category: "Rainbow Six Siege",
    isFeatured: false,
    variants: [
      { id: "var_d0c3fa233ff3b0a326f6e30870ce74b8", name: "1 DAY", price: 5.99, stock: 50 },
      { id: "var_8286951bd761d795d450f8bf92e6496c", name: "1 WEEK", price: 16.99, stock: 50 },
      { id: "var_3abe0e4660e9600e9e086ed538c34b6f", name: "1 MONTH", price: 34.99, stock: 50 },
    ],
    status: "Available",
  },
  {
    id: "prod_169846c7a9dc81cb7f83ca43b2e11672",
    slug: "hwid-spoofer",
    name: "Temp HWID Spoofer",
    storrikStoreId: "STORE_4PtCG2FcnL0AsqYSEC0dui0nMvQlg690",
    storrikProductId: "prod_169846c7a9dc81cb7f83ca43b2e11672",
    image: "/images/products/hwid-spoofer.png",
    description:
      "[+] Hardware ID Spoofing\n" +
      "[+] Ban Bypass\n" +
      "[+] Deep System Integration\n" +
      "[+] Multiple Spoof Modes\n" +
      "[+] Permanent Changes\n" +
      "[+] Drive Serial Modification\n" +
      "[+] MAC Address Spoofing\n" +
      "[+] Motherboard ID Change\n" +
      "[+] Secure Operation\n" +
      "[+] Works with Multiple Games\n\n" +
      "**System Requirements**\n" +
      "**Operating System:** Windows 10/11 (64-bit)\n" +
      "**Admin Rights:** Required\n" +
      "**Processor:** Intel Core i3 or AMD Ryzen 3\n" +
      "**RAM:** 2GB minimum\n" +
      "**Storage:** 100MB free space\n\n" +
      "**Overview**\n" +
      "Hardware ID Spoofer enables complete system identification masking across multiple games and anti-cheat systems. Perfect for ban recovery or fresh starts with full hardware identity modification.\n\n" +
      "**Key Features**\n" +
      "[+] Deep-level HWID spoofing\n" +
      "[+] Anti-cheat bypass capability\n" +
      "[+] Permanent modifications option\n" +
      "[+] Multiple spoof profiles\n" +
      "[+] Secure encrypted operation\n" +
      "[+] Compatible with most games",
    category: "Utility",
    isFeatured: false,
    variants: [
      { id: "var_c4d0453f3aecbe28991e651092904c1c", name: "1 DAY", price: 9.99, stock: 50 },
      { id: "var_e5fa18d40d86ed93acd3beea28e58e2b", name: "1 WEEK", price: 14.99, stock: 50 },
      { id: "var_3f5752689362fc677150297b3c6179a4", name: "3 DAYS", price: 12.99, stock: 50 },
      { id: "var_55ef6909fd16919b8fe44cfe851ff4dc", name: "1 MONTH", price: 29.99, stock: 50 },
      { id: "var_569172b01bd668337175275afd9d23e6", name: "LIFETIME", price: 99.99, stock: 50 },
    ],
    status: "Available",
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(): Record<string, Product[]> {
  const categorizedProducts: Record<string, Product[]> = {}
  products.forEach((product) => {
    if (!categorizedProducts[product.category]) {
      categorizedProducts[product.category] = []
    }
    categorizedProducts[product.category].push(product)
  })
  return categorizedProducts
}
