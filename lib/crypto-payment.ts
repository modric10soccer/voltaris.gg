export const CRYPTO_WALLETS = {
  LTC: "LXv3hbxMN3H53RJ8ZUpn2NQWnBHWQ7P7WS",
  BTC: "bc1qj8gl030r3y4ulmj5ldf9gum580mkckexr7tl28",
  ETH: "0x425db3124BA1fEc9b6B659C1E2fb83a4DD1Ef2c4",
  USDC_POLYGON: "0x425db3124BA1fEc9b6B659C1E2fb83a4DD1Ef2c4",
  USDC_SOLANA: "9F9b9XeAGwVTJwSByLojWcQDkBH2wkYrzBjLNiyTYYLK",
  USDC_ETH: "0x425db3124BA1fEc9b6B659C1E2fb83a4DD1Ef2c4",
} as const

export type CryptoType = keyof typeof CRYPTO_WALLETS

export const CRYPTO_LABELS: Record<CryptoType, string> = {
  LTC: "Litecoin (LTC)",
  BTC: "Bitcoin (BTC)",
  ETH: "Ethereum (ETH)",
  USDC_POLYGON: "USDC (Polygon)",
  USDC_SOLANA: "USDC (Solana)",
  USDC_ETH: "USDC (Ethereum)",
}

export const CRYPTO_ICONS: Record<CryptoType, string> = {
  LTC: "₿",
  BTC: "₿",
  ETH: "Ξ",
  USDC_POLYGON: "$",
  USDC_SOLANA: "$",
  USDC_ETH: "$",
}

export const CRYPTO_RATES: Record<CryptoType, number> = {
  BTC: 95000, // $95,000 per BTC
  ETH: 3500, // $3,500 per ETH
  LTC: 85, // $85 per LTC
  USDC_POLYGON: 1, // $1 per USDC
  USDC_SOLANA: 1, // $1 per USDC
  USDC_ETH: 1, // $1 per USDC
}

export function calculateCryptoAmount(usdAmount: number, cryptoType: CryptoType): string {
  const rate = CRYPTO_RATES[cryptoType]
  const cryptoAmount = usdAmount / rate

  // Format with appropriate decimal places
  if (cryptoType === "BTC") {
    return cryptoAmount.toFixed(8) // BTC uses 8 decimals
  } else if (cryptoType === "ETH") {
    return cryptoAmount.toFixed(6) // ETH uses 6 decimals typically
  } else if (cryptoType === "LTC") {
    return cryptoAmount.toFixed(4) // LTC uses 4 decimals
  } else if (cryptoType === "USDC_ETH") {
    return cryptoAmount.toFixed(2) // USDC uses 2 decimals
  } else {
    return cryptoAmount.toFixed(2) // USDC uses 2 decimals
  }
}
