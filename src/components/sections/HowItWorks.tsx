import React from 'react';
import { Search, GitCompare, Zap } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Enter Your Details',
      description: 'Tell us your home size and ZIP code to see personalized rates in your area.',
      step: '01',
    },
    {
      icon: GitCompare,
      title: 'Compare Options',
      description: 'Browse 100+ electricity plans from top-rated providers, all in one place.',
      step: '02',
    },
    {
      icon: Zap,
      title: 'Start Saving',
      description: 'Choose your plan and start saving money on your electricity bill right away.',
      step: '03',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Finding the best electricity rate in Texas is simple with Compare Power.
            Get started in just 3 easy steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center relative">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 bg-cp-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg z-10">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="bg-cp-primary/10 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <IconComponent className="h-12 w-12 text-cp-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Connecting Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 transform -translate-y-1/2 w-full">
                    <div className="w-full h-0.5 bg-gray-200 relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-200 rotate-45"></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cp-primary to-cp-secondary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Saving on Your Electricity Bill?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join millions of Texans who have saved money with Compare Power.
            </p>
            <button className="bg-white text-cp-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}