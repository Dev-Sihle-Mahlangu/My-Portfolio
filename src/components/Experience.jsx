const EXPOSURE = [
  {
    title: 'Event logistics coordination',
    org: 'Xclusiv Events',
    detail: 'Event logistics coordination, including work connected to a music festival.',
  },
  {
    title: 'Event poster production',
    org: 'Xclusiv Events',
    detail: 'Created event posters with Python and the Pillow imaging library.',
  },
]

const CERTS = [
  {
    title: 'FNB App of the Year 2025',
    status: 'Course completion certificate',
    done: true,
  },
  {
    title: 'AWS Cloud Practitioner',
    status: 'Currently studying, not yet certified',
    done: false,
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <p className="eyebrow">Experience &amp; Development</p>
        <h2 className="section-title">Practical exposure and certifications</h2>
        <p className="section-sub">
          I have not held a formal software development role yet. My hands-on experience
          comes from academic and independent projects, plus the work below.
        </p>

        <div className="exp-grid">
          <div className="exp-col">
            <h3 className="exp-heading">Practical exposure</h3>
            <ul className="exp-list">
              {EXPOSURE.map((e) => (
                <li key={e.title} className="exp-item card">
                  <h4 className="exp-title">{e.title}</h4>
                  <p className="exp-org">{e.org}</p>
                  <p className="exp-detail">{e.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="exp-col">
            <h3 className="exp-heading">Certifications &amp; professional development</h3>
            <ul className="exp-list">
              {CERTS.map((c) => (
                <li key={c.title} className="exp-item card">
                  <h4 className="exp-title">{c.title}</h4>
                  <p className={`exp-status mono ${c.done ? 'done' : ''}`}>{c.status}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .exp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 36px; }
        .exp-heading { font-size: 15px; color: var(--blue-soft); margin-bottom: 16px; }
        .exp-list { display: flex; flex-direction: column; gap: 14px; }
        .exp-item { padding: 20px 22px; }
        .exp-title { font-size: 16px; margin-bottom: 4px; }
        .exp-org { font-size: 13px; color: var(--cyan); margin-bottom: 8px; font-family: var(--font-mono); }
        .exp-detail { font-size: 14px; color: var(--text-dim); line-height: 1.65; }
        .exp-status { font-size: 12.5px; color: var(--text-faint); margin-top: 6px; }
        .exp-status.done { color: var(--cyan); }
        @media (max-width: 780px) { .exp-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
