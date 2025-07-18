import { HeroSection } from "@/components/HeroSection";
import { WhoIHelpSection } from "@/components/WhoIHelpSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ClientLogosSection } from "@/components/ClientLogosSection";
import { PricingSection } from "@/components/PricingSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhoIHelpSection />
      <ServicesSection />
      <ProjectsSection />
      <ClientLogosSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
};

export default Index;
