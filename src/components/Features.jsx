import { motion } from 'framer-motion'
import { Sparkles, Cpu, Film, Image as ImageIcon, Gauge, Wand2 } from 'lucide-react'

const neon = {
  pink: '#ef00ec',
  teal: '#0af8cd',
  purple: '#d00af8',
  magenta: '#f300d4',
  blue: '#007dff',
}

const features = [
  {
    icon: <Wand2 className="size-6" />,
    title: 'AI Concepting',
    desc: 'Rapid ideation engines craft visuals from intent and moodboards.'
  },
  {
    icon: <ImageIcon className="size-6" />,
    title: 'Ultra-Resolution Art',
    desc: 'Bioluminescent textures and cinematic detail at any scale.'
  },
  {
    icon: <Film className="size-6" />,
    title: 'Motion & Video',
    desc: 'Surreal edits, neural effects, and holographic overlays.'
  },
  {
    icon: <Cpu className="size-6" />,
    title: 'Model Tuning',
    desc: 'Fine-tuned systems adapt to your brand DNA.'
  },
  {
    icon: <Gauge className="size-6" />,
    title: 'Realtime Pipelines',
    desc: 'From prompt to portfolio with GPU-accelerated speed.'
  },
  {
    icon: <Sparkles className="size-6" />,
    title: 'Style Transfer',
    desc: 'Transform assets into neon-cyber organic masterpieces.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-slate-950 text-white overflow-hidden">
      {/* floating particles */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        {[...Array(40)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.02, duration: 1 }}
            className="absolute block rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 12px ${neon.purple}AA, 0 0 24px ${neon.blue}55`,
              background: neon.pink,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-3xl sm:text-5xl font-black tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textShadow: `0 0 20px ${neon.pink}44` }}
        >
          Capabilities Engine
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="relative rounded-2xl p-6 backdrop-blur-xl border hover:-translate-y-1 transition-transform"
              style={{
                background: 'linear-gradient(180deg, rgba(15,20,32,0.6) 0%, rgba(15,20,32,0.35) 100%)',
                borderColor: `${neon.teal}55`,
                boxShadow: `0 20px 60px -20px ${neon.blue}30, inset 0 0 0 1px rgba(255,255,255,0.04)`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${neon.blue}30, ${neon.pink}30)`,
                    boxShadow: `0 10px 30px ${neon.magenta}30`,
                  }}
                >
                  <div className="text-white drop-shadow-[0_0_12px_rgba(239,0,236,0.6)]">{f.icon}</div>
                </div>

                <div>
                  <h3 className="text-xl font-bold">{f.title}</h3>
                  <p className="mt-2 text-slate-300">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
