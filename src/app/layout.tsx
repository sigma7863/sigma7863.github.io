import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "シグマの部屋",
  description: "シグマのWEBサイトです。Next.jsやTailwind CSS, Github Pageを使っています。",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="ja">
      <body>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="c3579817-4c9c-45e5-aa3f-89f96eb742d8"
          strategy="afterInteractive"
        />
        {/* <Script src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "ce7d048c0bcb4f008c39484f6c4301bc"}'></Script> */}
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
