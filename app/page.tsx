
'use client';

import Link from 'next/link';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import LocationSection from '../components/LocationSection';
import BookingSection from '../components/BookingSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="gallery">
        <GallerySection />
      </section>
      <section id="location">
        <LocationSection />
      </section>
      <section id="booking">
        <BookingSection />
      </section>
      <Footer />
    </div>
  );
}
