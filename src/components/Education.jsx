const TAGS = [
  {
    tag: 'v1.0-nsc',
    year: '2022',
    title: 'National Senior Certificate (NSC)',
    org: 'Global Combined College',
  },
  {
    tag: 'v2.0-bit-web-dev',
    year: 'Expected 2026',
    title: 'Bachelor of Information Technology — Web Development',
    org: 'Richfield Graduate Institute of Technology',
    note: 'HTML, CSS, JavaScript, SQL & relational database design · software engineering, iterative design, debugging methodology',
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <p className="eyebrow">Education.log</p>
        <h2 className="section-title">
          git tag <span className="path">--list</span>
        </h2>

        <div className="branch">
          <span className="branch-line" />
          {TAGS.map((t) => (
            <div key={t.tag} className="tag-item">
              <span className="tag-dot" />
              <div className="tag-body">
                <div className="tag-head mono">
                  <span className="tag-name">{t.tag}</span>
                  <span className="tag-year">{t.year}</span>
                </div>
                <p className="tag-title">{t.title}</p>
                <p className="tag-org">{t.org}</p>
                {t.note && <p className="tag-note">{t.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .branch { position: relative; padding-left: 24px; }
        .branch-line {
          position: absolute;
          left: 5px;
          top: 6px;
          bottom: 6px;
          width: 2px;
          background: var(--border);
        }
        .tag-item {
          position: relative;
          margin-bottom: 32px;
        }
        .tag-item:last-child { margin-bottom: 0; }
        .tag-dot {
          position: absolute;
          left: -24px;
          top: 4px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--amber);
          box-shadow: 0 0 0 4px var(--bg);
        }
        .tag-head {
          display: flex;
          gap: 12px;
          align-items: baseline;
          margin-bottom: 6px;
        }
        .tag-name { color: var(--amber); font-size: 13.5px; }
        .tag-year { color: var(--text-faint); font-size: 12px; }
        .tag-title { font-size: 16px; margin-bottom: 4px; }
        .tag-org { color: var(--text-dim); font-size: 14px; margin-bottom: 4px; }
        .tag-note { color: var(--text-faint); font-size: 13px; line-height: 1.6; }
      `}</style>
    </section>
  )
}
