import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "CiaOpenStack | Sistema Inteligente de Aquisição e Conversão",
  description: "Transforme cada conversa no WhatsApp em oportunidade de venda. O Plano START organiza leads, qualifica automaticamente e acompanha sua conversão comercial com IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased bg-background text-foreground min-h-screen">
        {children}
      </body>
    </html>
  );
}
