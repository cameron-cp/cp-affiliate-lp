'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, ArrowRight } from 'lucide-react';
import { buildRedirectUrl } from '@/lib/partners';
import { analytics } from '@/lib/analytics';

const zipCodeSchema = z.object({
  zipCode: z.string()
    .min(5, 'ZIP code must be 5 digits')
    .max(5, 'ZIP code must be 5 digits')
    .regex(/^\d{5}$/, 'ZIP code must contain only numbers'),
});

type ZipCodeFormData = z.infer<typeof zipCodeSchema>;

export function ThePowerIsYoursSection() {

  const form = useForm<ZipCodeFormData>({
    resolver: zodResolver(zipCodeSchema),
    defaultValues: {
      zipCode: '',
    },
  });

  const onSubmit = (data: ZipCodeFormData) => {
    // Track form submission
    analytics.formSubmit('default', 'medium', data.zipCode);

    // Default to medium home size for this simplified form
    const redirectUrl = buildRedirectUrl(data.zipCode, 'medium');
    window.location.href = redirectUrl;
  };

  const handleFormStart = () => {
    analytics.formStart('default', 'sticky');
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Brand Harmony Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #d2d2d2 0%, #22baed 50%, #eb5a41 100%)'
        }}
      >
        {/* Larger zap icon pattern overlay */}
        <div className="absolute inset-0 opacity-12">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="zapPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <svg x="28" y="28" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="m13 2-3 7h4l-3 7"/>
                </svg>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#zapPattern)" />
          </svg>
        </div>

        {/* Subtle wave pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path d="M0,60 C300,20 600,100 900,60 C1050,30 1150,80 1200,60 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.1)"/>
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white border border-white/30 mb-3">
            Video: The Power Pledge
          </span>
          <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-sm">
            The Power Is Yours<sup className="text-lg">™</sup>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Left Column - Video */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-gray-600 mb-4">YouTube Video Placeholder</div>
                <a
                  href="https://www.youtube.com/watch?v=duA8HN-y0j4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-lg text-white/90 leading-relaxed drop-shadow-sm">
                All electricity is the same, no matter who you buy it from.
                Find the company with the right plan for you.
              </p>
              <p className="text-lg text-white/90 leading-relaxed drop-shadow-sm">
                Shop the plan, not the brand. It&apos;s time to stop paying more
                for the exact same thing.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="text-center mb-6">
            <label htmlFor="zipCode" className="block text-lg font-medium text-white mb-2 drop-shadow-sm">
              Enter your ZIP code to get started
            </label>
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
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
              <button
                type="submit"
                className="text-white py-3 px-6 text-base font-bold rounded-xl shadow-md relative overflow-hidden group transition-all disabled:opacity-50 active:scale-95 active:shadow-sm whitespace-nowrap sm:w-auto w-full"
                style={{ backgroundColor: '#eb5a41' }}
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Finding...
                  </div>
                ) : (
                  <span className="flex items-center justify-center">
                    Find My Plan
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                )}
              </button>
            </div>
            {form.formState.errors.zipCode && (
              <p className="mt-2 text-sm text-red-200 text-center drop-shadow-sm">{form.formState.errors.zipCode.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}