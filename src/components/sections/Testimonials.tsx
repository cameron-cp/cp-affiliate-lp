import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Needed same-day power for my apartment and had my confirmation letter in minutes. The leasing office accepted it immediately and I got my keys right away!",
      name: "Jessica D.",
      location: "Houston, TX",
      initials: "JD"
    },
    {
      quote: "I saved over $420 compared to my previous provider. The whole setup process took less than 5 minutes and was completely paperless.",
      name: "Michael T.",
      location: "Dallas, TX",
      initials: "MT"
    },
    {
      quote: "The personalized recommendations were spot-on for my new home. My power was connected right on my move-in date with zero hassle or paperwork.",
      name: "Amanda L.",
      location: "Austin, TX",
      initials: "AL"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-3">Customer Stories</span>
          <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          <div className="mt-4 flex items-center justify-center">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700">4.9/5</span>
            <span className="ml-1 text-xs text-gray-500">(80,000+ reviews... and counting)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 flex-grow mb-6">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                <div className="h-10 w-10 rounded-full bg-cp-primary/10 flex items-center justify-center text-cp-primary font-medium">
                  {testimonial.initials}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}