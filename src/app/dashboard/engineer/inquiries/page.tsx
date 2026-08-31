import { Eye, Check, X } from 'lucide-react';

export default function InquiriesPage() {
  const mockInquiries = [
    { id: 'INQ-001', subject: 'Structural Assessment for 3-Story Building', client: 'Aba Mensah', date: 'Oct 12, 2026', budget: 'GHS 3,000 - 5,000', status: 'Pending', statusColor: 'bg-yellow-100 text-yellow-800' },
    { id: 'INQ-002', subject: 'Soil Testing for New Development', client: 'Kofi Osei', date: 'Oct 10, 2026', budget: 'GHS 1,500', status: 'Accepted', statusColor: 'bg-emerald-100 text-emerald-800' },
    { id: 'INQ-003', subject: 'Bridge Foundation Consultation', client: 'Ghana Highways', date: 'Oct 05, 2026', budget: 'GHS 10,000+', status: 'Completed', statusColor: 'bg-blue-100 text-blue-800' },
    { id: 'INQ-004', subject: 'Warehouse Roof Redesign', client: 'Logistics Co.', date: 'Sep 28, 2026', budget: 'GHS 8,000', status: 'Declined', statusColor: 'bg-red-100 text-red-800' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Project Inquiries</h1>
        <p className="text-slate-500 mt-1">Manage requests from potential clients.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-sm font-semibold text-slate-900">Inquiry Details</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-900">Client</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-900">Budget</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-900">Status</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-900 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {mockInquiries.map((inq) => (
                <tr key={inq.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-slate-900">{inq.subject}</p>
                    <p className="text-xs text-slate-500 mt-1">{inq.id} • {inq.date}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">{inq.client}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{inq.budget}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${inq.statusColor}`}>
                      {inq.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    {inq.status === 'Pending' && (
                      <>
                        <button title="Accept" className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors">
                          <Check className="w-4 h-4" />
                        </button>
                        <button title="Decline" className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors">
                          <X className="w-4 h-4" />
                        </button>
                      </>
                    )}
                    <button title="View Details" className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500">
          <span>Showing 1 to 4 of 4 entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded border border-slate-200 hover:bg-slate-50 disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 rounded bg-[#1e3a5f] text-white">1</button>
            <button className="px-3 py-1 rounded border border-slate-200 hover:bg-slate-50 disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
