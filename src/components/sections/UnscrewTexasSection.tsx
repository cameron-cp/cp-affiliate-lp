import React from 'react';
import { Play, Zap, Shield, DollarSign } from 'lucide-react';

export function UnscrewTexasSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center bg-cp-primary/20 text-cp-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Stop Getting Screwed on Electricity
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Tired of Confusing <span className="text-cp-primary">Electricity Bills?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Those &quot;low rates&quot; you see advertised? They&apos;re designed to trick you.
              Watch how we help Texans cut through the BS and find plans that actually save money.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">No Hidden Fees</div>
                  <div className="text-sm text-gray-400">Transparent pricing, always</div>
                </div>
              </div>

              <div className="flex items-start">
                <DollarSign className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Real Savings</div>
                  <div className="text-sm text-gray-400">Based on actual usage</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-cp-primary hover:bg-cp-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
                Find My Real Rate
              </button>
              <button className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Video Container */}
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/64svgVc4Smk?rel=0&showinfo=0&modestbranding=1"
                    title="Unscrew Texas - Compare Power"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-cp-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
            </div>

            {/* Video stats/social proof */}
            <div className="mt-6 flex items-center justify-center space-x-6 text-gray-400">
              <div className="flex items-center">
                <Play className="h-4 w-4 mr-2" />
                <span className="text-sm">50K+ Views</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm">⭐ 4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm">💡 Real Texas Stories</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="text-gray-400">
              <div className="text-2xl font-bold text-white">2M+</div>
              <div className="text-sm">Texans Helped</div>
            </div>
            <div className="text-gray-400">
              <div className="text-2xl font-bold text-white">$350</div>
              <div className="text-sm">Avg. Annual Savings</div>
            </div>
            <div className="text-gray-400">
              <div className="text-2xl font-bold text-white">16</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="text-gray-400">
              <div className="text-2xl font-bold text-white">A+</div>
              <div className="text-sm">BBB Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}