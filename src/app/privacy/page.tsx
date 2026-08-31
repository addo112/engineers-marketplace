import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#1e3a5f] hover:underline mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
      
      <div className="flex items-center gap-3 mb-6">
        <ShieldCheck className="w-8 h-8 text-[#1e3a5f]" />
        <h1 className="text-3xl font-bold text-[#1e3a5f]">Privacy Policy & Trust Standards</h1>
      </div>
      
      <p className="text-slate-500 text-sm mb-8">Last updated: August 2026</p>
      
      <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you create an account, complete an engineer profile, submit project briefs, send inquiries, or communicate with other users on ProEngineer Connect.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">2. Engineer Verification & Credentials</h2>
          <p>For engineers offering specialized services, we collect professional licenses, institutional memberships (e.g. Ghana Institution of Engineering), and work experience data solely to verify your professional standing.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Use Information</h2>
          <p>We use the information we collect to operate, protect, and improve the marketplace, match businesses with qualified engineers, process inquiries, and ensure platform safety and compliance.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">4. Data Security</h2>
          <p>All user communication and credentials are encrypted using industry-standard protocols. We never sell your personal or business data to third-party advertisers.</p>
        </section>
      </div>
    </div>
  );
}
