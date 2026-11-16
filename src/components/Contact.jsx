import Logo from './Logo.jsx'
import { CV_URL, CV_FILENAME, EMAIL, PHONE_DISPLAY, PHONE_HREF, GITHUB, LINKEDIN } from '../data/site.js'

const LINKS = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, icon: 'M4 4h16v16H4V4zM4 6l8 7 8-7' },
  { label: 'Phone', value: PHONE_DISPLAY, href: PHONE_HREF, icon: 'M6 3h4l2 5-2.5 1.5a11 11 0 005 5L16 12l5 2v4a2 2 0 01-2 2A16 16 0 014 5a2 2 0 012-2z' },
  {
    label: 'GitHub',
    value: 'Dev-Sihle-Mahlangu',
    href: GITHUB,
    icon: 'M12 2a10 10 0 00-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 015 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z',
  },
  { label: 'LinkedIn', value: 'sihle-mahlangu', href: LINKEDIN, icon: 'M4 4h16v16H4V4zm4 4v8m0-11v.01M12 12v4m0-4a2.5 2.5 0 015 0v4' },
]

const FOOT_NAV = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#transcript', label: 'Transcript' },
  { href: '#experience', label: 'Experience' },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <p className="eyebrow">Contact</p>
        <h2 className="section-title">Let's build something</h2>
        <p className="section-sub">
          I'm open to junior developer, graduate developer, internship and Work Integrated
          Learning opportunities in Johannesburg or remote. Email is the fastest way to reach me.
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={l.icon} />
                </svg>
              </span>
              <span className="ccard-text">
                <span className="ccard-label">{l.label}</span>
                <span className="ccard-value">{l.value}</span>
              </span>
            </a>
          ))}
        </div>

        <div className="contact-cv">
          <a href={CV_URL} download={CV_FILENAME} className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 20h16" />
            </svg>
            Download CV
          </a>
        </div>
      </div>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div className="footer-brand">
            <Logo size={30} />
            <span>Sihle Mahlangu</span>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            {FOOT_NAV.map((n) => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
          </nav>
          <div className="footer-meta mono">
            <span>&copy; {new Date().getFullYear()} Sihle Mahlangu</span>
            <span>Built with React + Vite</span>
          </div>
        </div>
      </footer>

      <style>{`
        .contact-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .ccard { padding: 20px; display: flex; align-items: center; gap: 14px; transition: transform 0.15s ease, border-color 0.15s ease; min-width: 0; }
        .ccard:hover { transform: translateY(-3px); border-color: var(--blue-soft); }
        .ccard-icon { width: 38px; height: 38px; flex-shrink: 0; border-radius: 9px; background: var(--surface-2); display: flex; align-items: center; justify-content: center; color: var(--cyan); }
        .ccard-text { min-width: 0; }
        .ccard-label { display: block; font-size: 12px; color: var(--text-faint); margin-bottom: 3px; }
        .ccard-value { display: block; font-size: 13.5px; font-weight: 600; overflow-wrap: anywhere; }
        .contact-cv { margin-top: 36px; text-align: center; }

        .footer { border-top: 1px solid var(--border-soft); padding: 32px 0; margin-top: 72px; }
        .footer-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
        .footer-brand { display: flex; align-items: center; gap: 10px; font-family: var(--font-display); font-weight: 600; font-size: 14.5px; }
        .footer-nav { display: flex; gap: 20px; flex-wrap: wrap; }
        .footer-nav a { font-size: 13.5px; color: var(--text-dim); }
        .footer-nav a:hover { color: var(--text); }
        .footer-meta { display: flex; flex-direction: column; gap: 2px; font-size: 12px; color: var(--text-faint); text-align: right; }

        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 520px) {
          .contact-grid { grid-template-columns: 1fr; }
          .footer-inner { flex-direction: column; align-items: flex-start; }
          .footer-meta { text-align: left; }
        }
      `}</style>
    </section>
  )
}
