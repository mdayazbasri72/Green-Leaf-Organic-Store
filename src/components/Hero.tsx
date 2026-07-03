import { motion } from 'motion/react';
import { ShoppingCart, Leaf } from 'lucide-react';
import { businessDetails } from '../data';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=1920&q=80" 
          alt="Organic farm fresh vegetables" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent dark:from-black/90 dark:via-black/70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="bg-primary px-4 py-1.5 rounded-full text-white text-sm font-bold tracking-wider uppercase shadow-md">100% Organic</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {businessDetails.tagline}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-200 mb-10 max-w-lg leading-relaxed"
          >
            Visit {businessDetails.name} for the freshest farm-to-table produce, directly supporting local farmers.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#products" className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 shadow-lg shadow-primary/30">
              <ShoppingCart className="w-5 h-5" /> Shop Now
            </a>
            <a href="#about" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95">
              <Leaf className="w-5 h-5" /> Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
