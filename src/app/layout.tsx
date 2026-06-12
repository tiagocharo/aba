import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Nav } from "@/components/aba/Nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aba.com.br"),
  title: {
    default: "ABA — Excelência têxtil premium para grandes marcas",
    template: "%s — ABA",
  },
  description:
    "Transformamos matérias-primas premium em produtos que fortalecem grandes marcas. Rastreabilidade, certificações e qualidade inegociável em toda a cadeia produtiva.",
  keywords: [
    "indústria têxtil",
    "produção premium",
    "rastreabilidade",
    "ABVTEX",
    "fios premium",
    "desenvolvimento têxtil",
    "ABA",
  ],
  openGraph: {
    title: "ABA — Excelência têxtil premium para grandes marcas",
    description:
      "30 anos transformando excelência têxtil em produtos premium para grandes marcas.",
    type: "website",
    locale: "pt_BR",
    siteName: "ABA",
    images: [{ url: "/hero-textile.jpg", width: 1200, height: 630, alt: "ABA" }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
