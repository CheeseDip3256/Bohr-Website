import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Instrument_Serif, Kanit } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { V0Provider } from "@/lib/context"
import { DevConsoleLoader } from "@/components/dev-console-loader"
import dynamic from "next/dynamic"

const V0Setup = dynamic(() => import("@/components/v0-setup"))

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
})

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const isV0 = process.env["VERCEL_URL"]?.includes("vusercontent.net") ?? false

export const metadata: Metadata = {
  title: {
    template: "%s | Bohr Systems",
    default: "Bohr Systems",
  },
  description:
    "We stand at the forefront of a new era, where creativity meets technology to redefine what's possible. Our mission is to empower individuals and businesses alike with groundbreaking solutions that inspire change and drive progress.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(interSans.variable, jetBrainsMono.variable, instrumentSerif.variable, kanit.variable)}>
        <V0Provider isV0={isV0}>
          {children}
          {isV0 && <V0Setup />}
          <DevConsoleLoader />
        </V0Provider>
      </body>
    </html>
  )
}