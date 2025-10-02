'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlertTriangle, ArrowRight, MapPin } from 'lucide-react';
import { buildRedirectUrl } from '@/lib/partners';
import { analytics } from '@/lib/analytics';

const zipCodeSchema = z.object({
  zipCode: z.string()
    .min(5, 'ZIP code must be 5 digits')
    .max(5, 'ZIP code must be 5 digits')
    .regex(/^\d{5}$/, 'ZIP code must contain only numbers'),
});

type ZipCodeFormData = z.infer<typeof zipCodeSchema>;

export function ServiceTransferSection() {
  const form = useForm<ZipCodeFormData>({
    resolver: zodResolver(zipCodeSchema),
    defaultValues: {
      zipCode: '',
    },
  });

  const onSubmit = (data: ZipCodeFormData) => {
    // Track form submission
    analytics.formSubmit('transfer', 'medium', data.zipCode);

    // Default to medium home size for this simplified form
    const redirectUrl = buildRedirectUrl(data.zipCode, 'medium');
    window.location.href = redirectUrl;
  };

  const handleFormStart = () => {
    analytics.formStart('transfer', 'hero');
  };
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-amber-100 border-y border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-amber-200 text-amber-800 mb-3">Important</span>
            <h2 className="text-3xl font-bold text-amber-800">
              Moving Within Texas?
            </h2>
            <p className="mt-4 text-lg text-amber-700 max-w-2xl mx-auto">
              Don&apos;t blindly transfer your existing plan. Your current rate was optimized for your old home, not your new one.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-amber-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Did You Know?</h3>
                  <p className="mt-2 text-gray-600">
                    Texas law allows you to cancel your current contract without penalty when moving, giving you the freedom to choose the best option for your new home.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-amber-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-700">83%</p>
                  <p className="text-sm text-amber-600">of transfers cost more</p>
                </div>

                <div className="bg-amber-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-700">$175</p>
                  <p className="text-sm text-amber-600">avg. yearly overpayment</p>
                </div>

                <div className="bg-amber-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-700">5 min</p>
                  <p className="text-sm text-amber-600">to compare options</p>
                </div>
              </div>

              <div className="text-center">
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-lg mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        {...form.register('zipCode')}
                        type="text"
                        placeholder="Enter your ZIP code"
                        maxLength={5}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-600 focus:border-amber-600 text-base"
                        style={{ fontSize: '16px' }} // Prevent iOS zoom
                        onFocus={handleFormStart}
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-amber-600 hover:bg-amber-700 text-white inline-flex items-center px-6 py-3 shadow-md rounded-xl transition-all disabled:opacity-50 active:scale-95 active:shadow-sm whitespace-nowrap sm:w-auto w-full"
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
                          Compare My Options
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </span>
                      )}
                    </button>
                  </div>
                  {form.formState.errors.zipCode && (
                    <p className="mt-2 text-sm text-red-600 text-center">{form.formState.errors.zipCode.message}</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}