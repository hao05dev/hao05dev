import React from 'react';
import { PaintFilters } from './components/Paint';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Stack } from './components/Stack';
import { Contact } from './components/Contact';

export const App: React.FC = () => (
  <>
    <PaintFilters />
    <Nav />
    <main>
      <Hero />
      <About />
      <Work />
      <Stack />
    </main>
    <Contact />
  </>
);

export default App;
