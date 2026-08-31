'use client';

import { Camera, Save } from 'lucide-react';

export default function CustomerProfilePage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Profile Settings</h1>
        <p className="text-slate-500 mt-1">Manage your account information and preferences.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 md:p-8 space-y-8">
          
          {/* Avatar Section */}
          <div className="flex items-center gap-6 pb-6 border-b border-slate-100">
            <div className="relative w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
              <span className="text-3xl font-bold text-slate-500">CM</span>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-900">Profile Picture</h3>
              <p className="text-sm text-slate-500 mb-3">JPG, GIF or PNG. Max size of 2MB.</p>
              <button className="text-sm font-medium text-[#1e3a5f] bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                Change Picture
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                <input type="text" defaultValue="Adwoa" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                <input type="text" defaultValue="Mensah" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" defaultValue="adwoa.m@example.com" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none bg-slate-50" readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input type="tel" defaultValue="+233 20 987 6543" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none" />
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Company Name (Optional)</label>
                <input type="text" defaultValue="BuildRight Construction" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Industry</label>
                <select className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none bg-white">
                  <option>Real Estate</option>
                  <option selected>Construction</option>
                  <option>Architecture</option>
                  <option>Individual/Personal</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 flex justify-end">
            <button className="flex items-center gap-2 bg-[#1e3a5f] text-white px-6 py-2.5 rounded-lg hover:bg-[#152a46] transition-colors font-medium shadow-sm">
              <Save className="w-5 h-5" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
