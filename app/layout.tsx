import type { Metadata } from "next";
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SmoothScroll from "@/components/site/SmoothScroll";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tirupati Precast — The Power of Precast",
    template: "%s — Tirupati Precast",
  },
  description:
    "Manufacturer of 75mm Single Panel Compound Wall, Precast 'U' Drain, Earth Retaining Wall and all types of precast products. ISO 9001:2015. 16 branches across India.",
  metadataBase: new URL("https://www.tirupatiprecast.in"),
  openGraph: {
    title: "Tirupati Precast — The Power of Precast",
    description:
      "Precast compound walls, U-drains and retaining walls, factory-cast and erected fast. 16 branches across India. ISO 9001:2015.",
    images: ["/images/1.jpg"],
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
        className={`${archivo.variable} ${inter.variable} ${plexMono.variable} bg-paper text-ink font-sans antialiased selection:bg-red selection:text-paper`}
      >
        <SmoothScroll>
          <Toaster toastOptions={{ duration: 3000 }} />
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
