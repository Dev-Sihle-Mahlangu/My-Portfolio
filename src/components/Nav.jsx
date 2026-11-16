import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'transcript', label: 'Transcript' },
  { id: 'experience', label: 'Experience' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="nav-inner wrap">
        <a href="#top" className="brand" onClick={close} aria-label="Sihle Mahlangu, back to top">
          <Logo size={34} />
          <span className="brand-name">Sihle Mahlangu</span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={close}>{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm nav-cta-mobile" onClick={close}>Contact Me</a>
        </nav>

        <a href="#contact" className="btn btn-primary btn-sm nav-cta">Contact Me</a>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 30;
          background: rgba(6, 9, 17, 0.86);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-soft);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--nav-h);
          gap: 20px;
        }
        .brand { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
        .brand-name { font-family: var(--font-display); font-weight: 600; font-size: 15px; }
        .nav-links { display: flex; gap: 24px; margin: 0 auto; }
        .nav-links a:not(.btn) {
          font-size: 14px;
          color: var(--text-dim);
          transition: color 0.15s ease;
        }
        .nav-links a:not(.btn):hover { color: var(--text); }
        .nav-cta-mobile { display: none; }
        .nav-toggle {
          display: none;
          width: 42px;
          height: 42px;
          border: 1px solid var(--border);
          background: var(--surface);
          border-radius: 10px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 4px;
        }
        .nav-toggle span {
          width: 18px;
          height: 2px;
          background: var(--text);
          border-radius: 2px;
        }
        @media (max-width: 960px) {
          .nav-cta { display: none; }
          .nav-toggle { display: flex; }
          .nav-links {
            display: none;
            position: absolute;
            top: var(--nav-h);
            left: 0;
            right: 0;
            flex-direction: column;
            gap: 0;
            padding: 12px 24px 20px;
            background: #060911;
            border-bottom: 1px solid var(--border-soft);
            margin: 0;
          }
          .nav-links.open { display: flex; }
          .nav-links a:not(.btn) { padding: 14px 0; font-size: 15px; border-bottom: 1px solid var(--border-soft); }
          .nav-cta-mobile { display: inline-flex; margin-top: 16px; }
        }
      `}</style>
    </header>
  )
}
