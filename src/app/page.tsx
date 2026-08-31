import Link from "next/link";
import { 
  Search, 
  User, 
  Handshake, 
  Building2, 
  Cog, 
  Zap, 
  Code, 
  FlaskConical, 
  Leaf, 
  Heart, 
  Plane, 
  Factory, 
  Droplets, 
  Radio, 
  Mountain,
  ShieldCheck,
  Star,
  Clock,
  Lock,
  Quote,
  MapPin
} from "lucide-react";

const CATEGORIES = [
  { name: "Civil Engineering", count: "1,240", icon: Building2 },
  { name: "Mechanical Engineering", count: "980", icon: Cog },
  { name: "Electrical Engineering", count: "1,150", icon: Zap },
  { name: "Software Engineering", count: "2,300", icon: Code },
  { name: "Chemical Engineering", count: "450", icon: FlaskConical },
  { name: "Environmental Engineering", count: "320", icon: Leaf },
  { name: "Biomedical Engineering", count: "280", icon: Heart },
  { name: "Aerospace Engineering", count: "190", icon: Plane },
  { name: "Industrial Engineering", count: "540", icon: Factory },
  { name: "Petroleum Engineering", count: "210", icon: Droplets },
  { name: "Telecommunications", count: "430", icon: Radio },
  { name: "Mining Engineering", count: "150", icon: Mountain },
];

const FEATURED_ENGINEERS = [
  {
    id: "1",
    name: "Kwame Mensah",
    title: "Senior Civil Engineer",
    rating: 4.9,
    reviews: 124,
    location: "Accra, GH",
    specialties: ["Structural Design", "AutoCAD", "Project Management"],
    rate: "$45/hr",
    initials: "KM",
  },
  {
    id: "2",
    name: "Abena Osei",
    title: "Lead Electrical Engineer",
    rating: 5.0,
    reviews: 89,
    location: "Kumasi, GH",
    specialties: ["Power Systems", "Circuit Design", "Renewable Energy"],
    rate: "$55/hr",
    initials: "AO",
  },
  {
    id: "3",
    name: "Kojo Yeboah",
    title: "Full Stack Software Engineer",
    rating: 4.8,
    reviews: 215,
    location: "Remote",
    specialties: ["React", "Node.js", "System Architecture"],
    rate: "$60/hr",
    initials: "KY",
  },
  {
    id: "4",
    name: "Ama Asante",
    title: "Mechanical Design Engineer",
    rating: 4.9,
    reviews: 156,
    location: "Tema, GH",
    specialties: ["HVAC", "SolidWorks", "Thermodynamics"],
    rate: "$50/hr",
    initials: "AA",
  },
];

const TESTIMONIALS = [
  {
    text: "ProEngineer Connect transformed how we hire. We found an incredible structural engineer within 48 hours for our commercial building project.",
    author: "David Appiah",
    company: "BuildRight Contractors",
    rating: 5,
  },
  {
    text: "The quality of talent on this platform is unmatched. Our software development velocity doubled after hiring two senior engineers here.",
    author: "Sarah Osei-Bonsu",
    company: "TechHub Africa",
    rating: 5,
  },
  {
    text: "As a manufacturing firm, finding specialized mechanical engineers used to take months. Now it takes days. Absolutely essential service.",
    author: "Michael Tetteh",
    company: "Industrial Solutions Ltd",
    rating: 5,
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-slate-100 pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#1e3a5f] mb-4">
            <span className="block">Find Expert Engineers</span>
            <span className="block text-[#f59e0b]">For Your Next Project</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-600">
            Connect with verified, top-tier engineering professionals across dozens of specialties. Get your projects done right, on time, and on budget.
          </p>
          
          <div className="mt-10 max-w-3xl mx-auto">
            <form className="relative flex items-center bg-white p-2 rounded-full shadow-lg border border-slate-200 focus-within:ring-2 focus-within:ring-[#1e3a5f] focus-within:border-transparent transition-all">
              <Search className="h-6 w-6 text-slate-400 ml-4 hidden sm:block" />
              <input 
                type="text" 
                placeholder="Search by engineering specialty, skill, or location..." 
                className="w-full pl-4 sm:pl-2 pr-4 py-3 text-lg outline-none rounded-full bg-transparent text-slate-700 placeholder-slate-400"
              />
              <button 
                type="button" 
                className="bg-[#1e3a5f] hover:bg-[#152a45] text-white px-8 py-3 rounded-full font-medium transition-colors hidden sm:block"
              >
                Search
              </button>
            </form>
            
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-slate-600">
              <span className="mr-2">Popular:</span>
              {["Civil", "Electrical", "Software", "Mechanical"].map((tag) => (
                <Link key={tag} href={`/search?q=${tag}`} className="hover:text-[#f59e0b] hover:underline">
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-20 border-t border-slate-200 pt-10 flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#1e3a5f]">500+</p>
              <p className="text-slate-500 font-medium mt-1">Engineers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#1e3a5f]">1,200+</p>
              <p className="text-slate-500 font-medium mt-1">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#1e3a5f]">98%</p>
              <p className="text-slate-500 font-medium mt-1">Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#1e3a5f]">50+</p>
              <p className="text-slate-500 font-medium mt-1">Specialties</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. How It Works Section */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">How It Works</h2>
            <p className="mt-4 text-lg text-slate-600">Simple steps to find the perfect engineering talent</p>
          </div>
          
          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-slate-200 -z-10 transform -translate-y-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#1e3a5f] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">01</div>
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 mt-4">
                  <Search className="w-10 h-10 text-[#1e3a5f]" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Search Engineers</h3>
                <p className="text-slate-600">Browse our extensive database of verified professionals by specialty, location, and skills.</p>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#1e3a5f] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">02</div>
                <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mb-6 mt-4">
                  <User className="w-10 h-10 text-[#f59e0b]" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Review Profiles</h3>
                <p className="text-slate-600">Check portfolios, verified reviews, certifications, and project history to find the perfect match.</p>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#1e3a5f] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">03</div>
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 mt-4">
                  <Handshake className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Start Your Project</h3>
                <p className="text-slate-600">Connect directly, agree on terms, and begin collaborating on your engineering project safely.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Engineering Categories Section */}
      <section className="py-24 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">Browse by Engineering Specialty</h2>
              <p className="mt-4 text-lg text-slate-600">Find specialized experts for your specific requirements</p>
            </div>
            <Link href="/categories" className="mt-4 md:mt-0 text-[#1e3a5f] font-semibold hover:text-[#f59e0b] transition-colors flex items-center gap-1">
              View all categories &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <Link key={idx} href={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`} className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all hover:border-[#f59e0b] hover:-translate-y-1">
                  <Icon className="w-8 h-8 text-[#1e3a5f] group-hover:text-[#f59e0b] transition-colors mb-4" />
                  <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-[#1e3a5f]">{cat.name}</h3>
                  <p className="text-sm text-slate-500">{cat.count} experts</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Featured Engineers Section */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">Top-Rated Engineers</h2>
              <p className="mt-4 text-lg text-slate-600">Work with our highest-rated professionals</p>
            </div>
            <Link href="/engineers" className="mt-4 md:mt-0 text-[#1e3a5f] font-semibold hover:text-[#f59e0b] transition-colors flex items-center gap-1">
              View more engineers &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_ENGINEERS.map((engineer) => (
              <div key={engineer.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg border border-slate-100 overflow-hidden transition-shadow flex flex-col h-full">
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-16 h-16 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {engineer.initials}
                    </div>
                    <div className="flex items-center bg-amber-50 px-2 py-1 rounded text-sm font-medium text-amber-700">
                      <Star className="w-4 h-4 text-[#f59e0b] mr-1 fill-current" />
                      {engineer.rating} ({engineer.reviews})
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800">{engineer.name}</h3>
                  <p className="text-[#1e3a5f] font-medium text-sm mb-3">{engineer.title}</p>
                  
                  <div className="flex items-center text-slate-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {engineer.location}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {engineer.specialties.map((spec, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between mt-auto">
                  <div className="font-bold text-slate-800">{engineer.rate}</div>
                  <Link href={`/engineers/${engineer.id}`} className="text-sm font-semibold text-[#1e3a5f] hover:text-[#f59e0b] transition-colors py-1 px-3 border border-[#1e3a5f] rounded-lg hover:bg-[#1e3a5f] hover:text-white">
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="py-24 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Businesses Trust ProEngineer Connect</h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">We provide a secure, reliable platform to connect with world-class engineering talent.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Verified Professionals</h3>
                <p className="text-slate-400">Every engineer's credentials, identity, and experience are rigorously verified before they join our platform.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Star className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
                <p className="text-slate-400">Our transparent rating and review system ensures you work with professionals who consistently deliver excellence.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Matching</h3>
                <p className="text-slate-400">Our intelligent search and matching algorithm connects you with the right engineers in hours, not weeks.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Lock className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Secure Platform</h3>
                <p className="text-slate-400">Communicate safely and manage contracts through our secure, end-to-end encrypted platform environment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-12 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left CTA */}
            <div className="bg-[#1e3a5f] rounded-2xl p-10 md:p-14 text-white flex flex-col justify-center shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Are You an Engineer?</h2>
              <p className="text-blue-100 text-lg mb-8 max-w-md">
                Join our network of top professionals. Find exciting projects, manage your schedule, and grow your independent engineering career.
              </p>
              <div>
                <Link href="/register/engineer" className="inline-block bg-[#f59e0b] hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Join as Engineer
                </Link>
              </div>
            </div>
            
            {/* Right CTA */}
            <div className="bg-[#f59e0b] rounded-2xl p-10 md:p-14 text-slate-900 flex flex-col justify-center shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Looking for an Engineer?</h2>
              <p className="text-amber-900 text-lg mb-8 max-w-md">
                Post your project or browse profiles to find the perfect engineering expert for your specific needs. Quick, reliable, and secure.
              </p>
              <div>
                <Link href="/register/client" className="inline-block bg-[#1e3a5f] hover:bg-[#152a45] text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Find Engineers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="py-24 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-slate-600">Don't just take our word for it</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
                <Quote className="w-10 h-10 text-amber-200 mb-6" />
                <p className="text-slate-700 italic flex-grow mb-6">"{testimonial.text}"</p>
                
                <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
                  <div>
                    <h4 className="font-bold text-slate-800">{testimonial.author}</h4>
                    <p className="text-sm text-slate-500">{testimonial.company}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#f59e0b] fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
