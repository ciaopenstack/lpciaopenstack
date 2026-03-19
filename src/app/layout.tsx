import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../theme/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "CiaOpenStack | Sistema Inteligente de Aquisição e Conversão",
  description: "Transforme cada conversa no WhatsApp em oportunidade de venda. O Plano START organiza leads, qualifica automaticamente e acompanha sua conversão comercial com IA.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} !scroll-smooth`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.history.scrollRestoration) {
                window.history.scrollRestoration = 'manual';
              }
              window.scrollTo(0, 0);
            `,
          }}
        />
      </head>
      <body className="antialiased bg-background text-foreground min-h-screen">
        {children}
      </body>
    </html>
  );
}
