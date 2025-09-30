import { getPartnerConfig } from '@/lib/partners';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';

interface PageProps {
  searchParams: Promise<{
    cp_afid?: string;
  }>;
}

export default async function HomePage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const partnerConfig = await getPartnerConfig(resolvedSearchParams.cp_afid);

  return (
    <main className="min-h-screen">
      <HeroSection partner={partnerConfig} />
      <WhyChooseSection />
      <TrustSection />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
