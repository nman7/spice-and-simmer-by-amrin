import { motion } from 'framer-motion';
import { MessageCircle, Star, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const whatsappNumber = "0431960180";
  const whatsappMessage = "Hi! I'd like to inquire about your catering services.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const stats = [
    { icon: Users, value: "300+", label: "Events Catered" },
    { icon: Star, value: "5.0", label: "Customer Rating" },
    { icon: Award, value: "10+", label: "Years Experience" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-gradient-to-br from-primary/5 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-8">
              <img 
                src="/lovable-uploads/edbc9fde-27b7-4a8b-affc-6bc2724ea825.png" 
                alt="Spice & Simmer by Amrin Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Main Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Premium Desi Catering
              <span className="block text-primary">in Sydney</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Authentic flavors, professional service, memorable events
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              variant="premium" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="group text-base"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Order via WhatsApp
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8"
          >
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/10 max-w-lg mx-auto">
              <p className="text-muted-foreground">
                <span className="font-semibold text-primary">Catering up to 400 people</span>
                <br />
                <span className="text-sm">WhatsApp: 043 196 0180</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};