'use client';

import Link from 'next/link';
import { locationData } from '../lib/locationData';

export default function Footer() {
   const { studio } = locationData;

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#C81D77]/10 to-[#6710C2]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[#6710C2]/5 to-[#C81D77]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C81D77] to-[#6710C2] rounded-full flex items-center justify-center">
                <i className="ri-music-2-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-[\'Pacifico\'] text-2xl bg-gradient-to-r from-[#C81D77] to-[#6710C2] bg-clip-text text-transparent">
                  The Hype Studio
                </h3>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Pune's premier creative studio space fostering artistic expression through dance, acting, and content creation. 
              Create your own vibe with us.
            </p>
            <div className="flex space-x-4">
              {studio.socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-[#C81D77] hover:to-[#6710C2] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer`}
                    title={social.handle}
                  >
                    <i className={`${social.icon} text-lg group-hover:scale-110 transition-transform duration-300`}></i>
                  </a>
                ))}
              
        
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 cursor-pointer">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 cursor-pointer">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#booking" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 cursor-pointer">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="ri-map-pin-line text-[#C81D77] mt-1 mr-3"></i>
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Shree Ram Maratha Society<br />
                    Dhankawadi, Pune<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="ri-phone-line text-[#C81D77] mr-3"></i>
                <p className="text-gray-400 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center">
                <i className="ri-mail-line text-[#C81D77] mr-3"></i>
                <p className="text-gray-400 text-sm">thehypestudio@gmail.com</p>
              </div>
              <div className="flex items-center">
                <i className="ri-time-line text-[#C81D77] mr-3"></i>
                <p className="text-gray-400 text-sm">Open 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-4">
              Stay Updated with <span className="bg-gradient-to-r from-[#C81D77] to-[#6710C2] bg-clip-text text-transparent">The Hype</span>
            </h4>
            <p className="text-gray-400 mb-6">Get the latest updates on our studio, special offers, and creative workshops.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 text-sm"
              />
              <button className="bg-gradient-to-r from-[#C81D77] to-[#6710C2] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 cursor-pointer whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
           @ {new Date().getFullYear()} The Hype Studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-pink-400 text-sm transition-colors duration-300 cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-pink-400 text-sm transition-colors duration-300 cursor-pointer">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-pink-400 text-sm transition-colors duration-300 cursor-pointer">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-24 w-1 h-1 bg-[#C81D77] rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-32 right-32 w-2 h-2 bg-[#6710C2] rounded-full animate-pulse opacity-25"></div>
        <div className="absolute bottom-24 left-1/3 w-1 h-1 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-full animate-bounce opacity-20" style={{ animationDelay: '1s' }}></div>
      </div>
    </footer>
  );
}
