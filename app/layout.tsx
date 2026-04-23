import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Perfumes Árabes Importados | Importadora Megacy",
  description:
    "Fragrâncias árabes importadas com fixação de até 24 horas. Frete grátis + 50% de desconto. Mais de 86 mil clientes satisfeitos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${openSans.variable} bg-background`}
    >
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
