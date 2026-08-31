"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Find Engineers", href: "/engineers" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-200 ${
        isScrolled
          ? "shadow-md border-b border-slate-200/80 py-3"
          : "border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1e3a5f] flex items-center justify-center text-white shadow-sm transition-all duration-200 group-hover:bg-[#152a45] group-hover:shadow">
              <span className="font-bold text-lg tracking-tight flex items-center">
                PE
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#f59e0b] ml-0.5 mb-1.5"></span>
              </span>
            </div>
            <div className="flex items-baseline">
              <span className="text-xl font-bold tracking-tight text-[#1e3a5f]">
                ProEngineer
              </span>
              <span className="text-[#f59e0b] font-black text-xl leading-none mx-0.5">
                .
              </span>
              <span className="text-xl font-light tracking-tight text-slate-600">
                Connect
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? "text-[#1e3a5f] bg-slate-100 font-semibold"
                      : "text-slate-600 hover:text-[#1e3a5f] hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#1e3a5f] hover:bg-slate-50 rounded-lg transition-colors duration-150"
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2 text-sm font-medium text-white bg-[#1e3a5f] hover:bg-[#2d5a8e] active:bg-[#152a45] rounded-lg shadow-sm hover:shadow transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="p-2 rounded-lg text-slate-600 hover:text-[#1e3a5f] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-[420px] opacity-100 border-b border-slate-200 bg-white"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "text-[#1e3a5f] bg-slate-100 font-semibold"
                      : "text-slate-600 hover:text-[#1e3a5f] hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 text-base font-medium text-slate-700 hover:text-[#1e3a5f] hover:bg-slate-50 rounded-lg transition-colors border border-slate-200"
            >
              Log In
            </Link>
            <Link
              href="/register"
              onClick={() => setIsMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-base font-medium text-white bg-[#1e3a5f] hover:bg-[#2d5a8e] active:bg-[#152a45] rounded-lg shadow-sm transition-colors"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
