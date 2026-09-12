'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Search, MapPin, Star, ShieldCheck, Filter, 
  ChevronDown, LayoutGrid, List, X, Loader2, UserPlus
} from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { useCurrency } from '@/context/CurrencyContext';

export interface EngineerItem {
  id: string;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  location: string;
  experience: string;
  hourlyRate: number;
  tags: string[];
  available: boolean;
  verified: boolean;
  category: string;
  bio?: string;
}

const CATEGORIES = [
  'All', 'Civil', 'Mechanical', 'Electrical', 'Software', 
  'Chemical', 'Environmental', 'Biomedical', 'Aerospace', 
  'Industrial', 'Petroleum', 'Telecom', 'Mining'
];

export default function EngineersPage() {
  const { currency, symbol, formatRate, exchangeRate } = useCurrency();
  const [engineers, setEngineers] = useState<EngineerItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [location, setLocation] = useState('');
  const [minRate, setMinRate] = useState('');
  const [maxRate, setMaxRate] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('Top Rated');

  useEffect(() => {
    async function fetchEngineers() {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from('engineers')
          .select(`
            id,
            title,
            bio,
            experience_years,
            hourly_rate,
            location,
            country,
            availability_status,
            is_verified,
            rating_average,
            rating_count,
            specializations,
            profiles (
              id,
              full_name,
              avatar_url,
              email
            )
          `);

        if (error) {
          console.error('Error fetching engineers:', error);
          setEngineers([]);
        } else if (data) {
          const list: EngineerItem[] = data
            // Filter out test emails
            .filter((eng: any) => !eng.profiles?.email?.includes('proengineer.test'))
            .map((eng: any) => {
              const name = eng.profiles?.full_name || 'Professional Engineer';
              const title = eng.title || 'Specialist Engineer';
              
              // Infer category from title or specializations
              let cat = 'All';
              for (const c of CATEGORIES) {
                if (c !== 'All' && (title.toLowerCase().includes(c.toLowerCase()) || eng.bio?.toLowerCase().includes(c.toLowerCase()))) {
                  cat = c;
                  break;
                }
              }

              return {
                id: eng.id,
                name,
                title,
                rating: Number(eng.rating_average) || 5.0,
                reviews: Number(eng.rating_count) || 0,
                location: eng.location ? `${eng.location}, ${eng.country || 'GH'}` : 'Ghana',
                experience: `${eng.experience_years || 1} years`,
                hourlyRate: Number(eng.hourly_rate) || 50,
                tags: Array.isArray(eng.specializations) && eng.specializations.length > 0 
                  ? eng.specializations 
                  : [title],
                available: eng.availability_status === 'available',
                verified: Boolean(eng.is_verified),
                category: cat,
                bio: eng.bio,
              };
            });

          setEngineers(list);
        }
      } catch (err) {
        console.error('Failed to load engineers:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchEngineers();
  }, []);

  const filteredEngineers = engineers.filter(eng => {
    if (search && !eng.name.toLowerCase().includes(search.toLowerCase()) && !eng.title.toLowerCase().includes(search.toLowerCase())) return false;
    if (category !== 'All' && eng.category !== category) return false;
    if (location && !eng.location.toLowerCase().includes(location.toLowerCase())) return false;
    
    const rateInCurrentCurrency = currency === 'GHS' ? Math.round(eng.hourlyRate * exchangeRate) : eng.hourlyRate;
    if (minRate && rateInCurrentCurrency < Number(minRate)) return false;
    if (maxRate && rateInCurrentCurrency > Number(maxRate)) return false;
    if (minRating > 0 && eng.rating < minRating) return false;
    if (availableOnly && !eng.available) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'Top Rated') return b.rating - a.rating;
    if (sortBy === 'Price: Low to High') return a.hourlyRate - b.hourlyRate;
    if (sortBy === 'Price: High to Low') return b.hourlyRate - a.hourlyRate;
    return 0;
  });

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  const clearFilters = () => {
    setSearch('');
    setCategory('All');
    setLocation('');
    setMinRate('');
    setMaxRate('');
    setMinRating(0);
    setAvailableOnly(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Find Engineers</h1>
            <p className="text-slate-600">
              {loading ? 'Loading engineers...' : `Showing ${filteredEngineers.length} verified professionals`}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMobileFilterOpen(true)}
              className="md:hidden flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-700 font-medium"
            >
              <Filter className="w-4 h-4" /> Filters
            </button>
            <div className="hidden sm:flex items-center bg-white border border-slate-200 rounded-lg p-1">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-slate-100 text-[#1e3a5f]' : 'text-slate-500 hover:text-slate-700'}`}
                aria-label="Grid View"
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-slate-100 text-[#1e3a5f]' : 'text-slate-500 hover:text-slate-700'}`}
                aria-label="List View"
              >
                <List className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent cursor-pointer"
              >
                <option>Top Rated</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`
            fixed inset-0 z-50 bg-black/50 transition-opacity md:hidden
            ${isMobileFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `} onClick={() => setIsMobileFilterOpen(false)} />
          
          <aside className={`
            fixed inset-y-0 left-0 z-50 w-[280px] bg-white shadow-xl transform transition-transform md:relative md:transform-none md:shadow-none md:z-0 md:bg-transparent md:flex-shrink-0
            ${isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
            <div className="h-full overflow-y-auto md:overflow-visible flex flex-col">
              <div className="p-4 border-b border-slate-200 md:hidden flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900">Filters</h2>
                <button onClick={() => setIsMobileFilterOpen(false)} className="text-slate-500 hover:text-slate-700">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 md:p-0 space-y-6">
                <div>
                  <div className="relative">
                    <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input 
                      type="text" 
                      placeholder="Search engineers by name or skill..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wider">Category</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                    {CATEGORIES.map(cat => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer">
                        <input 
                          type="radio" 
                          name="category"
                          checked={category === cat}
                          onChange={() => setCategory(cat)}
                          className="text-[#1e3a5f] focus:ring-[#1e3a5f] cursor-pointer"
                        />
                        <span className="text-slate-700 text-sm">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wider">Location</h3>
                  <input 
                    type="text" 
                    placeholder="E.g., Accra, Kumasi, Remote"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] text-sm"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wider">Hourly Rate ({symbol})</h3>
                  <div className="flex items-center gap-2">
                    <input 
                      type="number" 
                      placeholder="Min"
                      value={minRate}
                      onChange={(e) => setMinRate(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] text-sm"
                    />
                    <span className="text-slate-400">-</span>
                    <input 
                      type="number" 
                      placeholder="Max"
                      value={maxRate}
                      onChange={(e) => setMaxRate(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wider">Minimum Rating</h3>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        onClick={() => setMinRating(minRating === star ? 0 : star)}
                        className={`p-1 rounded hover:bg-slate-100 ${minRating >= star ? 'text-[#f59e0b]' : 'text-slate-300'}`}
                      >
                        <Star className="w-6 h-6 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={availableOnly}
                      onChange={(e) => setAvailableOnly(e.target.checked)}
                      className="rounded text-[#1e3a5f] focus:ring-[#1e3a5f] w-4 h-4 cursor-pointer"
                    />
                    <span className="text-slate-700 text-sm font-medium">Available Now Only</span>
                  </label>
                </div>

                <div className="pt-4 border-t border-slate-200 flex gap-3">
                  <button 
                    onClick={clearFilters}
                    className="flex-1 py-2 px-4 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                  >
                    Clear
                  </button>
                  <button 
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="flex-1 py-2 px-4 bg-[#1e3a5f] text-white rounded-lg font-medium hover:bg-[#152a45] transition-colors md:hidden"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Results Grid */}
          <main className="flex-1">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-slate-200">
                <Loader2 className="w-10 h-10 animate-spin text-[#1e3a5f] mb-4" />
                <p className="text-slate-500 font-medium">Loading verified engineers...</p>
              </div>
            ) : filteredEngineers.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-[#1e3a5f] mb-4">
                  <UserPlus className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No engineers registered yet</h3>
                <p className="text-slate-500 mb-6 max-w-md mx-auto">
                  {search || category !== 'All'
                    ? 'No registered engineers match your current filters. Try resetting the filters.'
                    : 'Be the first licensed professional to join the marketplace and connect with clients.'}
                </p>
                <div className="flex justify-center gap-3">
                  {(search || category !== 'All') ? (
                    <button onClick={clearFilters} className="text-[#1e3a5f] font-medium hover:underline">
                      Clear all filters
                    </button>
                  ) : (
                    <Link
                      href="/register?role=engineer"
                      className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#152a45] transition-colors"
                    >
                      Join as an Engineer
                    </Link>
                  )}
                </div>
              </div>
            ) : (
              <div className={`
                ${viewMode === 'grid' 
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
                  : 'flex flex-col gap-4'
                }
              `}>
                {filteredEngineers.map(eng => (
                  <div 
                    key={eng.id}
                    className={`
                      bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group
                      ${viewMode === 'list' ? 'flex flex-col sm:flex-row' : 'flex flex-col'}
                    `}
                  >
                    <div className={`p-6 ${viewMode === 'list' ? 'sm:w-[280px] sm:border-r sm:border-slate-100' : ''}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-16 h-16 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center text-xl font-bold shadow-sm">
                          {getInitials(eng.name)}
                        </div>
                        {eng.verified && (
                          <div className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 border border-emerald-100">
                            <ShieldCheck className="w-3.5 h-3.5" /> Verified
                          </div>
                        )}
                      </div>
                      
                      <div className="mb-1">
                        <Link href={`/engineers/${eng.id}`} className="text-xl font-bold text-slate-900 hover:text-[#1e3a5f] transition-colors group-hover:underline">
                          {eng.name}
                        </Link>
                      </div>
                      <p className="text-[#f59e0b] font-medium text-sm mb-3">{eng.title}</p>
                      
                      <div className="flex items-center gap-1.5 mb-2 text-sm text-slate-600">
                        <Star className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                        <span className="font-semibold text-slate-900">{eng.rating}</span>
                        <span>({eng.reviews})</span>
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-sm text-slate-600 mb-4">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        {eng.location}
                      </div>
                    </div>
                    
                    <div className={`p-6 bg-slate-50/50 flex-1 flex flex-col justify-between ${viewMode === 'list' ? 'sm:border-t-0 border-t border-slate-100' : 'border-t border-slate-100'}`}>
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-white border border-slate-200 text-slate-600 px-2.5 py-1 rounded-md text-xs font-medium">
                            {eng.experience}
                          </span>
                          {eng.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="bg-blue-50 border border-blue-100 text-blue-700 px-2.5 py-1 rounded-md text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200/60">
                        <div>
                          <p className="text-xs text-slate-500 uppercase font-semibold tracking-wide">Hourly Rate</p>
                          <p className="text-lg font-bold text-slate-900">{formatRate(eng.hourlyRate, 'USD')}</p>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center gap-1.5 text-xs font-medium">
                            <span className={`w-2 h-2 rounded-full ${eng.available ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                            <span className={eng.available ? 'text-emerald-700' : 'text-red-700'}>
                              {eng.available ? 'Available' : 'Busy'}
                            </span>
                          </div>
                          <Link 
                            href={`/engineers/${eng.id}`}
                            className="bg-white hover:bg-slate-50 border border-[#1e3a5f] text-[#1e3a5f] px-4 py-1.5 rounded-lg text-sm font-medium transition-colors"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
