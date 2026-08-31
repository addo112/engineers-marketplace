import { Star, Trash2, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function SavedEngineersPage() {
  const mockEngineers = [
    { id: 1, name: 'Dr. Mensah Osei', type: 'Civil Engineer', rating: '4.9', reviews: 42, location: 'Accra, Greater Accra', initials: 'MO' },
    { id: 2, name: 'Sarah Kumi', type: 'Electrical Engineer', rating: '4.8', reviews: 28, location: 'Kumasi, Ashanti', initials: 'SK' },
    { id: 3, name: 'David Appiah', type: 'Mechanical Engineer', rating: '5.0', reviews: 15, location: 'Takoradi, Western', initials: 'DA' },
    { id: 4, name: 'Kwame Asare', type: 'Structural Engineer', rating: '4.7', reviews: 34, location: 'Tema, Greater Accra', initials: 'KA' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Saved Engineers</h1>
        <p className="text-slate-500 mt-1">Engineers you've bookmarked for future projects.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockEngineers.map((eng) => (
          <div key={eng.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-6 text-center flex-1">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#1e3a5f] text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-sm">
                {eng.initials}
              </div>
              <h3 className="font-bold text-slate-900 text-lg">{eng.name}</h3>
              <p className="text-sm text-blue-600 font-medium mb-2">{eng.type}</p>
              
              <div className="flex items-center justify-center gap-1 text-sm text-slate-600 mb-2">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-slate-900">{eng.rating}</span>
                <span>({eng.reviews} reviews)</span>
              </div>
              
              <div className="flex items-center justify-center gap-1 text-xs text-slate-500">
                <MapPin className="w-3.5 h-3.5" /> {eng.location}
              </div>
            </div>
            
            <div className="border-t border-slate-200 bg-slate-50 p-4 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-colors">
                <Trash2 className="w-4 h-4" /> Remove
              </button>
              <Link href={`/engineers/${eng.id}`} className="flex items-center justify-center px-3 py-2 rounded-lg text-sm font-medium text-white bg-[#1e3a5f] hover:bg-[#152a46] transition-colors">
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
