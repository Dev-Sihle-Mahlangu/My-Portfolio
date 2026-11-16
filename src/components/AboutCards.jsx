const CARDS = [
  {
    icon: <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 3.6-7 8-7s8 3 8 7" />,
    title: 'About Me',
    desc: 'My background, what I study and the kind of work I am looking for.',
    href: '#about',
  },
  {
    icon: <path d="M8 6l-5 6 5 6M16 6l5 6-5 6" />,
    title: 'Projects',
    desc: 'Software I have designed, built and tested, with code and live links.',
    href: '#projects',
  },
  {
    icon: <path d="M3 9l9-5 9 5-9 5-9-5zM3 9v6l9 5 9-5V9" />,
    title: 'Education',
    desc: 'My degree, coursework and the latest official academic record.',
    href: '#education',
  },
  {
    icon: <path d="M4 4h16v14H8l-4 4V4z" />,
    title: 'Get in Touch',
    desc: 'Email, phone, GitHub and LinkedIn, plus a download of my CV.',
    href: '#contact',
  },
]

export default function AboutCards() {
  return (
    <section id="explore" className="explore">
      <div className="wrap">
        <p className="eyebrow">Find Out More</p>
        <h2 className="section-title">A quick look around</h2>
        <p className="section-sub">
          Everything on this page in four stops. Jump straight to what you are after.
        </p>

        <div className="cards-grid">
          {CARDS.map((c) => (
            <a key={c.title} href={c.href} className="qcard card">
              <span className="qcard-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {c.icon}
                </svg>
              </span>
              <h3 className="qcard-title">{c.title}</h3>
              <p className="qcard-desc">{c.desc}</p>
              <span className="qcard-link">Learn more &rarr;</span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .explore { padding-top: 24px; }
        .cards-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .qcard { padding: 26px 22px; transition: transform 0.15s ease, border-color 0.15s ease; }
        .qcard:hover { transform: translateY(-4px); border-color: var(--blue-soft); }
        .qcard-icon {
          width: 42px; height: 42px; border-radius: 10px;
          background: linear-gradient(135deg, var(--blue), var(--blue-dim));
          display: flex; align-items: center; justify-content: center;
          color: #fff; margin-bottom: 18px;
        }
        .qcard-title { font-size: 16.5px; margin-bottom: 8px; }
        .qcard-desc { font-size: 13.5px; color: var(--text-dim); line-height: 1.6; margin-bottom: 18px; }
        .qcard-link { font-size: 13px; color: var(--cyan); font-weight: 600; }
        @media (max-width: 880px) { .cards-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 520px) { .cards-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
