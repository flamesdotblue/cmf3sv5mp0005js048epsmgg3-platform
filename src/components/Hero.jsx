import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vK0TK9mHEhvY3bf1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />
      </div>

      <div className="relative z-10 flex items-center justify-center px-6 md:px-10 min-h-[80vh] md:min-h-screen">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Life in Yoga
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-slate-700">
            Science-guided yoga, meditation, and integrative health programs. Discover Measured Yoga Therapya data-informed approach designed to personalize your practice.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#measured-yoga-therapy"
              className="inline-flex items-center justify-center rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 font-medium shadow-sm transition"
            >
              Explore Measured Yoga Therapy
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 px-6 py-3 font-medium shadow-sm transition"
            >
              View Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
