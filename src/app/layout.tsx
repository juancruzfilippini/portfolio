import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Juan Cruz | Staff Software Engineer";
const siteDescription = "Construyo sistemas web y APIs enfocadas en negocio, con experiencia en Laravel, Node.js y operaciones Linux.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://example.com",
    siteName: siteTitle,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-8 sm:px-8">
          <Navbar />
          <main className="flex-1 pt-8 sm:pt-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
