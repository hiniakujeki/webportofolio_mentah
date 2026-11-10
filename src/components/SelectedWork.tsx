import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import type { Project } from '../types'
import ProjectModal from './ProjectModal'
import { ArrowUpRight, Sparkles, Terminal } from 'lucide-react'
import { GithubIcon } from './SocialIcons'

const categories = ['ALL', 'Creative Frontend', 'Full Stack', 'Interactive', 'UI/UX Design']

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    activeCategory === 'ALL'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="relative py-28 md:py-36 border-b border-white/10 overflow-hidden bg-[#0A0A0A]">
      {/* Background Red Atmospheric Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#E50914]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#E50914] tracking-[0.25em] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E50914]" />
              03 // INDEX OF PRODUCTION
            </div>
            <h2 className="font-['Syne'] text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#F5F5F5]">
              SELECTED <span className="text-[#E50914]">WORK</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#A1A1A1]">
            <Terminal className="w-3.5 h-3.5 text-[#E50914]" />
            <span>TOTAL CASE STUDIES: {projects.length}</span>
          </div>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-sm font-mono text-xs uppercase tracking-wider transition-all border ${
                  isActive
                    ? 'bg-[#E50914] border-[#E50914] text-white font-semibold glow-red'
                    : 'bg-[#151515] border-white/10 text-[#A1A1A1] hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Projects Grid: Editorial Asymmetric Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative flex flex-col bg-[#151515] rounded-sm border border-white/10 hover:border-[#E50914]/60 transition-all duration-500 overflow-hidden"
              >
                {/* Large Thumbnail Container */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-[16/10] overflow-hidden bg-[#0A0A0A] cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-115 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />

                  {/* Gradient Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-80" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-[11px] font-mono pointer-events-none">
                    <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[#F5F5F5]">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[#A1A1A1]">
                      {project.year}
                    </span>
                  </div>

                  {/* Hover Inspect CTA Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 pointer-events-none">
                    <span className="px-4 py-2 bg-[#E50914] text-white font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 rounded-sm glow-red">
                      <Sparkles className="w-3.5 h-3.5" />
                      INSPECT ARCHITECTURE
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Subtitle & Title */}
                    <div className="font-mono text-xs text-[#E50914] font-semibold tracking-wider uppercase mb-1">
                      // {project.subtitle}
                    </div>

                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="font-['Syne'] text-2xl sm:text-3xl font-black uppercase text-white tracking-tight cursor-pointer hover:text-[#E50914] transition-colors mb-3 flex items-center justify-between"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#A1A1A1] group-hover:text-[#E50914] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </h3>

                    <p className="text-[#A1A1A1] text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Badges & Links Bar */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded bg-[#0A0A0A] border border-white/5 text-[11px] font-mono text-[#A1A1A1]"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 rounded bg-[#0A0A0A] border border-white/5 text-[11px] font-mono text-[#E50914]">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* External Actions */}
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded bg-[#0A0A0A] border border-white/10 hover:border-[#E50914] hover:text-[#E50914] text-[#A1A1A1] transition-colors"
                          aria-label={`GitHub repo for ${project.title}`}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="px-3 py-1.5 rounded bg-[#0A0A0A] hover:bg-[#E50914] hover:text-white border border-white/10 text-xs font-mono text-[#F5F5F5] transition-colors"
                      >
                        DEEP DIVE
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
