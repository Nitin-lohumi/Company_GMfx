"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Function to scroll to footer
  const scrollToFooter = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="w-full px-6 py-4 bg-blue-300 shadow-md z-50 fixed top-0 left-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/GMFX_Logo.png"
              alt="Company Logo"
              width={60}
              height={60}
            />
            <h1 className="text-xl font-bold text-gray-600">RONI _ LOHUMI</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 relative">
            {["/", "/about"].map((path) => (
              <Link key={path} href={path} className="relative group">
                <span
                  className={`relative text-gray-700 ${
                    pathname === path ? "font-bold" : "hover:text-blue-500"
                  }`}
                >
                  {path === "/"
                    ? "Home"
                    : path.substring(1).charAt(0).toUpperCase() +
                      path.substring(2)}
                  {pathname === path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute  w-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </span>
              </Link>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center">
            {/* Desktop Contact Button */}
            <button
              onClick={scrollToFooter}
              className="hidden md:block cursor-pointer px-4 py-2 bg-transparent border text-gray-700 rounded-md hover:bg-blue-700 hover:text-white"
            >
              Contact Us
            </button>

            {/* Mobile Contact Button */}
            <button
              onClick={scrollToFooter}
              className="md:hidden px-3 py-2 bg-blue-600 text-white text-sm rounded-md"
            >
              Contact
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden ml-4 text-2xl text-gray-700"
              onClick={() => setIsOpen(true)}
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed top-0 left-0 inset-0 bg-black/15 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-gray-300 shadow-lg z-50 transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-gray-700"
          >
            <FiX />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-5">
          {["/", "/about"].map((path) => (
            <Link key={path} href={path} className="relative">
              <span className="text-gray-700">
                {path === "/"
                  ? "Home"
                  : path.substring(1).charAt(0).toUpperCase() +
                    path.substring(2)}

                {pathname === path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-[-2px] h-[2px] bg-blue-500 w-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
