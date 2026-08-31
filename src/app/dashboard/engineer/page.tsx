import { FileText, Briefcase, Star, Eye, ArrowRight, User } from 'lucide-react';
import Link from 'next/link';

export default function EngineerDashboardPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Welcome back, Kwame! 👋</h1>
        <p className="text-slate-500 mt-1">Here's what's happening with your engineering profile today.</p>
      </div>

      {/* Stats Row */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Inquiries', value: '24', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-100' },
          { label: 'Active Projects', value: '5', icon: Briefcase, color: 'text-emerald-600', bg: 'bg-emerald-100' },
          { label: 'Average Rating', value: '4.9', icon: Star, color: 'text-amber-600', bg: 'bg-amber-100' },
          { label: 'Profile Views', value: '1,247', icon: Eye, color: 'text-purple-600', bg: 'bg-purple-100' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
            <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Inquiries */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200 flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-900">Recent Inquiries</h2>
            <Link href="/dashboard/engineer/inquiries" className="text-sm font-medium text-[#1e3a5f] hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="divide-y divide-slate-200">
            {[
              { subject: 'Structural Assessment for 3-Story Building', client: 'Aba Mensah', date: 'Oct 12, 2026', status: 'Pending', statusColor: 'bg-yellow-100 text-yellow-800' },
              { subject: 'Soil Testing for New Development', client: 'Kofi Osei', date: 'Oct 10, 2026', status: 'Accepted', statusColor: 'bg-emerald-100 text-emerald-800' },
              { subject: 'Bridge Foundation Consultation', client: 'Ghana Highways', date: 'Oct 05, 2026', status: 'Completed', statusColor: 'bg-blue-100 text-blue-800' },
            ].map((item, i) => (
              <div key={i} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                <div>
                  <h4 className="font-medium text-slate-900">{item.subject}</h4>
                  <p className="text-sm text-slate-500 mt-1">From: {item.client} • {item.date}</p>
                </div>
                <div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions & Reviews */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link href="/dashboard/engineer/profile" className="flex items-center gap-3 w-full p-3 rounded-lg border border-slate-200 hover:border-[#1e3a5f] hover:bg-slate-50 transition-colors">
                <User className="w-5 h-5 text-slate-500" />
                <span className="font-medium text-slate-700">Edit Profile</span>
              </Link>
              <Link href="/dashboard/engineer/services" className="flex items-center gap-3 w-full p-3 rounded-lg border border-slate-200 hover:border-[#1e3a5f] hover:bg-slate-50 transition-colors">
                <Briefcase className="w-5 h-5 text-slate-500" />
                <span className="font-medium text-slate-700">Manage Services</span>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="p-5 border-b border-slate-200">
              <h2 className="text-lg font-bold text-slate-900">Recent Reviews</h2>
            </div>
            <div className="p-5 space-y-4">
              <div className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                <div className="flex text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm text-slate-600 line-clamp-2">"Excellent work on the foundation assessment. Very thorough and professional."</p>
                <p className="text-xs text-slate-400 mt-2">— Ekow Smith</p>
              </div>
              <div className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                <div className="flex text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm text-slate-600 line-clamp-2">"Delivered the structural plans ahead of schedule. Highly recommended!"</p>
                <p className="text-xs text-slate-400 mt-2">— Abena Yeboah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
