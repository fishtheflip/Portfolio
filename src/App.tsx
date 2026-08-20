type Project = {
  title: string;
  team: string;
  sector: string;
  accent: string;
  technologies: string[];
};

type Experience = {
  name: string;
  role: string;
  footnote: string;
};

type Link = {
  name: string;
  url: string;
  external?: boolean;
  download?: boolean;
};

const experiences: Experience[] = [
  { name: 'Tele2', role: 'Telecom Services', footnote: '3' },
  { name: 'Kaspi.kz', role: 'Banking Product', footnote: '3' },
  { name: 'Eco City Bank', role: 'Banking Services', footnote: '1' },
  { name: 'Uchet.kz', role: 'Business Services', footnote: '1' },
  { name: 'Vite Academy', role: 'EdTech', footnote: '1' },
];

const links: Link[] = [
  { name: 'Telegram', url: 'https://t.me/fishrockk', external: true },
  { name: 'Download CV', url: `${import.meta.env.BASE_URL}andrey_parkhomenko_fullstack.pdf`, download: true },
];

const technologies = [
  'JavaScript',
  'React',
  'Vue',
  'Angular',
  'Node.js',
  'Java',
  'Golang',
  'PostgreSQL',
  'HTML/CSS',
  'TypeScript',
  'Redux',
  'Zustand',
  'Next.js',
  'React Native',
  'Svelte',
  'NestJS',
  'MongoDB',
  'MySQL',
  'Firebase',
  'GraphQL',
  'Apollo',
  'Vite',
  'Docker',
  'CI/CD',
  'Git',
  'Figma',
  'AI-assisted development',
];

const projects: Project[] = [
  {
    title: 'Support Operation Dashboard',
    team: 'Tele2',
    sector: 'Telecom',
    accent: '#e9ff70',
    technologies: ['React', 'TypeScript', 'Microservices', 'Go'],
  },
  {
    title: 'Counterparty Verification Tool',
    team: 'Uchet.kz',
    sector: 'B2B Services',
    accent: '#8bd3ff',
    technologies: ['Vue', 'Nuxt', 'Node.js'],
  },
  {
    title: 'Education Platform',
    team: 'Vite Academy',
    sector: 'EdTech',
    accent: '#ffb3c7',
    technologies: ['React Native', 'Node.js'],
  },
  {
    title: 'QR-Based Promotion Flow',
    team: 'Altel',
    sector: 'Telecom',
    accent: '#a7f3d0',
    technologies: ['React', 'Next.js'],
  },
  {
    title: 'Map-Based CRM System',
    team: 'Kaspi.kz',
    sector: 'Fintech',
    accent: '#ffd166',
    technologies: ['Vue', 'Node.js'],
  },
  {
    title: 'Merchant Dashboard',
    team: 'Eco City Bank',
    sector: 'Banking',
    accent: '#c4b5fd',
    technologies: ['React', 'Angular', 'Node.js'],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const visualTone = ['short', 'tall', 'medium', 'short', 'medium', 'tall'][index % 6];

  return (
    <article className={`project-card ${visualTone}`} style={{ '--accent': project.accent } as React.CSSProperties}>
      <div className="project-card-inner">
        <div className="project-visual" aria-hidden="true">
          <div className="visual-meta">
            <span>{project.sector}</span>
          </div>
          <div className={`architecture-map map-${(index % 3) + 1}`}>
            <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
            <i className="node node-a" />
            <i className="node node-b" />
            <i className="node node-c" />
            <i className="node node-d" />
            <i className="connector connector-a" />
            <i className="connector connector-b" />
            <i className="connector connector-c" />
          </div>
          <div className="project-stack">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
        <div className="project-copy">
          <div>
            <h2>{project.team}</h2>
          </div>
          <p>{project.title}</p>
        </div>
      </div>
    </article>
  );
}

function App() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <span className="brand">
          Andrei Parkhomenko
        </span>
        <p>Senior Software Developer / Solution Architect</p>
        <p>Almaty, Kazakhstan</p>
      </header>

      <section className="intro" aria-labelledby="about-title">
        <div className="section-label" id="about-title">
          About
        </div>
        <div className="intro-content">
          <div className="intro-copy">
            <p>
              I am an engineer focused on building interfaces, services, and mobile applications.
            </p>
            <p>
              Currently I work at Tele2 and continue growing toward solution architecture.
            </p>
          </div>

          <div className="tech-block" aria-label="Technologies">
            <div className="section-label">Technologies</div>
            <ul>
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="link-block" aria-label="Experience and links">
        <div className="list-column">
          <div className="section-label">Teams</div>
          <ul>
            {experiences.map((experience) => (
              <li key={experience.name}>
                <div className="list-row">
                  <span>{experience.name}</span>
                  <small>{experience.role}</small>
                  <sup>{experience.footnote}</sup>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="list-column">
          <div className="section-label">Links</div>
          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  download={link.download || undefined}
                >
                  <span>{link.name}</span>
                  <small>Open</small>
                  <sup>↗</sup>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="project-grid" aria-label="Selected work">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </section>

      <footer className="site-footer" id="contact">
        <div>
          <p>2026</p>
        </div>
        <p className="footer-message">Let&apos;s build something together.</p>
      </footer>
    </main>
  );
}

export default App;
