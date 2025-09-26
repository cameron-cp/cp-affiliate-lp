'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { ArrowRight, MapPin, Star, Clock, DollarSign } from 'lucide-react';
import { PartnerConfig } from '@/types/partner';
import { formSchema, type FormData, homeSizeOptions } from '@/lib/validation';
import { buildRedirectUrl, CP_BRAND } from '@/lib/partners';
import { analytics } from '@/lib/analytics';

interface HeroSectionProps {
  partner?: PartnerConfig | null;
}

export function HeroSection({ partner }: HeroSectionProps) {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Partner Logo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Image
                  src={logoUrl}
                  alt={logoAlt}
                  width={200}
                  height={80}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* All Caps Message */}
            <div className="text-sm font-bold text-white/80 tracking-wider mb-4">
              MILLIONS (YES, MILLIONS) OF HAPPY CUSTOMERS
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">Pay <span className="font-extrabold">as little as possible</span> for your</span>
              <span className="block mt-2 text-yellow-300">electricity plan</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-xl text-white/90">
              Compare plans from top competing energy providers and get the best one instantly. Trusted by millions of happy Texans.
              {partner?.partner_name && (
                <> Trusted by {partner.partner_name}.</>
              )}
            </p>

            {/* Trust signals */}
            <div className="mt-10 py-6 px-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex items-center justify-center">
                    <Star className="h-5 w-5 text-yellow-300 fill-current mr-1.5" />
                    <span className="text-xl font-bold text-white">70,000+</span>
                  </div>
                  <p className="text-sm text-white/80 mt-1.5 text-center">5-Star Reviews</p>
                </div>

                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex items-center justify-center">
                    <Clock className="h-5 w-5 text-yellow-300 mr-1.5" />
                    <span className="text-xl font-bold text-white">16 Years</span>
                  </div>
                  <p className="text-sm text-white/80 mt-1.5 text-center">Serving Texans</p>
                </div>

                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-yellow-300 mr-1.5" />
                    <span className="text-xl font-bold text-white">2.3M+</span>
                  </div>
                  <p className="text-sm text-white/80 mt-1.5 text-center">Orders Processed</p>
                </div>

                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-green-400 mr-1.5" />
                    <span className="text-xl font-bold text-white">$700M+</span>
                  </div>
                  <p className="text-sm text-white/80 mt-1.5 text-center">Saved for Texans</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:shadow-2xl">
              <div className="bg-gradient-to-r from-cp-primary/10 to-cp-secondary/10 px-6 py-4 border-b border-gray-100">
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
                          className={`flex items-center justify-center px-4 py-3 border rounded-xl cursor-pointer transition-all ${
                            form.watch('homeSize') === option.value
                              ? 'bg-cp-primary/10 border-cp-primary text-cp-primary shadow-sm'
                              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                          onClick={() => {
                            form.setValue('homeSize', option.value as FormData['homeSize']);
                            handleFormStart();
                          }}
                        >
                          <span className="font-medium text-sm">{option.label}</span>
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
                    className="w-full bg-cp-secondary hover:bg-cp-secondary/90 text-white py-3 px-4 text-base font-bold rounded-xl shadow-md relative overflow-hidden group transition-all disabled:opacity-50"
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

                  <div className="text-center text-sm text-gray-500">
                    in minutes
                  </div>
                </form>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="hidden lg:block absolute -bottom-6 -left-12 w-24 h-24 bg-yellow-400 opacity-30 rounded-full blur-xl"></div>
            <div className="hidden lg:block absolute -top-10 -right-10 w-32 h-32 bg-cp-primary opacity-20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}