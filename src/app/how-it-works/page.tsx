import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Search,
  FileText,
  MessageSquare,
  Handshake,
  UserPlus,
  Briefcase,
  Bell,
  TrendingUp,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Star,
  Sparkles,
  SlidersHorizontal,
  Clock,
  Send,
  Calendar,
  DollarSign,
  Check,
  HelpCircle,
  Award,
  Layers,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works | ProEngineer Connect',
  description:
    'Discover how ProEngineer Connect works for both clients seeking verified engineering experts and licensed engineers looking to expand their consultancy business.',
};

export default function HowItWorksPage() {
  const customerSteps = [
    {
      number: '01',
      icon: Search,
      title: 'Search for Engineers',
      description:
        'Browse our curated directory of certified engineers across 12+ specialized engineering disciplines. Filter by discipline (Civil, Electrical, Mechanical, Software, Environmental, etc.), location, hourly rates, certifications, and years of experience to pinpoint the exact specialist for your project requirements.',
      visualMockup: (
        <div className="bg-slate-900 text-slate-200 rounded-xl p-4 sm:p-5 border border-slate-800 shadow-lg text-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
            <div className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold text-white">Engineering Directory</span>
            </div>
            <span className="text-[10px] bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full font-medium">500+ Active</span>
          </div>

          <div className="bg-slate-800/80 rounded-lg p-2.5 mb-3 flex items-center justify-between text-slate-300">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
              <span>Civil & Structural • Ghana • 10+ Yrs Exp</span>
            </div>
            <span className="text-amber-400 font-semibold text-[11px]">Filtered</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between bg-slate-800/40 p-2 rounded border border-slate-700/50">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#1e3a5f] text-amber-400 flex items-center justify-center font-bold text-[10px]">KA</div>
                <div>
                  <div className="text-white font-medium text-[11px]">Kwame Asante, PE</div>
                  <div className="text-slate-400 text-[10px]">Senior Civil Engineer • Kumasi</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-amber-400 font-bold text-[11px]">$120/hr</div>
                <div className="text-emerald-400 text-[9px] flex items-center gap-0.5">
                  <Star className="w-2.5 h-2.5 fill-current" /> 4.9 (47)
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between bg-slate-800/40 p-2 rounded border border-slate-700/50">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-[10px]">AO</div>
                <div>
                  <div className="text-white font-medium text-[11px]">Abena Owusu, PE</div>
                  <div className="text-slate-400 text-[10px]">Environmental & Water • Accra</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-amber-400 font-bold text-[11px]">$110/hr</div>
                <div className="text-emerald-400 text-[9px] flex items-center gap-0.5">
                  <Star className="w-2.5 h-2.5 fill-current" /> 4.9 (41)
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '02',
      icon: FileText,
      title: 'Review Profiles & Portfolios',
      description:
        'Dive deep into authenticated profiles. Inspect government & engineering board licenses (GhIE, PE, COREN), verified academic credentials, comprehensive project case studies, CAD blueprints, and authentic reviews from verified past clients.',
      visualMockup: (
        <div className="bg-white text-slate-800 rounded-xl p-4 sm:p-5 border border-slate-200 shadow-md text-xs">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1e3a5f] text-amber-400 font-bold flex items-center justify-center text-sm">
                AM
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-900 text-sm">Ama Mensah</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-slate-500 text-[11px]">Power Systems & Renewable Energy</span>
              </div>
            </div>
            <span className="bg-emerald-50 text-emerald-700 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-200">
              GhIE Certified
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-100 mb-3 text-center">
            <div>
              <div className="font-bold text-slate-900">10+ Yrs</div>
              <div className="text-[10px] text-slate-400">Experience</div>
            </div>
            <div>
              <div className="font-bold text-slate-900">38</div>
              <div className="text-[10px] text-slate-400">Completed</div>
            </div>
            <div>
              <div className="font-bold text-emerald-600 flex items-center justify-center gap-0.5">
                <Star className="w-3 h-3 fill-current text-amber-500" /> 4.8
              </div>
              <div className="text-[10px] text-slate-400">35 Reviews</div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100">
            <div className="text-[11px] font-semibold text-slate-800 mb-1">Featured Case Study:</div>
            <p className="text-[10px] text-slate-500 line-clamp-2">
              &ldquo;500kW Industrial Rooftop Solar Installation & Grid Synchronization for Tema Manufacturing Hub.&rdquo;
            </p>
          </div>
        </div>
      ),
    },
    {
      number: '03',
      icon: MessageSquare,
      title: 'Send Project Inquiries',
      description:
        'Submit a detailed project brief directly to your selected engineer. Specify your scope of work, technical requirements, desired timelines, and budget range. The engineer receives your inquiry instantly and replies with clarification or a tailored proposal.',
      visualMockup: (
        <div className="bg-slate-900 text-slate-200 rounded-xl p-4 sm:p-5 border border-slate-800 shadow-lg text-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-1.5 font-semibold text-white">
              <Send className="w-3.5 h-3.5 text-amber-400" />
              <span>Project Inquiry Form</span>
            </div>
            <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">Direct Connect</span>
          </div>

          <div className="space-y-2">
            <div className="bg-slate-800/80 p-2 rounded">
              <div className="text-[10px] text-slate-400 uppercase font-bold">Subject</div>
              <div className="text-white text-[11px] font-medium">Structural Integrity Audit for 10-Story Tower</div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-800/80 p-2 rounded">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Estimated Budget</div>
                <div className="text-amber-400 font-semibold text-[11px]">$20,000 - $50,000</div>
              </div>
              <div className="bg-slate-800/80 p-2 rounded">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Target Timeline</div>
                <div className="text-slate-200 font-medium text-[11px]">8 - 12 Weeks</div>
              </div>
            </div>

            <div className="bg-slate-800/40 p-2 rounded border border-slate-700/60 text-[10px] text-slate-300">
              &ldquo;We require complete seismic & load calculations, soil test reviews, and stamped structural drawings...&rdquo;
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '04',
      icon: Handshake,
      title: 'Start Collaborating',
      description:
        'Once terms are aligned, collaborate directly with your engineer. Share architectural blueprints, technical documentation, and site data. Review iterative deliverables and bring your engineering project across the finish line with complete transparency.',
      visualMockup: (
        <div className="bg-white text-slate-800 rounded-xl p-4 sm:p-5 border border-slate-200 shadow-md text-xs space-y-2.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="font-bold text-slate-900 text-[11px]">Active Milestone Tracker</span>
            <span className="text-[10px] font-semibold text-[#1e3a5f] bg-blue-50 px-2 py-0.5 rounded">In Progress</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-200/60">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span className="text-[11px] font-medium text-emerald-900">1. Feasibility & Soil Analysis</span>
              </div>
              <span className="text-[10px] font-semibold text-emerald-700">Completed</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-amber-50 border border-amber-200/60">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px]">
                  <Clock className="w-2.5 h-2.5" />
                </div>
                <span className="text-[11px] font-medium text-amber-900">2. CAD Structural Blueprints</span>
              </div>
              <span className="text-[10px] font-semibold text-amber-700">80% Done</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200/60 text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-slate-300 text-white flex items-center justify-center text-[10px]">
                  3
                </div>
                <span className="text-[11px] font-medium">3. Final Engineering Stamped Report</span>
              </div>
              <span className="text-[10px]">Upcoming</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const engineerSteps = [
    {
      number: '01',
      icon: UserPlus,
      title: 'Create Your Profile',
      description:
        'Register your account and build an impressive professional profile. Upload your professional engineering credentials (GhIE, PE, COREN, etc.), university degrees, certifications, years of experience, and specialized engineering disciplines.',
      visualMockup: (
        <div className="bg-white text-slate-800 rounded-xl p-4 sm:p-5 border border-slate-200 shadow-md text-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="font-bold text-slate-900 text-[11px]">Engineer Onboarding</span>
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Step 1 of 2
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
              <span className="text-slate-600 text-[11px]">GhIE Professional License</span>
              <span className="text-emerald-600 font-bold text-[10px] bg-white px-2 py-0.5 rounded border border-slate-200">Verified ✓</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
              <span className="text-slate-600 text-[11px]">BSc / MSc Mechanical Eng</span>
              <span className="text-emerald-600 font-bold text-[10px] bg-white px-2 py-0.5 rounded border border-slate-200">Verified ✓</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
              <span className="text-slate-600 text-[11px]">Identity & Background Check</span>
              <span className="text-emerald-600 font-bold text-[10px] bg-white px-2 py-0.5 rounded border border-slate-200">Passed ✓</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '02',
      icon: Briefcase,
      title: 'List Your Services',
      description:
        'Showcase the exact engineering services you provide. Define structured packages with clear scopes, whether based on hourly rates or fixed milestone fees. Upload high-resolution diagrams, calculations, and case studies to prove your craftsmanship.',
      visualMockup: (
        <div className="bg-slate-900 text-slate-200 rounded-xl p-4 sm:p-5 border border-slate-800 shadow-lg text-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="font-semibold text-white">Service Package Setup</span>
            <span className="text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded text-[10px] font-medium">Published</span>
          </div>

          <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-white font-bold text-[11px]">HVAC & Energy Efficiency Design</div>
                <div className="text-slate-400 text-[10px]">Commercial & Industrial Buildings</div>
              </div>
              <span className="text-amber-400 font-bold text-[11px]">$3,500 - $12,000</span>
            </div>
            <div className="text-[10px] text-slate-300">
              Includes full heat load calculations, ductwork CAD schematics, and equipment BOQ.
            </div>
            <div className="flex items-center gap-2 pt-1 text-[9px] text-slate-400">
              <Clock className="w-3 h-3 text-amber-400" /> Delivery: 2-3 Weeks
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '03',
      icon: Bell,
      title: 'Receive Inquiries',
      description:
        'Get notified immediately when businesses, developers, and project leaders request your expertise. Review project specifications, deliverables, and budgets. Accept projects that fit your availability and start direct conversations.',
      visualMockup: (
        <div className="bg-white text-slate-800 rounded-xl p-4 sm:p-5 border border-slate-200 shadow-md text-xs space-y-2.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[11px]">
              <Bell className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              <span>New Client Project Request</span>
            </div>
            <span className="text-[10px] bg-blue-50 text-[#1e3a5f] font-semibold px-2 py-0.5 rounded">Just Now</span>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-900 text-[11px]">Tema Port Expansion Phase 2</span>
              <span className="font-bold text-emerald-600 text-[11px]">$45,000</span>
            </div>
            <p className="text-[10px] text-slate-500">
              &ldquo;Looking for a certified maritime & civil engineer to review crane foundation calculations...&rdquo;
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="bg-[#1e3a5f] text-white px-2.5 py-1 rounded text-[10px] font-semibold">Accept & Respond</span>
              <span className="bg-slate-200 text-slate-700 px-2.5 py-1 rounded text-[10px] font-medium">Decline</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Grow Your Business',
      description:
        'Deliver outstanding work, earn verified 5-star reviews from satisfied clients, build your regional and international reputation, and scale your independent engineering practice or consultancy firm.',
      visualMockup: (
        <div className="bg-slate-900 text-slate-200 rounded-xl p-4 sm:p-5 border border-slate-800 shadow-lg text-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="font-semibold text-white">Consultancy Analytics</span>
            <span className="text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded text-[10px]">Top Rated</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/50">
              <div className="text-[10px] text-slate-400">Total Consultations</div>
              <div className="text-lg font-bold text-white mt-0.5">52 Projects</div>
              <div className="text-[9px] text-emerald-400 mt-1">↑ +18% this quarter</div>
            </div>
            <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/50">
              <div className="text-[10px] text-slate-400">Client Rating</div>
              <div className="text-lg font-bold text-amber-400 mt-0.5 flex items-center gap-1">
                <Star className="w-4 h-4 fill-current" /> 4.9 <span className="text-slate-400 text-xs">/ 5.0</span>
              </div>
              <div className="text-[9px] text-slate-400 mt-1">100% On-Time Delivery</div>
            </div>
          </div>

          <div className="p-2 rounded bg-slate-800/40 border border-slate-700/60 flex items-center justify-between text-[10px]">
            <span className="text-slate-300">Verified Platform Badge</span>
            <span className="text-amber-400 font-semibold">Pro Master Engineer</span>
          </div>
        </div>
      ),
    },
  ];

  const faqs = [
    {
      question: 'How much does it cost to use ProEngineer Connect?',
      answer:
        'Browsing our verified engineering directory, reviewing portfolios, and sending project inquiries is completely free for clients. Engineers can set up their profiles and list services at no initial cost. Transparent service fees or direct project contracts are agreed upon between the client and engineer based on the specific scope of work.',
    },
    {
      question: 'How are engineers verified?',
      answer:
        'Our compliance committee thoroughly reviews every engineer before granting a verified badge. We verify national engineering council registrations (such as the Ghana Institution of Engineering - GhIE, Council of Registered Engineers - COREN, or international PE licenses), authenticate university degrees, inspect past project drawings and case studies, and confirm professional references.',
    },
    {
      question: 'What types of engineering projects can I find help with?',
      answer:
        'ProEngineer Connect covers 12+ engineering disciplines, including Civil & Structural Engineering, Mechanical & HVAC, Electrical & Renewable Power, Environmental & Water Resources, Chemical & Process Design, Software & Embedded Systems, Biomedical Equipment, Telecommunications, Mining, and Industrial Engineering.',
    },
    {
      question: 'How do I contact an engineer?',
      answer:
        'Once you discover an engineer whose skillset and experience align with your project requirements, simply click the "Contact Engineer" or "Send Inquiry" button on their profile. You will be prompted to provide a project title, scope description, estimated budget, and target timeline.',
    },
    {
      question: 'Can I hire engineers from other countries?',
      answer:
        'Yes! ProEngineer Connect supports cross-border engineering consultancy. You can hire engineers across Ghana, West Africa, the wider continent, and internationally. For projects requiring local site inspections or physical stamped engineering submissions, you can easily filter for locally licensed engineers in your specific region.',
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer:
        'We encourage all clients and engineers to establish clear milestone agreements, deliverables, and review stages prior to commencing work. In the rare event of a dispute, our platform support team provides mediation assistance to review project milestones against the agreed scope of work.',
    },
    {
      question: 'How do engineers get paid?',
      answer:
        'Engineers and clients can agree upon fixed milestone payouts or hourly billing. Payout terms and deliverable sign-offs are tracked transparently through the project inquiry workflow.',
    },
    {
      question: 'Is my data and project information secure on the platform?',
      answer:
        'Yes. We enforce enterprise-grade data protection, encrypted communications, and strict privacy protocols. Proprietary project blueprints, CAD files, architectural drawings, and confidential business documentation uploaded to the platform remain strictly confidential.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1e3a5f] text-white py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 right-10 w-96 h-96 rounded-full bg-amber-400 blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-96 h-96 rounded-full bg-blue-400 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-amber-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Simple, Transparent & Reliable Process</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6 max-w-4xl mx-auto">
            How <span className="text-amber-400">ProEngineer Connect</span> Works
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto mb-10">
            Whether you are a business looking to hire certified engineering talent or a licensed engineer seeking high-impact projects, our streamlined platform makes connection, collaboration, and delivery seamless.
          </p>

          {/* Quick Jump Navigation */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 p-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 max-w-md mx-auto">
            <a
              href="#for-customers"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-colors text-center shadow-sm"
            >
              For Customers & Businesses
            </a>
            <a
              href="#for-engineers"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors text-center border border-white/10"
            >
              For Licensed Engineers
            </a>
          </div>
        </div>
      </section>

      {/* For Customers Section */}
      <section id="for-customers" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#1e3a5f] font-semibold text-xs tracking-wider uppercase mb-3">
            <Search className="w-3.5 h-3.5 text-amber-500" />
            <span>For Customers & Clients</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Hire Vetted Engineering Experts in 4 Steps
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4">
            Discover how easy it is to find, review, and collaborate with top-rated engineering consultants for your infrastructure, energy, or software ventures.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {customerSteps.map((step, idx) => {
            const IconComponent = step.icon;
            const isEven = idx % 2 === 1;

            return (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl font-extrabold text-amber-500">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#1e3a5f] text-white flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="text-base text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-sm font-semibold text-[#1e3a5f]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Streamlined client workflow</span>
                  </div>
                </div>

                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {step.visualMockup}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/engineers"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#1e3a5f] hover:bg-[#152a45] text-white font-semibold text-base transition-colors shadow-md"
          >
            <span>Start Searching Engineers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* For Engineers Section */}
      <section id="for-engineers" className="py-20 lg:py-28 bg-slate-100/90 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 font-semibold text-xs tracking-wider uppercase mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>For Engineers & Consultants</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Grow Your Engineering Practice in 4 Steps
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4">
              Monetize your technical expertise, land premium contracts, and establish yourself as an authority in your engineering domain.
            </p>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {engineerSteps.map((step, idx) => {
              const IconComponent = step.icon;
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#1e3a5f]">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="text-base text-slate-600 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-sm font-semibold text-amber-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Dedicated engineer support</span>
                    </div>
                  </div>

                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    {step.visualMockup}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/auth/register?role=engineer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-base transition-colors shadow-md"
            >
              <span>Join as an Engineer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#1e3a5f] font-semibold text-xs tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4">
            Everything you need to know about hiring engineers, verification, and getting started on ProEngineer Connect.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white rounded-xl border border-slate-200/90 p-5 sm:p-6 transition-all duration-200 open:shadow-md open:border-slate-300"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-slate-900 text-base sm:text-lg select-none gap-4">
                <span>{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 group-open:text-amber-600 transition-transform duration-200 shrink-0" />
              </summary>
              <div className="mt-3 pt-3 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e3a5f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-400 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Empowering Engineering Projects Worldwide</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto">
            Ready to Get Started?
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Find the right engineering consultant for your project today, or sign up as a certified engineer and access high-value client opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/engineers"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-base transition-colors shadow-lg hover:shadow-amber-500/20"
            >
              <Search className="w-4 h-4" />
              <span>Find an Engineer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/auth/register?role=engineer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 transition-colors"
            >
              <UserPlus className="w-4 h-4" />
              <span>Join as an Engineer</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
