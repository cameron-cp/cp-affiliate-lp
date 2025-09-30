import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';

export function ServiceTransferSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-amber-100 border-y border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-amber-200 text-amber-800 mb-3">Important</span>
            <h2 className="text-3xl font-bold text-amber-800">
              Moving Within Texas?
            </h2>
            <p className="mt-4 text-lg text-amber-700 max-w-2xl mx-auto">
              Don't blindly transfer your existing plan. Your current rate was optimized for your old home, not your new one.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-amber-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Did You Know?</h3>
                  <p className="mt-2 text-gray-600">
                    Texas law allows you to cancel your current contract without penalty when moving, giving you the freedom to choose the best option for your new home.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-amber-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-700">83%</p>
                  <p className="text-sm text-amber-600">of transfers cost more</p>
                </div>

                <div className="bg-amber-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-700">$175</p>
                  <p className="text-sm text-amber-600">avg. yearly overpayment</p>
                </div>

                <div className="bg-amber-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-700">5 min</p>
                  <p className="text-sm text-amber-600">to compare options</p>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-amber-600 hover:bg-amber-700 text-white inline-flex items-center px-6 py-3 shadow-md rounded-xl transition-all">
                  Compare My Options
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}