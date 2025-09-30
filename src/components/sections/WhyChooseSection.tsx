import React from 'react';
import { Clock, DollarSign, Check, Zap } from 'lucide-react';

export function WhyChooseSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-3">Trusted by 2M+ Texans</span>
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Compare Power</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            The fastest, most trusted way to get electricity in Texas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-all">
            <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-5">
              <Clock className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">5-Minute Setup</h3>
            <p className="text-gray-600 mb-4">
              No phone calls or paperwork. Complete your entire electricity setup online in less than 5 minutes.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-cp-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Instant account creation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-cp-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Digital proof of service</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-all">
            <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-5">
              <DollarSign className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Save $350/Year</h3>
            <p className="text-gray-600 mb-4">
              Our customers save an average of $350 annually compared to standard utility rates.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-cp-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Personalized plan recommendations</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-cp-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Transparent pricing</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-all">
            <div className="h-14 w-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-5">
              <Zap className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Same-Day Service</h3>
            <p className="text-gray-600 mb-4">
              Need power today? Get connected same-day when you order by 5PM (Monday-Saturday).
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-cp-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">No wait times</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-cp-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Perfect for last-minute moves</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}