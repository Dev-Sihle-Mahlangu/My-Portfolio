const ITEMS = [
  {
    icon: 'M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5',
    title: 'BSc IT (Software Development)',
    org: 'Richfield Graduate Institute of Technology',
    period: 'Expected 2026',
    detail: 'HTML, CSS, JavaScript, SQL & relational database design, software engineering, iterative design, and debugging methodology.',
  },
  {
    icon: 'M4 4h16v14H8l-4 4V4z',
    title: 'National Senior Certificate',
    org: 'Global Combined College',
    period: '2022',
    detail: 'Completed matric, going on to peer-tutor fellow students before starting my IT degree.',
  },
  {
    icon: 'M13 2L3 14h7l-1 8 10-12h-7l1-8z',
    title: 'Currently Building',
    org: 'Self-directed',
    period: 'Ongoing',
    detail: 'An automated Python trading bot on MT5, and a growing portfolio of full-stack projects, while applying for internship and graduate placements.',
  },
]

export default function Education() {
  return (
    <section id="education" className="edu">
      <div className="edu-bg" aria-hidden="true" />
      <div className="wrap edu-wrap">
        <p className="eyebrow">Background</p>
        <h2 className="section-title">My Education</h2>
        <p className="section-sub">
          The path so far, formal study, plus what I've kept building alongside it.
        </p>

        <div className="edu-grid">
          {ITEMS.map((it) => (
            <div key={it.title} className="edu-card">
              <span className="edu-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={it.icon} />
                </svg>
              </span>
              <span className="edu-period tag">{it.period}</span>
              <h3 className="edu-title">{it.title}</h3>
              <p className="edu-org">{it.org}</p>
              <p className="edu-detail">{it.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .edu {
          position: relative;
          overflow: hidden;
        }
        .edu-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 15% 20%, rgba(63,107,255,0.25), transparent 55%),
            radial-gradient(circle at 85% 80%, rgba(69,224,200,0.16), transparent 55%),
            linear-gradient(180deg, #0a0f22, #060911);
          border-top: 1px solid var(--border-soft);
          border-bottom: 1px solid var(--border-soft);
        }
        .edu-wrap { position: relative; }
        .edu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .edu-card {
          background: rgba(16, 22, 44, 0.7);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 26px 22px;
          backdrop-filter: blur(4px);
        }
        .edu-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--cyan);
          margin-bottom: 16px;
        }
        .edu-period { margin-bottom: 12px; }
        .edu-title { font-size: 17px; margin-bottom: 6px; line-height: 1.3; }
        .edu-org { font-size: 13.5px; color: var(--blue-soft); margin-bottom: 12px; }
        .edu-detail { font-size: 13.5px; color: var(--text-dim); line-height: 1.65; }
        @media (max-width: 780px) {
          .edu-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}