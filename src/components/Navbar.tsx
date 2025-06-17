"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlinePushpin,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import Container from "./Container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isFloating, setIsFloating] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Clear any existing timeout for scroll stop detection
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Case 1: At the very top of the page
      if (currentScrollY === 0) {
        setIsVisible(true);
        setIsFloating(false); // Full navbar visible
      }
      // Case 2: Scrolling down (and not at the very top)
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide the navbar
        setIsFloating(false);
      }
      // Case 3: Scrolling up (and not at the very top)
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Show the navbar
        setIsFloating(true); // Show the floating bottom bar
      }

      // Set a timeout to check if scrolling has stopped.
      // If scrolling stops, and we are not at the top, ensure the floating bar is visible.
      scrollTimeoutRef.current = setTimeout(() => {
        if (window.scrollY > 0 && !isVisible) {
          // If currently hidden and not at top
          setIsVisible(true);
          setIsFloating(true);
        }
      }, 200); // Adjust this delay as needed

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [lastScrollY, isVisible]); // isVisible dependency is crucial here for the timeout logic

  return (
    <nav
      className={`fixed w-full z-[999] transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Top Row: Social, Brand, Search */}
      <div
        className={`py-3 overflow-hidden bg-[#FAEBD6] ${
          isFloating ? "hidden" : ""
        }`}
      >
        <Container className="flex justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-600 transition-colors">
              <AiOutlineInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              <AiOutlineYoutube className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              <AiOutlinePushpin className="h-6 w-6" />
            </a>
          </div>

          {/* Brand Name */}
          <div className="flex-grow text-center">
            <Link href="/" className="text-4xl text-gray-900 font-denk">
              Waffle House
            </Link>
          </div>

          {/* Search Icon */}
          <div className="flex items-center">
            <button
              className="text-gray-900 hover:text-gray-600 transition-colors"
              aria-label="Search"
            >
              <AiOutlineSearch className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </div>

      {/* Bottom Row: Navigation Links */}
      <Container className={`${isFloating ? "mt-3 mx-3" : ""}`}>
        <div
          className={`py-3 relative bg-[rgb(235,231,228)] rounded-full border-2 border-[rgb(188,160,103)] shadow-[0px_3px_0px_0px_rgb(188,160,103)] ${
            isFloating ? "shadow-lg" : ""
          }`}
        >
          <div className="hidden md:flex justify-center space-x-10 relative z-10">
            <Link
              href="/"
              className="text-gray-900 hover:text-[rgb(188,160,103)] transition-colors text-lg font-medium py-2 px-4 rounded-full font-['Bai Jamjuree']"
            >
              Home
            </Link>
            <Link
              href="#menu"
              className="text-gray-900 hover:text-[rgb(188,160,103)] transition-colors text-lg font-medium py-2 px-4 rounded-full font-['Bai Jamjuree']"
            >
              Menu
            </Link>
            <Link
              href="#signature-bites"
              className="text-gray-900 hover:text-[rgb(188,160,103)] transition-colors text-lg font-medium py-2 px-4 rounded-full font-['Bai Jamjuree']"
            >
              Signature Bites
            </Link>
            <Link
              href="#gallery"
              className="text-gray-900 hover:text-[rgb(188,160,103)] transition-colors text-lg font-medium py-2 px-4 rounded-full font-['Bai Jamjuree']"
            >
              Gallery
            </Link>
            <Link
              href="#branches"
              className="text-gray-900 hover:text-[rgb(188,160,103)] transition-colors text-lg font-medium py-2 px-4 rounded-full font-['Bai Jamjuree']"
            >
              Branches
            </Link>
            <Link
              href="#contact"
              className="text-gray-900 hover:text-[rgb(188,160,103)] transition-colors text-lg font-medium py-2 px-4 rounded-full font-['Bai Jamjuree']"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-gray-600 transition-colors p-2 rounded-md"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <AiOutlineClose className="h-8 w-8" />
              ) : (
                <AiOutlineMenu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-200 shadow-lg py-4 transition-all duration-300 ease-in-out transform origin-top">
          <div className="px-2 pt-2 pb-3 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-900 hover:bg-gray-300 rounded-md transition-colors font-['Bai Jamjuree']"
            >
              Home
            </Link>
            <Link
              href="#menu"
              className="block px-3 py-2 text-gray-900 hover:bg-gray-300 rounded-md transition-colors font-['Bai Jamjuree']"
            >
              Menu
            </Link>
            <Link
              href="#signature-bites"
              className="block px-3 py-2 text-gray-900 hover:bg-gray-300 rounded-md transition-colors font-['Bai Jamjuree']"
            >
              Signature Bites
            </Link>
            <Link
              href="#gallery"
              className="block px-3 py-2 text-gray-900 hover:bg-gray-300 rounded-md transition-colors font-['Bai Jamjuree']"
            >
              Gallery
            </Link>
            <Link
              href="#branches"
              className="block px-3 py-2 text-gray-900 hover:bg-gray-300 rounded-md transition-colors font-['Bai Jamjuree']"
            >
              Branches
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-gray-900 hover:bg-gray-300 rounded-md transition-colors font-['Bai Jamjuree']"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
