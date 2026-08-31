import React from 'react';
import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#1e3a5f] hover:underline mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
      
      <div className="flex items-center gap-3 mb-6">
        <FileText className="w-8 h-8 text-[#1e3a5f]" />
        <h1 className="text-3xl font-bold text-[#1e3a5f]">Terms of Service</h1>
      </div>
      
      <p className="text-slate-500 text-sm mb-8">Last updated: August 2026</p>
      
      <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
          <p>By creating an account or using ProEngineer Connect, you agree to comply with these terms, our code of conduct, and all applicable engineering industry regulations.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">2. Engineer Qualifications</h2>
          <p>Engineers listing services on this platform represent and warrant that all degrees, licenses, and professional certifications uploaded are genuine and valid under relevant governing bodies.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">3. Client Contracts & Payments</h2>
          <p>Clients and engineers agree to conduct fair negotiations, uphold contract milestones, and respect intellectual property rights across all completed project deliverables.</p>
        </section>
      </div>
    </div>
  );
}
