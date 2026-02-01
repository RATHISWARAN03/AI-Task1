import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Chatbot from "@/components/chatbot";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Iron Lady",
  description: "Transform Your Leadership Journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-body antialiased flex flex-col min-h-screen`}
      >
        <div className="main-bg"></div>
        <div className="geometric-bg"></div>
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
        <Toaster />
        <Chatbot />
      </body>
    </html>
  );
}
