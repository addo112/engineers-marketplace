'use client';

import { useState } from 'react';
import { Camera, Save } from 'lucide-react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Profile Settings</h1>
        <p className="text-slate-500 mt-1">Manage your public profile and account settings.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="flex border-b border-slate-200 overflow-x-auto">
          {['personal', 'professional', 'specializations'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-[#1e3a5f] text-[#1e3a5f]'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Info
            </button>
          ))}
        </div>

        <div className="p-6 md:p-8">
          {activeTab === 'personal' && (
            <div className="space-y-6 max-w-2xl">
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
                  <span className="text-3xl font-bold text-slate-500">KA</span>
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

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input type="text" defaultValue="Kwame" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input type="text" defaultValue="Asare" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" defaultValue="kwame.a@example.com" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none bg-slate-50" readOnly />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" defaultValue="+233 24 123 4567" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'professional' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Professional Title</label>
                <input type="text" defaultValue="Senior Structural Engineer" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none" />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Years of Experience</label>
                  <input type="number" defaultValue="8" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Hourly Rate (GHS)</label>
                  <input type="number" defaultValue="150" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Professional Bio</label>
                <textarea rows={5} defaultValue="I am a licensed structural engineer with over 8 years of experience designing robust and efficient structures in Ghana. I specialize in both residential and commercial buildings." className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none"></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Availability</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="availability" defaultChecked className="text-[#1e3a5f] focus:ring-[#1e3a5f]" />
                    <span className="text-sm text-slate-700">Available for work</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="availability" className="text-[#1e3a5f] focus:ring-[#1e3a5f]" />
                    <span className="text-sm text-slate-700">Currently busy</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'specializations' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-3">Engineering Disciplines</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {['Civil', 'Structural', 'Electrical', 'Mechanical', 'Geotechnical', 'Environmental'].map((spec) => (
                    <label key={spec} className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                      <input type="checkbox" defaultChecked={spec === 'Civil' || spec === 'Structural'} className="rounded text-[#1e3a5f] focus:ring-[#1e3a5f] w-4 h-4" />
                      <span className="text-sm text-slate-700">{spec} Engineering</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Certifications & Licenses</label>
                <input type="text" placeholder="Add certification and press Enter" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none mb-3" />
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-slate-100 text-slate-700">
                    GhIE Member
                    <button className="hover:text-red-500">&times;</button>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-slate-100 text-slate-700">
                    Licensed Professional Engineer
                    <button className="hover:text-red-500">&times;</button>
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-slate-200 flex justify-end">
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
