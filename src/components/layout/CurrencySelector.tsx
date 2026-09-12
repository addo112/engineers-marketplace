'use client';

import React from 'react';
import { useCurrency } from '@/context/CurrencyContext';

export default function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="inline-flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs font-semibold">
      <button
        type="button"
        onClick={() => setCurrency('GHS')}
        className={`px-2 py-1 rounded-md transition-all ${
          currency === 'GHS'
            ? 'bg-[#1e3a5f] text-white shadow-xs'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        title="Switch to Ghana Cedis (GH₵)"
      >
        GH₵ GHS
      </button>
      <button
        type="button"
        onClick={() => setCurrency('USD')}
        className={`px-2 py-1 rounded-md transition-all ${
          currency === 'USD'
            ? 'bg-[#1e3a5f] text-white shadow-xs'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        title="Switch to US Dollars ($)"
      >
        $ USD
      </button>
    </div>
  );
}
