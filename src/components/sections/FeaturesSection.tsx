import React from 'react';
import { Check, Clock, Zap, ShieldCheck, DollarSign, ExternalLink } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      title: "Same-Day Service",
      description: "Need power today? Get connected by 8PM when you order before 5PM on weekdays and Saturdays.",
      icon: <Clock className="h-6 w-6" />,
      bullets: [
        "Available in all major Texas cities",
        "Perfect for last-minute moves"
      ]
    },
    {
      title: "Instant Proof Document",
      description: "Receive immediate proof of service for your apartment or leasing office in minutes.",
      icon: <Zap className="h-6 w-6" />,
      bullets: [
        "Accepted by all major apartment complexes",
        "Email directly to your leasing office"
      ]
    },
    {
      title: "Personalized Recommendations",
      description: "Get plan recommendations tailored to your specific home profile and usage patterns.",
      icon: <ShieldCheck className="h-6 w-6" />,
      bullets: [
        "Optimized for home size & features",
        "Special plans for solar, EV, and pool homes"
      ]
    },
    {
      title: "Transparent Pricing",
      description: "See all-in prices with no hidden fees. Compare options based on your actual usage.",
      icon: <DollarSign className="h-6 w-6" />,
      bullets: [
        "No surprise charges or hidden fees",
        "Monthly cost estimates for your usage"
      ]
    },
    {
      title: "No-Deposit Options",
      description: "Many plans available with no security deposit required, saving you $100-400 upfront.",
      icon: <ShieldCheck className="h-6 w-6" />,
      bullets: [
        "Avoid large upfront payments",
        "Filter for no-deposit plans only"
      ]
    },
    {
      title: "100% Online Signup",
      description: "Complete your entire electricity setup online without phone calls or paperwork.",
      icon: <ExternalLink className="h-6 w-6" />,
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
              <div className="h-12 w-12 rounded-xl bg-cp-primary/10 text-cp-primary flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {feature.description}
              </p>
              <ul className="mt-auto space-y-2">
                {feature.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-cp-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}