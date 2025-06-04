import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lamech (レメク)",
  description: "Lamech (レメク) - アプリ開発、システム開発、ITコンサルティング、DX支援、美容機器販売、治療機器販売を行う会社です。",
  keywords: "Lamech, レメク, アプリ開発, システム開発, ITコンサルティング, DX支援, 美容機器, 治療機器, 奈良県, 橿原市",
  generator: 'v0.dev',
  icons: {
    icon: '/images/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}