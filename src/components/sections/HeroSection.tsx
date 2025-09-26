'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { PartnerConfig } from '@/types/partner';
import { formSchema, type FormData, homeSizeOptions } from '@/lib/validation';
import { buildRedirectUrl, CP_BRAND } from '@/lib/partners';
import { analytics } from '@/lib/analytics';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';

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
  const primaryColor = partner?.brand_colors?.primary || CP_BRAND.colors.primary;

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center lg:text-left max-w-4xl mx-auto">
          {/* Partner/Compare Power Logo */}
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
          <div className="text-sm font-bold text-gray-600 tracking-wider mb-4">
            MILLIONS (YES, MILLIONS) OF HAPPY CUSTOMERS
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Pay <span className="font-bold">as little as possible</span> for your new{' '}
            <span
              className="text-cp-primary"
              style={{ color: primaryColor }}
            >
              electricity plan
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-8">
            Compare plans from top competing energy providers and get the best one instantly. Trusted by millions of happy Texans.
            {partner?.partner_name && (
              <> Trusted by {partner.partner_name}.</>
            )}
          </p>

          {/* Trust Signals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-2">
                <span className="text-2xl font-bold text-cp-primary mr-2">70,000+</span>
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="text-gray-600">5-star reviews</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-cp-primary mb-2">2.3 million+</div>
              <div className="text-gray-600">orders processed</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-cp-primary mb-2">16 years</div>
              <div className="text-gray-600">serving Texans</div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Get Power in Minutes
              </h2>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  My home is a:
                </label>
                <Select
                  {...form.register('homeSize')}
                  placeholder="Select your home size"
                  options={homeSizeOptions}
                  error={form.formState.errors.homeSize?.message}
                  onFocus={handleFormStart}
                />
              </div>

              <Input
                {...form.register('zipCode')}
                label="ZIP Code"
                type="text"
                placeholder="Enter your ZIP code"
                maxLength={5}
                error={form.formState.errors.zipCode?.message}
                onFocus={handleFormStart}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full bg-cp-secondary hover:bg-cp-secondary/90 font-bold"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? 'Loading...' : 'Find My Plan'}
              </Button>

              <div className="text-center text-sm text-gray-500">
                in minutes
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}