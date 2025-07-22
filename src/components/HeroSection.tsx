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
    { icon: Users, value: "10+", label: "Events Catered" },
    { icon: Star, value: "5.0", label: "Customer Rating" },
    { icon: Award, value: "10+", label: "Years in Cuisine" }
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
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center shadow-warm">
            <img src="public/logo/logo.png" className="w-32 h-32 md:w-40 md:h-40 object-contain" />

            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-display font-bold text-primary mb-2"
            >
              Spice & Simmer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground font-medium tracking-wide"
            >
              BY AMRIN
            </motion.p>
          </motion.div>

          {/* Main Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Authentic Desi Catering
              <span className="block text-primary">in Sydney</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the rich flavors of traditional Indian and Pakistani cuisine, 
              crafted with love and delivered with excellence for your special occasions.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button 
              variant="premium" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="group"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Order Now via WhatsApp
            </Button>
            <Button 
              variant="elegant" 
              size="lg"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Menu
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Service Area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-12 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/10 max-w-2xl mx-auto"
          >
            <p className="text-muted-foreground">
              <span className="font-semibold text-primary">Now Available in Sydney</span>
              <br />
              Premium bulk catering for all types of events
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-primary/3 rounded-full blur-2xl"
      />
    </section>
  );
};