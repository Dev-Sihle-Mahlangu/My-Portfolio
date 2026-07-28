export default function AboutDetail() {
  return (
    <section id="about-detail">
      <div className="wrap about-wrap">
        <div className="avatar" aria-hidden="true">
          <span>SM</span>
        </div>

        <p className="eyebrow">Get To Know Me</p>
        <h2 className="section-title">About Sihle</h2>

        <div className="about-body">
          <p>
            I'm a final-year IT student at Richfield Graduate Institute of Technology, specialising in software development, and I enjoy building practical applications that strengthen my problem-solving and programming skills. My projects include an Airport Management System, an online booking system, an interactive quiz game, and this portfolio, each giving me hands-on experience with software design, development, testing, and version control using Git from the very first commit.

          </p>
          <p>
           Outside my coursework, I continue building software projects to expand my skills and explore new technologies. From developing desktop and web applications to refining this portfolio, I enjoy turning ideas into practical solutions while continuously improving my coding, debugging, and problem-solving abilities. Every project is an opportunity to learn something new and become a better software developer.
 
          </p>
          <p>
            I'm looking for a Work Integrated Learning placement, a software development internship, or a junior software developer role where I can apply my skills, gain hands-on industry experience, and continue growing as a developer. I'm eager to contribute to real-world projects, collaborate with experienced teams, and keep learning through practical software development.

          </p>
        </div>

        <div className="about-close">
          <p className="about-thanks">Thanks for reading this far.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>

      <style>{`
        .about-wrap { max-width: 720px; text-align: center; }
        .avatar {
          width: 84px;
          height: 84px;
          margin: 0 auto 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--blue), #1c2f8f);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 26px;
          box-shadow: 0 12px 30px -10px rgba(63,107,255,0.6);
        }
        .about-body {
          text-align: left;
          color: var(--text-dim);
          font-size: 15.5px;
          line-height: 1.8;
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 48px;
        }
        .about-close {
          text-align: center;
          padding-top: 32px;
          border-top: 1px solid var(--border-soft);
        }
        .about-thanks {
          font-family: var(--font-display);
          font-size: 18px;
          color: var(--text);
          margin-bottom: 20px;
        }
      `}</style>
    </section>
  )
}
