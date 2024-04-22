import { Metadata } from "next"
import "styles/globals.css"

import { Marcellus } from "next/font/google"

// If loading a variable font, you don't need to specify the font weight
const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin", "latin-ext"],
})

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={marcellus.className}>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
