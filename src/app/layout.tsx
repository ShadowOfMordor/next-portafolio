import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: "Nicolás Muñoz Araya - Backend + Vue · Freelance",
  description:
    "Ingeniero en Informática especializado en backend con Laravel y frontend con Vue. Desarrollo de APIs, paneles, dashboards y soluciones web para negocios.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "Nicolás Muñoz Araya - Backend + Vue · Freelance",
    description:
      "Ingeniero en Informática especializado en backend con Laravel y frontend con Vue. Desarrollo de APIs, paneles y soluciones web.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolás Muñoz Araya - Backend + Vue · Freelance",
    description:
      "Ingeniero en Informática especializado en backend con Laravel y frontend con Vue.",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFF7ED" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0C10" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Ir al contenido
        </a>
        <div id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </div>
      </body>
    </html>
  );
}
