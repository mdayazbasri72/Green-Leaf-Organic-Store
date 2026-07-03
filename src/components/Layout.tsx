import { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X, MessageCircle, Leaf } from 'lucide-react';
import { businessDetails } from '../data';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-primary" />
              <span className="font-bold text-xl tracking-tight text-primary">{businessDetails.name}</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
              <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">Products</a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
              <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Reviews</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                {isDark ? <Sun className="w-5 h-5 text-gray-100" /> : <Moon className="w-5 h-5 text-gray-900" />}
              </button>
              <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6 dark:text-gray-100" /> : <Menu className="w-6 h-6 dark:text-gray-100" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden p-4 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-4 shadow-lg absolute w-full">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="dark:text-gray-200 font-medium">About</a>
            <a href="#products" onClick={() => setIsMenuOpen(false)} className="dark:text-gray-200 font-medium">Products</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="dark:text-gray-200 font-medium">Services</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="dark:text-gray-200 font-medium">Reviews</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="dark:text-gray-200 font-medium">Contact</a>
          </div>
        )}
      </nav>

      <main className="flex-1">{children}</main>

      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-8 h-8 text-primary-light" />
              <span className="font-bold text-2xl text-white">{businessDetails.name}</span>
            </div>
            <p className="mb-6 leading-relaxed">{businessDetails.tagline}</p>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} {businessDetails.name}. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-primary-light transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-primary-light transition-colors">Shop Products</a></li>
              <li><a href="#services" className="hover:text-primary-light transition-colors">Our Services</a></li>
              <li><a href="#contact" className="hover:text-primary-light transition-colors">Contact Information</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg text-white mb-6">Newsletter</h4>
            <p className="text-sm mb-6 leading-relaxed">Subscribe to get updates on fresh arrivals and exclusive member discounts.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" className="px-4 py-3 w-full rounded-l-xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary-light text-white" />
              <button className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-r-xl transition-colors font-semibold">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>

      <a href={`https://wa.me/919876543210`} target="_blank" rel="noreferrer" 
         className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 active:scale-95 flex items-center justify-center">
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
