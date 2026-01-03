import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        dark: {
          DEFAULT: "#000000",
          card: "#0D0D0D",
          border: "#1A1A1A",
        },
        voltaris: {
          red: "#E63946",
          darkred: "#B8252F",
        },
        nano: {
          blue: "#E63946",
          darkblue: "#B8252F",
          green: "#28A745",
          darkgreen: "#218838",
        },
        status: {
          green: "#28A745",
          orange: "#FFC107",
          red: "#DC3545",
          blue: "#E63946",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        "pulse-green": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-blue": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        "pulse-red": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        "scroll-infinite": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.15" },
          "50%": { transform: "scale(1.1)", opacity: "0.25" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scroll-bounce": "scroll-bounce 1.5s infinite",
        "pulse-green": "pulse-green 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "slide-in-left": "slide-in-left 0.5s ease-out forwards",
        "pulse-blue": "pulse-blue 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-red": "pulse-red 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scroll-infinite": "scroll-infinite 30s linear infinite",
        breathe: "breathe 8s ease-in-out infinite",
        "breathe-slow": "breathe 10s ease-in-out infinite",
        "breathe-slower": "breathe 12s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
