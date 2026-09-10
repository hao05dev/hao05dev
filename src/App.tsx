import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#DEDBC8] selection:text-black">
      <Hero />
      <About />
      <Features />
      <Footer />
    </main>
  );
};

export default App;
