const LINKS = [
  { flag: '--email', label: 'devotionmahlangu@gmail.com', href: 'mailto:devotionmahlangu@gmail.com' },
  { flag: '--phone', label: '071 811 2141', href: 'tel:+27718112141' },
  { flag: '--github', label: 'github.com/Dev-Sihle-Mahlangu', href: 'https://github.com/Dev-Sihle-Mahlangu' },
  { flag: '--linkedin', label: 'linkedin.com/in/sihle-mahlangu', href: 'https://www.linkedin.com/in/sihle-mahlangu-8224832a1/' },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <p className="eyebrow">Contact.sh</p>
        <h2 className="section-title">
          ./reach-out <span className="path">--internship</span>
        </h2>

        <div className="contact-term mono">
          <div className="contact-line">
            <span className="prompt">$</span> ./contact.sh \
          </div>
          {LINKS.map((l) => (
            <a key={l.flag} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-flag">
              <span className="flag-key">{l.flag}</span> <span className="flag-val">{l.label}</span>
            </a>
          ))}
        </div>

        <p className="contact-note">
          Based in Johannesburg, Gauteng — open to remote and on-site internships.
        </p>
      </div>

      <footer className="footer mono">
        <span className="prompt">$</span> exit 0 &nbsp;·&nbsp; built with React + Vite
      </footer>

      <style>{`
        .contact { padding-bottom: 60px; border-bottom: none; }
        .contact-term {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 22px 24px;
          font-size: 14px;
          max-width: 520px;
        }
        .contact-line { color: var(--text-dim); margin-bottom: 10px; }
        .contact-flag {
          display: block;
          padding: 8px 0 8px 20px;
          color: var(--text-dim);
          border-radius: 4px;
          transition: color 0.15s ease, background 0.15s ease;
        }
        .contact-flag:hover { color: var(--text); background: var(--surface-2); }
        .flag-key { color: var(--amber); }
        .flag-val { color: var(--text); }
        .contact-note {
          margin-top: 22px;
          color: var(--text-faint);
          font-size: 13.5px;
        }
        .footer {
          text-align: center;
          color: var(--text-faint);
          font-size: 12.5px;
          padding: 28px 0 8px;
        }
        .footer .prompt { color: var(--green); }
      `}</style>
    </section>
  )
}
