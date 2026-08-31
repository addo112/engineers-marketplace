import { FileText, Bookmark, MessageSquare, CheckCircle, ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';

export default function CustomerDashboardPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Welcome, Adwoa! 👋</h1>
        <p className="text-slate-500 mt-1">Manage your engineering projects and finding new talent.</p>
      </div>

      {/* Stats Row */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Active Inquiries', value: '3', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-100' },
          { label: 'Saved Engineers', value: '12', icon: Bookmark, color: 'text-emerald-600', bg: 'bg-emerald-100' },
          { label: 'Messages', value: '8', icon: MessageSquare, color: 'text-amber-600', bg: 'bg-amber-100' },
          { label: 'Completed Projects', value: '5', icon: CheckCircle, color: 'text-purple-600', bg: 'bg-purple-100' },
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
            <Link href="/dashboard/customer/inquiries" className="text-sm font-medium text-[#1e3a5f] hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="divide-y divide-slate-200">
            {[
              { subject: 'Structural Assessment', engineer: 'Kwame Asare', date: 'Oct 12, 2026', status: 'Pending', statusColor: 'bg-yellow-100 text-yellow-800' },
              { subject: 'Soil Testing', engineer: 'Ama Dapaah', date: 'Oct 10, 2026', status: 'Accepted', statusColor: 'bg-emerald-100 text-emerald-800' },
              { subject: 'Site Survey', engineer: 'Kojo Antwi', date: 'Oct 05, 2026', status: 'Completed', statusColor: 'bg-blue-100 text-blue-800' },
            ].map((item, i) => (
              <div key={i} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                <div>
                  <h4 className="font-medium text-slate-900">{item.subject}</h4>
                  <p className="text-sm text-slate-500 mt-1">To: {item.engineer} • {item.date}</p>
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

        {/* Quick Actions */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link href="/engineers" className="flex items-center gap-3 w-full p-3 rounded-lg bg-[#1e3a5f] text-white hover:bg-[#152a46] transition-colors">
                <Search className="w-5 h-5" />
                <span className="font-medium">Find Engineers</span>
              </Link>
              <Link href="/dashboard/customer/inquiries" className="flex items-center gap-3 w-full p-3 rounded-lg border border-slate-200 hover:border-[#1e3a5f] hover:bg-slate-50 transition-colors">
                <FileText className="w-5 h-5 text-slate-500" />
                <span className="font-medium text-slate-700">View Inquiries</span>
              </Link>
              <Link href="/dashboard/customer/saved" className="flex items-center gap-3 w-full p-3 rounded-lg border border-slate-200 hover:border-[#1e3a5f] hover:bg-slate-50 transition-colors">
                <Bookmark className="w-5 h-5 text-slate-500" />
                <span className="font-medium text-slate-700">Saved Engineers</span>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="p-5 border-b border-slate-200">
              <h2 className="text-lg font-bold text-slate-900">Recommended Engineers</h2>
            </div>
            <div className="p-5 space-y-4">
              {[
                { name: 'Dr. Mensah Osei', type: 'Civil Engineer', rating: '4.9' },
                { name: 'Sarah Kumi', type: 'Electrical Engineer', rating: '4.8' },
                { name: 'David Appiah', type: 'Mechanical Engineer', rating: '5.0' },
              ].map((eng, i) => (
                <div key={i} className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
                      {eng.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{eng.name}</p>
                      <p className="text-xs text-slate-500">{eng.type} • ⭐ {eng.rating}</p>
                    </div>
                  </div>
                  <button className="text-xs font-medium text-[#1e3a5f] hover:underline">View</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
