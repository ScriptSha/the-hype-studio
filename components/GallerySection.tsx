
'use client';

import { useState } from 'react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      title: 'Dance Studio',
      category: 'Dance',
      image: 'https://readdy.ai/api/search-image?query=Modern%20dance%20studio%20with%20wooden%20floors%20and%20mirrors.%20Professional%20dancers%20practicing%20contemporary%20dance%20with%20dramatic%20lighting%20and%20creative%20atmosphere.%20High-end%20studio%20space%20with%20purple%20and%20pink%20lighting%20effects&width=600&height=400&seq=gallery-1&orientation=landscape'
    },
    {
      id: 2,
      title: 'Acting Space',
      category: 'Acting',
      image: 'https://readdy.ai/api/search-image?query=Professional%20acting%20studio%20with%20theatrical%20lighting%20setup.%20Actors%20rehearsing%20dramatic%20scenes%20in%20a%20modern%20studio%20environment%20with%20creative%20lighting%20and%20professional%20equipment&width=400&height=600&seq=gallery-2&orientation=portrait'
    },
    {
      id: 3,
      title: 'Content Creation',
      category: 'Social Media',
      image: 'https://readdy.ai/api/search-image?query=Social%20media%20content%20creation%20studio%20with%20ring%20lights%20and%20cameras.%20Influencers%20creating%20video%20content%20in%20a%20modern%20studio%20with%20colorful%20backgrounds%20and%20professional%20equipment&width=600&height=400&seq=gallery-3&orientation=landscape'
    },
    {
      id: 4,
      title: 'Hip Hop Sessions',
      category: 'Dance',
      image: 'https://readdy.ai/api/search-image?query=Hip%20hop%20dance%20practice%20session%20in%20urban%20studio.%20Diverse%20group%20of%20dancers%20practicing%20street%20dance%20moves%20with%20graffiti-style%20backgrounds%20and%20dynamic%20lighting%20effects&width=400&height=600&seq=gallery-4&orientation=portrait'
    },
    {
      id: 5,
      title: 'Music Production',
      category: 'Music',
      image: 'https://readdy.ai/api/search-image?query=Music%20production%20studio%20with%20recording%20equipment%20and%20instruments.%20Musicians%20creating%20music%20in%20a%20professional%20studio%20environment%20with%20ambient%20lighting%20and%20modern%20technology&width=600&height=400&seq=gallery-5&orientation=landscape'
    },
    {
      id: 6,
      title: 'Film Shoots',
      category: 'Film',
      image: 'https://readdy.ai/api/search-image?query=Film%20production%20setup%20in%20professional%20studio%20space.%20Camera%20crew%20filming%20actors%20with%20professional%20lighting%20equipment%20and%20creative%20backdrop%20in%20modern%20studio%20environment&width=600&height=400&seq=gallery-6&orientation=landscape'
    }
  ];

  const categories = ['All', 'Dance', 'Acting', 'Social Media', 'Music', 'Film'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-[#C81D77]/20 to-[#6710C2]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-[#6710C2]/15 to-[#C81D77]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#C81D77] to-[#6710C2] bg-clip-text text-transparent">
              Studio Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the creative spaces where artists bring their visions to life. From dance rehearsals to film productions, witness the magic happening at The Hype Studio.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#C81D77] to-[#6710C2] text-white shadow-lg shadow-pink-500/30'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#C81D77] to-[#6710C2] text-white text-sm rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">View Details</span>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-expand-diagonal-line text-white text-lg"></i>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#C81D77]/20 to-[#6710C2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-700/50">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <i className="ri-camera-3-line text-white text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-white mb-2">1000+</div>
            <div className="text-gray-400">Photos Captured</div>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <i className="ri-video-line text-white text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400">Videos Created</div>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <i className="ri-music-2-line text-white text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-white mb-2">200+</div>
            <div className="text-gray-400">Dance Sessions</div>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <i className="ri-trophy-line text-white text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400">Awards Won</div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#C81D77] rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#6710C2] rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-full animate-bounce opacity-20" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-[#C81D77] rounded-full animate-pulse opacity-25" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </section>
  );
}
