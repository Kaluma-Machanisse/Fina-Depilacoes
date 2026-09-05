import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { SITE_URL, NOME_NEGOCIO, DESCRICAO_CURTA } from "./data/site";

const heading = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${NOME_NEGOCIO} — Salão de estética e depilação em Maputo`,
    template: `%s · ${NOME_NEGOCIO}`,
  },
  description: DESCRICAO_CURTA,
  keywords: [
    "depilação",
    "salão de estética",
    "Maputo",
    "sobrancelhas",
    "pestanas",
    "cursos de depilação",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_MZ",
    url: SITE_URL,
    siteName: NOME_NEGOCIO,
    title: `${NOME_NEGOCIO} — Salão de estética e depilação em Maputo`,
    description: DESCRICAO_CURTA,
  },
  twitter: {
    card: "summary_large_image",
    title: `${NOME_NEGOCIO} — Salão de estética e depilação em Maputo`,
    description: DESCRICAO_CURTA,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#8a4a5c" },
    { media: "(prefers-color-scheme: dark)", color: "#1b1417" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-MZ"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
