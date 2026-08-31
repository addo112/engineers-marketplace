'use client';

import { useState } from 'react';
import { Send, Search, Info } from 'lucide-react';

interface MessagesViewProps {
  userRole: 'engineer' | 'customer';
}

export default function MessagesView({ userRole }: MessagesViewProps) {
  const [activeChat, setActiveChat] = useState(1);
  const [message, setMessage] = useState('');

  const contacts = [
    { id: 1, name: userRole === 'engineer' ? 'Aba Mensah' : 'Kwame Asare', role: userRole === 'engineer' ? 'Client' : 'Structural Engineer', lastMsg: 'Thanks, I will review the proposal.', time: '10:42 AM', unread: 2 },
    { id: 2, name: userRole === 'engineer' ? 'Kofi Osei' : 'Ama Dapaah', role: userRole === 'engineer' ? 'Client' : 'Civil Engineer', lastMsg: 'When can we schedule a call?', time: 'Yesterday', unread: 0 },
    { id: 3, name: userRole === 'engineer' ? 'Ghana Highways' : 'David Appiah', role: userRole === 'engineer' ? 'Corporate Client' : 'Mechanical Engineer', lastMsg: 'The site visit is confirmed for Friday.', time: 'Mon', unread: 0 },
  ];

  const activeContact = contacts.find(c => c.id === activeChat);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle send
      setMessage('');
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] min-h-[600px] flex flex-col md:flex-row bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      
      {/* Contact List */}
      <div className="w-full md:w-80 lg:w-96 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col">
        <div className="p-4 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full bg-slate-100 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => setActiveChat(contact.id)}
              className={`w-full text-left p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors flex gap-3 ${
                activeChat === contact.id ? 'bg-blue-50/50' : ''
              }`}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center font-bold">
                  {contact.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                </div>
                {contact.unread > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                    {contact.unread}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-semibold text-slate-900 truncate">{contact.name}</h3>
                  <span className="text-xs text-slate-500 whitespace-nowrap ml-2">{contact.time}</span>
                </div>
                <p className="text-xs text-blue-600 mb-1">{contact.role}</p>
                <p className={`text-sm truncate ${contact.unread > 0 ? 'text-slate-900 font-medium' : 'text-slate-500'}`}>
                  {contact.lastMsg}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col h-full bg-slate-50">
        {/* Chat Header */}
        <div className="h-16 px-6 bg-white border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center font-bold">
              {activeContact?.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">{activeContact?.name}</h3>
              <p className="text-xs text-slate-500">{activeContact?.role}</p>
            </div>
          </div>
          <button className="text-slate-400 hover:text-[#1e3a5f]">
            <Info className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="text-center">
            <span className="text-xs text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-200">Today</span>
          </div>
          
          <div className="flex gap-3 max-w-[80%]">
            <div className="w-8 h-8 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center text-xs font-bold shrink-0">
              {activeContact?.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </div>
            <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700">
              Hello! I'm reviewing the initial proposal for the structural assessment. Could we clarify a few points regarding the timeline?
              <div className="text-[10px] text-slate-400 mt-2 text-right">10:30 AM</div>
            </div>
          </div>

          <div className="flex gap-3 max-w-[80%] ml-auto justify-end">
            <div className="bg-[#1e3a5f] text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm">
              Hi {activeContact?.name.split(' ')[0]}! Absolutely. The proposed 2-week timeline includes site visits and initial drafting. What specific dates were you aiming for?
              <div className="text-[10px] text-blue-200 mt-2 text-right">10:35 AM</div>
            </div>
          </div>

          <div className="flex gap-3 max-w-[80%]">
            <div className="w-8 h-8 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center text-xs font-bold shrink-0">
              {activeContact?.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </div>
            <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700">
              Thanks, I will review the proposal again and get back to you with preferred dates.
              <div className="text-[10px] text-slate-400 mt-2 text-right">10:42 AM</div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-200 shrink-0">
          <form onSubmit={handleSend} className="flex gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-slate-100 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
            />
            <button
              type="submit"
              disabled={!message.trim()}
              className="w-10 h-10 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#152a46] transition-colors shrink-0"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
