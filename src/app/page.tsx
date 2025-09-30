import { getPartnerConfig } from '@/lib/partners';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { UnscrewTexasSection } from '@/components/sections/UnscrewTexasSection';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { ServiceTransferSection } from '@/components/sections/ServiceTransferSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
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
      <UnscrewTexasSection />
      <HowItWorks />
      <FeaturesSection />
      <ServiceTransferSection />
      <Testimonials />
      <FinalCTASection />
      <FAQ />
      <Footer />
    </main>
  );
}
