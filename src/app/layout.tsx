import { getBaseURL } from "@lib/util/env"
import localFont from "next/font/local"
import { Metadata } from "next"
import Script from "next/script"
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
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1448491460418629');fbq('track','PageView')`,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1448491460418629&ev=PageView&noscript=1" />
        </noscript>
      </body>
    </html>
  )
}
