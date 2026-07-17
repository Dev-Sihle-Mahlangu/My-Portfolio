export default function ProjectCard({ hash, title, tech, bullets, link, isLast }) {
  return (
    <div className="commit">
      <div className="commit-rail">
        <span className="commit-dot" />
        {!isLast && <span className="commit-line-v" />}
      </div>

      <div className="commit-card">
        <div className="commit-head">
          <span className="commit-hash mono">{hash}</span>
          <h3 className="commit-title">{title}</h3>
        </div>

        <div className="commit-tech">
          {tech.map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>

        {bullets.length > 0 && (
          <ul className="commit-diff">
            {bullets.map((b, i) => (
              <li key={i}>
                <span className="diff-add mono">+</span> {b}
              </li>
            ))}
          </ul>
        )}

        {link && (
          <a className="commit-link mono" href={link} target="_blank" rel="noreferrer">
            view source →
          </a>
        )}
      </div>

      <style>{`
        .commit {
          display: grid;
          grid-template-columns: 24px 1fr;
          gap: 0;
        }
        .commit-rail {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .commit-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 0 4px var(--bg), 0 0 0 5px var(--border);
          margin-top: 26px;
          flex-shrink: 0;
        }
        .commit-line-v {
          width: 2px;
          flex: 1;
          background: var(--border);
          margin-top: 4px;
        }
        .commit-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 22px 24px;
          margin: 0 0 28px 16px;
          transition: border-color 0.15s ease;
        }
        .commit-card:hover { border-color: var(--amber); }
        .commit-head {
          display: flex;
          align-items: baseline;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 12px;
        }
        .commit-hash { color: var(--amber); font-size: 13px; }
        .commit-title { font-size: 18px; }
        .commit-tech {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          margin-bottom: 14px;
        }
        .commit-diff {
          list-style: none;
          margin: 0 0 14px;
          padding: 0;
        }
        .commit-diff li {
          font-size: 14.5px;
          color: var(--text-dim);
          line-height: 1.65;
          margin-bottom: 6px;
        }
        .commit-link {
          font-size: 13px;
          color: var(--green);
        }
        .commit-link:hover { color: var(--amber); }
      `}</style>
    </div>
  )
}
