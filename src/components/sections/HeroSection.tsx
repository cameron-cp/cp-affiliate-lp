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

    const redirectUrl = buildRedirectUrl(data.zipCode, partner?.partner_code);
    window.location.href = redirectUrl;
  };

  const handleFormStart = () => {
    analytics.formStart(partner?.partner_code || 'default', 'hero');
  };

  const displayName = partner?.partner_name || 'Compare Power';
  const logoUrl = partner?.partner_logo_url || CP_BRAND.logo_url;
  const logoAlt = partner?.partner_logo_alt_text || CP_BRAND.logo_alt;
  const primaryColor = partner?.brand_colors?.primary || CP_BRAND.colors.primary;

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
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

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Save Money on Your{' '}
              <span
                className="text-cp-primary"
                style={{ color: primaryColor }}
              >
                Electricity Bill
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-8">
              {partner?.partner_name ?
                `${displayName} has partnered with Compare Power to help you find the lowest electricity rates in Texas.` :
                'Compare over 100+ electricity plans from top-rated providers in Texas.'
              }
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cp-primary mb-2">100+</div>
                <div className="text-gray-600">Electricity Plans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cp-primary mb-2">$400+</div>
                <div className="text-gray-600">Average Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cp-primary mb-2">100%</div>
                <div className="text-gray-600">Free Service</div>
              </div>
            </div>
          </div>

          {/* Right Column - Lead Capture Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Get Your Free Quote
              </h2>
              <p className="text-gray-600">
                Enter your details below to compare rates instantly
              </p>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <Select
                {...form.register('homeSize')}
                label="Home Size"
                placeholder="Select your home size"
                options={homeSizeOptions}
                error={form.formState.errors.homeSize?.message}
                onFocus={handleFormStart}
              />

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
                className="w-full"
                style={{ backgroundColor: primaryColor }}
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? 'Loading...' : 'Compare Rates Now'}
              </Button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                By clicking &quot;Compare Rates Now&quot;, you agree to receive calls and texts from Compare Power and its partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}