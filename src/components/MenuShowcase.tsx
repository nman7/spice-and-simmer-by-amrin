import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const menuCategories = [
  {
    title: "Starter Collection",
    items: [
      "Aslam Chicken",
      "Winter Leg (Chicken)",
      "Silli Gosht",
      "Dabba Gosht (Chicken/Mutton)",
      "Chicken Cheese Seekh",
      "Chicken Chutney Kebab",
      "Chicken Russian Cutlet",
      "Fish Chilli",
      "Beef Chilli"
    ]
  },
  {
    title: "Main Course - Gravy",
    items: [
      "Mutton Khaliya",
      "Mutton Korma",
      "Mutton Kadhai",
      "Mutton White",
      "Mutton Paya",
      "Mutton Nihari",
      "Gurda, Chaap, Kaleji, Brain"
    ]
  },
  {
    title: "Chicken Specialties",
    items: [
      "Chicken Khaliya",
      "Chicken Korma",
      "Chicken Kadhai",
      "Chicken White",
      "Chicken Angara",
      "Butter Chicken",
      "Chicken Green"
    ]
  },
  {
    title: "Biryani Collection",
    items: [
      "Chicken Biryani",
      "Mutton Biryani",
      "Chicken Tikka Biryani",
      "Chicken Tandoori Biryani",
      "Chicken Seekh Biryani",
      "Veg Biryani",
      "Anda (Egg) Biryani"
    ]
  },
  {
    title: "Special Dishes",
    items: [
      "Kaleji Masala",
      "Kat-a-Kat",
      "Mutton Stew",
      "Mutton Barrah",
      "Ahmedabadi Samosa & Kebab",
      "Chaap Fry",
      "Salli Gosht",
      "Seekh Biryani"
    ]
  }
];

export const MenuShowcase = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display font-semibold text-foreground mb-4">
            Our Signature Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Authentic Pakistani and Indian cuisine crafted with traditional recipes and premium ingredients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full hover:shadow-warm transition-all duration-300 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold text-primary mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center"
                      >
                        <span className="w-2 h-2 bg-primary/60 rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="bg-card p-8 rounded-2xl border border-primary/10 shadow-elegant max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-semibold text-primary mb-4">
              Catering Packages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-2">All Gravy</h4>
                <p className="text-muted-foreground">$65 Per Kg</p>
                <p className="text-sm text-muted-foreground">Min. 2Kg Order</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">All Dry</h4>
                <p className="text-muted-foreground">$65 Per Kg</p>
                <p className="text-sm text-muted-foreground">Min. 2Kg Order</p>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-6">
              Catering available for up to 400 people
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};