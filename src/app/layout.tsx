"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { WalletProvider } from './context/WalletContext';

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <WalletProvider>
      <body className={inter.className}>{children}</body>
      </WalletProvider>
    </html>
  );
}
