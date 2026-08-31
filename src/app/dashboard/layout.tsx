'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Briefcase, 
  MessageSquare, 
  User, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Bookmark,
  Star,
  FileText
} from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [role, setRole] = useState<'engineer' | 'customer'>('engineer'); // Toggle for demo purposes

  const engineerLinks = [
    { name: 'Overview', href: '/dashboard/engineer', icon: LayoutDashboard },
    { name: 'My Services', href: '/dashboard/engineer/services', icon: Briefcase },
    { name: 'Inquiries', href: '/dashboard/engineer/inquiries', icon: FileText },
    { name: 'Messages', href: '/dashboard/engineer/messages', icon: MessageSquare },
    { name: 'Reviews', href: '/dashboard/engineer/reviews', icon: Star },
    { name: 'Profile', href: '/dashboard/engineer/profile', icon: User },
  ];

  const customerLinks = [
    { name: 'Overview', href: '/dashboard/customer', icon: LayoutDashboard },
    { name: 'My Inquiries', href: '/dashboard/customer/inquiries', icon: FileText },
    { name: 'Saved Engineers', href: '/dashboard/customer/saved', icon: Bookmark },
    { name: 'Messages', href: '/dashboard/customer/messages', icon: MessageSquare },
    { name: 'Profile', href: '/dashboard/customer/profile', icon: User },
  ];

  const links = role === 'engineer' ? engineerLinks : customerLinks;

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile sidebar backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-[260px] bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex lg:flex-col
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* User Info */}
        <div className="p-6 border-b border-slate-200 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center text-xl font-bold mb-3 shadow-sm">
            {role === 'engineer' ? 'KA' : 'CM'}
          </div>
          <h2 className="text-lg font-semibold text-slate-900 text-center">
            {role === 'engineer' ? 'Kwame Asare' : 'Customer Name'}
          </h2>
          <span className="mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
            {role === 'engineer' ? 'Structural Engineer' : 'Client'}
          </span>
          
          {/* Demo role toggle */}
          <button 
            onClick={() => setRole(r => r === 'engineer' ? 'customer' : 'engineer')}
            className="mt-4 text-xs text-blue-600 underline"
          >
            Switch to {role === 'engineer' ? 'Customer' : 'Engineer'} view
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${isActive 
                    ? 'bg-[#1e3a5f]/10 text-[#1e3a5f]' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}
                `}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#1e3a5f]' : 'text-slate-400'}`} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-200">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Log Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-30 h-16 flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-slate-500 hover:text-slate-900 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            
            {/* Breadcrumb area */}
            <div className="hidden sm:block">
              <span className="text-slate-500 font-medium capitalize">
                Dashboard <span className="mx-2 text-slate-300">/</span> {pathname.split('/').pop() || 'Overview'}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <Link href="/" className="text-sm font-medium text-[#1e3a5f] hidden sm:block mr-2 hover:underline">
               Back to Home
             </Link>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
