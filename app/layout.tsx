import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KI Bilder Generator - Professionelle Bewerbungsfotos & KI Bilder erstellen",
  description: "Erstellen Sie professionelle Bewerbungsfotos und einzigartige KI-Bilder mit Ihren eigenen Fotos. 100+ Ergebnisse in 30 Minuten. Made in Germany. Jetzt starten ab 29€.",
  keywords: [
    "KI Bilder",
    "KI Bilder Generator",
    "Bewerbungsfotos KI",
    "KI Bilder erstellen",
    "Künstliche Intelligenz Bilder",
    "Professionelle Bewerbungsfotos",
    "KI Fotogenerator",
    "Bewerbungsfoto online",
    "KI Portrait",
    "AI Headshots",
  ],
  authors: [{ name: "KI Bilder Generator" }],
  creator: "KI Bilder Generator",
  publisher: "KI Bilder Generator",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://kibildergenerator.de',
    title: 'KI Bilder Generator - Professionelle Bewerbungsfotos erstellen',
    description: 'Erstellen Sie professionelle Bewerbungsfotos und einzigartige KI-Bilder mit künstlicher Intelligenz. 100+ Ergebnisse in 30 Minuten.',
    siteName: 'KI Bilder Generator',
    images: [
      {
        url: 'https://kibildergenerator.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KI Bilder Generator - Bewerbungsfotos erstellen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KI Bilder Generator - Professionelle Bewerbungsfotos',
    description: 'Erstellen Sie professionelle Bewerbungsfotos mit KI in 30 Minuten. Made in Germany.',
    images: ['https://kibildergenerator.de/og-image.png'],
  },
  verification: {
    google: 'your-google-site-verification',
  },
  icons: {
    icon: [
      { url: '/web/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/web/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/web/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/web/icon-96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/web/icon-57.png', sizes: '57x57', type: 'image/png' },
      { url: '/web/icon-60.png', sizes: '60x60', type: 'image/png' },
      { url: '/web/icon-70.png', sizes: '70x70', type: 'image/png' },
      { url: '/web/icon-72.png', sizes: '72x72', type: 'image/png' },
      { url: '/web/icon-76.png', sizes: '76x76', type: 'image/png' },
      { url: '/web/icon-96.png', sizes: '96x96', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="canonical" href="https://kibildergenerator.de" />
        <meta name="theme-color" content="#20C997" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
