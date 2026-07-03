import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { businessDetails } from '../data';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-10">Visit Our Store</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Address</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">{businessDetails.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">{businessDetails.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">{businessDetails.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                  <Clock className="w-7 h-7" />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Opening Hours</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-base text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                    {businessDetails.hours.map(h => (
                      <div key={h.day} className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2 mr-4 last:border-0 sm:even:mr-0">
                        <span className="font-medium">{h.day}</span>
                        <span className="text-gray-900 dark:text-gray-300">{h.timing}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Order Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Place an Online Order</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">First Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Last Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
                <input type="email" className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Order Details</label>
                <textarea rows={5} className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all resize-none" placeholder="E.g., 2kg Apples, 1L Groundnut Oil..."></textarea>
              </div>
              
              <button className="w-full bg-primary hover:bg-primary-light text-white py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 mt-4 shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]">
                <Send className="w-6 h-6" /> Submit Order
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
