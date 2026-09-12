'use client';

import React from 'react';
import Link from 'next/link';
import { Star, MapPin, UserPlus } from 'lucide-react';
import { useCurrency } from '@/context/CurrencyContext';

export interface FeaturedEngineer {
  id: string;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  location: string;
  specialties: string[];
  rawRate: number;
  initials: string;
}

export default function FeaturedEngineersSection({ engineers }: { engineers: FeaturedEngineer[] }) {
  const { formatRate } = useCurrency();

  if (!engineers || engineers.length === 0) {
    return (
      <div className="bg-slate-50 rounded-2xl p-12 text-center border border-slate-200/80">
        <div className="w-16 h-16 bg-blue-50 text-[#1e3a5f] rounded-2xl flex items-center justify-center mx-auto mb-4">
          <UserPlus className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Be the First Verified Engineer</h3>
        <p className="text-slate-600 max-w-md mx-auto mb-6">
          Join our marketplace to showcase your engineering expertise, connect with top firms, and grow your independent practice.
        </p>
        <Link
          href="/register?role=engineer"
          className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#152a45] text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Join as an Engineer
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {engineers.map((engineer) => (
        <div key={engineer.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg border border-slate-100 overflow-hidden transition-shadow flex flex-col h-full">
          <div className="p-6 flex-grow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-16 h-16 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center text-xl font-bold">
                {engineer.initials}
              </div>
              <div className="flex items-center bg-amber-50 px-2 py-1 rounded text-sm font-medium text-amber-700">
                <Star className="w-4 h-4 text-[#f59e0b] mr-1 fill-current" />
                {engineer.rating} ({engineer.reviews})
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800">{engineer.name}</h3>
            <p className="text-[#1e3a5f] font-medium text-sm mb-3">{engineer.title}</p>
            
            <div className="flex items-center text-slate-500 text-sm mb-4">
              <MapPin className="w-4 h-4 mr-1" />
              {engineer.location}
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {engineer.specialties.map((spec, idx) => (
                <span key={idx} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md font-medium">
                  {spec}
                </span>
              ))}
            </div>
          </div>
          
          <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between mt-auto">
            <div className="font-bold text-slate-900">
              {formatRate(engineer.rawRate || 50, 'USD')}
            </div>
            <Link href={`/engineers/${engineer.id}`} className="text-sm font-semibold text-[#1e3a5f] hover:text-[#f59e0b] transition-colors py-1 px-3 border border-[#1e3a5f] rounded-lg hover:bg-[#1e3a5f] hover:text-white">
              View Profile
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
