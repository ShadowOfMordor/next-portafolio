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
  title: "Nicolás Muñoz Araya - Backend + Vue · Freelance",
  description:
    "Ingeniero en Informática especializado en backend con Laravel y frontend con Vue. Desarrollo de APIs, paneles, dashboards y soluciones web para negocios.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    type: "website",
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
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
