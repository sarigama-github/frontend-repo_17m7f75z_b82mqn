import { motion } from 'framer-motion'

const neon = {
  pink: '#ef00ec',
  teal: '#0af8cd',
  purple: '#d00af8',
  magenta: '#f300d4',
  blue: '#007dff',
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-8 sm:p-10 backdrop-blur-xl border"
          style={{
            background: 'linear-gradient(180deg, rgba(15,20,32,0.6) 0%, rgba(15,20,32,0.35) 100%)',
            borderColor: `${neon.blue}55`,
            boxShadow: `0 30px 80px -30px ${neon.pink}40, inset 0 0 0 1px rgba(255,255,255,0.04)`,
          }}
        >
          <h3 className="text-2xl sm:text-4xl font-black tracking-tight" style={{ textShadow: `0 0 16px ${neon.teal}55` }}>Start Your Project</h3>
          <p className="mt-3 text-slate-300">Tell us about your vision. We sculpt concepts, art, and motion with AI — tailored to your brand.</p>

          <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="rounded-xl bg-white/5 border px-4 py-3 outline-none focus:ring-2" placeholder="Name" style={{ borderColor: `${neon.pink}44` }} />
            <input className="rounded-xl bg-white/5 border px-4 py-3 outline-none focus:ring-2" placeholder="Email" style={{ borderColor: `${neon.purple}44` }} />
            <input className="sm:col-span-2 rounded-xl bg-white/5 border px-4 py-3 outline-none focus:ring-2" placeholder="Project Type (Branding, Video, Art...)" style={{ borderColor: `${neon.teal}44` }} />
            <textarea rows="5" className="sm:col-span-2 rounded-xl bg-white/5 border px-4 py-3 outline-none focus:ring-2" placeholder="Describe your vision" style={{ borderColor: `${neon.blue}44` }} />
            <div className="sm:col-span-2 flex flex-wrap gap-3">
              <button type="button" className="rounded-full px-6 py-3 font-semibold text-slate-900" style={{ background: `linear-gradient(135deg, ${neon.teal}, ${neon.blue})` }}>Send Brief</button>
              <a href="#features" className="rounded-full px-6 py-3 border text-white/90" style={{ borderColor: `${neon.pink}66`, background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))' }}>View Capabilities</a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
