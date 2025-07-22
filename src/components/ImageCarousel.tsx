import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import carousel images
import biryaniPlatter from '@/assets/biryani-platter.jpg';
import currySpread from '@/assets/curry-spread.jpg';
import appetizerPlatter from '@/assets/appetizer-platter.jpg';
import dessertsDisplay from '@/assets/desserts-display.jpg';

import one from '@/assets/1.jpeg';
import two from '@/assets/2.jpeg';
import three from '@/assets/3.jpeg';
import four from '@/assets/4.jpeg';
import five from '@/assets/5.jpeg';
import six from '@/assets/6.jpeg';
import seven from '@/assets/7.jpeg';




const carouselImages = [
  {
    src: one,
    alt: 'Indo-Chinese',
    title: 'Chicken Chilly',
    description: 'Aromatic basmati rice with tender meat and traditional spices'
  },{
    src: two,
    alt: 'Authentic Biryani Platter',
    title: 'Dabba Ghosth',
    description: 'Aromatic basmati rice with tender meat and traditional spices'
  },{
    src: three,
    alt: 'Authentic Biryani Platter',
    title: 'Spicy Arabic Mandi',
    description: 'Aromatic basmati rice with tender meat and traditional spices'
  },{
    src: five,
    alt: 'Authentic Biryani Platter',
    title: 'Signature Biryani',
    description: 'Aromatic basmati rice with tender meat and traditional spices'
  },{
    src: six,
    alt: 'Authentic Biryani Platter',
    title: 'Client testimony',
    description: 'Aromatic basmati rice with tender meat and traditional spices'
  },{
    src: seven,
    alt: 'Authentic Biryani Platter',
    title: 'Premium Packaging',
    description: 'Aromatic basmati rice with tender meat and traditional spices'
  },
  {
    src: biryaniPlatter,
    alt: 'Authentic Biryani Platter',
    title: 'Signature Biryani',
    description: 'Aromatic basmati rice with tender meat and traditional spices'
  },
  {
    src: currySpread,
    alt: 'Curry and Dishes Spread',
    title: 'Curry Collection',
    description: 'A variety of rich, flavorful curries and traditional accompaniments'
  },
  {
    src: appetizerPlatter,
    alt: 'Appetizer Platter',
    title: 'Starter Selection',
    description: 'Crispy samosas, pakoras, and kebabs with house-made chutneys'
  },
  {
    src: dessertsDisplay,
    alt: 'Traditional Desserts',
    title: 'Sweet Delights',
    description: 'Classic Indian sweets and desserts to complete your meal'
  }
];

export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

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
            Our Catering Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse of our beautifully crafted dishes and professional catering presentations
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-elegant">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={carouselImages[currentIndex].src}
                  alt={carouselImages[currentIndex].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute bottom-8 left-8 text-white"
                >
                  <h3 className="text-2xl font-display font-semibold mb-2">
                    {carouselImages[currentIndex].title}
                  </h3>
                  <p className="text-white/90 max-w-md">
                    {carouselImages[currentIndex].description}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <Button
              variant="elegant"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="elegant"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-white scale-110' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};