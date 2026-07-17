import { useEffect, useState } from 'react'

const LINES = [
  {
    cmd: 'whoami',
    out: 'Sihle Mahlangu — Final-Year Bachelor of Information Technology Student | Aspiring Software Developer',
  },
  {
    cmd: 'cat profile.txt',
    out: 'Passionate about building practical software solutions using C#, Java, Python, React, SQL Server, HTML, CSS, and JavaScript.',
  },
  {
    cmd: 'cat availability.txt',
    out: 'Available for Graduate Software Developer roles and internships • Johannesburg, South Africa',
  },
  {
    cmd: 'git log --oneline -3',
    out: null,
  },
]

const COMMITS = [
  'a4f21c9  build SkyFlow airline management system',
  '7e0d13b  deploy personal portfolio using React and Vercel',
  '2c88a01  develop interactive JavaScript quiz game',
]

function useTypedLines(lines, speed = 22, lineDelay = 380) {
  const [done, setDone] = useState([])
  const [current, setCurrent] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [showExtra, setShowExtra] = useState(false)

  useEffect(() => {
    if (lineIndex >= lines.length) {
      const t = setTimeout(() => setShowExtra(true), 250)
      return () => clearTimeout(t)
    }

    const text = lines[lineIndex].cmd
    let i = 0

    const interval = setInterval(() => {
      i += 1
      setCurrent(text.slice(0, i))

      if (i >= text.length) {
        clearInterval(interval)

        setTimeout(() => {
          setDone((d) => [...d, lines[lineIndex]])
          setCurrent('')
          setLineIndex((n) => n + 1)
        }, lineDelay)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [lineIndex])

  return {
    done,
    current,
    isTyping: lineIndex < lines.length,
    showExtra,
  }
}

export default function Terminal() {
  const { done, current, isTyping, showExtra } = useTypedLines(LINES)

  return (
    <section id="top" className="hero">
      <div className="wrap hero-wrap">
        <div
          className="term"
          role="img"
          aria-label="Terminal introducing Sihle Mahlangu, an aspiring software developer, displaying professional profile and availability."
        >
          <div className="term-bar">
            <span className="tdot" style={{ background: '#f85149' }} />
            <span className="tdot" style={{ background: '#d29922' }} />
            <span className="tdot" style={{ background: '#3fb950' }} />
            <span className="term-title mono">
              sihle@portfolio:~
            </span>
          </div>

          <div className="term-body mono">
            {done.map((line, index) => (
              <div key={index} className="term-line">
                <div>
                  <span className="prompt">$</span> {line.cmd}
                </div>

                {line.out && (
                  <div className="term-out">{line.out}</div>
                )}

                {line.cmd.startsWith('git log') && (
                  <div className="term-out">
                    {COMMITS.map((commit) => (
                      <div key={commit} className="commit-line">
                        <span className="hash">
                          {commit.slice(0, 7)}
                        </span>
                        {commit.slice(7)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="term-line">
                <span className="prompt">$</span> {current}
                <span className="cursor" />
              </div>
            )}

            {showExtra && (
              <div className="term-line term-final">
                <span className="prompt">$</span>
                <span className="cursor" />
              </div>
            )}
          </div>
        </div>

        <div className={`hero-copy ${showExtra ? 'visible' : ''}`}>
          <p className="hero-role mono">
            Software Developer • Bachelor of Information Technology • Expected Graduation 2026
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary mono" href="#projects">
              <span className="diff-add">+</span> view projects
            </a>

            <a className="btn btn-ghost mono" href="#contact">
              contact --me
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          padding-top: 64px;
          padding-bottom: 72px;
        }

        .hero-wrap {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .term {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 20px 60px -20px rgba(0, 0, 0, 0.6);
        }

        .term-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          background: var(--surface-2);
          border-bottom: 1px solid var(--border);
        }

        .tdot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          opacity: 0.85;
        }

        .term-title {
          margin-left: 8px;
          font-size: 12px;
          color: var(--text-faint);
        }

        .term-body {
          padding: 22px 20px 26px;
          font-size: 14px;
          min-height: 240px;
        }

        .term-line {
          margin-bottom: 10px;
        }

        .prompt {
          color: var(--green);
        }

        .term-out {
          color: var(--text-dim);
          margin-top: 4px;
          padding-left: 18px;
          line-height: 1.6;
        }

        .commit-line {
          margin-top: 2px;
        }

        .hash {
          color: var(--amber);
          margin-right: 10px;
        }

        .cursor {
          display: inline-block;
          width: 8px;
          height: 16px;
          background: var(--green);
          margin-left: 2px;
          vertical-align: text-bottom;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        .hero-copy {
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .hero-copy.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-role {
          color: var(--text-dim);
          font-size: 14px;
          margin-bottom: 18px;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn {
          font-size: 13.5px;
          padding: 11px 18px;
          border-radius: 6px;
          border: 1px solid var(--border);
          transition:
            border-color 0.15s ease,
            background 0.15s ease,
            transform 0.15s ease;
        }

        .btn-primary {
          background: var(--green-dim);
          color: #04150a;
          border-color: var(--green-dim);
          font-weight: 600;
        }

        .btn-primary:hover {
          background: var(--green);
          transform: translateY(-1px);
        }

        .btn-primary .diff-add {
          color: #04150a;
        }

        .btn-ghost {
          color: var(--text-dim);
        }

        .btn-ghost:hover {
          color: var(--text);
          border-color: var(--amber);
        }
      `}</style>
    </section>
  )
}