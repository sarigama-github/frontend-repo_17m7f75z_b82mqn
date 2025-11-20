import { motion } from 'framer-motion'

const neon = {
  pink: '#ef00ec',
  teal: '#0af8cd',
  purple: '#d00af8',
  magenta: '#f300d4',
  blue: '#007dff',
}

const items = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  tag: ['Brand', 'Motion', 'Art'][i % 3],
  img: `https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop`,
}))

export default function Portfolio() {
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
          {items.map((it, i) => (
            <motion.a
              key={it.id}
              href="#"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border backdrop-blur-xl"
              style={{ borderColor: `${neon.pink}44`, background: 'linear-gradient(180deg, rgba(20,24,38,0.6), rgba(20,24,38,0.35))' }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.title} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(600px 200px at 50% 100%, ${neon.magenta}20, transparent 70%)` }} />
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{it.title}</h3>
                  <p className="text-sm text-slate-300">{it.tag}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs" style={{ background: `${neon.teal}30`, color: '#0af8cd' }}>View</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
