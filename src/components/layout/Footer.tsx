import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Share2,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white border-t border-[#152a45]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-sm transition-colors group-hover:bg-white/20">
                <span className="font-bold text-lg tracking-tight flex items-center">
                  PE
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#f59e0b] ml-0.5 mb-1.5"></span>
                </span>
              </div>
              <div className="flex items-baseline">
                <span className="text-xl font-bold tracking-tight text-white">
                  ProEngineer
                </span>
                <span className="text-[#f59e0b] font-black text-xl leading-none mx-0.5">
                  .
                </span>
                <span className="text-xl font-light tracking-tight text-slate-300">
                  Connect
                </span>
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-sm text-slate-300 leading-relaxed">
              The premier marketplace connecting verified professional engineers
              with leading businesses, engineering firms, and ambitious project
              owners worldwide.
            </p>

            {/* Verified badge highlight */}
            <div className="pt-2 flex items-center gap-2 text-xs font-medium text-amber-400 bg-white/5 py-2 px-3 rounded-lg border border-white/10 w-fit">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>100% Verified Licensed Engineers</span>
            </div>
          </div>

          {/* Column 2: Engineers */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-amber-400">
              For Engineers
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/engineers"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  Browse Engineering Roles
                </Link>
              </li>
              <li>
                <Link
                  href="/register?role=engineer"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  Join as an Engineer
                </Link>
              </li>
              <li>
                <Link
                  href="/engineers/civil"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  Civil & Structural
                </Link>
              </li>
              <li>
                <Link
                  href="/engineers/electrical"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  Electrical & Power Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/engineers/mechanical"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  Mechanical & Industrial
                </Link>
              </li>
              <li>
                <Link
                  href="/engineers/software"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  Software & Embedded
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customers / Clients */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-amber-400">
              For Clients
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/post-project"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  Post a Project
                </Link>
              </li>
              <li>
                <Link
                  href="/engineers"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  Find Expert Engineers
                </Link>
              </li>
              <li>
                <Link
                  href="/enterprise"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/safety"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  Trust & Security Guarantee
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  Pricing & Escrow Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-amber-400">
              Contact & Support
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>100 Innovation Way, Suite 400, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href="mailto:support@proengineerconnect.com"
                  className="hover:text-white hover:underline transition-colors"
                >
                  support@proengineerconnect.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href="tel:+18005550199"
                  className="hover:text-white hover:underline transition-colors"
                >
                  +1 (800) 555-0199
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-xs text-slate-400 mb-3">
                Connect with our community:
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#2d5a8e] flex items-center justify-center text-slate-200 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#2d5a8e] flex items-center justify-center text-slate-200 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#2d5a8e] flex items-center justify-center text-slate-200 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#152a45]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            &copy; 2024 ProEngineer Connect. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <Link
              href="/privacy"
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-200 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/security"
              className="hover:text-slate-200 transition-colors"
            >
              Security
            </Link>
            <Link
              href="/cookies"
              className="hover:text-slate-200 transition-colors"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
