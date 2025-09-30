'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems: FAQItem[] = [
    {
      question: 'Is Compare Power really free?',
      answer: 'Yes! Compare Power is 100% free for consumers. We never charge any fees or hidden costs. We earn a commission from electricity providers when you sign up for a plan, but this never affects the price you pay.',
    },
    {
      question: 'How do I know I\'m getting the best rate?',
      answer: 'We show you all available plans from licensed electricity providers in your area, sorted by total cost based on your estimated usage. Our algorithm considers all fees, rates, and contract terms to give you the true cost comparison.',
    },
    {
      question: 'Will switching electricity providers affect my service?',
      answer: 'No! Your electricity service will remain exactly the same. The same power lines and infrastructure deliver electricity to your home regardless of which retail provider you choose. You\'ll simply receive a bill from your new provider.',
    },
    {
      question: 'How long does it take to switch providers?',
      answer: 'The switching process typically takes 1-2 billing cycles (about 2-8 weeks) to complete. During this time, your current provider will continue to serve you until the new provider takes over.',
    },
    {
      question: 'Can I switch if I\'m currently in a contract?',
      answer: 'You can switch if you\'re in a month-to-month plan or if your contract has expired. If you\'re still under contract, you may face early termination fees. We\'ll show you when your current contract expires so you can switch at the right time.',
    },
    {
      question: 'What information do I need to compare rates?',
      answer: 'You just need your ZIP code and an estimate of your monthly electricity usage (or home size). If you have a recent electricity bill, that can help us provide more accurate comparisons.',
    },
    {
      question: 'Are there any risks to switching electricity providers?',
      answer: 'There are no risks to your electrical service. All retail electricity providers in Texas are regulated by the Public Utility Commission. However, be sure to read contract terms carefully, especially regarding rates, fees, and contract length.',
    },
    {
      question: 'What if I\'m not satisfied with my new provider?',
      answer: 'If you\'re not satisfied, you can switch to a different provider. Most plans have a "buyer\'s remorse" period where you can cancel without penalty. We\'re also here to help you find a better option if needed.',
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers. Here are the most common questions about switching electricity providers in Texas.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-cp-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-cp-primary flex-shrink-0" />
                )}
              </button>

              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center mt-12">
          <div className="bg-cp-primary/10 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our licensed energy advisors are here to help you understand your options and find the best plan for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:1-855-441-7816"
                className="bg-cp-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-cp-primary/90 transition-colors"
              >
                Call (855) 441-7816
              </a>
              <span className="text-gray-500 text-sm">
                Monday - Friday, 8AM - 8PM CT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}