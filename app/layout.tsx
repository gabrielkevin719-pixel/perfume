import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Lattafa Perfumes | Fragrâncias de Luxo Árabes",
  description:
    "Descubra a sofisticação dos perfumes Lattafa. Fragrâncias árabes premium com até 70% de desconto. Entrega para todo Brasil.",
  keywords: [
    "perfume",
    "lattafa",
    "fragrância árabe",
    "perfume importado",
    "luxo",
  ],
  openGraph: {
    title: "Lattafa Perfumes | Fragrâncias de Luxo Árabes",
    description:
      "Descubra a sofisticação dos perfumes Lattafa. Fragrâncias árabes premium com até 70% de desconto.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
