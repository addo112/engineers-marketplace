import React from 'react';
import Link from 'next/link';
import { Lock, ArrowLeft } from 'lucide-react';

export default function SecurityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#1e3a5f] hover:underline mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
      
      <div className="flex items-center gap-3 mb-6">
        <Lock className="w-8 h-8 text-[#1e3a5f]" />
        <h1 className="text-3xl font-bold text-[#1e3a5f]">Security & Data Protection</h1>
      </div>
      
      <p className="text-slate-500 text-sm mb-8">How we protect clients, engineers, and intellectual property</p>
      
      <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Enterprise-Grade Infrastructure</h2>
          <p>ProEngineer Connect is built with bank-grade security protocols, PostgreSQL Row Level Security (RLS), and end-to-end authenticated data channels.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Escrow & Milestone Protection</h2>
          <p>All project specifications and milestone agreements are safely recorded to provide dispute resolution and clear accountability for engineering deliverables.</p>
        </section>
      </div>
    </div>
  );
}
