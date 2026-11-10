import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 md:py-16 bg-[#0A0A0A] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-10">
        {/* Top Minimal Branding Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="font-['Syne'] text-xl sm:text-2xl font-black uppercase text-white tracking-wider flex items-center gap-2">
              <span>DZAKIRUL FAVIAN JIWANI ZUHRI</span>
              <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
            </div>
            <div className="font-mono text-xs text-[#E50914] tracking-widest mt-1">
              BEYOND THE INTERFACE.
            </div>
          </div>

          {/* Back to top interaction */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-sm bg-[#151515] border border-white/10 hover:border-[#E50914] text-xs font-mono text-[#A1A1A1] hover:text-white transition-all self-start md:self-auto cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <span className="w-5 h-5 rounded-full bg-[#0A0A0A] border border-white/10 group-hover:border-[#E50914] flex items-center justify-center transition-colors">
              <ArrowUp className="w-3 h-3 text-[#E50914] group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Bottom Metadata & Social Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs font-mono text-[#A1A1A1]">
          <div>
            © 2026 DZAKIRUL FAVIAN JIWANI ZUHRI. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/dzakirul"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E50914] transition-colors"
            >
              GITHUB
            </a>
            <a
              href="https://linkedin.com/in/dzakirul"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E50914] transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href="https://x.com/dzakirul"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E50914] transition-colors"
            >
              TWITTER / X
            </a>
            <a
              href="https://instagram.com/dzakirul"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E50914] transition-colors"
            >
              INSTAGRAM
            </a>
          </div>

          <div className="text-[11px] text-[#A1A1A1] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>ALL SYSTEMS NOMINAL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
