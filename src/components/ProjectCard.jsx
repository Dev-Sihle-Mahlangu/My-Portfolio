export default function ProjectCard({ category, status, title, description, highlights, tech, links, note }) {
  return (
    <article className="pcard card">
      <div className="pcard-top">
        <span className="tag">{category}</span>
        {status && <span className="pcard-status mono">{status}</span>}
      </div>

      <h3 className="pcard-title">{title}</h3>
      <p className="pcard-desc">{description}</p>

      <ul className="pcard-points">
        {highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <ul className="pcard-tech" aria-label="Technologies used">
        {tech.map((t) => (
          <li key={t} className="pill">{t}</li>
        ))}
      </ul>

      <div className="pcard-links">
        {links && links.length > 0 ? (
          links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className={`btn btn-sm ${l.primary ? 'btn-primary' : 'btn-ghost'}`}
              aria-label={`${l.label}: ${title} (opens in a new tab)`}
            >
              {l.label}
            </a>
          ))
        ) : (
          <span className="pcard-note mono">{note || 'No public link yet'}</span>
        )}
      </div>

      <style>{`
        .pcard { padding: 26px 24px; display: flex; flex-direction: column; transition: transform 0.15s ease, border-color 0.15s ease; }
        .pcard:hover { transform: translateY(-4px); border-color: var(--blue-soft); }
        .pcard-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
        .pcard-status { font-size: 11.5px; color: var(--blue-soft); }
        .pcard-title { font-size: 19px; line-height: 1.3; margin-bottom: 10px; }
        .pcard-desc { font-size: 14px; color: var(--text-dim); line-height: 1.65; margin-bottom: 14px; }
        .pcard-points { margin-bottom: 18px; display: flex; flex-direction: column; gap: 8px; }
        .pcard-points li { position: relative; padding-left: 16px; font-size: 13.5px; color: var(--text-dim); line-height: 1.6; }
        .pcard-points li::before {
          content: '';
          position: absolute; left: 0; top: 9px;
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--cyan);
        }
        .pcard-tech { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; }
        .pcard-links { margin-top: auto; display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
        .pcard-note { font-size: 12.5px; color: var(--text-faint); }
      `}</style>
    </article>
  )
}
