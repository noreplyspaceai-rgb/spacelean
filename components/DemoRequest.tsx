'use client';
import { useState, useEffect, Suspense } from 'react';
import { gql } from '@apollo/client';
import { client } from '@/lib/apollo-client';
import { useSearchParams } from 'next/navigation';

// Inline SVG Icons
const FileSignatureIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className || "h-6 w-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const ZapIcon = ({ className }: { className?: string }) => (
  <svg className={className || "h-6 w-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className || "h-6 w-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

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
      icon: ShieldIcon,
      title: 'AI-Powered Intelligence',
      desc: 'Let our AI break down complex projects into actionable tasks automatically.',
    },
    {
      icon: ZapIcon,
      title: 'Real-Time Collaboration',
      desc: 'Stay in sync with your team through live updates, comments, and activity feeds.',
    },
    {
      icon: CheckCircleIcon,
      title: 'Complete Task Visibility',
      desc: 'Kanban boards, calendar views, and priority tracking all in one unified platform.',
    },
  ];

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 pointer-events-none" />
      <div className="absolute inset-0 pattern-dots pointer-events-none opacity-40" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gray-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2">
              <FileSignatureIcon />
              <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Request a Demo</span>
            </div>

            <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Transform Your Workflow with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-orange-500">
                SPACE LEAN
              </span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Join thousands of teams who have revolutionized their task management. Experience 
              AI-powered automation, intelligent scheduling, and comprehensive project oversight.
            </p>

            <div className="space-y-6">
              {features.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-amber-100">
                    <item.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-sm p-8 shadow-xl lg:p-10">
            {isSuccess ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-6 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircleIcon className="h-12 w-12 text-green-500" />
                </div>
                <h2 className="mb-2 text-3xl font-bold text-gray-900">Request Received!</h2>
                <p className="text-lg text-gray-600">
                  Our team will contact you within 24 hours to schedule your personalized demo.
                </p>
              </div>
            ) : (
              <>
                <h2 className="mb-2 text-2xl font-bold text-gray-900">
                  Schedule Your Personalized Demo
                </h2>
                <p className="mb-8 text-gray-600">
                  See SPACE LEAN in action. Let&apos;s discuss your unique task management needs.
                </p>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`block w-full rounded-lg border-2 ${
                          errors.firstName ? 'border-red-500' : 'border-gray-200'
                        } bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200`}
                        placeholder="John"
                      />
                      {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`block w-full rounded-lg border-2 ${
                          errors.lastName ? 'border-red-500' : 'border-gray-200'
                        } bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200`}
                        placeholder="Doe"
                      />
                      {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border-2 ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                      } bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200`}
                      placeholder="john.doe@company.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div className="mt-6">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      className={`block w-full rounded-lg border-2 ${
                        errors.phoneNumber ? 'border-red-500' : 'border-gray-200'
                      } bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200`}
                    />
                    {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>}
                  </div>

                  <div className="mt-6">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border-2 ${
                        errors.company ? 'border-red-500' : 'border-gray-200'
                      } bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200`}
                      placeholder="Your Company"
                    />
                    {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                  </div>

                  <div className="mt-6">
                    <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Size
                    </label>
                    <select
                      name="companySize"
                      id="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className="block w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Details
                    </label>
                    <textarea
                      name="projectDetails"
                      id="projectDetails"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      className="block w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                      placeholder="Tell us about your task management needs..."
                    />
                  </div>

                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-gray-900 px-8 py-4 text-white text-lg font-semibold shadow-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
                    >
                      {loading ? 'Submitting...' : 'Request Demo'}
                      <span className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-center text-xs text-gray-500">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
              </>
            )}
          </div>
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
