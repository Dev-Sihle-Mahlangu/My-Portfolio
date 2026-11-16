import ProjectCard from './ProjectCard.jsx'
import { GITHUB, LIVE_URL } from '../data/site.js'

const PROJECTS = [
  {
    category: 'Full-Stack',
    status: 'In development',
    title: 'QueueSense',
    description:
      'A full-stack virtual queueing system I am building to practise end-to-end development: an API, a database and a user-facing interface working together.',
    highlights: [
      'ASP.NET Core backend paired with a React and Vite frontend.',
      'Relational data model stored in SQL Server.',
    ],
    tech: ['C#', 'ASP.NET Core', 'React', 'Vite', 'SQL Server'],
    links: null,
    note: 'In development, not public yet',
  },
  {
    category: 'Desktop / Database',
    title: 'SkyFlow: Airline Management System',
    description:
      'A console-based airline and airport management application that supports booking-management workflows on top of a relational database.',
    highlights: [
      'Object-oriented C# application logic for airline and booking workflows.',
      'Relational SQL Server design with structured tables and seed data.',
      'Validation that helps prevent duplicate bookings.',
    ],
    tech: ['C#', '.NET', 'SQL Server', 'OOP'],
    links: [{ label: 'GitHub', href: `${GITHUB}/SkyFlow-Airline-Management-System`, primary: true }],
  },
  {
    category: 'Team Project',
    title: 'SafeRouteAI',
    description:
      'A collaborative route-safety application. I contributed to the database layer of its .NET and SQL Server architecture.',
    highlights: [
      'Worked on relational entities, schema changes and Entity Framework Core migrations, including adding humidity data to weather observations.',
      'Supported integration between the data layer and a Python risk-prediction service.',
    ],
    tech: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'Python'],
    links: null,
    note: 'Collaborative project, no public link',
  },
  {
    category: 'Android',
    status: 'Academic project, 2026',
    title: 'Smart Pantry Manager',
    description:
      'A native Android application for managing pantry items, built through phased development with version control.',
    highlights: [
      'Local data persistence with SQLite using SQLiteOpenHelper.',
      'Tested against a documented manual test log and delivered with a technical report and demo video.',
    ],
    tech: ['Java', 'Android Studio', 'SQLite', 'Git'],
    links: null,
    note: 'Academic project, no public link',
  },
  {
    category: 'Web',
    title: 'Personal Portfolio Website',
    description:
      'This site: a responsive React portfolio, built with reusable components and deployed on Vercel.',
    highlights: [
      'Component-based interface that presents my skills, projects and academic record.',
      'Source managed with Git and GitHub, deployed through Vercel.',
    ],
    tech: ['React', 'Vite', 'JavaScript', 'CSS', 'Vercel'],
    links: [
      { label: 'Live Site', href: LIVE_URL, primary: true },
      { label: 'GitHub', href: `${GITHUB}/My-Portfolio` },
    ],
  },
  {
    category: 'Web',
    title: 'Interactive Quiz Game',
    description:
      'A browser-based quiz that handles questions, answer selection and quiz progression, with validation on user interactions.',
    highlights: [
      'Programming logic and user-input handling written in JavaScript.',
      'Maintained with Git and GitHub.',
    ],
    tech: ['JavaScript', 'HTML', 'CSS', 'Git'],
    links: [{ label: 'GitHub', href: `${GITHUB}/Quiz-game`, primary: true }],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <p className="eyebrow">Featured Projects</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">
          Academic, team and independent work across desktop, web, mobile and databases.
          Where a repository is public, it is linked.
        </p>

        <div className="proj-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        <p className="proj-more">
          More of my code is on <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>.
        </p>
      </div>

      <style>{`
        .proj-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; }
        .proj-more { text-align: center; margin-top: 36px; font-size: 14px; color: var(--text-dim); }
        .proj-more a { color: var(--cyan); font-weight: 600; }
        .proj-more a:hover { text-decoration: underline; }
        @media (max-width: 780px) { .proj-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
