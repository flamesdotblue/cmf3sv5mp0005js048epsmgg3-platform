import React from 'react';

const ProgramCard = ({ title, desc, points, cta }) => (
  <div className="flex flex-col h-full rounded-2xl border bg-white p-6 shadow-sm">
    <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
    <p className="mt-2 text-slate-700 text-sm leading-relaxed">{desc}</p>
    <ul className="mt-4 space-y-2 text-sm text-slate-700">
      {points.map((p, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
    <div className="mt-6 pt-4 border-t">
      <a href="#contact" className="inline-flex items-center rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 text-sm font-medium transition">
        {cta}
      </a>
    </div>
  </div>
);

export default function Programs() {
  const programs = [
    {
      title: 'Foundations: Breath & Mobility',
      desc: 'A gentle 4-week series to establish consistent practice using the Measured Yoga Therapy approach.',
      points: [
        'Weekly live sessions (virtual or in-person, where available)',
        'Personal breath pacing and modifications',
        'Simple weekly tracking and progress review',
      ],
      cta: 'Join Foundations',
    },
    {
      title: 'Stress Reset & Sleep Support',
      desc: 'Calm the nervous system and build a realistic wind-down routine for more restful nights.',
      points: [
        'Breath ratios and relaxation techniques',
        'Short, repeatable evening sequence',
        'Reflective prompts to reduce mental load',
      ],
      cta: 'Start Reset',
    },
    {
      title: 'Resilience for Desk & Device',
      desc: 'Ease neck/shoulder tension, improve posture awareness, and restore energy across your workday.',
      points: [
        'Micro-mobility and ergonomic breaks',
        'Guided focus resets and screen hygiene',
        'Track comfort and concentration over time',
      ],
      cta: 'Build Resilience',
    },
  ];

  return (
    <section id="programs" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Programs</h2>
          <p className="mt-4 text-slate-700">
            Choose a path that fits your goals. Each program integrates assessment, guided practice, and a simple home plan.
          </p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <ProgramCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
