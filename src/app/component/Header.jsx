"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaShareAlt, FaAward } from "react-icons/fa"; // Share & Award Icons
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const scrollToFooter = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleShare = async () => {
    const websiteURL = "https://company-g-mfx.vercel.app/";
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Check out this website!",
          url: websiteURL,
        });
      } else {
        await navigator.clipboard.writeText(websiteURL);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="w-full px-6 py-4 bg-blue-300 shadow-md z-50 fixed top-0 left-0">
        <div className="flex justify-between items-center">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <Image src="/GMFX_Logo.png" alt="Company Logo" width={50} height={50} />
            <h1 className="md:text-xl text-sm font-bold text-gray-600">RONI _ LOHUMI</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {["/", "/about", "/awards"].map((path) => (
              <Link key={path} href={path} className="relative group">
                <span
                  className={`relative text-gray-700 ${
                    pathname === path ? "font-bold" : "hover:text-blue-500"
                  }`}
                >
                  {path === "/"
                    ? "Home"
                    : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
                  {pathname === path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute w-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <button
              onClick={scrollToFooter}
              className="px-2 py-2 bg-blue-600 cursor-pointer border-none text-white border rounded-md hover:bg-blue-700 hover:text-white"
            >
              Contact
            </button>
            <button
              onClick={handleShare}
              className="hidden md:flex items-center px-4 cursor-pointer py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              <FaShareAlt className="mr-2" /> Share
            </button>
            
            {/* Awards Icon */}
            <Link href="/awards" className="hidden md:flex items-center px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition">
              <FaAward className="mr-2" /> Awards
            </Link>
            
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

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 inset-0 bg-black/25 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-gray-300 shadow-lg z-50 transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={closeMenu} className="text-2xl text-gray-700">
            <FiX />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-5">
          {["/", "/about", "/awards"].map((path) => (
            <Link key={path} href={path} onClick={closeMenu} className="relative">
              <span className="text-gray-700">
                {path === "/"
                  ? "Home"
                  : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
              </span>
            </Link>
          ))}
          
          {/* Mobile Share Button */}
          <button
            onClick={() => {
              handleShare();
              closeMenu();
            }}
            className="w-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
          >
            <FaShareAlt className="mr-2" /> Share
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;