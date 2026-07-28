const LINKS = [
  {
    label: 'Email',
    value: 'devotionmahlangu@gmail.com',
    href: 'mailto:devotionmahlangu@gmail.com',
    icon: 'M4 4h16v16H4V4zM4 6l8 7 8-7',
  },
  {
    label: 'Phone',
    value: '071 811 2141',
    href: 'tel:+27718112141',
    icon: 'M6 3h4l2 5-2.5 1.5a11 11 0 005 5L16 12l5 2v4a2 2 0 01-2 2A16 16 0 014 5a2 2 0 012-2z',
  },
  {
    label: 'GitHub',
    value: 'Dev-Sihle-Mahlangu',
    href: 'https://github.com/Dev-Sihle-Mahlangu',
    icon: 'M12 2a10 10 0 00-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 015 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z',
  },
  {
    label: 'LinkedIn',
    value: 'sihle-mahlangu',
    href: 'https://www.linkedin.com/in/sihle-mahlangu-8224832a1/',
    icon: 'M4 4h16v16H4V4zm4 4v8m0-11v.01M12 12v4m0-4a2.5 2.5 0 015 0v4',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <p className="eyebrow">Reach Out</p>
        <h2 className="section-title">Let's build something</h2>
        <p className="section-sub">
          Open to internship and graduate opportunities in Johannesburg or remote.
          The fastest way to reach me is email.
        </p>

        <div className="contact-grid">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="ccard card"
            >
              <span className="ccard-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={l.icon} />
                </svg>
              </span>
              <span>
                <span className="ccard-label">{l.label}</span>
                <span className="ccard-value">{l.value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>© {new Date().getFullYear()} Sihle Mahlangu</span>
          <span>Built with React + Vite</span>
        </div>
      </footer>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .ccard {
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: transform 0.15s ease, border-color 0.15s ease;
        }
        .ccard:hover { transform: translateY(-3px); border-color: var(--blue-soft); }
        .ccard-icon {
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          border-radius: 9px;
          background: var(--surface-2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--cyan);
        }
        .ccard-label {
          display: block;
          font-size: 12px;
          color: var(--text-faint);
          margin-bottom: 3px;
        }
        .ccard-value {
          display: block;
          font-size: 13.5px;
          font-weight: 600;
          word-break: break-word;
        }
        .footer {
          border-top: 1px solid var(--border-soft);
          padding: 26px 0;
          margin-top: 64px;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: var(--text-faint);
        }
        @media (max-width: 780px) {
          .contact-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .contact-grid { grid-template-columns: 1fr; }
          .footer-inner { flex-direction: column; gap: 8px; text-align: center; }
        }
      `}</style>
    </section>
  )
}
