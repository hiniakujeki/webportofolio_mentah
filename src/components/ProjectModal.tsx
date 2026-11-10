import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, CheckCircle2, Cpu } from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import type { Project } from '../types'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm bg-[#151515] border border-white/15 shadow-2xl p-6 sm:p-8 md:p-10 text-[#F5F5F5]"
        >
          {/* Top Close Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#E50914]/15 border border-[#E50914]/40 text-[#E50914] font-semibold">
                {project.category}
              </span>
              <span className="font-mono text-xs text-[#A1A1A1]">YEAR: {project.year}</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-sm bg-[#0A0A0A] border border-white/10 hover:border-[#E50914] hover:text-[#E50914] text-[#A1A1A1] transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Project Title & Subtitle */}
          <div className="mb-6">
            <h3 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">
              {project.title}
            </h3>
            <p className="font-mono text-sm sm:text-base text-[#E50914]">
              {project.subtitle}
            </p>
          </div>

          {/* Large Project Image with Red Glow */}
          <div className="relative rounded-sm overflow-hidden border border-white/10 mb-8 aspect-video bg-[#0A0A0A] group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
            <div className="absolute top-4 left-4 font-mono text-[11px] px-2.5 py-1 rounded bg-black/80 backdrop-blur-sm text-white/80 border border-white/10">
              CLIENT // {project.client}
            </div>
          </div>

          {/* Metrics Bar */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-3 mb-8">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 rounded-sm bg-[#0A0A0A] border border-white/5 text-center"
                >
                  <div className="font-['Syne'] text-xl sm:text-2xl font-bold text-[#E50914]">
                    {m.value}
                  </div>
                  <div className="font-mono text-[10px] sm:text-xs text-[#A1A1A1] uppercase tracking-wider mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Narrative */}
          <div className="space-y-6 mb-8 text-[#A1A1A1] text-sm sm:text-base leading-relaxed">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-white font-semibold mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#E50914]" />
                ARCHITECTURAL BRIEF
              </h4>
              <p>{project.longDescription}</p>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-white font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                KEY HIGHLIGHTS &amp; DELIVERABLES
              </h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F5F5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] mt-2 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-white font-semibold mb-3">
                TECHNOLOGIES UTILIZED:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded bg-[#0A0A0A] border border-white/10 text-xs font-mono text-[#F5F5F5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#E50914] hover:bg-[#FF2A36] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors glow-red"
              >
                <span>VISIT LIVE DEMO</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#0A0A0A] hover:bg-[#1C1C1C] border border-white/20 hover:border-[#E50914] text-[#F5F5F5] font-mono text-xs uppercase tracking-wider font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>SOURCE CODE</span>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="ml-auto font-mono text-xs text-[#A1A1A1] hover:text-white transition-colors"
            >
              CLOSE WINDOW [ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
