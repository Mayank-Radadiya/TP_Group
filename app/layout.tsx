import type { Metadata } from "next";
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";

const archivo = Archivo({
  variable: "--font-archivo",
  weight: ["800", "900"],
  subsets: ["latin"],
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
  title: "Tirupati Precast — Precast Concrete Works, Bengaluru",
  description:
    "Precast compound walls, structural elements and decorative concrete, manufactured in our Yelahanka plant and erected fast. Since 2014.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${inter.variable} ${plexMono.variable} bg-bone text-ink font-sans antialiased selection:bg-safety selection:text-bone`}
      >
        <Toaster toastOptions={{ duration: 3000 }} />

        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
