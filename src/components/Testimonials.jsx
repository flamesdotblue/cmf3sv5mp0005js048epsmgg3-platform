import React from 'react';

const Quote = ({ quote, author, role }) => (
  <div className="rounded-2xl border bg-white p-6 shadow-sm">
    <p className="text-slate-800 leading-relaxed">“{quote}”</p>
    <div className="mt-4 text-sm text-slate-600">
      <span className="font-medium text-slate-900">{author}</span>
      {role ? <span className="ml-2">· {role}</span> : null}
    </div>
  </div>
);

export default function Testimonials() {
  const quotes = [
    {
      quote:
        'The measured approach helped me pace my practice. Small wins each week added up to real changes in how I feel day to day.',
      author: 'Participant, Foundations',
      role: '',
    },
    {
      quote:
        'Clear guidance and simple tracking made it easy to stay consistent without overwhelming my schedule.',
      author: 'Participant, Stress Reset',
      role: '',
    },
    {
      quote:
        'I appreciated the collaboration with my clinician and the focus on safety while building confidence.',
      author: 'Private Client',
      role: '',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-sky-50/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">What participants say</h2>
          <p className="mt-4 text-slate-700">Real experiences from real people. Results vary; consistency and fit matter.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <Quote key={i} {...q} />
          ))}
        </div>
      </div>
    </section>
  );
}
