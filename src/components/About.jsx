const FACTS = [
  { k: 'degree', v: 'BSc Information Technology (Software Development)' },
  { k: 'institution', v: 'Richfield Graduate Institute of Technology' },
  { k: 'graduating', v: '2026' },
  { k: 'main stack', v: 'C#, .NET, SQL Server' },
  { k: 'based in', v: 'Johannesburg, Gauteng, ZA' },
  { k: 'looking for', v: 'Junior Developer, Graduate Developer, WIL and internships' },
]

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <p className="eyebrow left">About Me</p>
        <h2 className="section-title left">Building software, one project at a time</h2>

        <div className="about-grid">
          <div className="about-body">
            <p>
              I'm a final-year BSc Information Technology (Software Development)
              student at Richfield Graduate Institute of Technology in Johannesburg.
              C# is my strongest language, and I have applied it with .NET, SQL
              Server and object-oriented design, alongside Java for Android and
              JavaScript and React for the web.
            </p>
            <p>
              I learn by building. My projects include a console-based airline
              management system backed by SQL Server, a native Android app with
              SQLite persistence, and database work on a collaborative route-safety
              application. I manage my code with Git and GitHub, and I care about
              validation, debugging and testing.
            </p>
            <p>
              I'm looking for a junior Software Developer, graduate developer or
              Work Integrated Learning placement where I can contribute to reliable,
              maintainable software and keep learning from experienced engineers.
            </p>
          </div>

          <dl className="facts">
            {FACTS.map((f) => (
              <div key={f.k} className="fact">
                <dt className="mono">{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <style>{`
        .about-grid { display: grid; grid-template-columns: 1.25fr 1fr; gap: 56px; margin-top: 32px; }
        .about-body { display: flex; flex-direction: column; gap: 18px; color: var(--text-dim); font-size: 16px; line-height: 1.8; }
        .facts { margin: 0; border-left: 1px solid var(--border); padding-left: 24px; }
        .fact { margin-bottom: 18px; }
        .fact:last-child { margin-bottom: 0; }
        .fact dt { font-size: 11.5px; color: var(--cyan); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 3px; }
        .fact dd { margin: 0; font-size: 14.5px; color: var(--text); }
        @media (max-width: 820px) {
          .about-grid { grid-template-columns: 1fr; gap: 36px; }
          .facts { border-left: none; border-top: 1px solid var(--border); padding: 24px 0 0; }
        }
      `}</style>
    </section>
  )
}
