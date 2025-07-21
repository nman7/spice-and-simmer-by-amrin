import { HeroSection } from '@/components/HeroSection';
import { MenuShowcase } from '@/components/MenuShowcase';
import { ImageCarousel } from '@/components/ImageCarousel';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div id="menu">
        <MenuShowcase />
      </div>
      <ImageCarousel />
      <ContactSection />
    </div>
  );
};

export default Index;
