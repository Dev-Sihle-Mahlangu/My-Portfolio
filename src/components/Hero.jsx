export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-wrap">
        <div className="hero-copy">
          <p className="eyebrow left">Open to Internships · Johannesburg, ZA</p>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Sihle</span>,<br />
            final-year IT student<br />&amp; software developer.
          </h1>
          <p className="hero-text">
            I build things end-to-end: relational schemas, REST APIs, and the
            interfaces on top of them, with every project run through Git from
            first commit to deploy. Currently finishing my BSc in Information
            Technology (Software Development) at Richfield, and looking for a
            team to learn from as an intern.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-ghost">Get in Touch</a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <svg viewBox="0 0 420 380" width="100%" height="100%">
            <defs>
              <linearGradient id="panelGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#161d3a" />
                <stop offset="1" stopColor="#0d1226" />
              </linearGradient>
              <linearGradient id="barGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#3f6bff" />
                <stop offset="1" stopColor="#45e0c8" />
              </linearGradient>
            </defs>

            <rect x="30" y="30" width="360" height="260" rx="16" fill="url(#panelGrad)" stroke="#232c4d" />
            <rect x="30" y="30" width="360" height="34" rx="16" fill="#161d3a" stroke="#232c4d" />
            <circle cx="52" cy="47" r="4.5" fill="#f85149" opacity="0.8" />
            <circle cx="67" cy="47" r="4.5" fill="#d29922" opacity="0.8" />
            <circle cx="82" cy="47" r="4.5" fill="#45e0c8" opacity="0.8" />

            <rect x="52" y="86" width="150" height="14" rx="4" fill="#3f6bff" opacity="0.85" />
            <rect x="52" y="110" width="230" height="9" rx="3" fill="#2a3358" />
            <rect x="52" y="126" width="180" height="9" rx="3" fill="#2a3358" />

            <rect x="52" y="156" width="98" height="72" rx="10" fill="#0d1226" stroke="#232c4d" />
            <rect x="64" y="168" width="74" height="8" rx="3" fill="url(#barGrad)" />
            <rect x="64" y="184" width="50" height="6" rx="3" fill="#2a3358" />
            <rect x="64" y="196" width="60" height="6" rx="3" fill="#2a3358" />

            <rect x="161" y="156" width="98" height="72" rx="10" fill="#0d1226" stroke="#232c4d" />
            <rect x="173" y="168" width="74" height="8" rx="3" fill="#45e0c8" />
            <rect x="173" y="184" width="50" height="6" rx="3" fill="#2a3358" />
            <rect x="173" y="196" width="60" height="6" rx="3" fill="#2a3358" />

            <rect x="270" y="156" width="98" height="72" rx="10" fill="#0d1226" stroke="#232c4d" />
            <rect x="282" y="168" width="74" height="8" rx="3" fill="#93aaff" />
            <rect x="282" y="184" width="50" height="6" rx="3" fill="#2a3358" />
            <rect x="282" y="196" width="60" height="6" rx="3" fill="#2a3358" />

            <rect x="52" y="248" width="316" height="20" rx="6" fill="#0d1226" stroke="#232c4d" />
            <rect x="60" y="254" width="8" height="8" rx="2" fill="#45e0c8" />
            <rect x="76" y="255" width="120" height="6" rx="3" fill="#2a3358" />

            <g transform="translate(258,268)">
              <rect width="132" height="66" rx="12" fill="#10162c" stroke="#3f6bff" strokeOpacity="0.5" />
              <text x="14" y="26" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#45e0c8">$ git push</text>
              <text x="14" y="44" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#93aaff">main → origin</text>
              <circle cx="112" cy="18" r="4" fill="#45e0c8" />
            </g>

            <g transform="translate(14,268)">
              <rect width="150" height="64" rx="12" fill="#10162c" stroke="#232c4d" />
              <path d="M18 40 L18 16 L38 16" stroke="#3f6bff" strokeWidth="2" fill="none" strokeLinecap="round" />
              <circle cx="38" cy="16" r="3.5" fill="#3f6bff" />
              <circle cx="18" cy="40" r="3.5" fill="#93aaff" />
              <circle cx="18" cy="28" r="3.5" fill="#93aaff" />
              <text x="52" y="30" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#eef1fb">feature</text>
              <text x="52" y="46" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#5c6690">merged</text>
            </g>
          </svg>
        </div>
      </div>

      <style>{`
        .hero { position: relative; padding-top: 96px; overflow: hidden; }
        .hero-glow {
          position: absolute;
          top: -180px;
          right: -160px;
          width: 560px;
          height: 560px;
          background: radial-gradient(circle, rgba(63,107,255,0.28), transparent 70%);
          filter: blur(10px);
          pointer-events: none;
        }
        .hero-wrap {
          position: relative;
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .hero-title {
          font-size: clamp(32px, 4.4vw, 46px);
          line-height: 1.14;
          margin-bottom: 22px;
        }
        .hero-text {
          color: var(--text-dim);
          font-size: 16px;
          line-height: 1.75;
          max-width: 480px;
          margin-bottom: 32px;
        }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
        .hero-art { width: 100%; }
        @media (max-width: 880px) {
          .hero-wrap { grid-template-columns: 1fr; gap: 40px; }
          .hero-art { max-width: 420px; margin: 0 auto; }
        }
      `}</style>
    </section>
  )
}