import { motion, useMotionValue, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const neon = {
  pink: '#ef00ec',
  teal: '#0af8cd',
  purple: '#d00af8',
  magenta: '#f300d4',
  blue: '#007dff',
}

export default function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [-50, 50], [8, -8])
  const rotateY = useTransform(mx, [-50, 50], [-8, 8])

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window
    const x = (e.clientX / innerWidth) * 100 - 50
    const y = (e.clientY / innerHeight) * 100 - 50
    mx.set(x)
    my.set(y)
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white"
    >
      {/* Holographic gradient aura */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 -left-32 size-[60rem] rounded-full blur-3xl opacity-30"
          style={{
            background:
              `radial-gradient(circle at 30% 30%, ${neon.pink}40, transparent 60%), radial-gradient(circle at 70% 40%, ${neon.blue}30, transparent 60%), radial-gradient(circle at 50% 70%, ${neon.teal}25, transparent 60%)`,
          }}
        />
        <div className="absolute -bottom-48 -right-32 size-[60rem] rounded-full blur-3xl opacity-40"
          style={{
            background:
              `radial-gradient(circle at 70% 70%, ${neon.magenta}40, transparent 60%), radial-gradient(circle at 40% 50%, ${neon.purple}35, transparent 60%)`,
          }}
        />
      </div>

      {/* 3D Spline Hero */}
      <div className="relative h-[70vh] sm:h-[80vh]">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft overlay to blend with UI */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/80" />
      </div>

      {/* Floating title card */}
      <motion.div
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative mx-auto -mt-24 max-w-5xl px-6"
      >
        <div className="group relative rounded-3xl p-8 sm:p-10 backdrop-blur-xl border shadow-2xl"
          style={{
            background: 'linear-gradient(180deg, rgba(12,15,25,0.65) 0%, rgba(12,15,25,0.35) 100%)',
            borderColor: '#3b82f680',
            boxShadow: `0 30px 80px -20px ${neon.blue}30, inset 0 0 0 1px rgba(255,255,255,0.04)`,
          }}
        >
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background:
                `radial-gradient(1200px 200px at 50% 0%, ${neon.blue}0f, transparent 60%), radial-gradient(800px 300px at 0% 100%, ${neon.pink}0f, transparent 60%), radial-gradient(800px 300px at 100% 100%, ${neon.teal}0f, transparent 60%)`,
            }}
          />

          <div className="relative">
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              style={{
                textShadow: `0 0 20px ${neon.blue}44, 0 0 40px ${neon.pink}22`,
              }}
            >
              Tommy Gail ~ Ai Designer
            </motion.h1>

            <motion.p
              className="mt-4 text-lg sm:text-2xl text-slate-300 max-w-3xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.7 }}
            >
              Revolutionizing Graphic Design Through AI Technology
            </motion.p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="#portfolio"
                whileHover={{ y: -2, boxShadow: `0 10px 30px ${neon.teal}40` }}
                className="relative rounded-full px-6 py-3 text-slate-900 font-semibold"
                style={{
                  background: `linear-gradient(135deg, ${neon.teal}, ${neon.blue})`,
                }}
              >
                Explore Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                className="rounded-full px-6 py-3 border text-white/90"
                style={{
                  borderColor: `${neon.pink}66`,
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
                }}
              >
                Start a Project
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
