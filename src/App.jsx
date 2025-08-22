import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Schedule from './components/Schedule';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="schedule">
          <Schedule />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
