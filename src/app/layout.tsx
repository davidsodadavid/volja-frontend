import { getBaseURL } from "@lib/util/env"
import localFont from "next/font/local"
import { Metadata } from "next"
import "styles/globals.css"
import CookieConsent from "@components/cookie-consent"
import { CookieConsentProvider } from "@components/cookie-consent/context"

const neueHaasDisplay = localFont({
  src: [
    {
      path: "./fonts/NeueHaasDisplayLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NeueHaasDisplayRoman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas-display",
})

const neueHaasText = localFont({
  src: "./fonts/Neue Haas Grotesk Text Pro.woff2",
  variable: "--font-neue-haas-text",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: 'Atelje Volja',
  description: 'A local clothing workshop specializing in custom-made and carefully crafted apparel.'
  
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body className={`${neueHaasDisplay.variable} ${neueHaasText.variable}`}>
        <CookieConsentProvider>
          <main className="relative">{props.children}</main>
          <CookieConsent />
        </CookieConsentProvider>
      </body>
    </html>
  )
}
