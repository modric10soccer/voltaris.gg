export const STORRIK_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_STORRIK_PUBLIC_KEY || "pk_live_et8iHWV2Zb2L2AD8almTWHU-ZMplI4Wi7OPZNSP7Mn0"
const STORRIK_EMBED_SRC = "https://cdn.storrik.io/embed.js"

let storrikConfigured = false
let storrikLoadPromise: Promise<void> | null = null

type StorrikEmbedStyle = "compact" | "normal" | "expanded"

type StorrikEmbedColors = {
  overlay?: string
  background?: string
  surface?: string
  surfaceElevated?: string
  border?: string
  text?: string
  muted?: string
  primary?: string
  buttonText?: string
  success?: string
  warning?: string
  danger?: string
}

export type StorrikCheckoutOptions = {
  style?: StorrikEmbedStyle
  colors?: StorrikEmbedColors
}

type StorrikPayParams = {
  productId: string
  variantId?: string
} & StorrikCheckoutOptions

const loadStorrikScript = () => {
  if (typeof document === "undefined") return Promise.reject(new Error("Document is not available"))

  if (storrikLoadPromise) return storrikLoadPromise

  storrikLoadPromise = new Promise<void>((resolve, reject) => {
    if (typeof window !== "undefined" && (window as any).storrik) {
      resolve()
      return
    }

    const existing = document.querySelector(`script[src="${STORRIK_EMBED_SRC}"]`) as HTMLScriptElement | null

    if (existing && (existing.dataset.loaded === "true" || existing.readyState === "complete")) {
      existing.dataset.loaded = "true"
      resolve()
      return
    }

    const script = existing ?? document.createElement("script")
    script.src = STORRIK_EMBED_SRC
    script.async = true
    script.dataset.loaded = existing?.dataset.loaded ?? "false"

    script.onload = () => {
      script.dataset.loaded = "true"
      resolve()
    }
    script.onerror = () => reject(new Error("Failed to load Storrik embed script"))

    if (!existing) {
      document.head?.appendChild(script)
    }
  })

  return storrikLoadPromise
}

export async function openStorrikCheckout(
  productId: string,
  variantId?: string,
  options: StorrikCheckoutOptions = {}
) {
  if (typeof window === "undefined") return false

  try {
    await loadStorrikScript()
  } catch (err) {
    console.error("Storrik embed script failed to load", err)
    return false
  }

  const storrik = (window as any).storrik
  if (!storrik) return false

  if (!storrikConfigured) {
    if (!STORRIK_PUBLIC_KEY) {
      console.error("Missing Storrik public key (pk). Set NEXT_PUBLIC_STORRIK_PUBLIC_KEY.")
      return false
    }
    storrik.configure({ pk: STORRIK_PUBLIC_KEY })
    storrikConfigured = true
  }

  const payload: StorrikPayParams = {
    productId,
    ...(variantId ? { variantId } : {}),
    ...options,
  }

  if (variantId) {
    storrik.pay(productId, variantId, options)
  } else {
    storrik.pay(productId, options)
  }
  return true
}
