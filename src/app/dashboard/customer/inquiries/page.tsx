import { Eye, X } from 'lucide-react';

export default function CustomerInquiriesPage() {
  const mockInquiries = [
    { id: 'INQ-001', subject: 'Structural Assessment', engineer: 'Kwame Asare', date: 'Oct 12, 2026', budget: 'GHS 3,000 - 5,000', status: 'Pending', statusColor: 'bg-yellow-100 text-yellow-800' },
    { id: 'INQ-002', subject: 'Soil Testing', engineer: 'Ama Dapaah', date: 'Oct 10, 2026', budget: 'GHS 1,500', status: 'Accepted', statusColor: 'bg-emerald-100 text-emerald-800' },
    { id: 'INQ-003', subject: 'Site Survey', engineer: 'Kojo Antwi', date: 'Oct 05, 2026', budget: 'GHS 2,000', status: 'Completed', statusColor: 'bg-blue-100 text-blue-800' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">My Inquiries</h1>
        <p className="text-slate-500 mt-1">Track the status of your project requests.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-sm font-semibold text-slate-900">Project Details</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-900">Engineer</th>
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
                  <td className="px-6 py-4 text-sm text-slate-700">{inq.engineer}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{inq.budget}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${inq.statusColor}`}>
                      {inq.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    {inq.status === 'Pending' && (
                      <button title="Cancel Request" className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors">
                        <X className="w-4 h-4" />
                      </button>
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
      </div>
    </div>
  );
}
