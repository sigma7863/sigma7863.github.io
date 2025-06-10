"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="bg-indigo-200 p-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* モバイル用：ハンバーガー */}
          <button onClick={toggleMenu} className="sm:hidden mr-4 text-purple-800" aria-label="メニューを開く">
            <Menu size={28} />
          </button>

          {/* サイトタイトル */}
          <Link href="/">
            <h1 className="text-purple-800 text-2xl font-medium">シグマの部屋</h1>
          </Link>
        </div>

        {/* PC用ナビゲーション */}
        <nav className="hidden sm:flex gap-6 text-gray-600">
          <Link href="/" className="hover:underline text-gray-900">about</Link>
          <Link href="/blog" className="hover:underline text-gray-900">blog</Link>
          <Link href="/works" className="hover:underline text-gray-900">works</Link>
          <Link href="/link" className="hover:underline text-gray-900">Link</Link>
        </nav>
      </header>

      {/* モバイル用サイドメニュー（左スライド） */}
      <div className={`sm:hidden fixed top-0 left-0 h-full w-2/3 max-w-xs bg-indigo-100 text-purple-900 z-50 shadow-lg transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-4 flex flex-col space-y-4">
          <button onClick={toggleMenu} className="self-end text-purple-800" aria-label="メニューを閉じる">
            <X size={28}/>
          </button>
          <Link href="/" onClick={toggleMenu} className="hover:underline">about</Link>
          <Link href="/blog" onClick={toggleMenu} className="hover:underline">blog</Link>
          <Link href="/works" onClick={toggleMenu} className="hover:underline">works</Link>
          <Link href="/link" onClick={toggleMenu} className="hover:underline">Link</Link>
        </div>
      </div>
    </>
  );
}
