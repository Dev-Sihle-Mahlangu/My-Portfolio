import portraitJpg from '../assets/sihle-portrait.jpg'
import portraitWebp from '../assets/sihle-portrait.webp'
import { CV_URL, CV_FILENAME } from '../data/site.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-wrap">
        <div className="hero-copy">
          <p className="eyebrow left">Open to junior developer and WIL roles</p>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Sihle</span>,<br />
            Software Developer<br />&amp; final-year IT student.
          </h1>
          <p className="hero-text">
            I build desktop, web and Android applications, with C#, object-oriented
            design and relational databases at the core of my work. I'm finishing my
            BSc in Information Technology at Richfield in Johannesburg and looking
            for a junior developer, graduate or Work Integrated Learning placement.
          </p>
          <div className="hero-actions">
            <a href={CV_URL} download={CV_FILENAME} className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
              Download CV
            </a>
            <a href="#projects" className="btn btn-ghost">View Projects</a>
          </div>
          <p className="hero-meta mono">Johannesburg, South Africa</p>
        </div>

        <figure className="hero-photo">
          <div className="photo-frame">
            <picture>
              <source srcSet={portraitWebp} type="image/webp" />
              <img
                src={portraitJpg}
                alt="Portrait of Sihle Mahlangu in a navy blazer and white shirt"
                width="720"
                height="900"
                fetchpriority="high"
              />
            </picture>
          </div>
          <span className="chip chip-top mono"><i aria-hidden="true" /> Open to work</span>
          <span className="chip chip-bottom mono">C# &middot; .NET &middot; SQL Server</span>
        </figure>
      </div>

      <style>{`
        .hero { position: relative; padding-top: 80px; padding-bottom: 88px; overflow: hidden; }
        .hero-glow {
          position: absolute;
          top: -200px;
          right: -180px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(63,107,255,0.26), transparent 70%);
          pointer-events: none;
        }
        .hero-wrap {
          position: relative;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
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
          max-width: 500px;
          margin-bottom: 32px;
        }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
        .hero-meta { margin-top: 28px; font-size: 12.5px; color: var(--text-faint); }

        .hero-photo {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 360px;
}

.photo-frame {
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: var(--surface);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.25);
}

.photo-frame::before {
  display: none;
}

.photo-frame picture {
  display: block;
}

.photo-frame img {
  display: block;
  width: 100%;
  height: 440px;
  object-fit: cover;
  object-position: center 20%;
  border-radius: 14px;
}
        .chip {
          position: absolute;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(11, 16, 36, 0.92);
          border: 1px solid var(--border);
          backdrop-filter: blur(6px);
          color: var(--text);
        }
        .chip i { width: 8px; height: 8px; border-radius: 50%; background: var(--cyan); }
        .chip-top { top: 18px; right: -10px; }
        .chip-bottom { bottom: 22px; left: -14px; color: var(--blue-soft); }

        @media (max-width: 880px) {
          .hero { padding-top: 48px; }
          .hero-wrap { grid-template-columns: 1fr; gap: 44px; }
          .hero-photo { order: -1; max-width: 280px; }
          .chip-top { right: -6px; }
          .chip-bottom { left: -6px; }
        }
      `}</style>
    </section>
  )
}
