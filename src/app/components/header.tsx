"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* ヘッダー */}
      <header className="bg-indigo-200 p-4 flex justify-between items-center z-50">
        <div className="flex items-center">
          {/* ハンバーガー / 閉じるボタン */}
          <button
            onClick={toggleMenu}
            className="sm:hidden mr-4 text-purple-800 relative w-8 h-8"
            aria-label="メニューを開閉"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <X size={28} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Menu size={28} />
                </motion.span>
              )}
            </AnimatePresence>


          </button>

          {/* タイトル */}
          <Link href="/">
            <h1 className="text-purple-800 text-2xl font-medium">シグマの部屋</h1>
          </Link>
        </div>

        {/* PCナビ */}
        <nav className="hidden sm:flex gap-6 text-gray-600">
          <Link href="/" className="hover:underline text-gray-900">about</Link>
          <Link href="/blog" className="hover:underline text-gray-900">blog</Link>
          <Link href="/works" className="hover:underline text-gray-900">works</Link>
          <Link href="/link" className="hover:underline text-gray-900">Link</Link>
        </nav>
      </header>

      {/* モバイル用メニュー（上から下にスライド） */}
      <div
        className={`sm:hidden fixed top-[64px] left-0 w-full bg-indigo-100 text-purple-900 z-40 shadow-md transform transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="pt-4 pb-4 pl-6 pr-4">
          <ul className="flex flex-col divide-y divide-[#d3b3da] items-start">
            <li className="w-full">
              <Link
                href="/"
                onClick={toggleMenu}
                className="block py-3 w-full text-xl hover:underline"
              >
                about
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/blog"
                onClick={toggleMenu}
                className="block py-3 w-full text-xl hover:underline"
              >
                blog
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/works"
                onClick={toggleMenu}
                className="block py-3 w-full text-xl hover:underline"
              >
                works
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/link"
                onClick={toggleMenu}
                className="block py-3 w-full text-xl hover:underline"
              >
                Link
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
