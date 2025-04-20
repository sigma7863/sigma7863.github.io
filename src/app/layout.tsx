import { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

export const matadata: Metadata = {
  title: "シグマの部屋",
  description: "Sigma7863のWEBサイトです",
};

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
      <html lang="ja">
        <body>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    );
}
