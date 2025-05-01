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
        <script defer src="https://cloud.umami.is/script.js" data-website-id="c3579817-4c9c-45e5-aa3f-89f96eb742d8"></script>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
