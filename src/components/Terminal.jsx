import { useEffect, useState } from 'react'

const LINES = [
  {
    cmd: 'whoami',
    out: 'Sihle Mahlangu — Aspiring Software Developer | Final-Year B.IT Student',
  },
  {
    cmd: 'cat profile.txt',
    out: 'Building practical software with C#, Java, Python, React and SQL Server.',
  },
  {
    cmd: 'cat availability.txt',
    out: 'Available for Graduate Software Developer roles • Johannesburg, South Africa',
  },
  {
    cmd: 'git log --oneline -3',
    out: null,
  },
]

const COMMITS = [
  'a4f21c9  implement SkyFlow airline management system',
  '7e0d13b  deploy React portfolio using Vercel',
  '2c88a01  create interactive JavaScript quiz application',
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
      i++
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

        <div className="term">
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
                  <div className="term-out">
                    {line.out}
                  </div>
                )}

                {line.cmd.startsWith('git log') && (
                  <div className="term-out">
                    {COMMITS.map((commit) => (
                      <div key={commit} className="commit-line">
                        <span className="hash">
                          {commit.slice(0,7)}
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
              <div className="term-line">
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
              explore projects
            </a>

            <a className="btn btn-ghost mono" href="#contact">
              get in touch
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}