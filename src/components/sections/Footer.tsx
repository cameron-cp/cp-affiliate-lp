import React from 'react';
import Image from 'next/image';
import { Phone, Mail, Heart } from 'lucide-react';
import { CP_BRAND } from '@/lib/partners';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="inline-block mb-4">
              <Image
                src="/logos/CPLogo_4C_H_Reverse.svg"
                alt={CP_BRAND.logo_alt}
                width={150}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Texas&apos;s leading electricity marketplace, helping millions of Texans save money on their electricity bills since 2009.
            </p>

            {/* Made in Texas pill */}
            <div className="inline-flex items-center px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 mb-4">
              <Heart className="h-3 w-3 text-red-400 mr-1" />
              <span>Made in Texas</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-cp-primary" />
                <span className="text-gray-300">(855) 441-7816</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-cp-primary" />
                <span className="text-gray-300">support@comparepower.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Electricity Plans
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Energy Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Do Not Sell My Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  License Information
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Compare Power. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>
                Compare Power is a licensed retail electricity provider broker in Texas.
              </p>
              <p className="mt-1">
                PUCT License #BR190123 | Better Business Bureau A+ Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}