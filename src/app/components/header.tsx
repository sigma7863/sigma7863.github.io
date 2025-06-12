"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.3,
      },
    }),
  };

  return (
    <>
      <header className="bg-indigo-200 p-4 flex justify-between items-center z-50 relative">
        <div className="flex items-center">
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

          <Link href="/">
            <h1 className="text-purple-800 text-2xl font-medium">シグマの部屋</h1>
          </Link>
        </div>

        <nav className="hidden sm:flex gap-6 text-gray-600">
          <Link href="/" className="hover:text-slate-500 text-lg text-gray-900">about</Link>
          <Link href="/blog" className="hover:text-slate-500 text-lg text-gray-900">blog</Link>
          <Link href="/works" className="hover:text-slate-500 text-lg text-gray-900">works</Link>
          <Link href="/Link" className="hover:text-slate-500 text-lg text-gray-900">Link</Link>
        </nav>
      </header>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden bg-indigo-100 text-purple-900 shadow-md fixed top-[64px] left-0 w-full z-40"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col items-start pt-4 pb-4 pl-6 pr-4"
            >
              {["about", "blog", "works", "Link"].map((label, i) => (
                <motion.li
                  key={label}
                  custom={i}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="w-full"
                >
                  <Link
                    href={label === "about" ? "/" : `/${label}`}
                    onClick={toggleMenu}
                    className="block py-3 w-full text-xl hover:underline"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
