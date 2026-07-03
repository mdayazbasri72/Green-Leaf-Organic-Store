import { motion } from 'motion/react';
import { CheckCircle2, Star, Quote } from 'lucide-react';
import { businessDetails } from '../data';

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950 transition-colors">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} className="rounded-3xl overflow-hidden shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" alt="Inside the store" className="w-full h-full object-cover aspect-[4/3]" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">About Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {businessDetails.about}
            </p>
            <div className="grid grid-cols-2 gap-6">
              {['Local Farmers', '100% Organic', 'Eco-Friendly', 'Fresh Daily'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Everything you need for a healthy, sustainable lifestyle delivered right to your doorstep.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {businessDetails.services.map((service, i) => (
            <motion.div 
              key={service} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{service}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white dark:bg-gray-950 transition-colors">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {businessDetails.gallery.map((img, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl overflow-hidden aspect-square shadow-md cursor-pointer relative group"
            >
              <img src={img} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {businessDetails.reviews.map((review, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              <Quote className="w-12 h-12 text-primary-light mb-6 opacity-80" />
              <p className="text-xl mb-8 leading-relaxed font-medium">"{review.text}"</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-lg">{review.author}</span>
                <div className="flex">
                  {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current text-yellow-300" />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
