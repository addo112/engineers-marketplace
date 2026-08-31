import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
  Users,
  Globe,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Compass,
  Briefcase,
  Layers,
  GraduationCap,
  Target,
  HeartHandshake,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | ProEngineer Connect',
  description:
    'Learn about ProEngineer Connect — our mission, our story, core values, leadership team, and our commitment to connecting world-class engineers with impactful projects across Africa and worldwide.',
};

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Verification',
      description:
        'Every engineer on ProEngineer Connect undergoes thorough vetting — including verification of academic degrees, professional engineering council licenses (such as GhIE, PE, COREN), and rigorous portfolio reviews.',
      accentBg: 'bg-blue-50 text-blue-700 border-blue-100',
      iconBg: 'bg-[#1e3a5f] text-amber-400',
    },
    {
      icon: Users,
      title: 'Community First',
      description:
        'We cultivate a collaborative ecosystem of engineering professionals. Through mentorship programs, peer design reviews, and knowledge sharing, we elevate the entire engineering discipline together.',
      accentBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      iconBg: 'bg-emerald-600 text-white',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description:
        'Engineering talent has no borders. We connect African engineering excellence with infrastructure, industrial, and software initiatives globally while enabling cross-border technical consultancy.',
      accentBg: 'bg-amber-50 text-amber-700 border-amber-100',
      iconBg: 'bg-amber-500 text-slate-900',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'We champion uncompromised engineering quality and ethical standards. From initial feasibility studies to final commissioning, our community adheres to strict international engineering benchmarks.',
      accentBg: 'bg-purple-50 text-purple-700 border-purple-100',
      iconBg: 'bg-purple-600 text-white',
    },
  ];

  const teamMembers = [
    {
      name: 'Ing. Dr. Kwame Mensah-Bonsu',
      role: 'Co-Founder & Chief Executive Officer',
      initials: 'KM',
      badgeColor: 'bg-[#1e3a5f] text-amber-400 border-[#2d5a8e]',
      credentials: 'PhD, PE, FGhIE',
      discipline: 'Civil & Structural Engineering',
      bio: 'Former lead infrastructure engineer with over 18 years overseeing landmark highway, bridge, and industrial projects across West Africa. Passionate about leveraging digital systems to scale engineering procurement.',
      highlight: '18+ Years Industry Leadership',
    },
    {
      name: 'Nana Akosua Serwaa Boateng',
      role: 'Co-Founder & Chief Product Officer',
      initials: 'NB',
      badgeColor: 'bg-amber-500 text-slate-950 border-amber-300',
      credentials: 'MSc Systems Eng, BEng',
      discipline: 'Systems & Software Engineering',
      bio: 'Pioneering technologist with 12+ years building enterprise SaaS and engineering workflow automation. Led engineering product teams across Accra, Nairobi, and London prior to founding ProEngineer Connect.',
      highlight: 'Ex-Enterprise Product Lead',
    },
    {
      name: 'Ing. Kofi Osei-Tutu',
      role: 'Chief Engineering & Compliance Officer',
      initials: 'KO',
      badgeColor: 'bg-emerald-700 text-white border-emerald-500',
      credentials: 'MSc, PMP, MGhIE',
      discipline: 'Mechanical & Power Systems',
      bio: 'Certified Project Management Professional and senior mechanical systems specialist. Directs the engineering verification council, licensing audits, and quality assurance framework for the platform.',
      highlight: 'Lead Credential Auditor',
    },
  ];

  const stats = [
    {
      number: '500+',
      label: 'Verified Engineers',
      sublabel: 'Licensed & vetted across 12 disciplines',
    },
    {
      number: '1,200+',
      label: 'Completed Projects',
      sublabel: 'From structural designs to power plants',
    },
    {
      number: '15+',
      label: 'Countries Served',
      sublabel: 'Pan-African & global project delivery',
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      sublabel: 'Based on verified post-project reviews',
    },
  ];

  const milestones = [
    {
      year: 'The Problem',
      title: 'Bridging the Engineering Procurement Gap',
      description:
        'Engineering projects frequently suffered from delayed timelines, uncertain credentials, and fragmented hiring processes. Businesses struggled to discover verified local specialists, while world-class African engineers lacked a unified platform to showcase their expertise.',
    },
    {
      year: 'The Solution',
      title: 'A Trust-First Engineering Marketplace',
      description:
        'ProEngineer Connect was established to bring structural integrity to talent hiring. We engineered an end-to-end platform with rigorous credential verification, transparent portfolio demonstrations, and direct project inquiry channels.',
    },
    {
      year: 'The Impact',
      title: 'Powering Africa’s Next Decade of Infrastructure',
      description:
        'Today, hundreds of businesses, real estate developers, municipalities, and tech companies collaborate with top-tier civil, mechanical, electrical, environmental, and software engineers with complete confidence.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1e3a5f] text-white py-20 lg:py-28">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-amber-400 blur-3xl" />
          <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-blue-400 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-amber-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Pioneering Engineering Talent & Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
              About <span className="text-amber-400">ProEngineer Connect</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8">
              We are building the most trusted marketplace for engineering talent. Our mission is to bridge the gap between licensed, world-class engineers and the visionary businesses, developers, and organizations driving transformative infrastructure and technology projects.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Thoroughly Vetted Engineers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>100% Verified Credentials</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Pan-African & Global Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section: By the Numbers */}
      <section className="relative -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-8 lg:p-10">
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
              Proven Track Record
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              ProEngineer Connect by the Numbers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center ${
                  index > 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <span className="text-4xl sm:text-5xl font-extrabold text-[#1e3a5f] mb-2 tracking-tight">
                  {stat.number}
                </span>
                <span className="text-lg font-semibold text-slate-900 mb-1">
                  {stat.label}
                </span>
                <span className="text-sm text-slate-500 max-w-[200px]">
                  {stat.sublabel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#1e3a5f] font-semibold text-xs tracking-wider uppercase">
              <Target className="w-3.5 h-3.5 text-amber-500" />
              <span>Our Mission</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Connecting World-Class Engineers with the Projects That Need Them
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              At ProEngineer Connect, our purpose is unequivocal: to democratize access to certified, reliable engineering expertise. Whether an organization is constructing a high-rise commercial complex in Kumasi, implementing a decentralized solar mini-grid in rural West Africa, or developing industrial IoT software, they deserve immediate access to proven technical masters.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              We eliminate traditional friction, opaque pricing, and credential uncertainty. By merging rigorous human verification with intuitive digital collaboration tools, we foster a meritocratic environment where engineers thrive and clients achieve outstanding project outcomes.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Rigorous Licensure Verification</h3>
                  <p className="text-xs sm:text-sm text-slate-500">Every engineer&apos;s professional credentials and regulatory board memberships are independently authenticated.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Transparent Portfolios & Reviews</h3>
                  <p className="text-xs sm:text-sm text-slate-500">Clients inspect detailed case studies, past blueprints, and verified client testimonials before engaging.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Direct, Frictionless Communication</h3>
                  <p className="text-xs sm:text-sm text-slate-500">Fast inquiry channels allow clients and engineers to align on project scope, budgets, and timelines directly.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative bg-gradient-to-br from-[#1e3a5f] to-[#152a45] rounded-2xl p-8 sm:p-10 text-white shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">The Engineering Standard</h3>
                    <p className="text-xs text-slate-300">Our commitment to professional engineering excellence</p>
                  </div>
                </div>

                <div className="border-t border-slate-700/60 pt-6 space-y-4 text-sm text-slate-200">
                  <blockquote className="italic border-l-2 border-amber-400 pl-4 text-slate-200 font-medium">
                    &ldquo;Africa does not lack world-class engineering intellect. What we lacked was a transparent bridge connecting our certified engineers with high-impact public and private developments. ProEngineer Connect is that bridge.&rdquo;
                  </blockquote>
                  <div className="pt-2">
                    <p className="font-semibold text-white">Ing. Dr. Kwame Mensah-Bonsu</p>
                    <p className="text-xs text-amber-400">Co-Founder & CEO, ProEngineer Connect</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700/60">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-2xl font-bold text-amber-400">12+</div>
                    <div className="text-xs text-slate-300 mt-1">Disciplines Covered</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-2xl font-bold text-amber-400">100%</div>
                    <div className="text-xs text-slate-300 mt-1">Human-Verified Profiles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-20 bg-slate-100/80 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 font-semibold text-xs tracking-wider uppercase mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Our Story</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              How ProEngineer Connect Started
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4">
              Born out of direct industry experience and a relentless drive to modernize engineering consultancy in Ghana, Africa, and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#1e3a5f]/10 text-[#1e3a5f] text-xs font-bold uppercase tracking-wider mb-4">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#1e3a5f]">
                  <span>Pillar {idx + 1} of Our Journey</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#1e3a5f] font-semibold text-xs tracking-wider uppercase mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-500" />
            <span>Core Values</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Principles That Anchor Everything We Do
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4">
            We hold ourselves and our engineering community to the highest ethical and professional standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${val.iconBg} flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#1e3a5f] transition-colors">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 lg:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-800 font-semibold text-xs tracking-wider uppercase mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
              <span>Our Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Experienced Minds Guiding the Platform
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4">
              Led by seasoned chartered engineers, technology executives, and compliance specialists committed to engineering excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={`w-16 h-16 rounded-2xl ${member.badgeColor} border-2 flex items-center justify-center font-bold text-xl shadow-inner`}
                    >
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-amber-700">
                        {member.role}
                      </p>
                      <span className="inline-block mt-1 text-[11px] font-medium text-slate-500">
                        {member.credentials}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700">
                      {member.discipline}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">{member.highlight}</span>
                  <span className="text-emerald-700 font-medium">Verified Leader</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e3a5f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-amber-400 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join the Premier Engineering Community</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto">
            Ready to Build Something Extraordinary?
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Whether you are searching for certified engineering consultants for your next major development or you are a licensed engineer ready to expand your client portfolio, ProEngineer Connect is ready for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/engineers"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-base transition-colors shadow-lg hover:shadow-amber-500/20"
            >
              <Briefcase className="w-4 h-4" />
              <span>Find Top Engineers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 transition-colors"
            >
              <span>See How It Works</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Free Registration
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              100% Verified Credentials
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Direct Client Inquiries
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
