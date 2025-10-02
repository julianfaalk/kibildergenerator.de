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
  title: "KI Bilder Generator",
  description: "Erstellen Sie einzigartige KI-Bilder mit Ihren eigenen Fotos in wenigen Minuten.",
  icons: {
    icon: [
      { url: '/web/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/web/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/web/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/web/icon-57.png', sizes: '57x57', type: 'image/png' },
      { url: '/web/icon-60.png', sizes: '60x60', type: 'image/png' },
      { url: '/web/icon-72.png', sizes: '72x72', type: 'image/png' },
      { url: '/web/icon-76.png', sizes: '76x76', type: 'image/png' },
      { url: '/web/icon-114.png', sizes: '114x114', type: 'image/png' },
      { url: '/web/icon-120.png', sizes: '120x120', type: 'image/png' },
      { url: '/web/icon-144.png', sizes: '144x144', type: 'image/png' },
      { url: '/web/icon-152.png', sizes: '152x152', type: 'image/png' },
      { url: '/web/icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
