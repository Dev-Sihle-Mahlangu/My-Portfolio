import { useState } from 'react'
import { TRANSCRIPT_URL, TRANSCRIPT_FILENAME } from '../data/site.js'

const RECORD = {
  2026: {
    overall: '70.83 (to date)',
    blocks: [
      {
        label: 'Semester 1 (Jan - Jun)',
        rows: [
          { module: 'Artificial Intelligence 700', credits: 10, mark: 68 },
          { module: 'Cyber Security 700', credits: 10, mark: 79 },
          { module: 'Human Computer Interaction 700', credits: 10, mark: 72 },
          { module: 'Programming 731', credits: 15, mark: 69 },
          { module: 'Programming 741', credits: 15, mark: 68 },
          { module: 'Software Engineering 700', credits: 15, mark: 69 },
        ],
      },
      {
        label: 'Semester 2 (Jul - Dec)',
        rows: [
          { module: 'IT Project 700', credits: 10, mark: null },
          { module: 'Mobile App Development 700', credits: 10, mark: null },
          { module: 'Operating Systems 700', credits: 10, mark: null },
          { module: 'Programming 732', credits: 15, mark: null },
          { module: 'Programming 742', credits: 15, mark: null },
          { module: 'Work Integrated Learning 700', credits: 10, mark: null },
        ],
      },
    ],
  },
  2025: {
    overall: '66.50',
    blocks: [
      {
        label: 'Semester 1 (Jan - Jun)',
        rows: [
          { module: 'Cloud Computing 600', credits: 10, mark: 40 },
          { module: 'Database Systems 600', credits: 10, mark: 74 },
          { module: 'Information Systems 621', credits: 10, mark: 54 },
          { module: 'Internet Programming 621', credits: 15, mark: 66 },
          { module: 'Programming 621', credits: 15, mark: 62 },
        ],
      },
      {
        label: 'Re-exam (Semester 1)',
        rows: [{ module: 'Cloud Computing 600', credits: 10, mark: 67 }],
      },
      {
        label: 'Semester 2 (Jul - Dec)',
        rows: [
          { module: 'Big Data and IoT 600', credits: 10, mark: 64 },
          { module: 'Information Systems 622', credits: 10, mark: 93 },
          { module: 'Internet Programming 622', credits: 15, mark: 78 },
          { module: 'Machine Learning 600', credits: 10, mark: 61 },
          { module: 'Networks 512', credits: 10, mark: 69 },
          { module: 'Programming 622', credits: 15, mark: 70 },
        ],
      },
    ],
  },
  2024: {
    overall: '56.50',
    blocks: [
      {
        label: 'Semester 1 (Jan - Jun)',
        rows: [
          { module: 'Networks 511', credits: 10, mark: 43 },
          { module: 'Programming 511', credits: 15, mark: 43 },
          { module: 'Web Technology 511', credits: 15, mark: 70 },
        ],
      },
      {
        label: 'Re-exam (Semester 1)',
        rows: [
          { module: 'Networks 511', credits: 10, mark: 64 },
          { module: 'Programming 511', credits: 15, mark: 64 },
        ],
      },
      {
        label: 'Semester 2 (Jul - Dec)',
        rows: [
          { module: 'Networks 512', credits: 10, mark: 43 },
          { module: 'Programming 512', credits: 15, mark: 67 },
          { module: 'Web Technology 512', credits: 15, mark: 68 },
          { module: 'Data Science 500', credits: 10, mark: 61 },
        ],
      },
      {
        label: 'Re-exam (Semester 2)',
        rows: [{ module: 'Networks 512', credits: 10, mark: 42 }],
      },
    ],
  },
}

const YEARS = ['2026', '2025', '2024']

const STATS = [
  { value: 'NQF 7', label: 'Bachelor\'s degree, 395 credits' },
  { value: '70.83%', label: '2026 overall mark to date' },
  { value: '93%', label: 'Information Systems 622' },
  { value: '79%', label: 'Cyber Security 700' },
]

export default function Transcript() {
  const [year, setYear] = useState('2026')
  const data = RECORD[year]

  const onKey = (e) => {
    const i = YEARS.indexOf(year)
    if (e.key === 'ArrowRight') setYear(YEARS[(i + 1) % YEARS.length])
    if (e.key === 'ArrowLeft') setYear(YEARS[(i - 1 + YEARS.length) % YEARS.length])
  }

  return (
    <section id="transcript" className="trans">
      <div className="wrap">
        <p className="eyebrow">Academic Record</p>
        <h2 className="section-title">Latest Transcript</h2>
        <p className="section-sub">
          Official Richfield result sheet for the BSc in Information Technology, issued
          27 October 2026. Second-semester 2026 modules are still in progress.
        </p>

        <ul className="stats">
          {STATS.map((s) => (
            <li key={s.label} className="stat card">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </li>
          ))}
        </ul>

        <div className="tabs" role="tablist" aria-label="Academic year" onKeyDown={onKey}>
          {YEARS.map((y) => (
            <button
              key={y}
              type="button"
              role="tab"
              id={`tab-${y}`}
              aria-selected={year === y}
              aria-controls="trans-panel"
              tabIndex={year === y ? 0 : -1}
              className={`tab mono ${year === y ? 'active' : ''}`}
              onClick={() => setYear(y)}
            >
              {y}
            </button>
          ))}
        </div>

        <div id="trans-panel" role="tabpanel" aria-labelledby={`tab-${year}`} className="panel card">
          <div className="panel-head">
            <h3 className="panel-title">{year} results</h3>
            <span className="overall mono">Overall mark: {data.overall}</span>
          </div>

          <div className="blocks">
            {data.blocks.map((b) => (
              <div key={b.label} className="block">
                <h4 className="block-label mono">{b.label}</h4>
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Module</th>
                      <th scope="col" className="num">Credits</th>
                      <th scope="col" className="num">Mark</th>
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r) => (
                      <tr key={r.module}>
                        <td>{r.module}</td>
                        <td className="num">{r.credits}</td>
                        <td className={`num ${r.mark !== null && r.mark >= 70 ? 'good' : ''}`}>
                          {r.mark === null ? <span className="pending">In progress</span> : `${r.mark}%`}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>

        <div className="trans-actions">
          <a href={TRANSCRIPT_URL} download={TRANSCRIPT_FILENAME} className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 20h16" />
            </svg>
            Download transcript (PDF)
          </a>
          <p className="trans-note">
            The PDF is the official result sheet with my ID number and student number blacked out.
          </p>
        </div>
      </div>

      <style>{`
        .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 40px; }
        .stat { padding: 20px 20px; display: flex; flex-direction: column; gap: 4px; }
        .stat-value { font-family: var(--font-display); font-size: 26px; font-weight: 700; color: var(--blue-soft); }
        .stat-label { font-size: 13px; color: var(--text-dim); line-height: 1.5; }

        .tabs { display: inline-flex; gap: 6px; margin-bottom: 16px; padding: 5px; background: var(--surface); border: 1px solid var(--border); border-radius: 999px; }
        .tab { border: none; background: transparent; color: var(--text-dim); font-size: 13px; font-weight: 600; padding: 8px 20px; border-radius: 999px; transition: background 0.15s ease, color 0.15s ease; }
        .tab:hover { color: var(--text); }
        .tab.active { background: var(--blue); color: #fff; }

        .panel { padding: 26px 26px 10px; }
        .panel-head { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; flex-wrap: wrap; margin-bottom: 22px; }
        .panel-title { font-size: 18px; }
        .overall { font-size: 12.5px; color: var(--cyan); }
        .blocks { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 36px; }
        .block { margin-bottom: 24px; }
        .block-label { font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-faint); margin-bottom: 8px; font-weight: 500; }
        table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
        th { text-align: left; font-weight: 500; font-size: 12px; color: var(--text-faint); padding: 6px 0; border-bottom: 1px solid var(--border); }
        td { padding: 9px 0; border-bottom: 1px solid var(--border-soft); color: var(--text-dim); }
        td:first-child { color: var(--text); padding-right: 12px; }
        .num { text-align: right; white-space: nowrap; width: 1%; padding-left: 14px; }
        td.good { color: var(--cyan); font-weight: 600; }
        .pending { font-family: var(--font-mono); font-size: 11.5px; color: var(--blue-soft); }

        .trans-actions { margin-top: 28px; display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
        .trans-note { font-size: 13px; color: var(--text-faint); max-width: 420px; line-height: 1.6; }

        @media (max-width: 900px) { .stats { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 760px) { .blocks { grid-template-columns: 1fr; } .panel { padding: 22px 18px 6px; } }
        @media (max-width: 420px) { .stats { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
