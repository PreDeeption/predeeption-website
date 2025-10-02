"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

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

  const awards = [
    "/award_1.svg",
    "/award_2.png",
    "/award_3.png",
    "/award_4.png",
    "/award_5.png",
  ];

  return (
    <footer
      ref={footerRef}
      className={`px-6 py-8 bg-black text-gray-300 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="w-full flex flex-col md:flex-row justify-between gap-6">
        {/* Left - Awards */}
        <div className="flex-1">
          <h4 className="font-semibold text-white text-lg">
            Awards & Certifications
          </h4>
          <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 place-items-center">
            {awards.map((award, idx) => (
              <div key={idx} className="flex justify-center items-center">
                <Image
                  src={"/awards" + award}
                  alt={`Award ${idx + 1}`}
                  width={80}
                  height={80}
                  className="object-contain w-[60px] sm:w-[80px] md:w-[100px]"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Right - Socials */}
        <div className="flex flex-col items-start md:items-end flex-1">
          <h4 className="font-semibold text-white text-lg">Follow Us</h4>
          <div className="mt-2 flex gap-3">
            <a href="https://linkedin.com/predeeption" target="_blank">
              <FaLinkedin size={24} className="hover:text-yellow-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <p className="mt-6 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Predeeption. All rights reserved.
      </p>
    </footer>
  );
}
