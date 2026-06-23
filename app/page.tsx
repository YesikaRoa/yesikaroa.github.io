'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// ── Data ─────────────────────────────────────────────────────────────────────

const techStack = [
  { icon: '{ }', label: 'TypeScript' },
  { icon: '</>', label: 'JavaScript' },
  { icon: '⚛', label: 'React' },
  { icon: '⬡', label: 'Node.js' },
  { icon: '🗄', label: 'PostgreSQL' },
  { icon: '▲', label: 'Next.js' },
  { icon: '☁', label: 'AWS' },
  { icon: '🔴', label: 'Redis' },
  { icon: '🤖', label: 'Claude AI' },
  { icon: '🐳', label: 'Docker' },
]

const projects = [
  {
    id: 1,
    title: 'MediPanel',
    tag: 'Healthcare Management',
    description:
      'Plataforma integral de gestión médica con Node.js, Express y PostgreSQL con caché en Redis Cloud.',
    url: 'https://medipanel.netlify.app',
    emoji: '🏥',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
  },
  {
    id: 2,
    title: 'Libertadores-CS',
    tag: 'Community Management',
    description:
      'Panel administrativo comunitario con flujos de CI/CD en GitHub Actions e integración de Cloudinary.',
    url: 'https://libertadores-cs.netlify.app',
    emoji: '🏘',
    technologies: ['React', 'Express', 'GitHub Actions', 'Cloudinary'],
  },
  {
    id: 3,
    title: 'Kindred Pet Care',
    tag: 'Pet Care Platform',
    description:
      'Aplicación moderna para el cuidado de mascotas con interfaz intuitiva y gestión de servicios.',
    url: 'https://kindredpetcare.netlify.app',
    emoji: '🐾',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Firebase'],
  },
  {
    id: 4,
    title: 'AI-Assisted Workflows',
    tag: 'Future Project',
    description:
      'Sistema de flujos de trabajo asistidos por IA para optimización de procesos de ingeniería.',
    url: '#',
    emoji: '🤖',
    status: 'En Progreso',
    technologies: ['AI/ML', 'TypeScript', 'Claude API'],
  },
]

const skills = {
  Frontend: ['JavaScript (ES6+)', 'TypeScript', 'React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'CoreUI'],
  Backend: ['Node.js', 'Express', 'Prisma ORM', 'Swagger', 'Redis Cloud', 'Cloudinary'],
  Databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
  'Cloud & DevOps': ['AWS (EC2, S3, RDS)', 'GitHub Actions', 'Docker', 'Git'],
  Herramientas: ['Cursor AI', 'Claude', 'v0 by Vercel', 'Jira', 'Confluence'],
}

// ── SVG Icons ────────────────────────────────────────────────────────────────

function IconOrbit() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M20.341 6.484A10 10 0 0 1 10.266 21.85" />
      <path d="M3.659 17.516A10 10 0 0 1 13.74 2.152" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
    </svg>
  )
}

function IconLinkedIn({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function IconGithub({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function IconFileText({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" className={className}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}

function IconMail({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" className={className}>
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  )
}

// ── Animated section wrapper ─────────────────────────────────────────────────

function AnimateIn({ children, delay = 0, className = '' }: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ${delay}s ease, transform 0.6s ${delay}s ease`,
      }}
    >
      {children}
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  const [activeTab, setActiveTab] = useState<'home' | 'projects' | 'about'>('home')

  return (
    <>
      {/* Background warp animation */}
      <div className="bg-warp" aria-hidden="true" />

      <div className="site-shell">
        {/* ── Header ── */}
        <header className="site-header">
          <nav className="site-nav" aria-label="Principal">
            <a className="brand" href="/" onClick={() => setActiveTab('home')}>
              <span className="brand-mark"><IconOrbit /></span>
              <span>Yesika Roa</span>
            </a>
            <div className="nav-links">
              {(['home', 'projects', 'about'] as const).map((tab) => (
                <button
                  key={tab}
                  id={`nav-${tab}`}
                  onClick={() => setActiveTab(tab)}
                  className={`nav-link${activeTab === tab ? ' active' : ''}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  {tab === 'home' ? 'Home' : tab === 'projects' ? 'Projects' : 'About'}
                </button>
              ))}
            </div>
          </nav>
        </header>

        <main className="page-content">

          {/* ── HOME ── */}
          {activeTab === 'home' && (
            <section className="hero" aria-label="Presentación">
              {/* Left: Copy */}
              <div className="hero-copy">
                <p className="eyebrow">Ingeniera de Sistemas &nbsp;||&nbsp; Full Stack Developer</p>
                <h1>
                  Hey, <span className="hero-highlight">Yesika</span> aquí 👋.<br />
                  Convierto conceptos en productos.
                </h1>
                <p>
                  Desarrollo soluciones full stack de concepto a producción, combinando arquitectura robusta,
                  entrega clara y sistemas que permanecen confiables bajo presión real.
                </p>
              </div>

              {/* Right: Card */}
              <aside className="hero-card" aria-label="Tech stack y redes">
                {/* Tech Stack */}
                <div className="stack-block" aria-label="Tech stack">
                  <p className="stack-title">Tech stack</p>
                  <div className="stack-list">
                    {techStack.map(({ icon, label }) => (
                      <span key={label} className="stack-chip">
                        <span className="stack-chip-icon" style={{ fontSize: '12px' }}>{icon}</span>
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social / CV Links */}
                <div className="social-list">
                  <a
                    id="link-linkedin"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                    href="https://linkedin.com/in/yesikaroa"
                  >
                    <div>
                      <strong>LinkedIn</strong>
                      <span>Experiencia, resultados y contexto de liderazgo.</span>
                    </div>
                    <IconLinkedIn size={22} />
                  </a>

                  <a
                    id="link-github"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                    href="https://github.com/YesikaRoa"
                  >
                    <div>
                      <strong>GitHub</strong>
                      <span>Código de producción, arquitectura y experimentos técnicos.</span>
                    </div>
                    <IconGithub size={22} />
                  </a>

                  <a
                    id="link-cv"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link social-link-resume"
                    href="/CV_Yesika_Roa.pdf"
                  >
                    <div>
                      <strong>Curriculum Vitae</strong>
                      <span>Historial de roles, alcance técnico e impacto medible.</span>
                    </div>
                    <IconFileText size={22} className="social-link-icon social-link-icon-resume" />
                  </a>

                  <a
                    id="link-email"
                    className="social-link"
                    href="mailto:yroa1402@gmail.com"
                  >
                    <div>
                      <strong>Email</strong>
                      <span>yroa1402@gmail.com</span>
                    </div>
                    <IconMail size={22} />
                  </a>
                </div>
              </aside>
            </section>
          )}

          {/* ── PROJECTS ── */}
          {activeTab === 'projects' && (
            <section
              id="projects"
              className="projects-section panel"
              aria-label="Proyectos"
            >
              <AnimateIn className="projects-head">
                <p className="eyebrow" style={{ animation: 'none', opacity: 1, transform: 'none' }}>
                  Proyectos
                </p>
                <h2 className="section-title">Trabajo destacado.</h2>
                <p className="section-copy">
                  Sistemas de producción construidos para manejar complejidad y entregar resultados medibles.
                </p>
              </AnimateIn>

              <div className="projects-grid">
                {projects.map((p, i) => (
                  <AnimateIn key={p.id} delay={i * 0.12}>
                    <a
                      id={`project-${p.id}`}
                      target={p.url !== '#' ? '_blank' : undefined}
                      rel={p.url !== '#' ? 'noreferrer' : undefined}
                      className="project-card"
                      href={p.url}
                      style={{ opacity: 1, animation: 'none', transform: 'none' }}
                    >
                      <div className="project-media-wrap">
                        <div
                          className="project-thumb-placeholder"
                          style={{
                            background: `linear-gradient(135deg, #4c1d95 0%, #2e1065 50%, #1e1b4b 100%)`,
                          }}
                        >
                          <span style={{ fontSize: '3rem' }}>{p.emoji}</span>
                          {p.status && (
                            <span style={{
                              position: 'absolute', top: '12px', right: '12px',
                              fontSize: '0.7rem', fontWeight: 700,
                              padding: '4px 10px', borderRadius: '999px',
                              background: 'rgba(138,92,246,0.2)',
                              border: '1px solid rgba(138,92,246,0.4)',
                              color: '#b38aff',
                            }}>
                              {p.status}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="project-copy">
                        <span className="project-tag">{p.tag}</span>
                        <div className="project-title-row">
                          <h3>{p.title}</h3>
                          <span className="project-link-icon" aria-hidden="true">↗</span>
                        </div>
                        <p>{p.description}</p>
                        <div className="tech-chips">
                          {p.technologies.map((t) => (
                            <span key={t} className="tech-chip">{t}</span>
                          ))}
                        </div>
                      </div>
                    </a>
                  </AnimateIn>
                ))}
              </div>
            </section>
          )}

          {/* ── ABOUT ── */}
          {activeTab === 'about' && (
            <section className="about-section panel" aria-label="Sobre mí">
              <AnimateIn>
                <p className="eyebrow" style={{ animation: 'none', opacity: 1, transform: 'none' }}>
                  Sobre mí
                </p>
                <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>
                  Ingeniera y Desarrolladora.
                </h2>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <div className="about-grid">
                  {/* Photo */}
                  <div className="about-photo-wrap">
                    <Image
                      src="/yesika.jpg"
                      alt="Yesika Roa – Full Stack Developer"
                      width={220}
                      height={220}
                      className="about-photo"
                      priority
                    />
                    <p className="about-name">Yesika Roa</p>
                    <p className="about-role">Full Stack Developer</p>
                  </div>

                  {/* Text */}
                  <div className="about-content">
                    <div className="about-block">
                      <h4>Perfil</h4>
                      <p>
                        Ingeniera de Sistemas con más de 2 años desarrollando soluciones tecnológicas de
                        alto impacto. Especializada en JavaScript/TypeScript con experiencia en arquitectura
                        backend robusta con Node.js, PostgreSQL y AWS.
                      </p>
                    </div>
                    <div className="about-block">
                      <h4>Experiencia</h4>
                      <p>
                        Actualmente en Tobal Systems como Ingeniera de Software Full Stack. Anteriormente
                        como Desarrolladora Independiente trabajando en proyectos de gestión médica,
                        administración comunitaria y más.
                      </p>
                    </div>
                    <div className="about-block">
                      <h4>Enfoque</h4>
                      <p>
                        Especializada en resolución de problemas complejos mediante desarrollo colaborativo,
                        metodologías ágiles (SCRUM) e integración estratégica de Inteligencia Artificial.
                      </p>
                    </div>
                    <div className="about-block">
                      <h4>CV</h4>
                      <a
                        id="about-cv-link"
                        href="/CV_Yesika_Roa.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="social-link social-link-resume"
                        style={{ display: 'inline-flex', width: 'fit-content', minWidth: '260px' }}
                      >
                        <div>
                          <strong>Descargar Curriculum Vitae</strong>
                          <span>Ver historial completo de roles y proyectos</span>
                        </div>
                        <IconFileText size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              {/* Skills */}
              <AnimateIn delay={0.2}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                  Habilidades Técnicas
                </h3>
                <div className="skills-grid">
                  {Object.entries(skills).map(([cat, items]) => (
                    <div key={cat} className="skill-card">
                      <h4>{cat}</h4>
                      <div className="skill-tags">
                        {items.map((s) => (
                          <span key={s} className="skill-tag">{s}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateIn>

              {/* Education */}
              <AnimateIn delay={0.3}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                  Educación
                </h3>
                <div className="education-card">
                  <strong>UNEFA – San Cristóbal, Venezuela</strong>
                  <p>Ingeniería de Sistemas (2021 – 2026, en curso)</p>
                </div>
              </AnimateIn>
            </section>
          )}
        </main>

        {/* ── Footer ── */}
        <footer className="site-footer">
          <div className="site-footer-inner">
            <p className="footer-note">
              Ingeniera de Sistemas y Desarrolladora Full-Stack especializada en soluciones de software escalables.
            </p>
            <div className="footer-links">
              <a
                id="footer-linkedin"
                target="_blank" rel="noreferrer"
                className="footer-icon-link"
                aria-label="LinkedIn"
                href="https://linkedin.com/in/yesikaroa"
              >
                <IconLinkedIn size={18} />
              </a>
              <a
                id="footer-github"
                target="_blank" rel="noreferrer"
                className="footer-icon-link"
                aria-label="GitHub"
                href="https://github.com/YesikaRoa"
              >
                <IconGithub size={18} />
              </a>
              <a
                id="footer-cv"
                target="_blank" rel="noreferrer"
                className="footer-icon-link"
                aria-label="Curriculum Vitae"
                href="/CV_Yesika_Roa.pdf"
              >
                <IconFileText size={18} />
              </a>
              <a
                id="footer-email"
                className="footer-icon-link"
                aria-label="Email"
                href="mailto:yroa1402@gmail.com"
              >
                <IconMail size={18} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
