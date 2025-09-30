import { z } from 'zod';

export const formSchema = z.object({
  homeSize: z.enum(['small', 'medium', 'large', 'xlarge'], {
    message: 'Please select your home size',
  }),
  zipCode: z.string()
    .min(5, 'ZIP code must be 5 digits')
    .max(5, 'ZIP code must be 5 digits')
    .regex(/^\d{5}$/, 'ZIP code must contain only numbers'),
});

export type FormData = z.infer<typeof formSchema>;

export const homeSizeOptions = [
  { value: 'small', label: 'Small (1-2 BR)', description: 'Up to 1,000 sq ft' },
  { value: 'medium', label: 'Medium (2-3 BR)', description: '1,000 - 2,000 sq ft' },
  { value: 'large', label: 'Large (3-4 BR)', description: '2,000 - 3,000 sq ft' },
  { value: 'xlarge', label: 'Extra Large (4+ BR)', description: 'Over 3,000 sq ft' },
];