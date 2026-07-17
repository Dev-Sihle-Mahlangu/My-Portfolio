const GROUPS = [
  {
    dir: 'languages/',
    items: ['Python', 'JavaScript', 'SQL', 'C#', 'Java', 'HTML', 'CSS', 'C++ (fundamentals)'],
  },
  {
    dir: 'web/',
    items: ['Responsive design', 'REST APIs', 'Node.js (fundamentals)', 'Flexbox / Grid'],
  },
  {
    dir: 'databases/',
    items: ['SQL', 'Relational schema design', 'Normalisation'],
  },
  {
    dir: 'version-control/',
    items: ['Git', 'GitHub — branching, commits, pull requests'],
  },
  {
    dir: 'tools/',
    items: ['VS Code', 'Visual Studio', 'Google Workspace', 'Microsoft Office Suite'],
  },
  {
    dir: 'method/',
    items: ['Agile / Scrum', 'Iterative design', 'Debugging', 'Unit testing'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <p className="eyebrow">Skills.json</p>
        <h2 className="section-title">
          ls <span className="path">-R skills/</span>
        </h2>

        <div className="tree">
          {GROUPS.map((g) => (
            <div key={g.dir} className="tree-group">
              <p className="tree-dir mono">{g.dir}</p>
              <ul className="tree-items">
                {g.items.map((item) => (
                  <li key={item} className="mono">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tree {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px 32px;
        }
        .tree-dir {
          color: var(--amber);
          font-size: 14.5px;
          margin: 0 0 10px;
        }
        .tree-items {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .tree-items li {
          font-size: 13.5px;
          color: var(--text-dim);
          padding: 4px 0 4px 16px;
          border-left: 1px solid var(--border);
          position: relative;
        }
        .tree-items li::before {
          content: '';
          position: absolute;
          left: -1px;
          top: 12px;
          width: 12px;
          height: 1px;
          background: var(--border);
        }
        @media (max-width: 760px) {
          .tree { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .tree { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
