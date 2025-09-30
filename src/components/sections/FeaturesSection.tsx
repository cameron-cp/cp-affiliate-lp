'use client';

import React, { useState } from 'react';
import { Check, Clock, Zap, ShieldCheck, DollarSign, ExternalLink, MapPin, ArrowRight } from 'lucide-react';

export function FeaturesSection() {
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.length === 5) {
      window.location.href = `https://orders.comparepower.com/?zip_code=${zipCode}`;
    }
  };

  const features = [
    {
      title: "Same-Day Service",
      description: "Need power today? Get connected by 8PM when you order before 5PM on weekdays and Saturdays.",
      icon: <Clock className="h-6 w-6" />,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      bullets: [
        "Available in all major Texas cities",
        "Perfect for last-minute moves"
      ]
    },
    {
      title: "Instant Proof Document",
      description: "Receive immediate proof of service for your apartment or leasing office in minutes.",
      icon: <Zap className="h-6 w-6" />,
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
      bullets: [
        "Accepted by all major apartment complexes",
        "Email directly to your leasing office"
      ]
    },
    {
      title: "Personalized Recommendations",
      description: "Get plan recommendations tailored to your specific home profile and usage patterns.",
      icon: <ShieldCheck className="h-6 w-6" />,
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      bullets: [
        "Optimized for home size & features",
        "Special plans for solar, EV, and pool homes"
      ]
    },
    {
      title: "Transparent Pricing",
      description: "See all-in prices with no hidden fees. Compare options based on your actual usage.",
      icon: <DollarSign className="h-6 w-6" />,
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      bullets: [
        "No surprise charges or hidden fees",
        "Monthly cost estimates for your usage"
      ]
    },
    {
      title: "No-Deposit Options",
      description: "Many plans available with no security deposit required, saving you $100-400 upfront.",
      icon: <ShieldCheck className="h-6 w-6" />,
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
      bullets: [
        "Avoid large upfront payments",
        "Filter for no-deposit plans only"
      ]
    },
    {
      title: "100% Online Signup",
      description: "Complete your entire electricity setup online without phone calls or paperwork.",
      icon: <ExternalLink className="h-6 w-6" />,
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600",
      bullets: [
        "Paperless, digital enrollment",
        "Instant confirmation"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-3">Key Benefits</span>
          <h2 className="text-3xl font-bold text-gray-900">Everything You Need</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We&apos;ve streamlined the electricity setup process to make it fast, easy, and stress-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col"
            >
              <div className={`h-12 w-12 rounded-xl ${feature.bgColor} ${feature.textColor} flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {feature.description}
              </p>
              <ul className="mt-auto space-y-2">
                {feature.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Micro-CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cp-primary/5 to-cp-secondary/5 rounded-2xl p-8 border border-cp-primary/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to experience the difference?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of Texans who&apos;ve made the switch to smarter electricity shopping
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                    placeholder="Enter ZIP code"
                    maxLength={5}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cp-primary focus:border-cp-primary text-base"
                    style={{ fontSize: '16px' }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={zipCode.length !== 5}
                  className="bg-cp-secondary hover:bg-cp-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl flex items-center"
                >
                  Find Plans
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}