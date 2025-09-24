import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Iglesia Cristiana - Descubre Comunidad, Abraza la Fe",
  description:
    "Una comunidad cristiana moderna y acogedora. Únete a nosotros para descubrir la fe, la esperanza y el amor de Dios.",
  generator: "v0.app",
  keywords: "iglesia cristiana, comunidad de fe, servicios religiosos, biblia, oración",
  authors: [{ name: "Iglesia Cristiana" }],
  openGraph: {
    title: "Iglesia Cristiana - Descubre Comunidad, Abraza la Fe",
    description: "Una comunidad cristiana moderna y acogedora donde todos son bienvenidos.",
    type: "website",
    locale: "es_ES",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
