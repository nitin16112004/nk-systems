import { Inter } from "next/font/google"
import "./globals.css"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import GalaxyBackground from "@/components/GalaxyBackground"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { seo } from "@/data/portfolio"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: seo.title,
    description: seo.description,
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans bg-black text-white antialiased`}
      >
        <Navbar />
        <GalaxyBackground />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
