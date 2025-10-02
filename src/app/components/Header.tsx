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
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"
        } bg-black bg-opacity-90`}
    >
      <div className="w-full flex items-center justify-between px-4 md:px-8 py-3">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpeg"
              alt="Logo"
              width={120}
              height={40}
              className="h-10 w-auto"  // ensures height ~40px, width adjusts automatically
              priority
            /> <h1 className="text-yellow-400 font-bold text-xl ml-2">Predeeption</h1>
          </Link>
        </div>

        {/* Center: Nav */}
        <nav className="hidden md:flex gap-8 text-base font-medium flex-1 justify-center">
          <Link href="/#solutions" className="hover:text-yellow-400">
            Solutions
          </Link>
          <Link href="/about" className="hover:text-yellow-400">
            About
          </Link>
          <Link href="/contact" className="hover:text-yellow-400">
            Contact
          </Link>
        </nav>

        {/* Right: CTA */}
        <div className="hidden md:flex flex-1 justify-end">
          <Link href="/contact">
            <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <span className="text-yellow-400 text-3xl">&#9776;</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 px-6 py-6 flex flex-col gap-6 items-center text-lg font-medium">
          <Link
            href="/#solutions"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400"
          >
            Solutions
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400"
          >
            Contact
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
