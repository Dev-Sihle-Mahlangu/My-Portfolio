const GROUPS = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'SQL', 'C#', 'Java', 'HTML', 'CSS', 'C++ (fundamentals)'] },
  { label: 'Web Development', items: ['Responsive Design', 'REST APIs', 'Node.js (fundamentals)', 'Flexbox / Grid'] },
  { label: 'Databases', items: ['Relational Schema Design', 'Normalisation'] },
  { label: 'Version Control', items: ['Git', 'GitHub (branching, commits, PRs)'] },
  { label: 'Methodologies', items: ['Agile / Scrum', 'Iterative Design', 'Debugging', 'Unit Testing'] },
  { label: 'Tools', items: ['VS Code', 'Visual Studio', 'Google Workspace', 'Microsoft Office'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <p className="eyebrow">Toolbox</p>
        <h2 className="section-title">Skills &amp; Tools</h2>
        <p className="section-sub">
          What I reach for day to day, grouped by where it fits.
        </p>

        <div className="skill-groups">
          {GROUPS.map((g) => (
            <div key={g.label} className="skill-group">
              <h3 className="skill-label">{g.label}</h3>
              <div className="skill-pills">
                {g.items.map((i) => (
                  <span key={i} className="pill">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-groups {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px 40px;
        }
        .skill-label {
          font-size: 14px;
          color: var(--blue-soft);
          margin-bottom: 12px;
          font-family: var(--font-display);
        }
        .skill-pills { display: flex; flex-wrap: wrap; gap: 8px; }
        @media (max-width: 640px) {
          .skill-groups { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}