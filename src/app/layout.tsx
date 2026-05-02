import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EliasPro AI",
  description: "Domina la creación de contenido cinematográfico con inteligencia artificial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} bg-[#0B0B0B] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}