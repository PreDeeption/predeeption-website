"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setShow(current < lastScroll || current < 50);
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-black bg-opacity-90`}
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold text-yellow-400">Predeeption</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/#solutions" className="hover:text-yellow-400">Solutions</Link>
          <Link href="/about" className="hover:text-yellow-400">About</Link>
          <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <span className="text-yellow-400 text-2xl">&#9776;</span>
          </button>
        </div>

        <Link href="/contact">
          <button className="hidden md:block bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500">
            Get Started
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 px-4 py-4 flex flex-col gap-4">
          <Link href="/#solutions" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">
            Solutions
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">
            About
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">
            Contact
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
