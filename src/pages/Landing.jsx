import React from 'react';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Benefits from '../components/landing/Benefits';
import Stats from '../components/landing/Stats';
import Testimonials from '../components/landing/Testimonials';

const Landing = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <Benefits />
      <Stats />
      <Testimonials />
    </main>
  );
};

export default Landing;