import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <About />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;