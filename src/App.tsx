import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { BestSellers } from './components/BestSellers';
import { MenuCarousel } from './components/MenuCarousel';
import { Philosophy } from './components/Philosophy';
import { Footer } from './components/Footer';
export function App() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <Features />
      <BestSellers />
      <MenuCarousel />
      <Philosophy />
      <Footer />
    </main>);

}