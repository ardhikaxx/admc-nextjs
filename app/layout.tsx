import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adhi Dharma Medical Center - Profesional & Terpercaya",
  description: "Fasilitas pelayanan kesehatan pratama modern di Bondowoso, Jawa Timur. Melayani Poli Umum, Gigi, Estetika, UGD 24 Jam, dan Rawat Inap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900 min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
