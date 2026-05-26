"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const menuItemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : i * 0.08,
        duration: shouldReduceMotion ? 0 : 0.3,
      },
    }),
  };
  const menuItems = [
    { label: "about", href: "/" },
    { label: "blog", href: "/blog" },
    { label: "works", href: "/works" },
    { label: "Link", href: "/link" }, // 大文字で表示、パスは小文字
  ];

  return (
    <LazyMotion features={domAnimation}>
      <>
      <header className="bg-indigo-200 p-4 flex justify-between items-center z-50 relative">
        <div className="flex items-center">
          <button
            type="button"
            onClick={toggleMenu}
            className="sm:hidden mr-4 text-purple-800 relative size-8"
            aria-label="メニューを開閉"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <m.span
                  key="close"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <X size={28} />
                </m.span>
              ) : (
                <m.span
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Menu size={28} />
                </m.span>
              )}
            </AnimatePresence>
          </button>

          <Link href="/">
            <h1 className="text-purple-800 text-2xl font-medium">シグマの部屋</h1>
          </Link>
        </div>

        <nav className="hidden sm:flex gap-6 text-gray-600">
          {menuItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="hover:text-slate-500 text-lg text-gray-900"
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            key="mobile-menu"
            initial={{ y: shouldReduceMotion ? 0 : -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: shouldReduceMotion ? 0 : -20, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
            className="sm:hidden bg-indigo-100 text-purple-900 shadow-md fixed top-[64px] left-0 w-full z-40"
          >
            <m.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col items-start pt-4 pb-4 pl-6 pr-4"
            >
              {menuItems.map(({ label, href }, i) => (
                <m.li
                  key={label}
                  custom={i}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="w-full"
                >
                  <Link
                    href={href}
                    onClick={toggleMenu}
                    className="block py-3 w-full text-xl hover:underline"
                  >
                    {label}
                  </Link>
                </m.li>
              ))}
            </m.ul>
          </m.div>
        )}
      </AnimatePresence>
      </>
    </LazyMotion>
  );
}
