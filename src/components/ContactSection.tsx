import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const ContactSection = () => {
  const whatsappNumber = "+61431960180";
  const whatsappMessage = "Hi! I'd like to inquire about your catering services.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "043 196 0180",
      action: handleWhatsAppClick,
      description: "Quick response for orders & inquiries"
    },
    {
      icon: Phone,
      title: "Mobile",
      details: "0431 960 180",
      action: () => window.open(`tel:${whatsappNumber}`),
      description: "Call us for immediate assistance"
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "Sydney, NSW",
      description: "Premium desi catering across Sydney"
    },
    {
      icon: Clock,
      title: "Advance Notice",
      details: "24-48 hours",
      description: "For best service, order in advance"
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display font-semibold text-foreground mb-4">
            Book Your Catering
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to elevate your next event? Contact us to discuss your catering needs and customize your perfect menu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className={`h-full hover:shadow-warm transition-all duration-300 border-primary/10 ${
                  info.action ? 'cursor-pointer hover:border-primary/30' : ''
                }`}
                onClick={info.action}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-primary font-medium mb-2">{info.details}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto border-primary/20 shadow-elegant bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                Ready to Order?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get in touch with us on WhatsApp for instant quotes and easy ordering. 
                We'll help you plan the perfect menu for your event.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="premium" 
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="group"
                >
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Order via WhatsApp
                </Button>
                <Button 
                  variant="elegant" 
                  size="lg"
                  onClick={() => window.open(`tel:${whatsappNumber}`)}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};