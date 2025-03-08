"use client";
import Link from "next/link";
import Image from "next/image";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <Image src="/gmfx_1img.png" alt="Company Logo" width={100} height={40} />
          <p className="mt-4 text-gray-400">
            We provide top-notch solutions for your business. Your success is our mission.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <FiMail className="text-blue-400" />
              <a href="mailto:ronilohumi9@gmail.com" className="hover:text-blue-400">
              ronilohumi9@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-blue-400" />
              <a href="tel:+919917846166" className="hover:text-blue-400">
                +91 9917846166
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-blue-400" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Garur,+Bageshwar,+Uttarakhand,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                Garur, Bageshwar, Uttarakhand (India)
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links & Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400">
                About Us
              </Link>
            </li>
          </ul>

          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/profile.php?id=100062536662157" className="text-gray-400 hover:text-blue-400">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/crematorium_7/" className="text-gray-400 hover:text-blue-400">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Dev @ Nitin Lohumi All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
