
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Book Now', href: '#booking' },
  ];

  const headerClasses = isScrolled 
    ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-pink-500/30' 
    : 'bg-transparent';

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="group flex items-center space-x-2 cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C81D77] to-[#6710C2] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/30">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-music-2-line text-white text-xl"></i>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-[\'Pacifico\'] text-2xl bg-gradient-to-r from-[#C81D77] to-[#6710C2] bg-clip-text text-transparent">
                  The Hype
                </span>
                <span className="text-xs text-gray-300 -mt-1 tracking-wider uppercase">Studio</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="relative group text-white hover:text-pink-300 transition-colors duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10 font-medium">{item.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C81D77] to-[#6710C2] group-hover:w-full transition-all duration-300"></div>
                  <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-[#C81D77]/20 to-[#6710C2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link 
                href="#booking"
                className="relative overflow-hidden bg-gradient-to-r from-[#C81D77] to-[#6710C2] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 cursor-pointer whitespace-nowrap group"
              >
                <span className="relative z-10">Book Studio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#6710C2] to-[#C81D77] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-pink-300 transition-colors cursor-pointer"
            >
              <i className="ri-menu-3-line text-2xl"></i>
            </button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a 
            href="#home" 
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="group flex items-center space-x-2 cursor-pointer"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C81D77] to-[#6710C2] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/30">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-music-2-line text-white text-xl"></i>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-[\'Pacifico\'] text-2xl bg-gradient-to-r from-[#C81D77] to-[#6710C2] bg-clip-text text-transparent">
                The Hype
              </span>
              <span className="text-xs text-gray-300 -mt-1 tracking-wider uppercase">Studio</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a 
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="relative group text-white hover:text-pink-300 transition-colors duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10 font-medium">{item.name}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C81D77] to-[#6710C2] group-hover:w-full transition-all duration-300"></div>
                <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-[#C81D77]/20 to-[#6710C2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a 
              href="#booking"
              onClick={(e) => handleSmoothScroll(e, '#booking')}
              className="relative overflow-hidden bg-gradient-to-r from-[#C81D77] to-[#6710C2] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 cursor-pointer whitespace-nowrap group"
            >
              <span className="relative z-10">Book Studio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#6710C2] to-[#C81D77] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-pink-300 transition-colors cursor-pointer"
          >
            <i className={`text-2xl transition-transform duration-300 ${isMenuOpen ? 'ri-close-line rotate-90' : 'ri-menu-3-line'}`}></i>
          </button>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="py-4 border-t border-pink-500/30">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="block px-4 py-3 text-white hover:text-pink-300 hover:bg-gradient-to-r hover:from-[#C81D77]/10 hover:to-[#6710C2]/10 transition-colors duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 py-3">
              <a 
                href="#booking"
                onClick={(e) => handleSmoothScroll(e, '#booking')}
                className="block w-full bg-gradient-to-r from-[#C81D77] to-[#6710C2] text-white text-center px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Book Studio
              </a>
            </div>
          </nav>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#C81D77] to-transparent opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#6710C2] to-transparent opacity-20"></div>
      </div>
    </header>
  );
}
