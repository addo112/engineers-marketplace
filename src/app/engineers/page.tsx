'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, MapPin, Star, ShieldCheck, Filter, 
  ChevronDown, LayoutGrid, List, X
} from 'lucide-react';

const MOCK_ENGINEERS = [
  {
    id: '1',
    name: 'Kwame Asante',
    title: 'Senior Civil Engineer',
    rating: 4.9,
    reviews: 47,
    location: 'Accra, Ghana',
    experience: '15 years',
    hourlyRate: 85,
    tags: ['Structural', 'Concrete', 'Bridge Design'],
    available: true,
    verified: true,
    category: 'Civil',
  },
  {
    id: '2',
    name: 'Akua Mensah',
    title: 'Electrical Engineer',
    rating: 4.8,
    reviews: 32,
    location: 'Kumasi, Ghana',
    experience: '8 years',
    hourlyRate: 65,
    tags: ['Power Systems', 'Renewable Energy', 'AutoCAD'],
    available: true,
    verified: true,
    category: 'Electrical',
  },
  {
    id: '3',
    name: 'Kofi Osei',
    title: 'Mechanical Design Engineer',
    rating: 4.7,
    reviews: 21,
    location: 'Takoradi, Ghana',
    experience: '12 years',
    hourlyRate: 75,
    tags: ['HVAC', 'Fluid Mechanics', 'SolidWorks'],
    available: false,
    verified: true,
    category: 'Mechanical',
  },
  {
    id: '4',
    name: 'Abena Frimpong',
    title: 'Software Engineer',
    rating: 5.0,
    reviews: 89,
    location: 'Remote',
    experience: '6 years',
    hourlyRate: 90,
    tags: ['React', 'Node.js', 'System Architecture'],
    available: true,
    verified: true,
    category: 'Software',
  },
  {
    id: '5',
    name: 'Yaw Boakye',
    title: 'Chemical Engineer',
    rating: 4.6,
    reviews: 15,
    location: 'Tema, Ghana',
    experience: '10 years',
    hourlyRate: 70,
    tags: ['Process Design', 'Petrochemical', 'Safety'],
    available: true,
    verified: false,
    category: 'Chemical',
  },
  {
    id: '6',
    name: 'Ama Serwaa',
    title: 'Environmental Engineer',
    rating: 4.9,
    reviews: 41,
    location: 'Tamale, Ghana',
    experience: '9 years',
    hourlyRate: 60,
    tags: ['Water Treatment', 'EIA', 'Sustainability'],
    available: true,
    verified: true,
    category: 'Environmental',
  },
  {
    id: '7',
    name: 'Kwabena Yeboah',
    title: 'Biomedical Engineer',
    rating: 4.8,
    reviews: 28,
    location: 'Accra, Ghana',
    experience: '7 years',
    hourlyRate: 80,
    tags: ['Medical Devices', 'Biomechanics', 'R&D'],
    available: false,
    verified: true,
    category: 'Biomedical',
  },
  {
    id: '8',
    name: 'Yaa Ansah',
    title: 'Industrial Engineer',
    rating: 4.7,
    reviews: 19,
    location: 'Kumasi, Ghana',
    experience: '11 years',
    hourlyRate: 75,
    tags: ['Supply Chain', 'Optimization', 'Lean Six Sigma'],
    available: true,
    verified: true,
    category: 'Industrial',
  },
];

const CATEGORIES = [
  'All', 'Civil', 'Mechanical', 'Electrical', 'Software', 
  'Chemical', 'Environmental', 'Biomedical', 'Aerospace', 
  'Industrial', 'Petroleum', 'Telecom', 'Mining'
];

export default function EngineersPage() {
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

  const filteredEngineers = MOCK_ENGINEERS.filter(eng => {
    if (search && !eng.name.toLowerCase().includes(search.toLowerCase()) && !eng.title.toLowerCase().includes(search.toLowerCase())) return false;
    if (category !== 'All' && eng.category !== category) return false;
    if (location && !eng.location.toLowerCase().includes(location.toLowerCase())) return false;
    if (minRate && eng.hourlyRate < Number(minRate)) return false;
    if (maxRate && eng.hourlyRate > Number(maxRate)) return false;
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
            <p className="text-slate-600">Showing {filteredEngineers.length} results</p>
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
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-slate-100 text-[#1e3a5f]' : 'text-slate-500 hover:text-slate-700'}`}
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
                      placeholder="Search engineers..."
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
                    placeholder="E.g., Accra, Remote"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] text-sm"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wider">Hourly Rate ($)</h3>
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
            {filteredEngineers.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">No engineers found</h3>
                <p className="text-slate-500 mb-6 max-w-md mx-auto">We couldn't find any engineers matching your current filters. Try adjusting your search criteria.</p>
                <button onClick={clearFilters} className="text-[#1e3a5f] font-medium hover:underline">
                  Clear all filters
                </button>
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
                          <p className="text-lg font-bold text-slate-900">${eng.hourlyRate}<span className="text-sm font-normal text-slate-500">/hr</span></p>
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
