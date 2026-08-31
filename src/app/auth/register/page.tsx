'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Briefcase, Search, ArrowRight, ArrowLeft } from 'lucide-react';

type Role = 'engineer' | 'customer' | null;

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<Role>(null);
  
  // Basic info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Professional details
  const [title, setTitle] = useState('');
  const [bio, setBio] = useState('');
  const [experience, setExperience] = useState('');
  const [rate, setRate] = useState('');

  const totalSteps = role === 'engineer' ? 3 : 2;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register:', { role, name, email, password, title, bio, experience, rate });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full mx-auto">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold text-[#1e3a5f] mb-6">
            <Briefcase className="w-8 h-8 text-amber-500" />
            <span>ProEngineer Connect</span>
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">Create an Account</h1>
          <p className="mt-2 text-slate-500">Join the premier marketplace for engineers.</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-sm font-medium text-slate-500 mb-2">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round((step / totalSteps) * 100)}%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#1e3a5f] transition-all duration-300"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={step === totalSteps ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
            
            {/* Step 1: Role Selection */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">How do you want to use ProEngineer Connect?</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setRole('engineer')}
                    className={`flex flex-col items-center justify-center p-6 border-2 rounded-xl text-center transition-all ${
                      role === 'engineer' 
                        ? 'border-[#1e3a5f] bg-blue-50/50' 
                        : 'border-slate-200 hover:border-[#1e3a5f] hover:bg-slate-50'
                    }`}
                  >
                    <div className={`p-4 rounded-full mb-4 ${role === 'engineer' ? 'bg-[#1e3a5f] text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <Briefcase className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">I'm an Engineer</h3>
                    <p className="mt-2 text-sm text-slate-500">I want to offer my services and find projects.</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRole('customer')}
                    className={`flex flex-col items-center justify-center p-6 border-2 rounded-xl text-center transition-all ${
                      role === 'customer' 
                        ? 'border-[#1e3a5f] bg-blue-50/50' 
                        : 'border-slate-200 hover:border-[#1e3a5f] hover:bg-slate-50'
                    }`}
                  >
                    <div className={`p-4 rounded-full mb-4 ${role === 'customer' ? 'bg-[#1e3a5f] text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <Search className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">I'm a Customer</h3>
                    <p className="mt-2 text-sm text-slate-500">I want to hire engineers for my projects.</p>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Basic Info */}
            {step === 2 && (
              <div className="space-y-5">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Basic Information</h2>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text" required
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none"
                    placeholder="Kwame Mensah"
                    value={name} onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email" required
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none"
                    placeholder="kwame@example.com"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                    <input
                      type="password" required
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none"
                      placeholder="••••••••"
                      value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
                    <input
                      type="password" required
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none"
                      placeholder="••••••••"
                      value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Professional Details (Engineers only) */}
            {step === 3 && role === 'engineer' && (
              <div className="space-y-5">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Professional Profile</h2>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Professional Title</label>
                  <input
                    type="text" required
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none"
                    placeholder="e.g. Senior Structural Engineer"
                    value={title} onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Years of Experience</label>
                    <input
                      type="number" required min="0"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none"
                      placeholder="e.g. 5"
                      value={experience} onChange={(e) => setExperience(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Hourly Rate (GHS)</label>
                    <input
                      type="number" required min="0"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none"
                      placeholder="e.g. 150"
                      value={rate} onChange={(e) => setRate(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Professional Bio</label>
                  <textarea
                    required rows={4}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none"
                    placeholder="Tell clients about your expertise and background..."
                    value={bio} onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between pt-6 border-t border-slate-200">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : <div></div>}
              
              <button
                type="submit"
                disabled={step === 1 && !role}
                className={`flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white rounded-lg transition-colors ${
                  step === 1 && !role ? 'bg-slate-300 cursor-not-allowed' : 'bg-[#1e3a5f] hover:bg-[#152a46]'
                }`}
              >
                {step === totalSteps ? 'Complete Registration' : 'Next Step'}
                {step !== totalSteps && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </form>
        </div>
        
        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link href="/auth/login" className="font-medium text-[#1e3a5f] hover:text-blue-800">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
