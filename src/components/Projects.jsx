import ProjectCard from './ProjectCard.jsx'

const PROJECTS = [
  {
    hash: 'f3a91c2',
    title: 'Personal Portfolio Website',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    bullets: [
      'Live, publicly accessible portfolio with verified responsiveness across mobile, tablet, and desktop, tested against Chrome DevTools breakpoints.',
      'CSS flexbox grid and media queries for cross-device consistency, built through Git from first commit to deployment.',
    ],
    link: 'https://github.com/Dev-Sihle-Mahlangu/My-Portfolio',
  },
  {
    hash: '7b02e88',
    title: 'SkyFlow — Airline Management System',
    tech: ['Web App'],
    bullets: [],
    link: 'https://github.com/Dev-Sihle-Mahlangu/SkyFlow-Airline-Management-System',
  },
  {
    hash: 'a4f21c9',
    title: 'Task Manager Web Application',
    tech: ['JavaScript', 'Node.js', 'SQL', 'REST API', 'Agile'],
    bullets: [
      'Full CRUD functionality via a REST API, designing a relational SQL schema and connecting a JavaScript frontend to a Node.js backend.',
      'Agile-inspired sprint cycles — weekly features tracked in GitHub Issues, plan → build → review each increment.',
    ],
    link: null,
  },
  {
    hash: '2c88a01',
    title: 'Interactive Quiz Application',
    tech: ['Python', 'Git'],
    bullets: [
      'Eliminated unhandled exceptions across all user inputs with try/except validation and input sanitisation, verified end-to-end.',
      'Randomised question and answer order each session for replayability, with every iteration tracked in Git.',
    ],
    link: 'https://github.com/Dev-Sihle-Mahlangu/Quiz-game',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <p className="eyebrow">Projects.jsx</p>
        <h2 className="section-title">
          git log <span className="path">--oneline --graph</span>
        </h2>

        <div className="commit-graph">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.hash} {...p} isLast={i === PROJECTS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
