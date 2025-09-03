import React from 'react';
import Hero from './components/Hero';
import MeasuredYogaTherapy from './components/MeasuredYogaTherapy';
import Programs from './components/Programs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <MeasuredYogaTherapy />
      <Programs />
      <Footer />
    </div>
  );
}
