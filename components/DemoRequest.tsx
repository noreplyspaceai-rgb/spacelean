'use client';
import { useState, useEffect, Suspense } from 'react';
import { gql } from '@apollo/client';
import { client } from '@/lib/apollo-client';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  FileSignature,
  Star,
  Users,
  Briefcase,
  Check
} from 'lucide-react';
import Link from 'next/link';

// GraphQL Mutation
const CREATE_DEMO_REQUEST = gql`
  mutation CreateDemoRequest($input: CreateDemoRequestInput!) {
    createDemoRequest(input: $input) {
      _id
      firstName
      lastName
      email
      company
      phoneNumber
      companySize
      projectDetails
      formType
    }
  }
`;

function DemoRequestContent() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    company: '',
    companySize: '',
    projectDetails: '',
    formType: 'SpaceLean',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phoneNumber: '',
  });

  // Pre-fill from URL params
  useEffect(() => {
    if (searchParams) {
      const updates: Record<string, string> = {};
      if (searchParams.get('firstName')) updates.firstName = searchParams.get('firstName') || '';
      if (searchParams.get('lastName')) updates.lastName = searchParams.get('lastName') || '';
      if (searchParams.get('email')) updates.email = searchParams.get('email') || '';
      if (searchParams.get('projectDetails')) updates.projectDetails = searchParams.get('projectDetails') || '';

      if (Object.keys(updates).length > 0) {
        setFormData(prev => ({ ...prev, ...updates }));
      }
    }
  }, [searchParams]);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<unknown>(null);

  const isSuccess = !!data;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phoneNumber: '',
    };
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.';
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
      isValid = false;
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required.';
      isValid = false;
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const result = await client.mutate({
          mutation: CREATE_DEMO_REQUEST,
          variables: { input: formData },
        });
        setData(result.data);
      } catch (err) {
        console.error('Error submitting form:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  const features = [
    {
      icon: Shield,
      title: 'AI-Powered Intelligence',
      desc: 'Let our AI break down complex projects into actionable tasks automatically.',
    },
    {
      icon: Zap,
      title: 'Real-Time Collaboration',
      desc: 'Stay in sync with your team through live updates, comments, and activity feeds.',
    },
    {
      icon: CheckCircle,
      title: 'Complete Task Visibility',
      desc: 'Kanban boards, calendar views, and priority tracking all in one unified platform.',
    },
  ];

  return (
    <section className="min-h-screen bg-[#fafafa] pt-32 pb-20 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] border border-black/5 rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] border border-black/5 rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-start">
          {/* Left Content */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-white shadow-sm">
              <FileSignature className="w-4 h-4 text-black" />
              <span className="text-xs font-bold tracking-wide uppercase">Experience the Future</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-8 tracking-tighter leading-tight">
              Transform your <br />
              <span className="text-gray-300">workflow.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-500 mb-12 font-light leading-relaxed max-w-xl">
              Join thousands of teams who have revolutionized their productivity. Experience
              AI-powered automation with <span className="text-black font-normal">SpaceLean</span>.
            </p>

            <div className="space-y-10">
              {features.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                  className="flex items-start gap-6 group"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white border border-black/5 shadow-sm group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-gray-500 text-lg font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-16 pt-12 border-t border-black/5 flex flex-wrap gap-8 items-center">
              <div className="flex gap-1 text-black">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-black" />)}
              </div>
              <p className="text-sm text-gray-400 font-bold tracking-widest uppercase">
                4.9/5 Average Rating
              </p>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[2.5rem] border border-black/5 bg-white p-8 sm:p-12 shadow-2xl shadow-black/5">
              {isSuccess ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-20 text-center"
                >
                  <div className="mx-auto mb-10 w-24 h-24 bg-black text-white rounded-3xl flex items-center justify-center shadow-xl shadow-black/20">
                    <Check className="h-12 w-12" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tighter">Request Received!</h2>
                  <p className="text-xl text-gray-500 font-light leading-relaxed max-w-xs mx-auto">
                    A specialist will reach out within 24 hours to schedule your session.
                  </p>
                  <button
                    onClick={() => setData(null)}
                    className="mt-10 text-black font-bold border-b-2 border-black pb-1 hover:text-gray-500 transition-colors"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">
                      Start your journey.
                    </h2>
                    <p className="text-lg text-gray-500 font-light">
                      Fill out the form below and we&apos;ll be in touch.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`block w-full rounded-2xl border ${errors.firstName ? 'border-red-500' : 'border-black/5'
                            } bg-gray-50 px-5 py-4 text-gray-900 transition-all focus:bg-white focus:border-black focus:outline-none`}
                          placeholder="Your first name"
                        />
                        {errors.firstName && <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider ml-1">{errors.firstName}</p>}
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`block w-full rounded-2xl border ${errors.lastName ? 'border-red-500' : 'border-black/5'
                            } bg-gray-50 px-5 py-4 text-gray-900 transition-all focus:bg-white focus:border-black focus:outline-none`}
                          placeholder="Your last name"
                        />
                        {errors.lastName && <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider ml-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                        Corporate Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`block w-full rounded-2xl border ${errors.email ? 'border-red-500' : 'border-black/5'
                          } bg-gray-50 px-5 py-4 text-gray-900 transition-all focus:bg-white focus:border-black focus:outline-none`}
                        placeholder="name@company.com"
                      />
                      {errors.email && <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider ml-1">{errors.email}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phoneNumber" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={`block w-full rounded-2xl border ${errors.phoneNumber ? 'border-red-500' : 'border-black/5'
                          } bg-gray-50 px-5 py-4 text-gray-900 transition-all focus:bg-white focus:border-black focus:outline-none`}
                      />
                      {errors.phoneNumber && <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider ml-1">{errors.phoneNumber}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`block w-full rounded-2xl border ${errors.company ? 'border-red-500' : 'border-black/5'
                          } bg-gray-50 px-5 py-4 text-gray-900 transition-all focus:bg-white focus:border-black focus:outline-none`}
                        placeholder="ACME Corp"
                      />
                      {errors.company && <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider ml-1">{errors.company}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="companySize" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                        Company Size
                      </label>
                      <div className="relative">
                        <select
                          name="companySize"
                          id="companySize"
                          value={formData.companySize}
                          onChange={handleChange}
                          className="block w-full rounded-2xl border border-black/5 bg-gray-50 px-5 py-4 text-gray-900 transition-all appearance-none focus:bg-white focus:border-black focus:outline-none"
                        >
                          <option value="">Select size...</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-1000">201-1000 employees</option>
                          <option value="1000+">1000+ employees</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ArrowRight className="w-4 h-4 rotate-90 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="projectDetails" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                        Additional Context
                      </label>
                      <textarea
                        name="projectDetails"
                        id="projectDetails"
                        rows={3}
                        value={formData.projectDetails}
                        onChange={handleChange}
                        className="block w-full rounded-2xl border border-black/5 bg-gray-50 px-5 py-4 text-gray-900 transition-all focus:bg-white focus:border-black focus:outline-none resize-none"
                        placeholder="Tell us about your challenges..."
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-4 rounded-2xl bg-black px-8 py-5 text-white font-bold shadow-2xl shadow-black/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                      >
                        <span className="text-lg">{loading ? 'Submitting...' : 'Request Demo'}</span>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </button>
                    </div>
                  </form>

                  <p className="mt-8 text-center text-xs text-gray-400 font-medium">
                    Secure & Private. <br className="sm:hidden" /> By submitting, you agree to our Terms.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function DemoRequest() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-500">Loading form...</div>}>
      <DemoRequestContent />
    </Suspense>
  );
}
