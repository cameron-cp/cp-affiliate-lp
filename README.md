# Compare Power Affiliate Landing Page

A high-converting affiliate landing page for Compare Power's Texas electricity marketplace. This page creates seamless continuity from partner traffic to lead conversion through dynamic co-branding and optimized user experience.

## Features

- **Dynamic Partner Branding**: Automatically displays partner logo and colors based on `cp_afid` URL parameter
- **High-Performance Form**: Lead capture form with validation and direct redirect to Compare Power orders
- **Mobile-First Design**: Optimized for mobile traffic (60%+ of affiliate visitors)
- **Analytics Integration**: Built-in Google Analytics and Facebook Pixel tracking
- **Partner Attribution**: Maintains partner tracking through entire conversion funnel

## Quick Start

1. **Clone and Install**
   ```bash
   git clone https://github.com/cameron-cp/cp-affiliate-lp.git
   cd cp-affiliate-lp
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Add your analytics IDs to .env.local
   ```

3. **Development Server**
   ```bash
   npm run dev
   # Open http://localhost:3000
   ```

## Partner Configuration

Partners are configured in `src/data/partners.json`. Each partner has:

```json
{
  "partner_code": "unique-code",
  "partner_name": "Display Name",
  "partner_logo_url": "/logos/partner-logo.png",
  "partner_logo_alt_text": "Alt text",
  "active_status": true,
  "brand_colors": {
    "primary": "#1e40af",
    "secondary": "#f59e0b"
  }
}
```

## URL Structure

- **Default**: `https://your-domain.com/` (Compare Power branding)
- **Partner**: `https://your-domain.com/?cp_afid=partner-code` (Dynamic partner branding)

## Form Redirect

Form submissions redirect to:
```
https://orders.comparepower.com/?zip_code={zip_code}&cp_afid={partner_code}
```

## Deployment (Netlify)

1. **Connect GitHub Repository**
   - Link your repository to Netlify
   - Netlify will auto-detect Next.js configuration

2. **Environment Variables**
   Set in Netlify Dashboard > Site Settings > Environment Variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_FB_PIXEL_ID=xxxxxxxxxx
   ```

3. **Deploy**
   - Push to main branch triggers automatic deployment
   - Branch deploys create preview URLs for testing

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Main landing page
│   └── layout.tsx         # Root layout
├── components/
│   ├── ui/               # Reusable components
│   └── sections/         # Page sections
├── lib/
│   ├── partners.ts       # Partner management
│   ├── analytics.ts      # Tracking functions
│   └── validation.ts     # Form validation
├── types/
│   └── partner.ts        # TypeScript interfaces
└── data/
    └── partners.json     # Partner configuration
```

## Key Business Logic

- **Partner Detection**: URL parameter `cp_afid` determines branding
- **Form Validation**: ZIP code format and home size validation
- **Attribution Preservation**: Partner code passed through to orders system
- **Analytics Tracking**: Page views, form starts, and conversions tracked

## Performance Optimizations

- Server-side rendering for fast initial load
- Image optimization with Next.js Image component
- Tailwind CSS with purging for minimal bundle size
- Mobile-first responsive design

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Analytics**: Google Analytics 4 + Facebook Pixel
- **Deployment**: Netlify with automatic deployments