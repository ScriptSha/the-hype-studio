'use client';

import { locationData } from '../lib/locationData';

export default function LocationSection() {
  const { studio } = locationData;

  const handleQuickAction = (action: string, value: string) => {
    switch (action) {
      case 'phone':
        window.open(`tel:${value}`, '_self');
        break;
      case 'directions':
        window.open(value, '_blank');
        break;
      default:
        console.log('Unknown action:', action);
    }
  };

  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-[#C81D77]/15 to-[#6710C2]/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gradient-to-l from-[#6710C2]/20 to-[#C81D77]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Visit <span className="bg-gradient-to-r from-[#C81D77] to-[#6710C2] bg-clip-text text-transparent">Our Studio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {studio.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information Column */}
          <div className="space-y-8">
            {/* Main Contact Info Card */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-xl flex items-center justify-center mr-3">
                  <i className="ri-information-line text-white text-lg"></i>
                </div>
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#C81D77] to-[#6710C2] rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-map-pin-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Studio Address</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {studio.address.name}<br />
                      {studio.address.street}<br />
                      {studio.address.area}, {studio.address.city}<br />
                      {studio.address.state}, {studio.address.country}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#C81D77] to-[#6710C2] rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-phone-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Phone Number</h4>
                    <p className="text-gray-300 text-lg font-mono">{studio.contact.phone}</p>
                    <p className="text-gray-400 text-sm mt-1">Available 24/7 for bookings</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#C81D77] to-[#6710C2] rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-mail-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Email Address</h4>
                    <p className="text-gray-300 font-mono">{studio.contact.email}</p>
                    <p className="text-gray-400 text-sm mt-1">We reply within 2 hours</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#C81D77] to-[#6710C2] rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-time-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Operating Hours</h4>
                    <p className="text-gray-300 font-semibold text-lg">{studio.hours.availability}</p>
                    <p className="text-gray-400 text-sm mt-1">{studio.hours.booking}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              {studio.quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.action, action.value)}
                  className={`group relative overflow-hidden ${
                    action.type === 'primary'
                      ? 'bg-gradient-to-r from-[#C81D77] to-[#6710C2] text-white hover:shadow-xl hover:shadow-pink-500/40 hover:scale-105'
                      : 'bg-gray-900/70 border-2 border-gray-700/50 hover:border-pink-500/50 text-white hover:bg-gray-800/70'
                  } py-6 px-6 rounded-2xl font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap`}
                >
                  <div className="w-8 h-8 mx-auto mb-3 flex items-center justify-center">
                    <i className={`${action.icon} text-2xl group-hover:scale-110 transition-transform duration-300`}></i>
                  </div>
                  <span className="text-lg">{action.title}</span>
                  {action.type === 'primary' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6710C2] to-[#C81D77] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="w-6 h-6 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-share-line text-white text-sm"></i>
                </div>
                Follow Our Journey
              </h4>
              <div className="flex space-x-4">
                {studio.socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-12 h-12 bg-gray-800 hover:bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110`}
                    title={social.handle}
                  >
                    <i className={`${social.icon} text-lg group-hover:scale-110 transition-transform duration-300`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="relative">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-xl flex items-center justify-center mr-3">
                  <i className="ri-map-2-line text-white text-lg"></i>
                </div>
                Find Us Here
              </h3>
              
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src={studio.coordinates.embed_url}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 border-4 border-gradient-to-r from-[#C81D77]/30 to-[#6710C2]/30 rounded-2xl pointer-events-none"></div>
              </div>

              {/* Map Overlay Info */}
              <div className="mt-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/30">
                <p className="text-gray-300 text-sm">
                  <i className="ri-map-pin-line text-[#C81D77] mr-2"></i>
                  Click on the map to get detailed directions to our studio
                </p>
              </div>
            </div>

            {/* Floating Animation Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-full animate-bounce opacity-60 flex items-center justify-center">
              <i className="ri-map-pin-line text-white text-lg"></i>
            </div>
            <div className="absolute bottom-12 -left-4 w-8 h-8 bg-[#C81D77] rounded-full animate-pulse opacity-70"></div>
          </div>
        </div>

        {/* Location Features Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Location <span className="bg-gradient-to-r from-[#C81D77] to-[#6710C2] bg-clip-text text-transparent">Benefits</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {studio.features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-700/50 hover:border-pink-500/40 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color || 'from-[#C81D77] to-[#6710C2]'} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h4 className="text-white font-bold text-lg mb-3 group-hover:text-pink-300 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Landmarks */}
        <div className="mt-20 bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Nearby <span className="bg-gradient-to-r from-[#C81D77] to-[#6710C2] bg-clip-text text-transparent">Landmarks</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {studio.nearbyLandmarks.map((landmark, index) => (
              <div
                key={index}
                className="group flex items-center space-x-4 p-4 bg-gray-800/50 rounded-2xl border border-gray-700/30 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${landmark.icon} text-white text-lg`}></i>
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-semibold group-hover:text-pink-300 transition-colors duration-300">
                    {landmark.name}
                  </h5>
                  <p className="text-gray-400 text-sm">{landmark.distance} away</p>
                  <p className="text-[#C81D77] text-xs capitalize font-medium">{landmark.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Amenities */}
        <div className="mt-16 bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Studio <span className="bg-gradient-to-r from-[#C81D77] to-[#6710C2] bg-clip-text text-transparent">Amenities</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {studio.amenities.map((amenity, index) => (
              <div
                key={index}
                className="group flex items-center space-x-3 p-4 bg-gray-800/40 hover:bg-gray-800/60 rounded-xl border border-gray-700/20 hover:border-pink-500/30 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${amenity.icon} text-white text-sm`}></i>
                </div>
                <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                  {amenity.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-24 left-12 w-2 h-2 bg-[#C81D77] rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-56 right-16 w-1 h-1 bg-[#6710C2] rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-full animate-bounce opacity-25" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-64 right-1/3 w-2 h-2 bg-[#C81D77] rounded-full animate-pulse opacity-35" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </section>
  );
}