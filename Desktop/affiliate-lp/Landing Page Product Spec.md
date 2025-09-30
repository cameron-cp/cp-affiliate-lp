# Compare Power Affiliate Landing Page - Product Specification

## Overview
A conversion-optimized affiliate landing page designed to create seamless continuity from partner traffic sources to Compare Power's electricity comparison service. This page eliminates the "bounce" that occurs when users click from a partner site to a generic homepage, instead providing immediate relevance and trust transfer through co-branding and contextual messaging.

## Key Objectives
- **Continuity:** Maintain visual and messaging consistency from partner referral source
- **Trust Transfer:** Leverage partner credibility through co-branding and explicit endorsement
- **Conversion Focus:** Single-purpose page designed to drive form completions
- **Relevance:** Contextualized messaging that acknowledges the partner relationship
- **Reduced Friction:** Eliminate confusion about "where am I?" and "why should I trust this?"

## Target Audience
- **Primary:** Users clicking from affiliate partner websites, emails, or ads
- **Behavioral Context:** Users who were engaged with partner content about saving money, utilities, or home services
- **Trust Dynamics:** Users who trust the referring partner but are unfamiliar with Compare Power
- **Intent Level:** Warm traffic with demonstrated interest in cost savings or energy switching

## Affiliate Landing Page Principles Applied

### Message Match
- Partner name prominently featured in headline and subheadline
- "Trusted by {{partner_name}}" creates explicit endorsement
- Visual branding continuity through co-branded header

### Scent Trail Maintenance  
- URL parameter tracking preserves referral context throughout user journey
- Partner attribution maintained through to final conversion
- Consistent messaging reinforces why the user clicked in the first place

### Social Proof Hierarchy
1. **Partner Endorsement** (highest relevance - "{{partner_name}} trusts us")
2. **Customer Volume** (scale proof - "millions of customers") 
3. **Reviews & Ratings** (quality proof - "4.9/5 stars")
4. **Market Position** (#1 rated marketplace)
5. **Peer Testimonials** (neighbor reviews)

### Conversion Psychology
- Single clear call-to-action repeated in multiple locations
- Progressive disclosure (simple form → detailed comparison)
- Risk reduction through guarantees and social proof
- Urgency through "In minutes!" promise

### 1. Hero Section
**Purpose:** Immediate value proposition and lead capture

**Content:**
- Headline: "Pay as little as possible for your new electricity plan"
- Subheadline: "Compare plans from top competing energy providers and get the best one instantly. Trusted by millions of happy Texans. Trusted by {{partner_name}}."
- Social proof: "MILLIONS (YES, MILLIONS) OF HAPPY CUSTOMERS"
- Lead capture form with:
  - Home size dropdown options:
    - Small Home (<1,000 SF)
    - Medium Home (1,000-2,000 SF) [default selection]
    - Large Home (2,000-3,000 SF)
    - X-Large Home (3,000+ SF)
  - ZIP code input field
  - "Find My Plan" CTA button (submits to `https://orders.comparepower.com/?zip_code={zip_code}`)
- Promise: "In minutes!"
- Hero image: Professional woman in casual setting
- Co-branding: Compare Power logo + Partner logo placement (based on cp_afid parameter)

### 2. Trust Section
**Purpose:** Establish credibility and market leadership

**Content:**
- Section title: "Welcome to Compare Power - The #1 rated Texas energy marketplace"
- Key metrics display:
  - 2,318,304 orders processed
  - 78,288 customer reviews
  - 4.9/5 star rating
  - 16 years helping fellow Texans
- Partner logos grid showing major energy providers (Cirro Energy, Direct Energy, Discount Power, Flagship Power, Frontier Utilities, 4Change Energy, Gexa, Green Mountain Energy, Just Energy, Power of Texas, Reliant, Rhythm)

### 3. How It Works Section
**Purpose:** Simplify the process and reduce friction

**Content:**
- Section title: "One-Stop Shopping - Just 3 steps to done"
- Process steps:
  1. **Search for available plans** - "Search by zipcode or address. We'll gather the offers available for your home, and we'll do all the math."
  2. **Compare competing plans** - [Content to be finalized - currently lorem ipsum]
  3. **Choose and order your best plan** - [Content to be finalized - currently lorem ipsum]
  4. **Done** - [Content to be finalized - currently lorem ipsum]

### 4. Customer Testimonials Section
**Purpose:** Social proof and credibility building

**Content:**
- Section title: "What your neighbors are saying about Compare Power"
- Subtitle: "Your feedback drives everything we work on. We're honored to build this game-changing service for our fellow Texans."
- Review counter: "78,288 people have published a review about Compare Power"
- Testimonial carousel featuring:
  - Trustpilot 5-star reviews
  - Customer names and locations (Texas, United States)
  - Detailed feedback about pricing comparison and ease of use
- "See all 78,288 reviews" link

### 5. Unscrew Texas Section
**Purpose:** Educational content and brand messaging

**Content:**
- Video embed area (placeholder for "Unscrew Texas" video)
- Title: "Let's Unscrew Texas from overpriced energy plans"
- Educational messaging:
  - "All electricity is the same, no matter who you buy it from. Find the company with the right plan for you."
  - "Shop the plan, not the brand. It's time to stop paying more for the exact same thing."
- "Learn: Unscrew Texas" CTA button

### 6. FAQ Section
**Purpose:** Address common objections and concerns

**Content:**
- Section title: "Q & A - Answers to the questions we hear often"
- Expandable FAQ items:
  - "What electric companies service my address?"
  - "What if my provider goes out of business? Will my service stop?"
  - "How do I determine how many kWh I use?"
  - "Can I change my mind after I switch?"
  - "How long does the switching process take?"
  - "What if I have to move before the end of my contract term?"
  - "Does everyone have a choice in who provides their energy services?"

### 7. Footer Section
**Purpose:** Support resources and legal compliance

**Content:**
- Compare Power logo with tagline "The Power Is Yours"
- Support options:
  - Talk: Phone Support
  - Text: Text Support  
  - Chat: Chat Support
  - Email: Email Support
- Resource categories:
  - **Guidance & Advice:** How to switch and save, How to move in with the right plan
  - **Find Your Plan:** Best energy companies for you, Best energy plans for you
  - **Tools & Calculators:** Find out if you're overpaying, Calculate your energy usage, Quick wizard to find your perfect plan, Bill Detective tool, EFL Detective tool
  - **Energy Rates:** View best rates by neighborhood, Dallas area electricity rates, Houston area electricity rates
- Legal footer with copyright, trademarks, Privacy Policy, and Terms of Use links

### 8. Sticky Header (Post-Hero)
**Purpose:** Persistent lead capture as users scroll

**Content:**
- Compact version of lead capture form with same functionality as hero section
- Compare Power + Partner logo co-branding (based on cp_afid parameter)
- Same form fields and redirect behavior as hero section
- Appears when user scrolls past hero section

## Technical Requirements

### Responsive Design
- Mobile-first approach
- Breakpoints for mobile, tablet, desktop
- Touch-friendly interface elements
- Optimized images for different screen sizes

### Performance
- Page load time under 3 seconds
- Optimized images and assets
- Minimal JavaScript for core functionality
- CDN delivery for static assets

### Lead Capture Integration
- Form validation and error handling
- Real-time ZIP code validation
- Form submission redirects to: `https://orders.comparepower.com/?zip_code={zip_code}`
- Partner tracking and attribution via URL parameters
- Analytics tracking for conversion optimization
- Home size options:
  - Small Home (<1,000 SF)
  - Medium Home (1,000-2,000 SF) [default]
  - Large Home (2,000-3,000 SF)
  - X-Large Home (3,000+ SF)

### Partner Management System
- **URL Parameter:** `cp_afid={partner_code}`
- **Partner Lookup Table Required:**
  - partner_code (primary key)
  - partner_name (display name for {{partner_name}} template variable)
  - partner_logo_url (URL to partner logo asset)
  - partner_logo_alt_text (accessibility text)
  - active_status (boolean for enabling/disabling partners)
  - created_date, last_modified_date
- **Fallback Behavior:** If no `cp_afid` parameter or unrecognized partner_code:
  - Hide partner logo placement areas
  - Remove {{partner_name}} references from copy
  - Display standard Compare Power branding only
  - Continue normal page functionality

### Personalization
- Dynamic partner name insertion via {{partner_name}} template variables driven by cp_afid lookup
- Partner logo integration based on cp_afid parameter
- Partner-specific tracking parameters maintained through user journey
- Graceful degradation when partner information unavailable

### SEO Considerations
- Semantic HTML structure
- Meta tags optimization
- Schema markup for reviews and business information
- Fast loading speeds
- Mobile optimization

## Success Metrics (Affiliate-Focused)
- **Primary:** Form completion rate by traffic source (cp_afid)
- **Secondary:** Time to conversion, bounce rate by partner
- **Attribution:** Partner-specific conversion tracking and commission calculation
- **Quality:** Lead-to-sale conversion rate by affiliate source
- **Optimization:** A/B test performance across different partner audiences

## Affiliate Management Considerations
- **Attribution Window:** Track conversions back to original cp_afid parameter
- **Commission Tracking:** Maintain partner attribution through entire customer journey
- **Performance Reporting:** Partner-specific dashboard showing traffic, conversions, and earnings
- **Creative Assets:** Provide partners with pre-approved banners, links, and promotional copy
- **Compliance:** Ensure partner promotional methods align with Compare Power's brand guidelines

## Content Requirements
- Finalize placeholder content in "How It Works" section
- Partner logo specifications and integration guidelines
- Video content for "Unscrew Texas" section
- Legal review of claims and testimonials
- Accessibility compliance review

## Future Enhancements
- A/B testing capabilities for headlines and CTAs
- Dynamic content based on ZIP code entry
- Real-time plan preview functionality
- Enhanced partner customization options
- Multi-language support (Spanish for Texas market)