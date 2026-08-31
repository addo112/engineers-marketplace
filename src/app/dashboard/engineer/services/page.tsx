'use client';

import { useState } from 'react';
import { Plus, Edit2, Trash2, X } from 'lucide-react';

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mockServices = [
    {
      id: 1,
      title: 'Structural Assessment',
      category: 'Civil Engineering',
      description: 'Comprehensive assessment of building structural integrity.',
      price: 'GHS 2,500',
      active: true,
    },
    {
      id: 2,
      title: 'Foundation Design',
      category: 'Structural Engineering',
      description: 'Custom foundation design for residential and commercial buildings.',
      price: 'GHS 4,000',
      active: true,
    },
    {
      id: 3,
      title: 'Site Inspection & Reporting',
      category: 'Civil Engineering',
      description: 'Detailed site inspection with comprehensive technical reporting.',
      price: 'GHS 1,500',
      active: false,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Services</h1>
          <p className="text-slate-500 mt-1">Manage the engineering services you offer to clients.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-[#1e3a5f] text-white px-4 py-2.5 rounded-lg hover:bg-[#152a46] transition-colors font-medium"
        >
          <Plus className="w-5 h-5" />
          Add Service
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {mockServices.map((service) => (
          <div key={service.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                  {service.category}
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked={service.active} />
                  <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1e3a5f]"></div>
                </label>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-600 line-clamp-3 mb-4">{service.description}</p>
              <p className="font-semibold text-slate-900">{service.price}</p>
            </div>
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end gap-3">
              <button className="text-slate-500 hover:text-[#1e3a5f] flex items-center gap-1 text-sm font-medium transition-colors">
                <Edit2 className="w-4 h-4" /> Edit
              </button>
              <button className="text-slate-500 hover:text-red-600 flex items-center gap-1 text-sm font-medium transition-colors">
                <Trash2 className="w-4 h-4" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Service Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">Add New Service</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Service Title</label>
                <input type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none" placeholder="e.g. Residential Structural Design" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                <select className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none bg-white">
                  <option>Civil Engineering</option>
                  <option>Structural Engineering</option>
                  <option>Electrical Engineering</option>
                  <option>Mechanical Engineering</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                <textarea rows={4} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none" placeholder="Describe what is included in this service..."></textarea>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Price (GHS)</label>
                  <input type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none" placeholder="e.g. 2500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Estimated Delivery</label>
                  <input type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none" placeholder="e.g. 2 weeks" />
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-slate-200 bg-slate-50 flex justify-end gap-3 rounded-b-xl">
              <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50">
                Cancel
              </button>
              <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 text-sm font-medium text-white bg-[#1e3a5f] rounded-lg hover:bg-[#152a46]">
                Save Service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
