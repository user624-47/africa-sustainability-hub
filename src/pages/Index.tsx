import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import InitiativesSection from '@/components/InitiativesSection';
import TimelineSection from '@/components/TimelineSection';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <InitiativesSection />
      <TimelineSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
