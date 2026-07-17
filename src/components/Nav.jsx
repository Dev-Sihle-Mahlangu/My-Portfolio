const TABS = [
  { id: 'about', label: 'About.md' },
  { id: 'projects', label: 'Projects.jsx' },
  { id: 'skills', label: 'Skills.json' },
  { id: 'contact', label: 'Contact.sh' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner wrap">
        <a href="#top" className="nav-brand mono">
          <span className="dot" /> sihle-mahlangu
        </a>
        <nav className="nav-tabs">
          {TABS.map((t) => (
            <a key={t.id} href={`#${t.id}`} className="nav-tab mono">
              {t.label}
            </a>
          ))}
        </nav>
      </div>

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(13, 17, 23, 0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--border-soft);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 56px;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
        }
        .nav-brand .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--green);
        }
        .nav-tabs {
          display: flex;
          gap: 2px;
        }
        .nav-tab {
          font-size: 12.5px;
          color: var(--text-dim);
          padding: 8px 12px;
          border-radius: 4px 4px 0 0;
          border-bottom: 2px solid transparent;
          transition: color 0.15s ease, border-color 0.15s ease, background 0.15s ease;
        }
        .nav-tab:hover {
          color: var(--text);
          background: var(--surface-2);
          border-color: var(--amber);
        }
        @media (max-width: 640px) {
          .nav-tab { padding: 8px 8px; font-size: 11px; }
          .nav-brand { font-size: 12px; }
        }
      `}</style>
    </header>
  )
}
