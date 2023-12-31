import type { Metadata } from "next"
import { Roboto_Mono } from "next/font/google"
import "./globals.css"

import { CartContextProvider } from "@/components/context/CartContext"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const font = Roboto_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Charge Supplements",
  description: "Charge Supplements - Energy drinks for the modern age",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-primary-700 overflow-y-auto`}>
        <CartContextProvider>
          <Navbar />
          <main className="flex min-h-screen flex-col items-center justify-between">
            {children}
          </main>
          <Footer />
        </CartContextProvider>
      </body>
    </html>
  )
}
