
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20dance%20studio%20interior%20with%20professional%20lighting%20and%20mirror%20walls.%20Creative%20atmosphere%20with%20purple%20and%20pink%20lighting%20effects.%20Dancers%20silhouettes%20in%20the%20background%20creating%20an%20inspiring%20artistic%20environment%20with%20contemporary%20design&width=1920&height=1080&seq=hero-bg-2&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#C81D77]/30 to-[#6710C2]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-[#6710C2]/20 to-[#C81D77]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 mt-12 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 mt-12">
          <span className="bg-gradient-to-r from-[#C81D77] to-[#6710C2] bg-clip-text text-transparent">
            Create Your
          </span>
          <br />
          <span className="text-white">Own Vibe</span>
        </h1>py-
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          The Hype Studio is Pune's premier creative space for dancers, actors, and content creators. 
          Located in Dhankawadi, we provide professional-grade studios for hourly rentals.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#booking"
            className="group relative overflow-hidden bg-gradient-to-r from-[#C81D77] to-[#6710C2] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            <span className="relative z-10 flex items-center">
              Book Studio Now
              <div className="w-6 h-6 ml-2 flex items-center justify-center">
                <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform duration-300"></i>
              </div>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#6710C2] to-[#C81D77] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <a 
            href="#services"
            className="group border-2 border-gray-600 hover:border-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gradient-to-r hover:from-[#C81D77]/10 hover:to-[#6710C2]/10 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            <span className="flex items-center">
              View Services
              <div className="w-6 h-6 ml-2 flex items-center justify-center">
                <i className="ri-play-circle-line text-xl group-hover:scale-110 transition-transform duration-300"></i>
              </div>
            </span>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-700/50">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">250+</div>
            <div className="text-gray-400">Happy Artists</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">3</div>
            <div className="text-gray-400">Studio Spaces</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-[#C81D77] to-[#6710C2] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#C81D77] rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-1/3 right-32 w-1 h-1 bg-[#6710C2] rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-full animate-bounce opacity-25" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-20 w-2 h-2 bg-[#C81D77] rounded-full animate-pulse opacity-35" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </section>
  );
}
