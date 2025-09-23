// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Predeeption",
  description: "Intelligent Battery Management Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col min-h-screen">
        {/* Universal Header */}
        <Header />

        {/* Main page content */}
        <main className="flex-1">{children}</main>

        {/* Universal Footer */}
        <Footer />
      </body>
    </html>
  );
}
