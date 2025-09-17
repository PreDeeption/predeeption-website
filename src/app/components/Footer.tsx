"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => setVisible(entries[0].isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`px-8 py-12 bg-black text-gray-300 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-yellow-400">Predeeption</h3>
          <p className="mt-4 text-sm">
            Innovating energy intelligence through prediction and real-time analytics.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Awards & Certifications</h4>
          <div className="mt-4 flex gap-4">
            <Image src="/award1.png" alt="Award 1" width={60} height={60} />
            <Image src="/award2.png" alt="Award 2" width={60} height={60} />
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-white">Follow Us</h4>
          <div className="mt-4 flex gap-4">
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin size={24} className="hover:text-yellow-400" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <FaTwitter size={24} className="hover:text-yellow-400" />
            </a>
            <a href="https://github.com" target="_blank">
              <FaGithub size={24} className="hover:text-yellow-400" />
            </a>
          </div>
        </div>
      </div>
      <p className="mt-8 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Predeeption. All rights reserved.
      </p>
    </footer>
  );
}
