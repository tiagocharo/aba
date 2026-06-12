import { AboutSection } from "@/components/aba/AboutSection";
import { CertificationsSection } from "@/components/aba/CertificationsSection";
import { ContactSection } from "@/components/aba/ContactSection";
import { DifferentiatorsSection } from "@/components/aba/DifferentiatorsSection";
import { EsgSection } from "@/components/aba/EsgSection";
import { FinalCtaSection } from "@/components/aba/FinalCtaSection";
import { Footer } from "@/components/aba/Footer";
import { HeroSection } from "@/components/aba/HeroSection";
import { PartnersSection } from "@/components/aba/PartnersSection";
import { ProcessTimelineSection } from "@/components/aba/ProcessTimelineSection";
import { StatsSection } from "@/components/aba/StatsSection";
import { StorySection } from "@/components/aba/StorySection";

export function AbaLandingPage() {
  return (
    <>
      <main className="relative z-0">
        <HeroSection />
        <StorySection />
        <AboutSection />
        <DifferentiatorsSection />
        <EsgSection />
        <CertificationsSection />
        <ProcessTimelineSection />
        <PartnersSection />
        <StatsSection />
        <FinalCtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
