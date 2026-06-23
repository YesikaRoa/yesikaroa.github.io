'use client'

import { Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'MediPanel',
    category: 'Healthcare Management',
    description: 'Plataforma integral de gestión médica con Node.js, Express y PostgreSQL con caché en Redis Cloud.',
    url: 'https://medipanel.netlify.app',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    image: 'bg-gradient-to-br from-purple-600 to-blue-600'
  },
  {
    id: 2,
    title: 'Libertadores-CS',
    category: 'Community Management',
    description: 'Panel administrativo comunitario con flujos de CI/CD en GitHub Actions e integración de Cloudinary.',
    url: 'https://libertadores-cs.netlify.netlify.app',
    technologies: ['React', 'Express', 'GitHub Actions', 'Cloudinary'],
    image: 'bg-gradient-to-br from-indigo-600 to-purple-600'
  },
  {
    id: 3,
    title: 'Kindred Pet Care',
    category: 'Pet Care Platform',
    description: 'Aplicación moderna para el cuidado de mascotas con interfaz intuitiva y gestión de servicios.',
    url: 'https://kindredpetcare.netlify.app',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Firebase'],
    image: 'bg-gradient-to-br from-pink-600 to-purple-600'
  },
  {
    id: 4,
    title: 'AI-Assisted Workflows',
    category: 'Future Project',
    description: 'Sistema de flujos de trabajo asistidos por IA para optimización de procesos de ingeniería.',
    url: '#',
    status: 'In Progress',
    technologies: ['AI/ML', 'TypeScript', 'Claude API', 'v0'],
    image: 'bg-gradient-to-br from-purple-600 to-indigo-600'
  }
]

const skills = {
  frontend: ['JavaScript (ES6+)', 'TypeScript', 'React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'CoreUI'],
  backend: ['Node.js', 'Express', 'Prisma ORM', 'Swagger', 'Redis Cloud', 'Cloudinary'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
  cloud: ['AWS (EC2, S3, RDS)', 'GitHub Actions', 'Docker', 'Git'],
  tools: ['Cursor AI', 'Claude', 'v0 by Vercel', 'Jira', 'Confluence']
}

export default function Page() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            YR
          </Link>
          <div className="flex gap-8">
            <button onClick={() => setActiveTab('home')} className={`text-sm ${activeTab === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              Home
            </button>
            <button onClick={() => setActiveTab('projects')} className={`text-sm ${activeTab === 'projects' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              Projects
            </button>
            <button onClick={() => setActiveTab('about')} className={`text-sm ${activeTab === 'about' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              About
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24">
        {/* Hero Section */}
        {activeTab === 'home' && (
          <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm text-primary font-medium mb-4">INGENIERA DE SISTEMAS || FULL STACK DEVELOPER</div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hey, <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Yesika</span> here 👋
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transformo conceptos en soluciones de software escalables. Especializada en el ecosistema JavaScript/TypeScript con experiencia en arquitectura backend robusta y interfaces frontend dinámicas.
              </p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/yesikaroa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                  LinkedIn
                </a>
                <a href="https://github.com/YesikaRoa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 border border-border rounded-lg hover:bg-card transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-2xl border border-border">
                <p className="text-sm text-primary font-medium mb-6">TECH STACK</p>
                <div className="grid grid-cols-2 gap-3">
                  {['TypeScript', 'JavaScript', 'React', 'Node.js', 'PostgreSQL', 'Express', 'Next.js', 'AWS', 'Redis', 'Tailwind CSS', 'Prisma', 'Claude AI'].map(tech => (
                    <div key={tech} className="px-4 py-2 bg-background rounded-lg border border-border text-sm text-foreground">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="space-y-3">
                <a href="https://github.com/YesikaRoa" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition group">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  <div>
                    <p className="font-semibold group-hover:text-primary transition">GitHub</p>
                    <p className="text-sm text-muted-foreground">Código de producción, arquitectura y experimentos técnicos.</p>
                  </div>
                </a>
                <a href="https://linkedin.com/in/yesikaroa" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition group">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                  <div>
                    <p className="font-semibold group-hover:text-primary transition">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Experiencia, resultados y contexto de liderazgo.</p>
                  </div>
                </a>
                <a href="mailto:yroa1402@gmail.com" className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition group">
                  <Mail size={24} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold group-hover:text-primary transition">Email</p>
                    <p className="text-sm text-muted-foreground">yroa1402@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeTab === 'projects' && (
          <section className="max-w-6xl mx-auto px-6 py-20">
            <div className="mb-16">
              <p className="text-sm text-primary font-medium mb-4">PROYECTOS</p>
              <h2 className="text-4xl font-bold mb-4">Trabajo destacado</h2>
              <p className="text-muted-foreground text-lg">Sistemas de producción construidos para manejar complejidad y entregar resultados medibles.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.url}
                  target={project.id !== 4 ? '_blank' : undefined}
                  rel={project.id !== 4 ? 'noopener noreferrer' : undefined}
                  className="group cursor-pointer"
                >
                  <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <div className={`h-48 ${project.image} relative overflow-hidden`}>
                      {project.status && (
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-semibold">
                            {project.status}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="text-xs text-primary font-semibold mb-2">{project.category}</div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span key={tech} className="text-xs px-2 py-1 bg-background rounded border border-border text-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.id !== 4 && (
                        <div className="mt-4 inline-flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                          <span className="text-sm font-semibold">Ver proyecto</span>
                          <ExternalLink size={16} />
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* About Section */}
        {activeTab === 'about' && (
          <section className="max-w-6xl mx-auto px-6 py-20">
            <div className="mb-16">
              <p className="text-sm text-primary font-medium mb-4">SOBRE MÍ</p>
              <h2 className="text-4xl font-bold">Ingeniera y Desarrolladora</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
              <div>
                <p className="text-sm text-primary font-semibold mb-4">PERFIL</p>
                <p className="text-muted-foreground leading-relaxed">
                  Ingeniera de Sistemas con más de 2 años desarrollando soluciones tecnológicas de alto impacto. Especializada en JavaScript/TypeScript con experiencia en arquitectura backend robusta con Node.js, PostgreSQL y AWS.
                </p>
              </div>
              <div>
                <p className="text-sm text-primary font-semibold mb-4">EXPERIENCIA</p>
                <p className="text-muted-foreground leading-relaxed">
                  Actualmente en Tobal Systems como Ingeniera de Software Full Stack. Anteriormente como Desarrolladora Independiente trabajando en proyectos de gestión médica, administración comunitaria y más.
                </p>
              </div>
              <div>
                <p className="text-sm text-primary font-semibold mb-4">ENFOQUE</p>
                <p className="text-muted-foreground leading-relaxed">
                  Especializada en resolución de problemas complejos mediante desarrollo colaborativo, metodologías ágiles (SCRUM) e integración estratégica de Inteligencia Artificial.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold mb-8">Habilidades Técnicas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="bg-card p-6 rounded-xl border border-border">
                    <h4 className="font-semibold text-primary capitalize mb-4">{category.replace(/([A-Z])/g, ' $1')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map(skill => (
                        <span key={skill} className="text-xs px-3 py-1 bg-background rounded-lg border border-border text-foreground">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Educación</h3>
              <div className="bg-card p-6 rounded-xl border border-border">
                <p className="text-primary font-semibold">UNEFA – San Cristóbal, Venezuela</p>
                <p className="text-muted-foreground">Ingeniería de Sistemas (2021 – 2026, en curso)</p>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-muted-foreground">
              Ingeniera de Sistemas y Desarrolladora Full-Stack especializada en soluciones de software escalables.
            </p>
            <div className="flex gap-6">
              <a href="https://linkedin.com/in/yesikaroa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
              </a>
              <a href="https://github.com/YesikaRoa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="mailto:yroa1402@gmail.com" className="text-muted-foreground hover:text-primary transition">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
