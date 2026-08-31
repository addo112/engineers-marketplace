'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Briefcase, Search, ArrowRight, ArrowLeft, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

type Role = 'engineer' | 'customer' | null;

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<Role>('engineer');
  
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

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const supabase = createClient();
  const totalSteps = role === 'engineer' ? 3 : 2;

  const handleNext = () => {
    setErrorMsg(null);
    if (step === 2) {
      if (password.length < 6) {
        setErrorMsg('Password must be at least 6 characters.');
        return;
      }
      if (password !== confirmPassword) {
        setErrorMsg('Passwords do not match.');
        return;
      }
    }
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    setErrorMsg(null);
    if (step > 1) setStep(step - 1);
  };

  const handleGoogleSignUp = async () => {
    setErrorMsg(null);
    setGoogleLoading(true);

    try {
      const redirectTo = `${window.location.origin}/auth/callback`;
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      if (error) {
        setErrorMsg(error.message);
        setGoogleLoading(false);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to initialize Google signup.');
      setGoogleLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
            role: role || 'customer',
          },
        },
      });

      if (error) {
        setErrorMsg(error.message);
        setLoading(false);
        return;
      }

      if (data?.user) {
        // If engineer, save additional profile fields
        if (role === 'engineer') {
          await supabase.from('engineers').insert({
            profile_id: data.user.id,
            title: title || 'Professional Engineer',
            bio: bio || '',
            experience_years: parseInt(experience) || 1,
            hourly_rate: parseFloat(rate) || 50,
            location: 'Ghana',
            country: 'Ghana',
            availability_status: 'available',
          });
        }

        setSuccessMsg('Account created successfully! Redirecting to your dashboard...');
        setTimeout(() => {
          if (role === 'engineer') {
            router.push('/dashboard/engineer');
          } else {
            router.push('/dashboard/customer');
          }
        }, 1500);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected error occurred during registration.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold text-[#1e3a5f] mb-4">
            <Briefcase className="w-8 h-8 text-amber-500" />
            <span>ProEngineer Connect</span>
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">Create an Account</h1>
          <p className="mt-2 text-slate-500">Join the premier marketplace for professional engineers.</p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-sm text-red-700">
            <AlertCircle className="w-5 h-5 shrink-0 text-red-500 mt-0.5" />
            <div>
              <p className="font-semibold">Registration Notice</p>
              <p>{errorMsg}</p>
            </div>
          </div>
        )}

        {successMsg && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3 text-sm text-emerald-800">
            <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600 mt-0.5" />
            <p className="font-medium">{successMsg}</p>
          </div>
        )}

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
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

          {step === 1 && (
            <div className="mb-8">
              <button
                type="button"
                onClick={handleGoogleSignUp}
                disabled={googleLoading}
                className="w-full flex items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 transition-colors shadow-sm"
              >
                {googleLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin text-[#1e3a5f]" />
                ) : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                )}
                <span>{googleLoading ? 'Connecting to Google...' : 'Quick Sign Up with Google'}</span>
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-slate-500">or choose account type below</span>
                </div>
              </div>
            </div>
          )}

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
                        ? 'border-[#1e3a5f] bg-blue-50/50 shadow-sm' 
                        : 'border-slate-200 hover:border-[#1e3a5f] hover:bg-slate-50'
                    }`}
                  >
                    <div className={`p-4 rounded-full mb-4 ${role === 'engineer' ? 'bg-[#1e3a5f] text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <Briefcase className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">I'm an Engineer</h3>
                    <p className="mt-2 text-sm text-slate-500">I want to offer engineering services and win business contracts.</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRole('customer')}
                    className={`flex flex-col items-center justify-center p-6 border-2 rounded-xl text-center transition-all ${
                      role === 'customer' 
                        ? 'border-[#1e3a5f] bg-blue-50/50 shadow-sm' 
                        : 'border-slate-200 hover:border-[#1e3a5f] hover:bg-slate-50'
                    }`}
                  >
                    <div className={`p-4 rounded-full mb-4 ${role === 'customer' ? 'bg-[#1e3a5f] text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <Search className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">I'm a Client / Business</h3>
                    <p className="mt-2 text-sm text-slate-500">I want to discover and hire licensed professional engineers.</p>
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
                    placeholder="e.g. Kwame Mensah"
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
                      type="password" required minLength={6}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none"
                      placeholder="••••••••"
                      value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
                    <input
                      type="password" required minLength={6}
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
                    <label className="block text-sm font-medium text-slate-700 mb-1">Hourly Rate (USD / GHS equivalent)</label>
                    <input
                      type="number" required min="0"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none"
                      placeholder="e.g. 75"
                      value={rate} onChange={(e) => setRate(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Professional Bio & Specializations</label>
                  <textarea
                    required rows={4}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:ring-2 focus:ring-[#1e3a5f] outline-none"
                    placeholder="Describe your engineering discipline, structural/electrical designs, CAD tools, and project track record..."
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
                disabled={loading || (step === 1 && !role)}
                className={`flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white rounded-lg transition-colors ${
                  (step === 1 && !role) || loading ? 'bg-slate-300 cursor-not-allowed' : 'bg-[#1e3a5f] hover:bg-[#152a46]'
                }`}
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                <span>
                  {loading
                    ? 'Creating account...'
                    : step === totalSteps
                    ? 'Complete Registration'
                    : 'Next Step'}
                </span>
                {!loading && step !== totalSteps && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </form>
        </div>
        
        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-[#1e3a5f] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
