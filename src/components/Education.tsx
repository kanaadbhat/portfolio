import React from 'react';

const education = [
  {
    degree: 'B.Tech in Computer Engineering',
    institution: 'K.K.Wagh Institute of Engineering Education & Research, Nashik',
    duration: '2022-2026',
    cgpa: '8.02',
    board: 'Autonomous – SPPU, Pune',
  },
  {
    qualification: 'HSC (12th)',
    institution: 'Deep Junior College, Boisar',
    year: '2021-2022',
    mht_cet: '92.55%',
  },
  {
    qualification: 'CBSE (10th)',
    institution: 'U.S. Oswal English Academy, Boisar',
    year: '2020',
    percentage: '94.20%',
  },
];

const Education = () => (
  <section id="education" className="py-20 bg-background-secondary">
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center mb-4">
        <span className="inline-block bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm mb-2">KB</span>
      </div>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
        <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
          My academic journey.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {education.map((edu, idx) => (
          <div key={idx} className="glass-card rounded-2xl p-6 flex flex-col h-full border border-card-border shadow-md">
            <h3 className="text-xl font-bold text-primary mb-2">
              {edu.degree || edu.qualification}
            </h3>
            <div className="text-foreground-secondary mb-1 font-semibold">{edu.institution}</div>
            <div className="text-foreground-muted mb-2">
              {edu.duration || edu.year}
            </div>
            {edu.cgpa && (
              <div className="text-sm text-foreground mb-1">CGPA: <span className="font-semibold">{edu.cgpa}</span></div>
            )}
            {edu.percentage && (
              <div className="text-sm text-foreground mb-1">Percentage: <span className="font-semibold">{edu.percentage}</span></div>
            )}
            {edu.board && (
              <div className="text-xs text-foreground-muted">{edu.board}</div>
            )}
            {edu.mht_cet && (
              <div className="text-xs text-foreground-muted">MHT-CET: {edu.mht_cet}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education; 