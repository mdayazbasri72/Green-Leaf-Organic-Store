import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';
import { businessDetails } from '../data';

export function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Featured Products</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Handpicked organic goods, fresh from the farm to your table.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 perspective-[2000px]">
          {businessDetails.products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden cursor-pointer group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative overflow-hidden h-72">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-primary shadow-lg">
                  {p.price}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white line-clamp-2 leading-snug">{p.name}</h3>
                <button className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white dark:bg-primary/20 dark:hover:bg-primary dark:text-primary-light dark:hover:text-white py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3">
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
