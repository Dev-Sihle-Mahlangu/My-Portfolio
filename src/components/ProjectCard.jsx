export default function ProjectCard({ category, title, objective, tools, impact, tech, link }) {
  return (
    <div className="pcard card">
      <span className="pcard-cat tag">{category}</span>
      <h3 className="pcard-title">{title}</h3>

      {objective && (
        <div className="pcard-row">
          <span className="pcard-label">Objective</span>
          <p>{objective}</p>
        </div>
      )}

      {tools && (
        <div className="pcard-row">
          <span className="pcard-label">Tools</span>
          <div className="pcard-tools">
            {tools.map((t) => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        </div>
      )}

      {impact && (
        <div className="pcard-row">
          <span className="pcard-label">Impact</span>
          <p>{impact}</p>
        </div>
      )}

      {link ? (
        <a href={link} target="_blank" rel="noreferrer" className="btn btn-ghost pcard-btn">View Project</a>
      ) : (
        <span className="pcard-btn pcard-btn-disabled">Source not public</span>
      )}

      <style>{`
        .pcard {
          padding: 26px 24px;
          display: flex;
          flex-direction: column;
          transition: transform 0.15s ease, border-color 0.15s ease;
        }
        .pcard:hover { transform: translateY(-4px); border-color: var(--blue-soft); }
        .pcard-cat { align-self: flex-start; margin-bottom: 14px; }
        .pcard-title { font-size: 19px; margin-bottom: 16px; line-height: 1.3; }
        .pcard-row { margin-bottom: 14px; }
        .pcard-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--blue-soft);
          margin-bottom: 6px;
        }
        .pcard-row p {
          font-size: 13.5px;
          color: var(--text-dim);
          line-height: 1.6;
        }
        .pcard-tools { display: flex; flex-wrap: wrap; gap: 6px; }
        .pcard-btn {
          margin-top: auto;
          padding-top: 18px;
          justify-content: center;
          text-align: center;
        }
        .pcard-btn-disabled {
          margin-top: auto;
          padding-top: 18px;
          font-size: 13px;
          color: var(--text-faint);
          text-align: center;
          font-family: var(--font-mono);
        }
      `}</style>
    </div>
  )
}
