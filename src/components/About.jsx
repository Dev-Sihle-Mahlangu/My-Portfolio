export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <p className="eyebrow">About.md</p>
        <h2 className="section-title">
          Final-year <span className="path">/ Web Development</span>
        </h2>

        <div className="about-grid">
          <p className="about-text">
            Final-year Bachelor of Information Technology student at Richfield Graduate
            Institute of Technology, specialising in web development. Comfortable across
            Python, JavaScript, SQL, C#, and Java, with every project — big or small — run
            through Git from first commit to deploy. Looking to join a real Agile team as an
            intern and learn by shipping.
          </p>

          <dl className="facts">
            <div className="fact">
              <dt className="mono">degree</dt>
              <dd>Bachelor of IT — Web Development</dd>
            </div>
            <div className="fact">
              <dt className="mono">school</dt>
              <dd>Richfield Graduate Institute of Technology</dd>
            </div>
            <div className="fact">
              <dt className="mono">graduating</dt>
              <dd>2026</dd>
            </div>
            <div className="fact">
              <dt className="mono">based_in</dt>
              <dd>Johannesburg, Gauteng, ZA</dd>
            </div>
            <div className="fact">
              <dt className="mono">status</dt>
              <dd><span className="diff-add">●</span> open to internships</dd>
            </div>
          </dl>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 48px;
        }
        .about-text {
          color: var(--text-dim);
          font-size: 16.5px;
          line-height: 1.75;
        }
        .facts {
          margin: 0;
          border-left: 1px solid var(--border);
          padding-left: 20px;
        }
        .fact {
          margin-bottom: 16px;
        }
        .fact dt {
          font-size: 11.5px;
          color: var(--amber);
          margin-bottom: 2px;
        }
        .fact dd {
          margin: 0;
          font-size: 14.5px;
          color: var(--text);
        }
        @media (max-width: 720px) {
          .about-grid { grid-template-columns: 1fr; gap: 28px; }
        }
      `}</style>
    </section>
  )
}
