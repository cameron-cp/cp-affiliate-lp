'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, AlertTriangle, Check, List, Building, Clock, Target } from 'lucide-react';

const zipSchema = z.object({
  zipCode: z.string().regex(/^\d{5}$/, "Please enter a valid 5-digit ZIP code"),
});

type ZipFormData = z.infer<typeof zipSchema>;

interface TransferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TransferModal({ isOpen, onClose }: TransferModalProps) {
  const form = useForm<ZipFormData>({
    resolver: zodResolver(zipSchema),
    defaultValues: {
      zipCode: '',
    },
  });

  const onSubmit = (data: ZipFormData) => {
    const url = `https://orders.comparepower.com/?zip_code=${data.zipCode}`;
    window.location.href = url;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header with warning icon and title */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
              </div>
              <h3 className="ml-3 text-lg font-medium text-amber-800">
                Is Transferring Your Plan Really the Best Option?
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Main content explaining transfer risks */}
          <div className="mt-2 text-gray-600 space-y-4">
            <p>
              Your current plan was designed for your old home&apos;s specific usage patterns. In your new home, everything changes—size, appliances, and your daily routine—which can make your old rate structure a poor fit.
            </p>

            {/* Highlighted warning message */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800 font-medium">
                Most people who transfer end up paying more than if they&apos;d chosen a new plan optimized for their new home. It takes just 5 minutes to compare and know for sure which option will save you the most money.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <List className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">plans to choose from</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Building className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">16+</div>
                <div className="text-sm text-gray-600">Providers competing for your business</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">5 Min</div>
                <div className="text-sm text-gray-600">to compare options</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Target className="h-8 w-8 text-purple-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">1</div>
                <div className="text-sm text-gray-600">best fit for your home</div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="modalZipCode" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter your new ZIP code to get started
                </label>
                <input
                  {...form.register('zipCode')}
                  type="text"
                  id="modalZipCode"
                  placeholder="Enter ZIP code"
                  maxLength={5}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                  style={{ fontSize: '16px' }} // Prevent iOS zoom
                />
                {form.formState.errors.zipCode && (
                  <p className="mt-1 text-sm text-red-600">{form.formState.errors.zipCode.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                disabled={form.formState.isSubmitting}
              >
                <Check className="h-5 w-5" />
                Compare My Options
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}