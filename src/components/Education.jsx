const COURSEWORK = [
  'Software Engineering',
  'Object-Oriented Programming',
  'Database Systems',
  'Internet Programming',
  'Mobile App Development',
  'Cyber Security',
  'Artificial Intelligence',
  'Human Computer Interaction',
  'Cloud Computing',
  'Agile Development',
]

export default function Education() {
  return (
    <section id="education" className="edu">
      <div className="edu-bg" aria-hidden="true" />
      <div className="wrap edu-wrap">
        <p className="eyebrow">Education</p>
        <h2 className="section-title">My Education</h2>
        <p className="section-sub">Formal study in software development, and where it started.</p>

        <div className="edu-grid">
          <article className="edu-card edu-main">
            <span className="tag">Expected 2026</span>
            <h3 className="edu-title">Bachelor of Science in Information Technology</h3>
            <p className="edu-org">Software Development | Richfield Graduate Institute of Technology</p>
            <p className="edu-detail">
              NQF Level 7 bachelor's degree, 395 credits (SAQA ID 122369), studied at the
              Bryanston campus. The latest official results are in the Academic Record below.
            </p>
            <h4 className="edu-sub">Relevant coursework</h4>
            <ul className="edu-tags">
              {COURSEWORK.map((c) => (
                <li key={c} className="pill">{c}</li>
              ))}
            </ul>
          </article>

          <article className="edu-card">
            <span className="tag">2022</span>
            <h3 className="edu-title">National Senior Certificate</h3>
            <p className="edu-org">Global Combined College</p>
            <p className="edu-detail">Completed matric before starting my IT degree.</p>
          </article>
        </div>
      </div>

      <style>{`
        .edu { position: relative; overflow: hidden; }
        .edu-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(circle at 15% 20%, rgba(63,107,255,0.22), transparent 55%),
            radial-gradient(circle at 85% 80%, rgba(69,224,200,0.12), transparent 55%),
            linear-gradient(180deg, #0a0f22, #060911);
          border-top: 1px solid var(--border-soft);
        }
        .edu-wrap { position: relative; }
        .edu-grid { display: grid; grid-template-columns: 1.6fr 1fr; gap: 20px; align-items: start; }
        .edu-card {
          background: rgba(16, 22, 44, 0.75);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px 26px;
        }
        .edu-card .tag { margin-bottom: 14px; }
        .edu-title { font-size: 19px; line-height: 1.3; margin-bottom: 6px; }
        .edu-org { font-size: 14px; color: var(--blue-soft); margin-bottom: 14px; }
        .edu-detail { font-size: 14px; color: var(--text-dim); line-height: 1.7; }
        .edu-sub { font-size: 13px; font-family: var(--font-mono); color: var(--text-faint); text-transform: uppercase; letter-spacing: 0.06em; margin: 22px 0 12px; font-weight: 500; }
        .edu-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        @media (max-width: 820px) { .edu-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
