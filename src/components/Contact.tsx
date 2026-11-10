import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Copy,
  Check,
  Send,
  Clock,
  MapPin,
  ArrowUpRight,
  Terminal,
} from 'lucide-react'
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  DribbbleIcon,
} from './SocialIcons'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [currentTime, setCurrentTime] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const emailAddress = 'dzakirul.favian@gmail.com'

  // Update live Indonesia (WIB / GMT+7) clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      // Indonesia Western Time (UTC+7)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }
      setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(now))
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setFormSubmitted(true)
      setFormData({ name: '', email: '', projectType: 'Web Development', message: '' })
    }, 1200)
  }

  return (
    <section id="contact" className="relative py-28 md:py-36 border-b border-white/10 overflow-hidden bg-[#0A0A0A]">
      {/* Background Red Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E50914]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#E50914] tracking-[0.25em] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E50914]" />
              06 // INITIATE TRANSMISSION
            </div>
            <h2 className="font-['Syne'] text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#F5F5F5]">
              LET&apos;S <span className="text-[#E50914]">CONNECT</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#A1A1A1] max-w-xs md:text-right">
            AVAILABLE FOR BESPOKE CLIENT PROJECTS &amp; AMBITIOUS COLLABORATIONS
          </div>
        </div>

        {/* Bold Closing Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-['Syne'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
            HAVE A VISION?
            <br />
            <span className="text-stroke-red hover:text-[#E50914] transition-colors">
              LET&apos;S BUILD SOMETHING
            </span>
            <br />
            <span className="text-[#E50914]">EXTRAORDINARY.</span>
          </h3>
        </motion.div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Email, Status & Social Links */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Click to Copy Email Card */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#151515] border border-white/10 group hover:border-[#E50914]/60 transition-all">
              <div className="flex items-center justify-between text-xs font-mono text-[#A1A1A1] mb-3">
                <span className="uppercase tracking-widest text-[#E50914] font-semibold">
                  DIRECT ELECTRONIC MAIL
                </span>
                <span className="text-[11px] text-[#A1A1A1]">CLICK TO COPY</span>
              </div>

              <div className="flex items-center justify-between gap-3 flex-wrap">
                <span className="font-['Syne'] text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight break-all">
                  {emailAddress}
                </span>

                <button
                  type="button"
                  onClick={copyToClipboard}
                  className={`p-3 rounded-sm transition-all shrink-0 flex items-center gap-2 font-mono text-xs ${
                    copied
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-[#0A0A0A] hover:bg-[#E50914] text-white border border-white/10 hover:border-[#E50914]'
                  }`}
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Mailto Link */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#E50914] hover:text-[#FF2A36] uppercase tracking-wider font-semibold"
                >
                  <span>LAUNCH MAIL CLIENT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Timezone & Location Status Card */}
            <div className="p-6 rounded-sm bg-[#151515] border border-white/10 space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2 font-mono text-xs text-[#A1A1A1]">
                  <MapPin className="w-4 h-4 text-[#E50914]" />
                  <span>LOCATION</span>
                </div>
                <div className="font-mono text-xs text-white font-medium">
                  INDONESIA (GLOBAL REMOTE)
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2 font-mono text-xs text-[#A1A1A1]">
                  <Clock className="w-4 h-4 text-[#E50914]" />
                  <span>LOCAL TIME (WIB)</span>
                </div>
                <div className="font-mono text-xs text-[#E50914] font-bold">
                  {currentTime || '21:55:00'} (GMT+7)
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="font-mono text-xs text-[#A1A1A1]">RESPONSE WINDOW</div>
                <div className="font-mono text-xs text-white">WITHIN 24 HOURS</div>
              </div>
            </div>

            {/* Social Network Channels */}
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#A1A1A1] font-semibold mb-3">
                COMMUNICATION NODES:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { name: 'GITHUB', icon: GithubIcon, href: 'https://github.com/dzakirul' },
                  { name: 'LINKEDIN', icon: LinkedinIcon, href: 'https://linkedin.com/in/dzakirul' },
                  { name: 'X / TWITTER', icon: TwitterIcon, href: 'https://x.com/dzakirul' },
                  { name: 'INSTAGRAM', icon: InstagramIcon, href: 'https://instagram.com/dzakirul' },
                  { name: 'DRIBBBLE', icon: DribbbleIcon, href: 'https://dribbble.com/dzakirul' },
                ].map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-sm bg-[#151515] border border-white/10 hover:border-[#E50914] hover:bg-[#E50914]/10 text-[#A1A1A1] hover:text-white transition-all flex items-center gap-2 text-xs font-mono group"
                    >
                      <Icon className="w-4 h-4 text-[#E50914] group-hover:scale-110 transition-transform" />
                      <span>{social.name}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Transmission Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-sm bg-[#151515] border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-2 font-mono text-xs text-[#E50914] uppercase tracking-wider mb-6">
                <Terminal className="w-4 h-4" />
                <span>PROJECT INQUIRY TRANSMISSION</span>
              </div>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 text-center bg-[#0A0A0A] rounded border border-emerald-500/40 my-6"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="font-['Syne'] text-2xl font-bold text-white mb-2">
                      TRANSMISSION RECEIVED
                    </h4>
                    <p className="font-mono text-xs text-[#A1A1A1] max-w-md mx-auto mb-6">
                      Thank you for reaching out. Your message has been logged. Dzakirul will respond
                      within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2 rounded-sm bg-[#151515] border border-white/15 hover:border-[#E50914] text-xs font-mono text-white transition-colors"
                    >
                      SEND ANOTHER TRANSMISSION
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block font-mono text-xs text-[#A1A1A1] uppercase tracking-wider mb-2">
                          YOUR IDENTITY / NAME *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Vance"
                          className="w-full px-4 py-3 rounded-sm bg-[#0A0A0A] border border-white/15 focus:border-[#E50914] focus:outline-none text-white font-mono text-sm placeholder:text-[#555] transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block font-mono text-xs text-[#A1A1A1] uppercase tracking-wider mb-2">
                          YOUR EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. alex@studio.com"
                          className="w-full px-4 py-3 rounded-sm bg-[#0A0A0A] border border-white/15 focus:border-[#E50914] focus:outline-none text-white font-mono text-sm placeholder:text-[#555] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block font-mono text-xs text-[#A1A1A1] uppercase tracking-wider mb-2">
                        PROJECT SCOPE / TYPE
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-[#0A0A0A] border border-white/15 focus:border-[#E50914] focus:outline-none text-white font-mono text-sm transition-colors cursor-pointer"
                      >
                        <option value="Web Development">Full Stack Web Development</option>
                        <option value="Creative Frontend">Creative Frontend &amp; WebGL</option>
                        <option value="UI/UX Design">UI/UX &amp; Design Systems</option>
                        <option value="Technical Consulting">Architecture &amp; Performance Audit</option>
                        <option value="Other Collaboration">Visionary Collaboration / Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-mono text-xs text-[#A1A1A1] uppercase tracking-wider mb-2">
                        PROJECT VISION &amp; DETAILS *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your goals, timelines, and the experience you wish to create..."
                        className="w-full px-4 py-3 rounded-sm bg-[#0A0A0A] border border-white/15 focus:border-[#E50914] focus:outline-none text-white font-mono text-sm placeholder:text-[#555] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-sm bg-[#E50914] hover:bg-[#FF2A36] text-white font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 glow-red disabled:opacity-50"
                    >
                      {submitting ? (
                        <span>TRANSMITTING MESSAGE...</span>
                      ) : (
                        <>
                          <span>DISPATCH TRANSMISSION</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
