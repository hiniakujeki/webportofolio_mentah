import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { journeyItems } from '../data/journey'
import { Briefcase, GraduationCap, Trophy, MapPin, Calendar, CheckCircle } from 'lucide-react'

type TabType = 'all' | 'experience' | 'education' | 'achievement'

export default function Journey() {
  const [activeTab, setActiveTab] = useState<TabType>('all')

  const filteredItems =
    activeTab === 'all'
      ? journeyItems
      : journeyItems.filter((item) => item.type === activeTab)

  const getIcon = (type: string) => {
    switch (type) {
      case 'experience':
        return <Briefcase className="w-4 h-4 text-[#E50914]" />
      case 'education':
        return <GraduationCap className="w-4 h-4 text-[#E50914]" />
      case 'achievement':
        return <Trophy className="w-4 h-4 text-[#E50914]" />
      default:
        return null
    }
  }

  return (
    <section id="journey" className="relative py-28 md:py-36 border-b border-white/10 overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#E50914] tracking-[0.25em] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E50914]" />
              04 // CHRONICLE &amp; MILESTONES
            </div>
            <h2 className="font-['Syne'] text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#F5F5F5]">
              MY <span className="text-[#E50914]">JOURNEY</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#A1A1A1] max-w-xs md:text-right">
            EXPERIENCE, ACADEMIC PURSUITS, AND RECOGNITION
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-16">
          {(
            [
              { id: 'all', label: 'ALL MILESTONES' },
              { id: 'experience', label: 'EXPERIENCE' },
              { id: 'education', label: 'EDUCATION' },
              { id: 'achievement', label: 'ACHIEVEMENTS' },
            ] as const
          ).map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-sm font-mono text-xs uppercase tracking-wider transition-all border ${
                  isActive
                    ? 'bg-[#E50914] border-[#E50914] text-white font-semibold glow-red'
                    : 'bg-[#151515] border-white/10 text-[#A1A1A1] hover:text-white hover:border-white/30'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Timeline Stream */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-12 max-w-4xl">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative group"
              >
                {/* Timeline Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#151515] border-2 border-white/20 group-hover:border-[#E50914] group-hover:bg-[#E50914] transition-all flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E50914] group-hover:bg-white" />
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-8 rounded-sm bg-[#151515] border border-white/10 group-hover:border-[#E50914]/40 transition-colors">
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded bg-[#0A0A0A] border border-white/5">
                        {getIcon(item.type)}
                      </span>
                      <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#0A0A0A] border border-white/10 text-[#E50914] uppercase tracking-wider">
                        {item.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-[#A1A1A1]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#E50914]" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5 hidden sm:flex">
                        <MapPin className="w-3.5 h-3.5 text-[#A1A1A1]" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white mb-1">
                    {item.role}
                  </h3>
                  <div className="font-mono text-sm text-[#E50914] mb-4">
                    @ {item.organization}
                  </div>

                  {/* Description */}
                  <p className="text-[#A1A1A1] text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="pt-3 border-t border-white/5 space-y-2">
                      {item.highlights.map((hl, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 text-xs text-[#F5F5F5] font-light"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-[#E50914] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
