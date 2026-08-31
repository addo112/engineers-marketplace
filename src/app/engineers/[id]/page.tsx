import React from 'react';
import Link from 'next/link';
import { 
  MapPin, Star, ShieldCheck, Heart, Award, 
  Clock, Briefcase, Zap, CheckCircle2, ChevronLeft,
  ExternalLink, MessageSquare, FileText
} from 'lucide-react';

const ENGINEER = {
  id: '1',
  name: 'Kwame Asante',
  title: 'Senior Civil Engineer',
  rating: 4.9,
  reviews: 47,
  location: 'Accra, Ghana',
  experience: '15 years',
  hourlyRate: 85,
  tags: ['Structural Engineering', 'Concrete Design', 'Bridge Construction', 'AutoCAD Civil 3D'],
  available: true,
  verified: true,
  projectsCompleted: 124,
  responseTime: '< 2 hours',
  bio: `I am a licensed Senior Civil Engineer with over 15 years of experience specializing in structural engineering, concrete design, and large-scale infrastructure projects. I have a proven track record of successfully delivering complex construction projects on time and within budget, adhering to strict safety and quality standards.

My approach combines innovative design with practical engineering solutions. I am highly proficient in modern engineering software including AutoCAD Civil 3D, SAP2000, and Revit. Whether you need structural analysis, foundation design, or comprehensive project management, I bring deep technical expertise and strong leadership to every engagement.

Based in Accra, I have extensive knowledge of local building codes and international standards (BS, Eurocode, ACI). I am passionate about sustainable construction practices and resilient infrastructure design.`,
  certifications: [
    'Professional Engineer (PE) - Ghana Institution of Engineering',
    'Project Management Professional (PMP)',
    'LEED AP Building Design + Construction'
  ],
  services: [
    {
      title: 'Structural Analysis & Design',
      description: 'Comprehensive structural analysis and detailed design for residential, commercial, and industrial buildings.',
      priceRange: '$1,000 - $5,000',
      delivery: '2-4 weeks'
    },
    {
      title: 'Foundation Design',
      description: 'Geotechnical evaluation and design of shallow and deep foundations tailored to site conditions.',
      priceRange: '$500 - $2,500',
      delivery: '1-2 weeks'
    },
    {
      title: 'Project Management & Supervision',
      description: 'On-site construction supervision, quality control, and comprehensive project management services.',
      priceRange: '$85/hr',
      delivery: 'Ongoing'
    }
  ],
  reviewsList: [
    {
      id: 1,
      name: 'Osei Tutu',
      initials: 'OT',
      date: 'August 12, 2023',
      rating: 5,
      comment: 'Kwame delivered exceptional structural designs for our new commercial complex in Kumasi. His attention to detail and deep understanding of local codes saved us significant time during the approval process. Highly recommended!',
      projectType: 'Commercial Design'
    },
    {
      id: 2,
      name: 'Sarah Mensah',
      initials: 'SM',
      date: 'June 28, 2023',
      rating: 5,
      comment: 'Very professional and responsive. We needed a quick assessment of an existing foundation, and Kwame provided a comprehensive report within days. His expertise is evident.',
      projectType: 'Structural Assessment'
    },
    {
      id: 3,
      name: 'David Ofori',
      initials: 'DO',
      date: 'April 05, 2023',
      rating: 4,
      comment: 'Great work on the bridge design. Solid communication throughout the project phases. Would definitely hire again for future infrastructure projects.',
      projectType: 'Infrastructure'
    }
  ],
  ratingBreakdown: {
    5: 41,
    4: 5,
    3: 1,
    2: 0,
    1: 0
  }
};

export default function EngineerProfilePage() {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/engineers" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#1e3a5f] font-medium mb-6 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Search
        </Link>

        {/* Top Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
          <div className="h-32 bg-gradient-to-r from-[#1e3a5f] to-[#2a5286]"></div>
          <div className="px-6 sm:px-8 pb-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 -mt-16 sm:-mt-20">
              <div className="flex flex-col sm:flex-row sm:items-end gap-6">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white bg-[#1e3a5f] text-white flex items-center justify-center text-5xl font-bold shadow-md shrink-0">
                  {getInitials(ENGINEER.name)}
                </div>
                <div className="mb-2">
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-3xl font-bold text-slate-900">{ENGINEER.name}</h1>
                    {ENGINEER.verified && (
                      <div className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full text-sm font-semibold flex items-center gap-1.5 border border-emerald-100" title="Identity and credentials verified">
                        <ShieldCheck className="w-4 h-4" /> <span className="hidden sm:inline">Verified</span>
                      </div>
                    )}
                  </div>
                  <p className="text-xl text-[#f59e0b] font-medium mb-3">{ENGINEER.title}</p>
                  <div className="flex flex-wrap items-center gap-4 text-slate-600 text-sm font-medium">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4.5 h-4.5 text-slate-400" />
                      {ENGINEER.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-4.5 h-4.5 text-slate-400" />
                      {ENGINEER.experience} exp.
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4.5 h-4.5 fill-[#f59e0b] text-[#f59e0b]" />
                      <span className="text-slate-900">{ENGINEER.rating}</span>
                      <span>({ENGINEER.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:pb-2">
                <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors">
                  <Heart className="w-5 h-5" /> Save
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white font-bold rounded-xl hover:bg-[#152a45] shadow-md transition-all">
                  <MessageSquare className="w-5 h-5" /> Contact Engineer
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">About</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                {ENGINEER.bio.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Skills & Certifications */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Expertise & Credentials</h2>
              
              <div className="mb-8">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Specializations</h3>
                <div className="flex flex-wrap gap-2.5">
                  {ENGINEER.tags.map(tag => (
                    <span key={tag} className="bg-slate-100 text-slate-700 px-3.5 py-1.5 rounded-lg text-sm font-semibold border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Certifications & Licenses</h3>
                <ul className="space-y-3">
                  {ENGINEER.certifications.map((cert, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <Award className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                      <span className="font-medium">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Services Offered */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Services Offered</h2>
              <div className="space-y-4">
                {ENGINEER.services.map((service, i) => (
                  <div key={i} className="border border-slate-200 rounded-xl p-5 hover:border-[#1e3a5f]/30 transition-colors bg-slate-50/50">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                      <div className="text-left sm:text-right shrink-0">
                        <div className="text-lg font-bold text-[#1e3a5f]">{service.priceRange}</div>
                        <div className="text-sm text-slate-500 flex items-center gap-1 sm:justify-end mt-1">
                          <Clock className="w-3.5 h-3.5" /> {service.delivery} delivery
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews Section */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Client Reviews</h2>
              
              <div className="flex flex-col md:flex-row gap-8 mb-10 pb-10 border-b border-slate-100">
                <div className="flex flex-col items-center justify-center min-w-[150px]">
                  <div className="text-6xl font-black text-slate-900 mb-2">{ENGINEER.rating}</div>
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className={`w-5 h-5 ${star <= Math.round(ENGINEER.rating) ? 'fill-[#f59e0b] text-[#f59e0b]' : 'fill-slate-100 text-slate-200'}`} />
                    ))}
                  </div>
                  <div className="text-slate-500 font-medium">{ENGINEER.reviews} reviews</div>
                </div>

                <div className="flex-1 space-y-2">
                  {[5, 4, 3, 2, 1].map(star => {
                    const count = ENGINEER.ratingBreakdown[star as keyof typeof ENGINEER.ratingBreakdown];
                    const percentage = (count / ENGINEER.reviews) * 100;
                    return (
                      <div key={star} className="flex items-center gap-3">
                        <div className="flex items-center gap-1 w-12 text-sm font-medium text-slate-600">
                          {star} <Star className="w-3.5 h-3.5 fill-current" />
                        </div>
                        <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#f59e0b] rounded-full" 
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <div className="w-8 text-right text-sm text-slate-500">{count}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-6">
                {ENGINEER.reviewsList.map(review => (
                  <div key={review.id} className="pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold">
                          {review.initials}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">{review.name}</div>
                          <div className="text-xs text-slate-500">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star key={star} className={`w-4 h-4 ${star <= review.rating ? 'fill-[#f59e0b] text-[#f59e0b]' : 'fill-slate-100 text-slate-200'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed mb-3">{review.comment}</p>
                    <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold">
                      Project: {review.projectType}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-5">At a Glance</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <div className="text-slate-500 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Projects Completed
                  </div>
                  <div className="font-bold text-slate-900">{ENGINEER.projectsCompleted}</div>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <div className="text-slate-500 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" /> Experience
                  </div>
                  <div className="font-bold text-slate-900">{ENGINEER.experience}</div>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <div className="text-slate-500 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Response Time
                  </div>
                  <div className="font-bold text-slate-900">{ENGINEER.responseTime}</div>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="text-slate-500 flex items-center gap-2">
                    <FileText className="w-4 h-4" /> Hourly Rate
                  </div>
                  <div className="font-bold text-slate-900">${ENGINEER.hourlyRate}/hr</div>
                </div>
              </div>
            </div>

            {/* Availability & Actions */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className={`w-3 h-3 rounded-full ${ENGINEER.available ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                  <div className={`absolute inset-0 rounded-full animate-ping opacity-75 ${ENGINEER.available ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                </div>
                <div>
                  <div className="font-bold text-slate-900">
                    {ENGINEER.available ? 'Available for Work' : 'Currently Busy'}
                  </div>
                  <div className="text-sm text-slate-500">Usually responds within 2 hours</div>
                </div>
              </div>
              
              <button className="w-full bg-[#1e3a5f] text-white font-bold py-3.5 rounded-xl hover:bg-[#152a45] shadow-md transition-all mb-3 flex items-center justify-center gap-2">
                Send Inquiry <ChevronLeft className="w-4 h-4 rotate-180" />
              </button>
              <p className="text-xs text-center text-slate-500">No payment required to inquire</p>
            </div>

            {/* Links */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-4">Links & Portfolio</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group">
                  <span className="font-medium text-slate-700 group-hover:text-[#1e3a5f]">Portfolio Website</span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#1e3a5f]" />
                </a>
                <a href="#" className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group">
                  <span className="font-medium text-slate-700 group-hover:text-[#1e3a5f]">LinkedIn Profile</span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#1e3a5f]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
