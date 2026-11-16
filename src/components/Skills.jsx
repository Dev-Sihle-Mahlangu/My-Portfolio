const GROUPS = [
  { label: 'Programming Languages', items: ['C#', 'Java', 'JavaScript', 'Python', 'C++', 'PHP'] },
  { label: 'Frontend', items: ['React', 'Vite', 'HTML', 'CSS', 'Responsive Design'] },
  { label: 'Backend & Frameworks', items: ['.NET', 'ASP.NET Core', 'Entity Framework Core', 'REST API Integration', 'Node.js'] },
  { label: 'Databases', items: ['SQL', 'Microsoft SQL Server', 'SQLite', 'Relational Database Design', 'Normalisation', 'CRUD Operations'] },
  { label: 'Development Practices', items: ['Object-Oriented Programming', 'Debugging', 'Software Testing', 'Application Validation', 'Agile Development'] },
  { label: 'Tools & Deployment', items: ['Visual Studio', 'VS Code', 'Android Studio', 'Git', 'GitHub', 'Vercel'] },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="wrap">
        <p className="eyebrow">Technical Skills</p>
        <h2 className="section-title">Skills &amp; Tools</h2>
        <p className="section-sub">What I use across desktop, web, mobile and database work, grouped by where it fits.</p>

        <div className="skill-groups">
          {GROUPS.map((g) => (
            <div key={g.label} className="skill-group card">
              <h3 className="skill-label">{g.label}</h3>
              <ul className="skill-pills">
                {g.items.map((i) => (
                  <li key={i} className="pill">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-groups { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .skill-group { padding: 24px 22px; }
        .skill-label { font-size: 15px; color: var(--blue-soft); margin-bottom: 14px; }
        .skill-pills { display: flex; flex-wrap: wrap; gap: 8px; }
        @media (max-width: 900px) { .skill-groups { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) { .skill-groups { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
