import React from 'react';
import { Shield, Users, Star, Award } from 'lucide-react';

export function TrustSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Texans Trust Compare Power
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            For over a decade, we've helped millions of Texans find the best electricity rates.
            Here's why we're Texas's #1 energy marketplace.
          </p>
        </div>

        {/* Trust Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-cp-primary rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">2M+</div>
            <div className="text-gray-600">Texans Served</div>
          </div>

          <div className="text-center">
            <div className="bg-cp-primary rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Star className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">4.8/5</div>
            <div className="text-gray-600">Customer Rating</div>
          </div>

          <div className="text-center">
            <div className="bg-cp-primary rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">A+</div>
            <div className="text-gray-600">BBB Rating</div>
          </div>

          <div className="text-center">
            <div className="bg-cp-primary rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>

        {/* Trust Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm h-full">
              <Shield className="h-8 w-8 text-cp-primary mb-4 mx-auto md:mx-0" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                100% Free & Secure
              </h3>
              <p className="text-gray-600">
                Our service is completely free with no hidden fees. Your personal information is protected with bank-level security.
              </p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm h-full">
              <Users className="h-8 w-8 text-cp-primary mb-4 mx-auto md:mx-0" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Unbiased Comparisons
              </h3>
              <p className="text-gray-600">
                We show you all available plans in your area, not just the ones that pay us the highest commission.
              </p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm h-full">
              <Star className="h-8 w-8 text-cp-primary mb-4 mx-auto md:mx-0" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expert Support
              </h3>
              <p className="text-gray-600">
                Our licensed energy advisors are here to help you understand your options and make the best choice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}