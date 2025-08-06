
'use client';

export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-music-2-line',
      title: 'Dance Practice Studio',
      price: '₹500',
      period: 'per hour',
      features: [
        'Professional wooden flooring',
        'Full-wall mirrors',
        'High-quality sound system',
        'Air conditioning',
        'Changing room facilities'
      ],
      image: 'https://readdy.ai/api/search-image?query=Professional%20dance%20studio%20with%20wooden%20floors%20and%20mirror%20walls.%20Modern%20interior%20with%20purple%20and%20pink%20lighting%20effects%20creating%20an%20inspiring%20atmosphere%20for%20dancers%20to%20practice%20and%20rehearse&width=400&height=300&seq=service-1&orientation=landscape'
    },
    {
      icon: 'ri-film-line',
      title: 'Acting & Filmmaking Space',
      price: '₹800',
      period: 'per hour',
      features: [
        'Professional lighting setup',
        'Green screen availability',
        'Camera mounting points',
        'Props and costume storage',
        'Director seating area'
      ],
      image: 'https://readdy.ai/api/search-image?query=Professional%20acting%20and%20filmmaking%20studio%20with%20theatrical%20lighting%20setup%20and%20camera%20equipment.%20Modern%20studio%20space%20with%20creative%20lighting%20for%20film%20production%20and%20acting%20rehearsals&width=400&height=300&seq=service-2&orientation=landscape'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Social Media Content Creation',
      price: '₹600',
      period: 'per hour',
      features: [
        'Ring lights and softboxes',
        'Multiple backdrop options',
        'Tripod and camera accessories',
        'Wi-Fi connectivity',
        'Content creation props'
      ],
      image: 'https://readdy.ai/api/search-image?query=Social%20media%20content%20creation%20studio%20with%20ring%20lights%20cameras%20and%20colorful%20backgrounds.%20Modern%20setup%20for%20influencers%20and%20content%20creators%20with%20professional%20lighting%20equipment&width=400&height=300&seq=service-3&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-[#C81D77]/20 to-[#6710C2]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-l from-[#6710C2]/15 to-[#C81D77]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-[#C81D77] to-[#6710C2] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional studio spaces equipped with everything you need to create, practice, and perform at your best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-500 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Service Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-2xl flex items-center justify-center shadow-lg">
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300">
                {service.title}
              </h3>
              
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold bg-gradient-to-r from-[#C81D77] to-[#6710C2] bg-clip-text text-transparent">
                  {service.price}
                </span>
                <span className="text-gray-400 ml-2">{service.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-check-line text-[#C81D77] text-lg"></i>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-[#C81D77] to-[#6710C2] text-white py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 cursor-pointer whitespace-nowrap group-hover:from-[#6710C2] group-hover:to-[#C81D77]">
                Book Now
              </button>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#C81D77]/10 to-[#6710C2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-8">
            Ready to start your creative journey? Book your studio session today!
          </p>
          <a 
            href="#booking"
            className="inline-flex items-center bg-gradient-to-r from-[#C81D77] to-[#6710C2] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 cursor-pointer whitespace-nowrap group"
          >
            <span>Get Started Now</span>
            <div className="w-6 h-6 ml-2 flex items-center justify-center">
              <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform duration-300"></i>
            </div>
          </a>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-2 h-2 bg-[#C81D77] rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-48 right-24 w-1 h-1 bg-[#6710C2] rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-full animate-bounce opacity-25" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
}
