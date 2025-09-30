import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Star } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-cp-primary to-cp-secondary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
          Ready to get your power connected?
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
          Join millions of Texans who trust ComparePower for fast, affordable electricity setup.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-cp-primary hover:bg-gray-100 px-8 py-4 text-base font-medium shadow-lg rounded-xl transition-all inline-flex items-center justify-center">
            Set Up My Electricity
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="bg-cp-primary/40 backdrop-blur-sm border border-white/30 text-white hover:bg-cp-primary/60 px-8 py-4 text-base font-medium rounded-xl transition-all">
            Learn More
          </button>
        </div>

        {/* Trust badges */}
        <div className="mt-12 inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <div className="flex items-center divide-x divide-white/20">
            <div className="pr-4 flex items-center">
              <ShieldCheck className="h-5 w-5 text-white mr-2" />
              <span className="text-sm text-white font-medium">Secure Setup</span>
            </div>
            <div className="px-4 flex items-center">
              <Clock className="h-5 w-5 text-white mr-2" />
              <span className="text-sm text-white font-medium">5-Minute Process</span>
            </div>
            <div className="pl-4 flex items-center">
              <Star className="h-5 w-5 text-white mr-2 fill-yellow-300" />
              <span className="text-sm text-white font-medium">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}