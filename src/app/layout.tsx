import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "シグマの部屋",
  description: "シグマのWEBサイトです！",
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="ja">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
