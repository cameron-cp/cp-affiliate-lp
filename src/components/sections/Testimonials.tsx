import React from 'react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Austin, TX',
      rating: 5,
      text: 'I saved over $300 in my first year using Compare Power. The process was so easy and their team helped me understand all my options.',
      savings: '$300+',
    },
    {
      name: 'Mike Rodriguez',
      location: 'Houston, TX',
      rating: 5,
      text: 'After moving to Texas, I was confused about choosing an electricity provider. Compare Power made it simple and I found the perfect plan for my family.',
      savings: '$250+',
    },
    {
      name: 'Jennifer Chen',
      location: 'Dallas, TX',
      rating: 5,
      text: 'Compare Power found me a plan that actually fits my usage patterns. No more bill surprises - I know exactly what I\'ll pay each month.',
      savings: '$400+',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. See how Compare Power has helped thousands of Texans save money on their electricity bills.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm relative">
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-cp-primary mb-4" />

              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{testimonial.savings}</div>
                  <div className="text-xs text-gray-500">Annual Savings</div>
                </div>
              </div>

              {/* Accent Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cp-primary to-cp-secondary rounded-t-2xl"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white px-8 py-6 rounded-2xl shadow-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">4.8/5</div>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-sm text-gray-500 mt-1">Trustpilot</div>
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">A+</div>
              <div className="text-sm text-gray-500 mt-1">BBB Rating</div>
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">2M+</div>
              <div className="text-sm text-gray-500 mt-1">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}