
'use client';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-gradient-to-r from-[#C81D77]/15 to-[#6710C2]/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-to-l from-[#6710C2]/10 to-[#C81D77]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-[#C81D77] to-[#6710C2] bg-clip-text text-transparent">The Hype Studio</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Located in the heart of Pune at Shree Ram Maratha Society, Dhankawadi, The Hype Studio is more than just a rental space - it's a creative hub where artists and creators come together to bring their visions to life.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Our mission is to provide accessible, professional-grade studio spaces that foster creativity and artistic expression. Whether you're a dancer perfecting your moves, an actor preparing for an audition, or a content creator building your brand, we have the perfect space for you.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-gray-900/50 rounded-2xl border border-gray-700/50">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#C81D77] to-[#6710C2] bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-2xl border border-gray-700/50">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#C81D77] to-[#6710C2] bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-gray-400">Available</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-2xl border border-gray-700/50">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#C81D77] to-[#6710C2] bg-clip-text text-transparent mb-2">3</div>
                <div className="text-gray-400">Studio Spaces</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-2xl border border-gray-700/50">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#C81D77] to-[#6710C2] bg-clip-text text-transparent mb-2">2+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div 
              className="h-96 bg-cover bg-center bg-top rounded-2xl shadow-2xl border border-gray-700/50"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Creative%20artists%20and%20dancers%20practicing%20in%20a%20modern%20studio%20space%20with%20purple%20and%20pink%20lighting.%20Diverse%20group%20of%20people%20expressing%20themselves%20through%20dance%20and%20art%20in%20an%20inspiring%20creative%20atmosphere%20with%20natural%20lighting%20and%20modern%20equipment&width=600&height=600&seq=about-studio-5&orientation=squarish')`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent rounded-2xl"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#C81D77] to-[#6710C2] text-white p-6 rounded-2xl shadow-2xl border border-pink-500/30">
              <div className="text-2xl font-bold">Create Your Own Vibe</div>
              <div className="text-pink-200">Express • Create • Inspire</div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-full animate-bounce opacity-60"></div>
            <div className="absolute top-8 -right-2 w-4 h-4 bg-[#C81D77] rounded-full animate-pulse opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
