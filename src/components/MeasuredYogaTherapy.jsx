import React from 'react';
import { HeartPulse, Activity, ShieldCheck, Stethoscope } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="p-5 rounded-xl border bg-white/70 backdrop-blur-sm">
    <div className="flex items-center gap-3">
      <div className="shrink-0 p-2 rounded-lg bg-sky-50 text-sky-700">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="font-semibold text-slate-900">{title}</h4>
    </div>
    <p className="mt-3 text-slate-700 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default function MeasuredYogaTherapy() {
  return (
    <section id="measured-yoga-therapy" className="relative py-16 md:py-24 bg-gradient-to-b from-white to-sky-50/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Measured Yoga Therapy
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Measured Yoga Therapy blends traditional yoga with modern assessment. We emphasize safety, personalization, and small, consistent steps forward—using simple measures to guide breathwork, movement, and meditation.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Feature
                icon={HeartPulse}
                title="Breath & Balance"
                desc="Support calm, focus, and functional mobility with breath pacing and gentle progressions."
              />
              <Feature
                icon={Activity}
                title="Track What Matters"
                desc="Use easy indicators like perceived stress, breath pacing, and adherence to inform next steps."
              />
              <Feature
                icon={ShieldCheck}
                title="Safety First"
                desc="Clear boundaries, modifications, and gradual progression that respects your capacity."
              />
              <Feature
                icon={Stethoscope}
                title="Collaborative Care"
                desc="Coordinates with your clinicians and existing plans when relevant for a cohesive experience."
              />
            </div>
          </div>

          <div className="bg-white border rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">How a session works</h3>
            <ol className="mt-4 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-white text-sm">1</span>
                <div>
                  <p className="font-medium text-slate-900">Brief intake</p>
                  <p className="text-sm">Clarify goals, comfort level, and movement considerations.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-white text-sm">2</span>
                <div>
                  <p className="font-medium text-slate-900">Guided practice</p>
                  <p className="text-sm">A personalized sequence of breathwork, mindful movement, and relaxation.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-white text-sm">3</span>
                <div>
                  <p className="font-medium text-slate-900">Simple measures</p>
                  <p className="text-sm">Record a few easy-to-track indicators to calibrate your next session.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-white text-sm">4</span>
                <div>
                  <p className="font-medium text-slate-900">Home plan</p>
                  <p className="text-sm">Receive concise guidance tailored to your schedule and preferences.</p>
                </div>
              </li>
            </ol>

            <div className="mt-6 p-4 rounded-lg bg-sky-50 text-sky-900 border border-sky-100">
              <p className="text-sm">
                Educational and wellness-focused; not a substitute for medical diagnosis or treatment. Consult your clinician for medical questions.
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 text-sm font-medium shadow-sm transition"
              >
                Find a Program
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 px-5 py-3 text-sm font-medium shadow-sm transition"
              >
                Request a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
