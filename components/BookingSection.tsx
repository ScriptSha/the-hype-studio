
'use client';

import { useState } from 'react';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    duration: '1',
    message: ''
  });

  const services = [
    { name: 'Dance Practice Studio', price: 500 },
    { name: 'Acting & Filmmaking Space', price: 800 },
    { name: 'Social Media Content Creation', price: 600 }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', 
    '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
  ];

  const selectedService = services.find(s => s.name === formData.service);
  const totalPrice = selectedService ? selectedService.price * parseInt(formData.duration) : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-[#C81D77]/20 to-[#6710C2]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-l from-[#6710C2]/15 to-[#C81D77]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Book Your <span className="bg-gradient-to-r from-[#C81D77] to-[#6710C2] bg-clip-text text-transparent">Studio Session</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to create your masterpiece? Fill out the form below to reserve your studio space and start your creative journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
            <form id="studio-booking" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 text-sm"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Select Service *</label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pr-8 bg-gray-900/50 border border-gray-600 rounded-2xl text-white focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 text-sm appearance-none cursor-pointer"
                    >
                      <option value="">Choose a service</option>
                      {services.map((service) => (
                        <option key={service.name} value={service.name}>
                          {service.name} - ₹{service.price}/hour
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Preferred Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-2xl text-white focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Preferred Time *</label>
                  <div className="relative">
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pr-8 bg-gray-900/50 border border-gray-600 rounded-2xl text-white focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 text-sm appearance-none cursor-pointer"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Duration (Hours) *</label>
                  <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    min="1"
                    max="12"
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 resize-none text-sm"
                  placeholder="Tell us about your project or any special requirements..."
                />
                <div className="text-right text-xs text-gray-400 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#C81D77] to-[#6710C2] text-white py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Book Studio Session
              </button>
            </form>
          </div>

          {/* Booking Summary & Info */}
          <div className="space-y-8">
            {/* Price Calculator */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Booking Summary</h3>

              {formData.service ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                    <span className="text-gray-300">Service</span>
                    <span className="text-white font-semibold">{formData.service}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                    <span className="text-gray-300">Duration</span>
                    <span className="text-white font-semibold">{formData.duration} hour(s)</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                    <span className="text-gray-300">Rate per hour</span>
                    <span className="text-white font-semibold">₹{selectedService?.price}</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-xl font-bold text-white">Total Amount</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#C81D77] to-[#6710C2] bg-clip-text text-transparent">
                      ₹{totalPrice}
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-gray-400 text-center py-8">Select a service to see pricing details</p>
              )}
            </div>

            {/* Contact Info */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Need Help?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-2xl flex items-center justify-center mr-4">
                    <i className="ri-phone-line text-white"></i>
                  </div>
                  <div>
                    <p className="text-gray-300">Call us directly</p>
                    <p className="text-white font-semibold">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-2xl flex items-center justify-center mr-4">
                    <i className="ri-mail-line text-white"></i>
                  </div>
                  <div>
                    <p className="text-gray-300">Email support</p>
                    <p className="text-white font-semibold">info@thehypestudio.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policies */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Booking Policies</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <div className="w-4 h-4 flex items-center justify-center mr-2 mt-0.5">
                    <i className="ri-check-line text-[#C81D77] text-sm"></i>
                  </div>
                  24-hour advance booking required
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 flex items-center justify-center mr-2 mt-0.5">
                    <i className="ri-check-line text-[#C81D77] text-sm"></i>
                  </div>
                  50% advance payment to confirm booking
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 flex items-center justify-center mr-2 mt-0.5">
                    <i className="ri-check-line text-[#C81D77] text-sm"></i>
                  </div>
                  Free cancellation up to 6 hours before
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 flex items-center justify-center mr-2 mt-0.5">
                    <i className="ri-check-line text-[#C81D77] text-sm"></i>
                  </div>
                  Studio equipment included in price
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-12 w-2 h-2 bg-[#C81D77] rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-56 right-16 w-1 h-1 bg-[#6710C2] rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-gradient-to-r from-[#C81D77] to-[#6710C2] rounded-full animate-bounce opacity-25" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
}
