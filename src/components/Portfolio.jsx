import React, { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const neon = {
  pink: '#ef00ec',
  teal: '#0af8cd',
  purple: '#d00af8',
  magenta: '#f300d4',
  blue: '#007dff',
}

// Embed list – update each url with the direct work link as desired
const works = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: `Work ${i + 1}`,
  tag: ['Brand', 'Motion', 'Art'][i % 3],
  url: 'https://tommy-galil.my.canva.site/',
}))

export default function Portfolio() {
  const [active, setActive] = useState(null)

  const close = useCallback(() => setActive(null), [])
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close])

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 bg-slate-950 text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          background: `radial-gradient(800px 400px at 10% 0%, ${neon.purple}10, transparent 60%), radial-gradient(900px 400px at 90% 100%, ${neon.blue}10, transparent 60%)`
        }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-3xl sm:text-5xl font-black tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textShadow: `0 0 20px ${neon.blue}44` }}
        >
          Selected Works
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((it, i) => (
            <motion.button
              key={it.id}
              onClick={() => setActive(it)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border backdrop-blur-xl text-left focus:outline-none focus:ring-2"
              style={{ borderColor: `${neon.pink}44`, background: 'linear-gradient(180deg, rgba(20,24,38,0.6), rgba(20,24,38,0.35))' }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                {/* Futuristic gradient thumb */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `conic-gradient(from 140deg at 50% 50%, ${neon.magenta}33, ${neon.blue}22, ${neon.teal}33, ${neon.pink}22, ${neon.magenta}33)`
                  }}
                />
                {/* Floating accents */}
                <div className="absolute inset-0 mix-blend-screen opacity-70">
                  <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <radialGradient id="g" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor={neon.teal} stopOpacity="0.5" />
                        <stop offset="100%" stopColor="transparent" />
                      </radialGradient>
                    </defs>
                    <circle cx="60" cy="60" r="80" fill="url(#g)" />
                    <circle cx="320" cy="240" r="70" fill="url(#g)" />
                  </svg>
                </div>
                {/* Label */}
                <div className="absolute inset-0 flex items-end p-4">
                  <div className="w-full flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold drop-shadow-md">{it.title}</h3>
                      <p className="text-sm text-slate-300">{it.tag}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs" style={{ background: `${neon.teal}30`, color: '#0af8cd' }}>Open</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(600px 200px at 50% 100%, ${neon.magenta}20, transparent 70%)` }} />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal for embedded work */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} />
            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-6xl h-[75vh] sm:h-[80vh] overflow-hidden rounded-2xl border shadow-2xl"
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16 }}
              style={{ borderColor: `${neon.pink}66`, background: 'linear-gradient(180deg, rgba(10,14,28,0.75), rgba(10,14,28,0.55))' }}
            >
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full" style={{ background: neon.pink }} />
                  <span className="size-2 rounded-full" style={{ background: neon.teal }} />
                  <span className="size-2 rounded-full" style={{ background: neon.blue }} />
                  <span className="ml-3 text-sm text-slate-200/90">{active?.title}</span>
                </div>
                <button onClick={close} className="px-3 py-1 text-xs rounded-md border border-white/10 hover:bg-white/5 transition">
                  Close
                </button>
              </div>
              <iframe
                title={active?.title}
                src={active?.url}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
