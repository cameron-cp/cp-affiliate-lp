import React from 'react';
import { Phone, Clock, CalendarDays, Heart } from 'lucide-react';

export function StillHaveQuestionsSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Top pill */}
          <div className="inline-block mb-6">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium" style={{color: '#22baed', backgroundColor: 'rgba(34, 186, 237, 0.1)'}}>
              Texans helping Texans
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Still have questions?
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our Texas-based electricity experts are here to help you understand your options and find the best plan for your needs.
          </p>

          {/* Phone number with icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <Phone className="h-8 w-8 mr-4" style={{color: '#eb5a41'}} />
              <span className="text-2xl font-bold text-gray-900">(855) 858-9800</span>
            </div>
          </div>

          {/* Three-section pill */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white shadow-md border border-gray-200">
            <div className="flex items-center divide-x divide-gray-300">
              <div className="pr-4 flex items-center">
                <Clock className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm text-gray-700 font-medium">9:00A to 7:00P</span>
              </div>
              <div className="px-4 flex items-center">
                <CalendarDays className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-700 font-medium">Mon-Sat</span>
              </div>
              <div className="pl-4 flex items-center">
                <Heart className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-sm text-gray-700 font-medium">Deep in the heart of Texas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}