type Project = {
  title: string;
  team: string;
  accent: string;
  metrics: string[];
};

type Experience = {
  name: string;
  role: string;
  footnote: string;
  url: string;
};

type Link = {
  name: string;
  url: string;
  external?: boolean;
};

const experiences: Experience[] = [
  { name: 'Tele2', role: 'Telecom Services', footnote: '3', url: 'https://tele2.kz/new' },
  { name: 'Kaspi.kz', role: 'Banking Product', footnote: '3', url: 'https://kaspi.kz/' },
  { name: 'Eco City Bank', role: 'Banking Services', footnote: '1', url: 'https://www.bcc.kz/en/' },
  { name: 'Uchet.kz', role: 'Business Services', footnote: '1', url: 'https://uchet.kz/' },
  { name: 'Vite Academy', role: 'EdTech', footnote: '1', url: 'https://www.vite.dance/landing' },
];

const links: Link[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/andrei-parkhomenko/', external: true },
  { name: 'Telegram', url: 'https://t.me/fishrockk', external: true },
  { name: 'GitHub', url: 'https://github.com/fishtheflip', external: true },
  { name: 'Download CV', url: '#contact' },
];

const technologies = [
  'React',
  'Vue',
  'Angular',
  'Node.js',
  'HTML/CSS',
  'JavaScript',
  'Java',
  'Go',
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
    accent: '#e9ff70',
    metrics: ['Calls', 'Cases', 'CRM'],
  },
  {
    title: 'Counterparty Verification Tool',
    team: 'Uchet.kz',
    accent: '#8bd3ff',
    metrics: ['Signals', 'Briefs', 'Risks'],
  },
  {
    title: 'Education Platform',
    team: 'Vite Academy',
    accent: '#ffb3c7',
    metrics: ['Review', 'Notes', 'Handoff'],
  },
  {
    title: 'QR-Based Promotion Flow',
    team: 'Altel',
    accent: '#a7f3d0',
    metrics: ['Runs', 'Memory', 'Audit'],
  },
  {
    title: 'Map-Based CRM System',
    team: 'Kaspi.kz',
    accent: '#ffd166',
    metrics: ['Drops', 'Stock', 'CRM'],
  },
  {
    title: 'Merchant Dashboard',
    team: 'Eco City Bank',
    accent: '#c4b5fd',
    metrics: ['Mood', 'Sleep', 'Care'],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const visualTone = ['short', 'tall', 'medium', 'short', 'medium', 'tall'][index % 6];

  return (
    <article className={`project-card ${visualTone}`} style={{ '--accent': project.accent } as React.CSSProperties}>
      <div className="project-card-inner">
        <div className="project-visual" aria-hidden="true">
          <div className="visual-topline">
            <span />
            <span />
            <span />
          </div>
          <div className="visual-grid">
            <div className="visual-pane primary">
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="visual-pane stack">
              {project.metrics.map((metric) => (
                <i key={metric}>{metric}</i>
              ))}
            </div>
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
        <a href="/" className="brand" aria-label="Home">
          Andrei Parkhomenko
        </a>
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
                <a href={experience.url} target="_blank" rel="noreferrer">
                  <span>{experience.name}</span>
                  <small>{experience.role}</small>
                  <sup>{experience.footnote}</sup>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="list-column">
          <div className="section-label">Links</div>
          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.url} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>
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
        <a href="mailto:hello@example.com">Let&apos;s build something together.</a>
      </footer>
    </main>
  );
}

export default App;
