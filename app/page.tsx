'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// ── Data & Translations ──────────────────────────────────────────────────────

const techStack = [
  { icon: '{ }', label: 'TypeScript' },
  { icon: '</>', label: 'JavaScript' },
  { icon: '⚛', label: 'React.js' },
  { icon: '▲', label: 'Next.js' },
  { icon: '⬡', label: 'Node.js' },
  { icon: '🗄', label: 'PostgreSQL' },
  { icon: '▲', label: 'Prisma ORM' },
  { icon: '☁', label: 'AWS' },
  { icon: '🤖', label: 'IA (Claude, Gemini, Groq)' },
  { icon: '🔄', label: 'n8n' },
]

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre mí'
    },
    hero: {
      eyebrow: 'Ingeniera de Sistemas  ||  Full Stack Developer',
      greeting: 'Hey, ',
      name: 'Yesika',
      here: ' aquí 👋.',
      headline: 'Convierto conceptos en productos.',
      description: 'Desarrollo soluciones full stack de concepto a producción, combinando arquitectura robusta, entrega clara y sistemas que permanecen confiables bajo presión real.',
      techStack: 'Tech stack',
      linkedinTitle: 'LinkedIn',
      linkedinDesc: 'Experiencia, resultados y contexto de liderazgo.',
      githubTitle: 'GitHub',
      githubDesc: 'Código de producción, arquitectura y experimentos técnicos.',
      cvTitle: 'Curriculum Vitae',
      cvDesc: 'Seleccionar idioma para descargar.',
      emailTitle: 'Email',
    },
    projectsData: [
      {
        id: 1,
        title: 'MediPanel',
        tag: 'Healthcare Management',
        description: 'Dashboard clínico avanzado con módulos para gestión de pacientes, profesionales de salud, citas médicas y expedientes electrónicos (EMR). Construido sobre CoreUI & React con backend en Node.js, Express y PostgreSQL.',
        url: 'https://medipanel.netlify.app',
        emoji: '🏥',
        technologies: ['React', 'CoreUI', 'Node.js', 'Express', 'PostgreSQL'],
      },
      {
        id: 2,
        title: 'Libertadores-CS',
        tag: 'Community CMS',
        description: 'CMS para comunidades con panel administrativo segmentado y control de acceso basado en roles. Backend con Prisma, Node.js, Express y caché Redis para publicaciones. Pruebas con Jest, Supertest y GitHub Actions.',
        url: 'https://libertadores-cs.netlify.app',
        emoji: '🏘',
        technologies: ['React', 'CoreUI', 'Node.js', 'Prisma', 'PostgreSQL', 'Redis', 'Jest'],
      },
      {
        id: 3,
        title: 'Kindred Pet Care',
        tag: 'Pet Care Platform',
        description: 'Plataforma web para veterinaria con módulo de adopción y contacto. Desarrollada en Next.js, React y Tailwind CSS con chatbot inteligente conectado a Google Gemini vía Google AI Studio API.',
        url: 'https://kindredpetcare.netlify.app',
        emoji: '🐾',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Google Gemini'],
      },
      {
        id: 4,
        title: 'Smart Agent',
        tag: 'AI Support System',
        description: 'Agente de Soporte Técnico con IA que automatiza la creación de tickets mediante flujos orquestados (n8n). Backend con arquitectura MVC, capa de servicios, Prisma ORM y PostgreSQL.',
        url: 'https://smart-agentt.netlify.app',
        emoji: '🤖',
        technologies: ['TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'n8n', 'Groq LLM'],
      }
    ],
    projectsSection: {
      eyebrow: 'Proyectos',
      title: 'Trabajo destacado.',
      description: 'Sistemas de producción construidos para manejar complejidad y entregar resultados medibles.'
    },
    aboutSection: {
      role: 'Full Stack Developer',
      title: 'Esta soy yo.',
      p1: 'Desarrollo productos tecnológicos enfocados en solucionar problemas reales. Mi prioridad es diseñar arquitecturas progresivas: código limpio y mantenible, sistemas altamente escalables y decisiones técnicas que perduren en el tiempo.',
      p2: 'Si quieres conversar sobre el desarrollo de un producto, un desafío de diseño de sistemas o una posible colaboración, enviarme un correo es la forma más rápida de contactarme.',
      likesTitle: 'Lo que me gusta',
      likesDesc: 'Transformar requisitos complejos en sistemas de productos claros y fiables, asegurando una arquitectura escalable y un código mantenible.',
      workTitle: 'Cómo trabajo',
      workDesc: 'Comunicación directa, compromisos prácticos y altos estándares técnicos. Colaboro mediante metodologías ágiles y me apoyo en la Inteligencia Artificial para potenciar la productividad.',
      contactTitle: '¿Dónde puedo contactarte?',
      contactDesc: 'El correo electrónico es el canal más rápido para debatir sobre un producto o colaborar en proyectos.',
      contactBtnTitle: 'Envíame un correo electrónico',
      contactBtnDesc: 'Abrir ventana emergente de Gmail',
      cvTitle: 'CV',
      cvBtnTitle: 'Descargar Curriculum Vitae',
      cvBtnDesc: 'Ver historial completo de roles y proyectos'
    },
    skillsData: {
      Frontend: ['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'CoreUI'],
      'Backend & Orquestación': ['Node.js', 'Express', 'Cloudflare Workers', 'n8n (Automatización de flujos)', 'Prisma ORM', 'Swagger', 'Redis Cloud', 'Cloudinary'],
      'Bases de Datos': ['PostgreSQL', 'Neon DB', 'MySQL', 'MongoDB', 'TablePlus', 'dbdiagram.io', 'DBeaver', 'dbgin'],
      'Cloud & DevOps': ['AWS (EC2, S3, RDS, Lambda, CloudWatch)', 'GitHub Actions', 'Docker', 'Git', 'VirtualBox (Kali Linux)'],
      'IA & Herramientas': ['Cursor AI', 'lovabled.dev', 'Google AI Studio API', 'Claude', 'Groq LLM', 'v0 by Vercel', 'Prompt Engineering', 'Antigravity', 'Visual Studio Code', 'Codex', 'Insomnia', 'Postman', 'Jest', 'Vitest'],
      Gestión: ['SCRUM', 'Jira', 'Confluence', 'Trello', 'Slack'],
    },
    skillsSection: {
      title: 'Habilidades Técnicas',
    },
    educationSection: {
      title: 'Educación',
      degree: 'Ingeniería de Sistemas (2021 – 2026)'
    },
    footer: {
      note: 'Ingeniera de Sistemas y Desarrolladora Full-Stack especializada en soluciones de software escalables.',
    },
    modal: {
      title: 'Descargar Curriculum Vitae',
      desc: 'Por favor selecciona el idioma de tu preferencia.',
      esTitle: 'Español (ES)',
      esDesc: 'Descargar CV en Español',
      enTitle: 'English (EN)',
      enDesc: 'Download Resume in English'
    }
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About me'
    },
    hero: {
      eyebrow: 'Systems Engineer  ||  Full Stack Developer',
      greeting: 'Hey, ',
      name: 'Yesika',
      here: ' here 👋.',
      headline: 'I turn concepts into products.',
      description: 'I build full-stack solutions from concept to production, combining robust architecture, clear delivery, and systems that remain reliable under real pressure.',
      techStack: 'Tech stack',
      linkedinTitle: 'LinkedIn',
      linkedinDesc: 'Experience, results, and leadership context.',
      githubTitle: 'GitHub',
      githubDesc: 'Production code, architecture, and technical experiments.',
      cvTitle: 'Curriculum Vitae',
      cvDesc: 'Select language to download.',
      emailTitle: 'Email',
    },
    projectsData: [
      {
        id: 1,
        title: 'MediPanel',
        tag: 'Healthcare Management',
        description: 'Advanced clinical dashboard with modules for patient management, health professionals, medical appointments, and electronic medical records (EMR). Built on CoreUI & React with a Node.js, Express, and PostgreSQL backend.',
        url: 'https://medipanel.netlify.app',
        emoji: '🏥',
        technologies: ['React', 'CoreUI', 'Node.js', 'Express', 'PostgreSQL'],
      },
      {
        id: 2,
        title: 'Libertadores-CS',
        tag: 'Community CMS',
        description: 'Community CMS with segmented administrative panel and role-based access control. Backend with Prisma, Node.js, Express, and Redis cache for posts. Tested with Jest, Supertest, and GitHub Actions.',
        url: 'https://libertadores-cs.netlify.app',
        emoji: '🏘',
        technologies: ['React', 'CoreUI', 'Node.js', 'Prisma', 'PostgreSQL', 'Redis', 'Jest'],
      },
      {
        id: 3,
        title: 'Kindred Pet Care',
        tag: 'Pet Care Platform',
        description: 'Veterinary web platform with adoption and contact modules. Developed in Next.js, React, and Tailwind CSS with an intelligent chatbot connected to Google Gemini via Google AI Studio API.',
        url: 'https://kindredpetcare.netlify.app',
        emoji: '🐾',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Google Gemini'],
      },
      {
        id: 4,
        title: 'Smart Agent',
        tag: 'AI Support System',
        description: 'AI Tech Support Agent that automates ticket creation via orchestrated flows (n8n). MVC architecture backend, services layer, Prisma ORM, and PostgreSQL.',
        url: 'https://smart-agentt.netlify.app',
        emoji: '🤖',
        technologies: ['TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'n8n', 'Groq LLM'],
      }
    ],
    projectsSection: {
      eyebrow: 'Projects',
      title: 'Featured work.',
      description: 'Production systems built to handle complexity and deliver measurable results.'
    },
    aboutSection: {
      role: 'Full Stack Developer',
      title: 'This is me.',
      p1: 'I develop technological products focused on solving real problems. My priority is designing progressive architectures: clean and maintainable code, highly scalable systems, and technical decisions that endure over time.',
      p2: 'If you want to discuss product development, a systems design challenge, or a possible collaboration, sending me an email is the fastest way to reach me.',
      likesTitle: 'What I like',
      likesDesc: 'Transforming complex requirements into clear, reliable product systems, ensuring scalable architecture and maintainable code.',
      workTitle: 'How I work',
      workDesc: 'Direct communication, practical commitments, and high technical standards. I collaborate using agile methodologies and leverage Artificial Intelligence to boost productivity.',
      contactTitle: 'Where to reach me?',
      contactDesc: 'Email is the fastest channel to discuss a product or collaborate on projects.',
      contactBtnTitle: 'Send me an email',
      contactBtnDesc: 'Open Gmail compose popup',
      cvTitle: 'CV',
      cvBtnTitle: 'Download Curriculum Vitae',
      cvBtnDesc: 'View full history of roles and projects'
    },
    skillsData: {
      Frontend: ['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'CoreUI'],
      'Backend & Orchestration': ['Node.js', 'Express', 'Cloudflare Workers', 'n8n (Flow Automation)', 'Prisma ORM', 'Swagger', 'Redis Cloud', 'Cloudinary'],
      'Databases': ['PostgreSQL', 'Neon DB', 'MySQL', 'MongoDB', 'TablePlus', 'dbdiagram.io', 'DBeaver', 'dbgin'],
      'Cloud & DevOps': ['AWS (EC2, S3, RDS, Lambda, CloudWatch)', 'GitHub Actions', 'Docker', 'Git', 'VirtualBox (Kali Linux)'],
      'AI & Tools': ['Cursor AI', 'lovabled.dev', 'Google AI Studio API', 'Claude', 'Groq LLM', 'v0 by Vercel', 'Prompt Engineering', 'Antigravity', 'Visual Studio Code', 'Codex', 'Insomnia', 'Postman', 'Jest', 'Vitest'],
      Management: ['SCRUM', 'Jira', 'Confluence', 'Trello', 'Slack'],
    },
    skillsSection: {
      title: 'Technical Skills',
    },
    educationSection: {
      title: 'Education',
      degree: 'Systems Engineering (2021 – 2026)'
    },
    footer: {
      note: 'Systems Engineer and Full-Stack Developer specialized in scalable software solutions.',
    },
    modal: {
      title: 'Download Curriculum Vitae',
      desc: 'Please select your preferred language.',
      esTitle: 'Spanish (ES)',
      esDesc: 'Download CV in Spanish',
      enTitle: 'English (EN)',
      enDesc: 'Download Resume in English'
    }
  }
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
  const [showCvModal, setShowCvModal] = useState(false)
  const [lang, setLang] = useState<'es' | 'en'>('es')

  const t = translations[lang]

  return (
    <>
      {/* Background warp animation */}
      <div className="bg-warp" aria-hidden="true" />

      <div className="site-shell">
        {/* ── Header ── */}
        <header className="site-header">
          <nav className="site-nav" aria-label="Principal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <a className="brand" href="/" onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}>
              <span className="brand-mark"><IconOrbit /></span>
              <span>Yesika Roa</span>
            </a>
            {/* Nav links */}
            <div className="nav-links">
              {(['home', 'projects', 'about'] as const).map((tab) => (
                <button
                  key={tab}
                  id={`nav-${tab}`}
                  onClick={() => setActiveTab(tab)}
                  className={`nav-link${activeTab === tab ? ' active' : ''}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  {t.nav[tab]}
                </button>
              ))}
            </div>
            {/* Language Toggle – far right */}
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--clr-border)',
                color: 'var(--clr-text)',
                borderRadius: 'var(--radius-sm)',
                padding: '4px 10px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.85rem'
              }}
            >
              {lang.toUpperCase()}
            </button>
          </nav>
        </header>

        <main className="page-content">

          {/* ── HOME ── */}
          {activeTab === 'home' && (
            <section className="hero" aria-label="Presentación">
              {/* Left: Copy */}
              <div className="hero-copy">
                <p className="eyebrow">{t.hero.eyebrow}</p>
                <h1>
                  {t.hero.greeting}<span className="hero-highlight">{t.hero.name}</span>{t.hero.here}<br />
                  {t.hero.headline}
                </h1>
                <p>
                  {t.hero.description}
                </p>
              </div>

              {/* Right: Card */}
              <aside className="hero-card" aria-label="Tech stack y redes">
                {/* Tech Stack */}
                <div className="stack-block" aria-label="Tech stack">
                  <p className="stack-title">{t.hero.techStack}</p>
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
                      <strong>{t.hero.linkedinTitle}</strong>
                      <span>{t.hero.linkedinDesc}</span>
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
                      <strong>{t.hero.githubTitle}</strong>
                      <span>{t.hero.githubDesc}</span>
                    </div>
                    <IconGithub size={22} />
                  </a>

                  <button
                    id="link-cv"
                    className="social-link social-link-resume"
                    onClick={() => setShowCvModal(true)}
                    style={{ background: 'linear-gradient(135deg, rgba(138,92,246,0.12), rgba(109,40,217,0.08))', border: '1px solid rgba(138,92,246,0.35)', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}
                  >
                    <div>
                      <strong>{t.hero.cvTitle}</strong>
                      <span>{t.hero.cvDesc}</span>
                    </div>
                    <IconFileText size={22} className="social-link-icon social-link-icon-resume" />
                  </button>

                  <a
                    id="link-email"
                    className="social-link"
                    href="mailto:yroa1402@gmail.com"
                  >
                    <div>
                      <strong>{t.hero.emailTitle}</strong>
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
                  {t.projectsSection.eyebrow}
                </p>
                <h2 className="section-title">{t.projectsSection.title}</h2>
                <p className="section-copy">
                  {t.projectsSection.description}
                </p>
              </AnimateIn>

              <div className="projects-grid">
                {t.projectsData.map((p, i) => (
                  <AnimateIn key={p.id} delay={i * 0.12} className="project-animate-wrap">
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
                    <p className="about-role">{t.aboutSection.role}</p>
                  </div>

                  {/* Text */}
                  <div className="about-content">
                    <div style={{ marginBottom: '3rem' }}>
                      <h2 className="section-title" style={{ marginBottom: '1.25rem', fontSize: '3rem' }}>
                        {t.aboutSection.title}
                      </h2>
                      <p style={{ fontSize: '1rem', color: 'var(--clr-text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                        {t.aboutSection.p1}
                      </p>
                      <p style={{ fontSize: '1rem', color: 'var(--clr-text-muted)', lineHeight: 1.7 }}>
                        {t.aboutSection.p2}
                      </p>
                    </div>

                    <div className="about-block">
                      <h4>{t.aboutSection.likesTitle}</h4>
                      <p>
                        {t.aboutSection.likesDesc}
                      </p>
                    </div>
                    
                    <div className="about-block">
                      <h4>{t.aboutSection.workTitle}</h4>
                      <p>
                        {t.aboutSection.workDesc}
                      </p>
                    </div>

                    <div className="about-block">
                      <h4>{t.aboutSection.contactTitle}</h4>
                      <p style={{ marginBottom: '1rem' }}>
                        {t.aboutSection.contactDesc}
                      </p>
                      <button 
                        onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=yroa1402@gmail.com', 'gmail-compose', 'width=800,height=600')}
                        className="social-link"
                        style={{ display: 'inline-flex', width: 'fit-content', padding: '0.6rem 1rem', background: 'transparent', border: '1px solid var(--clr-border)', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}
                      >
                        <div>
                          <strong>{t.aboutSection.contactBtnTitle}</strong>
                          <span>{t.aboutSection.contactBtnDesc}</span>
                        </div>
                        <IconMail size={20} />
                      </button>
                    </div>

                    <div className="about-block">
                      <h4>{t.aboutSection.cvTitle}</h4>
                      <button
                        id="about-cv-link"
                        className="social-link social-link-resume"
                        onClick={() => setShowCvModal(true)}
                        style={{ display: 'inline-flex', width: 'fit-content', minWidth: '260px', background: 'linear-gradient(135deg, rgba(138,92,246,0.12), rgba(109,40,217,0.08))', border: '1px solid rgba(138,92,246,0.35)', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}
                      >
                        <div>
                          <strong>{t.aboutSection.cvBtnTitle}</strong>
                          <span>{t.aboutSection.cvBtnDesc}</span>
                        </div>
                        <IconFileText size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              {/* Skills */}
              <AnimateIn delay={0.2}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                  {t.skillsSection.title}
                </h3>
                <div className="skills-grid">
                  {Object.entries(t.skillsData).map(([cat, items]) => (
                    <div key={cat} className="skill-card">
                      <h4>{cat}</h4>
                      <div className="skill-tags">
                        {(items as string[]).map((s) => (
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
                  {t.educationSection.title}
                </h3>
                <div className="education-card">
                  <strong>UNEFA – San Cristóbal, Venezuela</strong>
                  <p>{t.educationSection.degree}</p>
                </div>
              </AnimateIn>
            </section>
          )}
        </main>

        {/* ── Footer ── */}
        <footer className="site-footer">
          <div className="site-footer-inner">
            <p className="footer-note">
              {t.footer.note}
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
                id="footer-cv-es"
                target="_blank" rel="noreferrer"
                className="footer-icon-link"
                aria-label="Curriculum Vitae (ES)"
                href="/CV_Yesika_Roa.pdf"
                style={{ width: 'auto', padding: '0 12px', gap: '6px' }}
              >
                <span style={{ fontSize: '11px', fontWeight: 800 }}>CV ES</span>
                <IconFileText size={16} />
              </a>
              <a
                id="footer-cv-en"
                target="_blank" rel="noreferrer"
                className="footer-icon-link"
                aria-label="Curriculum Vitae (EN)"
                href="/CV_Yesika_Roa_English.pdf"
                style={{ width: 'auto', padding: '0 12px', gap: '6px' }}
              >
                <span style={{ fontSize: '11px', fontWeight: 800 }}>CV EN</span>
                <IconFileText size={16} />
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

      {/* ── CV Modal ── */}
      {showCvModal && (
        <div className="modal-overlay" onClick={() => setShowCvModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowCvModal(false)} aria-label="Cerrar modal">
              ✕
            </button>
            <h3 className="modal-title">{t.modal.title}</h3>
            <p className="modal-desc">{t.modal.desc}</p>
            <div className="modal-actions">
              <a
                href="/CV_Yesika_Roa.pdf"
                target="_blank"
                rel="noreferrer"
                className="social-link social-link-resume"
                style={{ textDecoration: 'none' }}
                onClick={() => setShowCvModal(false)}
              >
                <div>
                  <strong>{t.modal.esTitle}</strong>
                  <span>{t.modal.esDesc}</span>
                </div>
                <IconFileText size={20} />
              </a>
              <a
                href="/CV_Yesika_Roa_English.pdf"
                target="_blank"
                rel="noreferrer"
                className="social-link social-link-resume"
                style={{ textDecoration: 'none' }}
                onClick={() => setShowCvModal(false)}
              >
                <div>
                  <strong>{t.modal.enTitle}</strong>
                  <span>{t.modal.enDesc}</span>
                </div>
                <IconFileText size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
