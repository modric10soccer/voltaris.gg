import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voltaris",
  description: "Premium Rocket League and Fortnite tools and services",
  metadataBase: new URL("https://voltaris.gg"),
  icons: {
    icon: "/icon.svg",
    apple: "/icon-light-32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="cache-version" content="1.0.0" />
      </head>
      <body className={inter.className}>
        <Script
          src="/cache-buster.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/payment-error-handler.js"
          strategy="beforeInteractive"
        />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
