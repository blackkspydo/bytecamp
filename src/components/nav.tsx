"use client";
import React, { useEffect, useState, useRef } from "react";
import Logo from "@/components/icons/logo";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsClient(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <nav className="container flex items-center justify-between py-4">
      <Link href="/" className="text-3xl font-semibold text-[#10B981]">
        <Logo />
      </Link>
      <div className="hidden space-x-4 md:flex">
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <Link href="/courses" className="text-gray-600 hover:text-gray-900">
          Courses
        </Link>
        <div className="group relative">
          <Link href="/pages" className="text-gray-600 hover:text-gray-900">
            Pages
          </Link>
          <div className="absolute mt-1 hidden bg-white p-4 shadow-lg group-hover:block">
            <Link
              href="/subpage1"
              className="block text-gray-600 hover:text-gray-900"
            >
              Subpage 1
            </Link>
            <Link
              href="/subpage2"
              className="block text-gray-600 hover:text-gray-900"
            >
              Subpage 2
            </Link>
          </div>
        </div>
        <Link href="/events" className="text-gray-600 hover:text-gray-900">
          Event
        </Link>
        <Link href="/faqs" className="text-gray-600 hover:text-gray-900">
          FAQs
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-gray-900">
          Contact Us
        </Link>
      </div>
      <div className="hidden items-center space-x-4 md:flex">
        <Link href="/login" className="text-gray-600 hover:text-gray-900">
          Login
        </Link>
        <Link
          href="/signup"
          className="rounded-md bg-[#10B981] px-3 py-2 text-white hover:bg-[#059669]"
        >
          Sign up
        </Link>
      </div>
      <button className="focus:outline-none md:hidden" onClick={toggleMenu}>
        <svg
          className="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed right-0 top-0 z-20 h-screen w-3/4 min-w-[300px] max-w-[400px] transform bg-white shadow-lg transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end p-6">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            </svg>
          </button>
        </div>
        <div className="mt-10 flex flex-col items-center space-y-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="text-gray-600 hover:text-gray-900"
            onClick={toggleMenu}
          >
            Courses
          </Link>
          <Link
            href="/pages"
            className="text-gray-600 hover:text-gray-900"
            onClick={toggleMenu}
          >
            Pages
          </Link>
          <Link
            href="/event"
            className="text-gray-600 hover:text-gray-900"
            onClick={toggleMenu}
          >
            Event
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-900"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          <Link
            href="/login"
            className="text-gray-600 hover:text-gray-900"
            onClick={toggleMenu}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-[#10B981] px-3 py-2 text-white hover:bg-[#059669]"
            onClick={toggleMenu}
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
