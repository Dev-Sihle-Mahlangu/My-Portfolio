import ProjectCard from './ProjectCard.jsx'

const PROJECTS = [
  {
    category: 'Web App',
    title: 'Personal Portfolio Website',
    objective: 'A responsive personal site to showcase projects and skills, built and deployed independently end to end.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Vercel', 'Git'],
    impact: 'Live, publicly accessible site verified across mobile, tablet, and desktop breakpoints using Chrome DevTools.',
    link: 'https://github.com/Dev-Sihle-Mahlangu/My-Portfolio',
  },
  {
    category: 'Web App',
    title: 'SkyFlow: Airline Management System',
    objective: 'A management system for airline booking and operations, built with a relational database backend.',
    tools: ['C#', 'SQL'],
    impact: 'Structured booking and flight data through a normalised relational schema.',
    link: 'https://github.com/Dev-Sihle-Mahlangu/SkyFlow-Airline-Management-System',
  },
  {
    category: 'Full-Stack',
    title: 'Task Manager Web Application',
    objective: 'A CRUD task-tracking app connecting a JavaScript frontend to a Node.js backend over a REST API.',
    tools: ['JavaScript', 'Node.js', 'SQL', 'REST API'],
    impact: 'Development run in Agile-inspired weekly sprints, tracked through GitHub Issues in a plan → build → review loop.',
    link: null,
  },
  {
    category: 'Python',
    title: 'Interactive Quiz Application',
    objective: 'A replayable quiz game with randomised question order and robust input handling.',
    tools: ['Python', 'Git'],
    impact: 'Eliminated unhandled exceptions across all user inputs through try/except validation, verified end-to-end.',
    link: 'https://github.com/Dev-Sihle-Mahlangu/Quiz-game',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <p className="eyebrow">My Work</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">
          A snapshot of what I've built so far, from relational database design
          to full-stack web apps, each one run through Git from first commit to deploy.
        </p>

        <div className="proj-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>

      <style>{`
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }
        @media (max-width: 780px) {
          .proj-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}