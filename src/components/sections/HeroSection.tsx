'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { ArrowRight, MapPin, Star, Clock, AlertTriangle, UserCheck, ChartNoAxesCombined } from 'lucide-react';
import { PartnerConfig } from '@/types/partner';
import { formSchema, type FormData, homeSizeOptions } from '@/lib/validation';
import { buildRedirectUrl, CP_BRAND } from '@/lib/partners';
import { analytics } from '@/lib/analytics';
import { TransferModal } from '@/components/TransferModal';

interface HeroSectionProps {
  partner?: PartnerConfig | null;
}

export function HeroSection({ partner }: HeroSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      homeSize: 'medium',
      zipCode: '',
    },
  });

  const onSubmit = (data: FormData) => {
    // Track form submission
    analytics.formSubmit(
      partner?.partner_code || 'default',
      data.homeSize,
      data.zipCode
    );

    const redirectUrl = buildRedirectUrl(data.zipCode, data.homeSize, partner?.partner_code);
    window.location.href = redirectUrl;
  };

  const handleFormStart = () => {
    analytics.formStart(partner?.partner_code || 'default', 'hero');
  };

  const logoUrl = partner?.partner_logo_url || CP_BRAND.logo_url;
  const logoAlt = partner?.partner_logo_alt_text || CP_BRAND.logo_alt;

  return (
    <>
      {/* Trust Banner - Only show if valid partner */}
      {partner && (
        <div className="bg-white/90 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 text-center">
            <div className="text-sm text-gray-700">
              🤜 🤛 See why <span className="font-semibold">{partner.partner_name}</span> trusts Compare Power with your electricity shopping needs.
            </div>
          </div>
        </div>
      )}

      <section className="relative overflow-hidden">
        {/* Background with subtle pattern */}
        <div
          className="absolute inset-0 bg-gradient-to-br"
          style={{
            background: 'linear-gradient(to bottom right, #22baed, #eb5a41)'
          }}
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Partner Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src={logoUrl}
                alt={logoAlt}
                width={200}
                height={80}
                className="h-16 w-auto object-contain"
                priority
              />
            </div>

            {/* All Caps Message */}
            <div className="text-sm font-bold text-white/80 tracking-wider mb-4 text-center">
              MILLIONS (YES, MILLIONS) OF HAPPY CUSTOMERS
            </div>

            {/* Headline */}
            <h1 className="text-3xl font-extrabold tracking-tight text-white text-center mb-6">
              <span className="block">Pay <span className="font-extrabold text-yellow-300">as little as possible</span></span>
              <span className="block mt-2">for your electricity plan</span>
            </h1>

            {/* Form - Mobile Priority */}
            <div className="relative mb-10">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 px-6 py-4 border-b border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900">Get Power in Minutes</h2>
                </div>
                <div className="px-6 py-6">
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        My home is a:
                      </label>
                      <div className="mt-1 grid grid-cols-2 gap-3">
                        {homeSizeOptions.map((option) => (
                          <div
                            key={option.value}
                            className={`flex items-center justify-center px-4 py-3 border rounded-xl cursor-pointer transition-all active:scale-95 active:shadow-sm ${
                              form.watch('homeSize') === option.value
                                ? 'bg-cp-primary/10 border-cp-primary text-cp-primary shadow-sm'
                                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                            }`}
                            onClick={() => {
                              form.setValue('homeSize', option.value as FormData['homeSize']);
                              handleFormStart();
                            }}
                          >
                            <div className="text-center">
                              <div className="font-medium text-sm">{option.label}</div>
                              <div className="text-xs text-gray-500 mt-0.5">{option.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {form.formState.errors.homeSize && (
                        <p className="mt-1 text-sm text-red-600">{form.formState.errors.homeSize.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                        ZIP Code
                      </label>
                      <div className="mt-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          {...form.register('zipCode')}
                          type="text"
                          id="zipCode"
                          placeholder="Enter your ZIP code"
                          maxLength={5}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cp-primary focus:border-cp-primary text-base"
                          style={{ fontSize: '16px' }} // Prevent iOS zoom
                          onFocus={handleFormStart}
                        />
                      </div>
                      {form.formState.errors.zipCode && (
                        <p className="mt-1 text-sm text-red-600">{form.formState.errors.zipCode.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white py-3 px-4 text-base font-bold rounded-xl shadow-md relative overflow-hidden group transition-all disabled:opacity-50 active:scale-95 active:shadow-sm"
                      style={{ backgroundColor: '#eb5a41' }}
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Finding your plan...
                        </div>
                      ) : (
                        <span className="flex items-center justify-center">
                          Find My Plan
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </span>
                      )}
                    </button>

                    <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <Clock className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-green-800">Same-Day Connection Available</h3>
                          <p className="text-xs text-green-700 mt-1">
                            Orders placed before 5PM (Mon-Sat) can get connected today!
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Transfer warning below main form */}
                <div className="px-6 pb-6 pt-0">
                  <div className="flex items-start text-amber-700 text-sm">
                    <div className="flex-shrink-0 mt-0.5 mr-2">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <p>
                      <span className="font-medium">Moving within Texas?</span> Don&apos;t transfer blindly. Your current plan was priced for your old home, not your new one. <span
                        className="underline font-medium cursor-pointer hover:opacity-80"
                        onClick={() => setIsModalOpen(true)}
                      >
                        Learn More
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subheading - Below form on mobile */}
            <p className="text-lg text-white/90 text-center mb-8">
              Compare plans from top competing energy providers and get the best one for <em>you</em>. Trusted by millions of happy Texans.
              {partner?.partner_name && (
                <> Trusted by <span className="font-bold text-yellow-200">{partner.partner_name}</span>.</>
              )}
            </p>

            {/* Trust signals - Mobile */}
            <div className="py-6 px-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex items-center justify-center">
                    <Star className="h-5 w-5 text-yellow-300 fill-current mr-1.5" />
                    <span className="text-xl font-bold text-white">4.9/5</span>
                  </div>
                  <p className="text-sm text-white/80 mt-1.5 text-center">Customer Rating</p>
                </div>

                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex items-center justify-center">
                    <UserCheck className="h-5 w-5 text-green-400 mr-1.5" />
                    <span className="text-xl font-bold text-white">80,000+</span>
                  </div>
                  <p className="text-sm text-white/80 mt-1.5 text-center">Verified Reviews</p>
                </div>

                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex items-center justify-center">
                    <ChartNoAxesCombined className="h-5 w-5 text-blue-300 mr-1.5" />
                    <span className="text-xl font-bold text-white">2.3M+</span>
                  </div>
                  <p className="text-sm text-white/80 mt-1.5 text-center">Orders Processed</p>
                </div>

                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex items-center justify-center">
                    <Clock className="h-5 w-5 text-orange-300 mr-1.5" />
                    <span className="text-xl font-bold text-white">16 Years</span>
                  </div>
                  <p className="text-sm text-white/80 mt-1.5 text-center">Serving Texans</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Partner Logo */}
              <div className="flex justify-center lg:justify-start mb-8">
                <Image
                  src={logoUrl}
                  alt={logoAlt}
                  width={200}
                  height={80}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </div>

              {/* All Caps Message */}
              <div className="text-sm font-bold text-white/80 tracking-wider mb-4">
                MILLIONS (YES, MILLIONS) OF HAPPY CUSTOMERS
              </div>

              {/* Headline */}
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="block">Pay <span className="font-extrabold text-yellow-300">as little as possible</span> for your</span>
                <span className="block mt-2">electricity plan</span>
              </h1>

              {/* Subheading */}
              <p className="mt-6 text-xl text-white/90">
                Compare plans from top competing energy providers and get the best one for <em>you</em>. Trusted by millions of happy Texans.
                {partner?.partner_name && (
                  <> Trusted by <span className="font-bold text-yellow-200">{partner.partner_name}</span>.</>
                )}
              </p>

              {/* Trust signals */}
              <div className="mt-10 py-6 px-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex items-center justify-center">
                      <Star className="h-5 w-5 text-yellow-300 fill-current mr-1.5" />
                      <span className="text-xl font-bold text-white">4.9/5</span>
                    </div>
                    <p className="text-sm text-white/80 mt-1.5 text-center">Customer Rating</p>
                  </div>

                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex items-center justify-center">
                      <UserCheck className="h-5 w-5 text-green-400 mr-1.5" />
                      <span className="text-xl font-bold text-white">80,000+</span>
                    </div>
                    <p className="text-sm text-white/80 mt-1.5 text-center">Verified Reviews</p>
                  </div>

                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex items-center justify-center">
                      <ChartNoAxesCombined className="h-5 w-5 text-blue-300 mr-1.5" />
                      <span className="text-xl font-bold text-white">2.3M+</span>
                    </div>
                    <p className="text-sm text-white/80 mt-1.5 text-center">Orders Processed</p>
                  </div>

                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex items-center justify-center">
                      <Clock className="h-5 w-5 text-orange-300 mr-1.5" />
                      <span className="text-xl font-bold text-white">16 Years</span>
                    </div>
                    <p className="text-sm text-white/80 mt-1.5 text-center">Serving Texans</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:shadow-2xl">
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 px-6 py-4 border-b border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900">Get Power in Minutes</h2>
                </div>
                <div className="px-6 py-6">
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        My home is a:
                      </label>
                      <div className="mt-1 grid grid-cols-2 gap-3">
                        {homeSizeOptions.map((option) => (
                          <div
                            key={option.value}
                            className={`flex items-center justify-center px-4 py-3 border rounded-xl cursor-pointer transition-all active:scale-95 active:shadow-sm ${
                              form.watch('homeSize') === option.value
                                ? 'bg-cp-primary/10 border-cp-primary text-cp-primary shadow-sm'
                                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                            }`}
                            onClick={() => {
                              form.setValue('homeSize', option.value as FormData['homeSize']);
                              handleFormStart();
                            }}
                          >
                            <div className="text-center">
                              <div className="font-medium text-sm">{option.label}</div>
                              <div className="text-xs text-gray-500 mt-0.5">{option.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {form.formState.errors.homeSize && (
                        <p className="mt-1 text-sm text-red-600">{form.formState.errors.homeSize.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                        ZIP Code
                      </label>
                      <div className="mt-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          {...form.register('zipCode')}
                          type="text"
                          id="zipCode"
                          placeholder="Enter your ZIP code"
                          maxLength={5}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cp-primary focus:border-cp-primary text-base"
                          style={{ fontSize: '16px' }} // Prevent iOS zoom
                          onFocus={handleFormStart}
                        />
                      </div>
                      {form.formState.errors.zipCode && (
                        <p className="mt-1 text-sm text-red-600">{form.formState.errors.zipCode.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white py-3 px-4 text-base font-bold rounded-xl shadow-md relative overflow-hidden group transition-all disabled:opacity-50 active:scale-95 active:shadow-sm"
                      style={{ backgroundColor: '#eb5a41' }}
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Finding your plan...
                        </div>
                      ) : (
                        <span className="flex items-center justify-center">
                          Find My Plan
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </span>
                      )}
                    </button>

                    <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <Clock className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-green-800">Same-Day Connection Available</h3>
                          <p className="text-xs text-green-700 mt-1">
                            Orders placed before 5PM (Mon-Sat) can get connected today!
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Transfer warning below main form */}
                <div className="px-6 pb-6 pt-0">
                  <div className="flex items-start text-amber-700 text-sm">
                    <div className="flex-shrink-0 mt-0.5 mr-2">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <p>
                      <span className="font-medium">Moving within Texas?</span> Don&apos;t transfer blindly. Your current plan was priced for your old home, not your new one. <span
                        className="underline font-medium cursor-pointer hover:opacity-80"
                        onClick={() => setIsModalOpen(true)}
                      >
                        Learn More
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="hidden lg:block absolute -bottom-6 -left-12 w-24 h-24 bg-yellow-400 opacity-30 rounded-full blur-xl -z-10"></div>
              <div className="hidden lg:block absolute -top-10 -right-10 w-32 h-32 bg-cp-primary opacity-20 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Transfer Modal */}
      <TransferModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}