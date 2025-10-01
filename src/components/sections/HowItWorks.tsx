import React from 'react';
import { Home, Zap, Check } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Home,
      title: 'Tell Us About Your Move',
      description: 'Enter your new address and move-in date. We&apos;ll instantly verify your address.',
      step: 1,
    },
    {
      icon: Zap,
      title: 'Choose Your Plan',
      description: 'Compare personalized recommendations based on your home&apos;s unique energy profile.',
      step: 2,
    },
    {
      icon: Check,
      title: 'Confirm Your Order',
      description: 'Enter your details, get instant confirmation, and have power on your move-in day.',
      step: 3,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-cp-primary/10 text-cp-primary mb-3">How It Works</span>
          <h2 className="text-3xl font-bold text-gray-900">3 Simple Steps to Get Connected</h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gray-200 md:block hidden"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all h-full flex flex-col">
                    <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-0 h-16 w-16 rounded-full ${
                      index === 0 ? 'bg-blue-100 text-blue-600' :
                      index === 1 ? 'bg-orange-100 text-orange-600' :
                      'bg-green-100 text-green-600'
                    } flex items-center justify-center text-xl font-bold shadow-lg`}>
                      {step.step}
                    </div>
                    <div className="mt-8 md:mt-0 md:ml-12">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>

                      {index === 2 && (
                        <div className="mt-auto pt-4">
                          <button className="text-cp-primary hover:text-cp-primary/80 font-medium inline-flex items-center group">
                            Get Started
                            <svg className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}