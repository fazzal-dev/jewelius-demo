"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Music, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
    // { icon: Spotify, href: "https://open.spotify.com/artist/jewelius" },
  ];

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Music", href: "/music" },
    { label: "Biography", href: "/biography" },
    { label: "Contact", href: "/contact" },
    { label: "Merch", href: "/merch" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className=" text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Music className="text-[#0f8b7e]" size={36} />
              <span className="text-3xl font-bold">Jewelius</span>
            </Link>
            <p className="text-gray-300 text-center md:text-left">
              Experience the rhythm of life through the soulful melodies of
              Jewelius.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-wrap justify-center md:justify-start gap-4">
              {footerLinks.map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#0f8b7e] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#0f8b7e] transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Jewelius. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
