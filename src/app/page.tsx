import { getPartnerConfig } from '@/lib/partners';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { ThePowerIsYoursSection } from '@/components/sections/ThePowerIsYoursSection';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { ServiceTransferSection } from '@/components/sections/ServiceTransferSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { FAQ } from '@/components/sections/FAQ';
import { StillHaveQuestionsSection } from '@/components/sections/StillHaveQuestionsSection';
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
      <HowItWorks />
      <ThePowerIsYoursSection />
      <WhyChooseSection />
      <ServiceTransferSection />
      <FeaturesSection />
      <Testimonials />
      <FinalCTASection />
      <FAQ />
      <StillHaveQuestionsSection />
      <Footer />
    </main>
  );
}
