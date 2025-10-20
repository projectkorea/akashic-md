import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/global/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akashic.md",
  description: "About Languages, algorithms, data structures, design patterns...—organize and share knowledge to enhance expertise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
