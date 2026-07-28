const LINKS = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner wrap">
        <a href="#top" className="brand">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
            <rect width="30" height="30" rx="8" fill="url(#g)" />
            <path d="M9 20L15 8L21 20" stroke="#eef1fb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="15" cy="15" r="1.6" fill="#45e0c8" />
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3f6bff" />
                <stop offset="1" stopColor="#1c2f8f" />
              </linearGradient>
            </defs>
          </svg>
          <span className="brand-name">Sihle Mahlangu</span>
        </a>

        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`}>{l.label}</a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary nav-cta">Contact Me</a>
      </div>

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 30;
          background: rgba(6, 9, 17, 0.82);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-soft);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
          gap: 24px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .brand-name {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 15px;
        }
        .nav-links {
          display: flex;
          gap: 28px;
          margin: 0 auto;
        }
        .nav-links a {
          font-size: 14px;
          color: var(--text-dim);
          transition: color 0.15s ease;
        }
        .nav-links a:hover { color: var(--text); }
        .nav-cta { padding: 9px 20px; font-size: 13.5px; flex-shrink: 0; }
        @media (max-width: 720px) {
          .nav-links { display: none; }
          .brand-name { font-size: 13px; }
        }
      `}</style>
    </header>
  )
}
