"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Music,
  Mic,
  Headphones,
  PlayCircle,
  User,
  Mail,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setIsSticky(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navItems = [
    { href: "/", label: "Home", icon: PlayCircle },
    { href: "/music", label: "Music", icon: Headphones },
    { href: "/biography", label: "Biography", icon: User },
    // { href: "/contact", label: "Contact", icon: Mail },
  ];

  const isActive = (href) => pathname === href;

  const NavLink = ({ href, children, icon: Icon }) => (
    <Link href={href} passHref>
      <motion.div
        className={`group flex items-center space-x-2 cursor-pointer ${
          isActive(href)
            ? "text-[#0f8b7e]"
            : "text-gray-300 hover:text-[#0f8b7e]"
        } transition-colors duration-300`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon
          size={20}
          className="group-hover:text-[#0f8b7e] transition-colors duration-300"
        />
        <span className="text-lg font-medium">{children}</span>
      </motion.div>
    </Link>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isSticky
          ? "bg-black bg-opacity-80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Music className="text-[#0f8b7e]" size={36} />
            <span className="text-3xl font-bold text-white">Jewelius</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} icon={item.icon}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <motion.button
            className="hidden md:block bg-gradient-to-r from-[#0f8b7e] to-[#085c54] text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LOGIN / SIGN UP
          </motion.button>

          <motion.button
            className="md:hidden text-white hover:text-[#0f8b7e] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu size={28} />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex flex-col items-center justify-center z-50"
          >
            <motion.button
              className="absolute top-4 right-4 text-white hover:text-[#0f8b7e] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={28} />
            </motion.button>
            <nav className="flex flex-col items-center space-y-6">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} icon={item.icon}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <motion.button
              className="mt-8 bg-gradient-to-r from-[#0f8b7e] to-[#085c54] text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LOGIN / SIGN UP
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
