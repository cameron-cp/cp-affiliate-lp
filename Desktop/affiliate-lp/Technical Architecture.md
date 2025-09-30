# Compare Power Affiliate Landing Page - Technical Architecture Document

## Overview
This document outlines the technical implementation approach for the affiliate landing page defined in the product specification. The architecture prioritizes performance, maintainability, and conversion optimization for high-traffic affiliate campaigns.

## Technology Stack

### Frontend Framework
**Next.js 14 with App Router**
- **Server-Side Rendering (SSR)** for SEO optimization and fast initial page loads
- **Static Generation** for cacheable partner-specific pages
- **Built-in image optimization** for partner logos and hero images
- **Automatic code splitting** to minimize bundle size

### Language
**TypeScript**
- Type safety for partner configuration objects
- Better developer experience and IDE support
- Compile-time error catching for partner data integration
- Self-documenting code for team collaboration

### Styling
**Tailwind CSS**
- **Utility-first approach** for rapid development
- **Built-in responsive design** system
- **Small bundle size** with purging unused styles
- **Design system consistency** across components

**Compare Power Brand Colors:**
```css
/* tailwind.config.js custom colors */
colors: {
  cp: {
    primary: '#22baed',    // Main brand blue
    secondary: '#eb5a41',  // Secondary red/orange
    accent: {
      yellow: '#FBB80D',   // Accent yellow
      gray: '#d2d2d2',     // Accent gray
    }
  }
}
```

**Brand Assets:**
- **Logo URL:** `https://assets.comparepower.com/images/comparepower.png`
- **Tagline:** "The Power Is Yours"

### Database & Data Management
**Option 1: JSON Configuration (Recommended for MVP)**
```typescript
// partners.json
{
  "partners": {
    "partner001": {
      "partner_code": "partner001",
      "partner_name": "Energy Savings Pro",
      "partner_logo_url": "/logos/energy-savings-pro.svg",
      "partner_logo_alt_text": "Energy Savings Pro Logo",
      "active_status": true,
      "created_date": "2025-01-01",
      "brand_colors": {
        "primary": "#1e40af",
        "secondary": "#f59e0b"
      }
    }
  }
}
```

**Option 2: Database (Scale Option)**
- **Supabase** or **PlanetScale** for serverless database
- Partner management dashboard for non-technical updates
- Real-time partner configuration changes

## Architecture Patterns

### Project Structure
```
/src
  /app
    /page.tsx                 # Main landing page
    /layout.tsx              # Root layout with analytics
    /globals.css             # Global styles
  /components
    /ui
      /Button.tsx            # Reusable button component
      /Input.tsx             # Form input components
      /Select.tsx            # Dropdown components
    /sections
      /HeroSection.tsx       # Hero with lead capture form
      /TrustSection.tsx      # Metrics and social proof
      /HowItWorks.tsx        # Process explanation
      /Testimonials.tsx      # Customer reviews
      /FAQ.tsx               # Accordion FAQ section
      /Footer.tsx            # Support and legal links
    /StickyHeader.tsx        # Persistent lead capture
  /lib
    /partners.ts             # Partner data management
    /analytics.ts            # Tracking utilities
    /validation.ts           # Form validation
  /types
    /partner.ts              # TypeScript interfaces
  /data
    /partners.json           # Partner configuration
/public
  /logos                     # Partner logo assets
  /images                    # Hero and section images
```

### Component Architecture
**Atomic Design Principles**
- **Atoms:** Button, Input, Logo components
- **Molecules:** Form groups, metric cards
- **Organisms:** Hero section, testimonial carousel
- **Templates:** Page layout with partner theming
- **Pages:** Final rendered landing page

## Data Flow & State Management

### URL Parameter Processing
```typescript
// App router page component
export default async function LandingPage({
  searchParams,
}: {
  searchParams: { cp_afid?: string }
}) {
  const partnerConfig = await getPartnerConfig(searchParams.cp_afid);
  
  return (
    <main>
      <HeroSection partner={partnerConfig} />
      {/* Other sections */}
    </main>
  );
}
```

### Partner Configuration Management
```typescript
interface PartnerConfig {
  partner_code: string;
  partner_name: string;
  partner_logo_url: string;
  partner_logo_alt_text: string;
  active_status: boolean;
  brand_colors?: {
    primary: string;
    secondary: string;
  };
}

// Fallback configuration for unknown/missing partners
const DEFAULT_CONFIG: PartnerConfig = {
  partner_code: 'default',
  partner_name: '',
  partner_logo_url: '',
  partner_logo_alt_text: '',
  active_status: true,
};

// Compare Power brand constants
const CP_BRAND = {
  logo_url: 'https://assets.comparepower.com/images/comparepower.png',
  logo_alt: 'Compare Power - The Power Is Yours',
  tagline: 'The Power Is Yours',
  colors: {
    primary: '#22baed',
    secondary: '#eb5a41',
    accent_yellow: '#FBB80D',
    accent_gray: '#d2d2d2'
  }
};
```

### Form State Management
**React Hook Form + Zod Validation**
```typescript
const formSchema = z.object({
  homeSize: z.enum(['small', 'medium', 'large', 'xlarge']),
  zipCode: z.string()
    .min(5, 'ZIP code must be 5 digits')
    .max(5, 'ZIP code must be 5 digits')
    .regex(/^\d{5}$/, 'ZIP code must contain only numbers'),
});

const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    homeSize: 'medium',
    zipCode: '',
  },
});
```

## Performance Optimization

### Core Web Vitals Targets
- **Largest Contentful Paint (LCP):** < 2.5s
- **First Input Delay (FID):** < 100ms
- **Cumulative Layout Shift (CLS):** < 0.1

### Optimization Strategies
1. **Image Optimization**
   - Next.js `Image` component with automatic WebP conversion
   - Responsive images with proper sizing
   - Lazy loading for below-fold content

2. **Code Splitting**
   - Dynamic imports for heavy components (testimonial carousel)
   - Route-based splitting with Next.js App Router
   - Bundle analysis with @next/bundle-analyzer

3. **Caching Strategy**
   - Static generation for partner-specific pages
   - CDN caching for assets
   - Browser caching headers for static content

4. **Third-Party Script Optimization**
   - Load analytics scripts using Next.js Script component
   - Defer non-critical JavaScript
   - Minimize external dependencies

## Analytics & Tracking Implementation

### Event Tracking Structure
```typescript
// Analytics events
interface TrackingEvents {
  page_view: {
    partner_code: string;
    page_type: 'affiliate_landing';
  };
  form_start: {
    partner_code: string;
    form_location: 'hero' | 'sticky';
  };
  form_submit: {
    partner_code: string;
    home_size: string;
    zip_code: string;
  };
  partner_logo_click: {
    partner_code: string;
  };
}
```

### Analytics Stack
- **Google Analytics 4:** Conversion tracking and user behavior
- **Google Tag Manager:** Tag management and A/B testing
- **Facebook Pixel:** Social media attribution
- **Custom Events:** Partner-specific conversion attribution

### Attribution Preservation
```typescript
// URL construction for redirect
const buildRedirectUrl = (zipCode: string, partnerCode?: string) => {
  const baseUrl = 'https://orders.comparepower.com/';
  const params = new URLSearchParams({ zip_code: zipCode });
  
  if (partnerCode) {
    params.append('cp_afid', partnerCode);
  }
  
  return `${baseUrl}?${params.toString()}`;
};
```

## Hosting & Deployment

### Platform: Netlify
**Benefits:**
- Excellent Next.js support with @netlify/plugin-nextjs
- Global CDN with edge caching
- Automatic deployments from GitHub
- Branch-based preview deployments for testing
- Built-in form handling and analytics

### Configuration Files

**netlify.toml**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"

# Redirect rules for SPA routing
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**next.config.js**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Netlify-optimized configuration
  images: {
    domains: ['your-cdn-domain.com'], // Add your partner logo domains
    formats: ['image/webp', 'image/avif'],
  },
  // Remove output: 'export' for SSR capabilities on Netlify
}

module.exports = nextConfig
```

### Environment Configuration
Set in Netlify Dashboard > Site Settings > Environment Variables:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=xxxxxxxxxx
PARTNER_CONFIG_SOURCE=json
```

### Deployment Pipeline
1. **Development:** Local development in VSCode with hot reloading
2. **Version Control:** Push to GitHub repository
3. **Auto-Deploy:** Netlify automatically deploys on push to main branch
4. **Branch Previews:** Feature branches get preview URLs for testing
5. **Production:** Main branch deploys to production domain
6. **Rollback:** One-click rollback through Netlify dashboard

## Security Considerations

### Input Validation
- Server-side validation for all form inputs
- ZIP code format validation and sanitization
- Partner code validation against allowed list

### Data Protection
- No sensitive data storage on client-side
- HTTPS enforcement for all traffic
- Secure headers configuration

### Partner Asset Security
- Logo assets served from trusted CDN
- Content Security Policy (CSP) headers
- Protection against XSS and injection attacks

## Scalability Architecture

### Traffic Handling
- **Expected Load:** 10,000+ daily visitors per major affiliate
- **Peak Capacity:** Handle traffic spikes from affiliate campaigns
- **Global Distribution:** CDN edge caching for international traffic

### Partner Scaling
- **Current Target:** 10-50 initial partners
- **Growth Plan:** Architecture supports 500+ partners
- **Management:** Self-service partner configuration portal (future)

### A/B Testing Infrastructure
- **Framework:** Netlify Edge Functions or third-party (Optimizely)
- **Split Testing:** Built-in Netlify split testing for simple A/B tests
- **Test Scenarios:** Headlines, CTAs, form layouts
- **Partner-Specific Testing:** Different variants for different affiliate audiences
- **Analytics Integration:** Test results flow into Google Analytics

## Development Workflow

### Local Development Setup
```bash
# Clone repository
git clone https://github.com/cameron-cp/cp-affiliate-lp.git
cd cp-affiliate-lp

# Install dependencies
npm install

# Environment setup
cp .env.example .env.local
# Add required environment variables in .env.local

# Development server
npm run dev
# Open http://localhost:3000
```

### GitHub Repository Structure
```
cameron-cp/cp-affiliate-lp/
├── netlify.toml              # Netlify configuration
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
├── .env.example              # Environment variable template
├── .gitignore               # Git ignore rules
├── README.md                # Setup and deployment instructions
├── /src                     # Source code (as outlined above)
└── /public                  # Static assets
```

### Git Workflow
```bash
# Feature development
git checkout -b feature/partner-integration
# Make changes
git add .
git commit -m "Add partner logo integration"
git push origin feature/partner-integration

# Create pull request in GitHub
# Netlify automatically creates preview deployment

# Merge to main
git checkout main
git pull origin main
# Netlify automatically deploys to production
```

### Netlify-Specific Features
**Branch Deployments:**
- Every GitHub branch gets a unique preview URL
- Perfect for testing different partner configurations
- Share preview links with stakeholders for approval

**Environment Variable Management:**
- Set variables in Netlify dashboard
- Different values for branch vs production deployments
- Secure handling of API keys and tracking IDs

**Build Notifications:**
- Slack/email notifications on successful/failed builds
- GitHub status checks for pull requests
- Deploy previews linked in GitHub PR comments

### Code Quality Standards
- **ESLint + Prettier:** Code formatting and linting
- **Husky:** Pre-commit hooks for quality checks
- **TypeScript strict mode:** Maximum type safety
- **Component testing:** React Testing Library for critical components

### Performance Monitoring
- **Lighthouse CI:** Automated performance audits via Netlify build hooks
- **Web Vitals monitoring:** Real user performance data
- **Bundle analysis:** Regular bundle size monitoring with webpack-bundle-analyzer
- **Error tracking:** Sentry for production error monitoring
- **Netlify Analytics:** Built-in traffic and performance insights

## Migration & Launch Strategy

### Phase 1: MVP Launch (Weeks 1-2)
- Core landing page with JSON partner configuration
- Basic analytics integration
- 3-5 test partners for validation

### Phase 2: Scale (Weeks 3-4)
- A/B testing implementation
- Advanced analytics and attribution
- 10-20 additional partners

### Phase 3: Optimization (Weeks 5-8)
- Performance optimization based on real data
- Partner management dashboard
- Database migration (if needed for scale)

## Success Metrics & KPIs

### Technical Metrics
- **Page Load Time:** < 2 seconds
- **Uptime:** 99.9% availability
- **Conversion Rate:** Track by partner and optimize
- **Core Web Vitals:** All metrics in "Good" range

### Business Metrics
- **Partner Attribution Accuracy:** 100% trackable conversions
- **Form Completion Rate:** Target 25%+ improvement over generic landing
- **Partner Satisfaction:** Measured through conversion performance and feedback