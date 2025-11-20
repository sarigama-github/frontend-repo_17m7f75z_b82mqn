import Hero from './components/Hero'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-fuchsia-500/40 selection:text-white">
      {/* Matrix x Pandora starfield background */}
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          background:
            'radial-gradient(circle at 20% 10%, rgba(0,125,255,0.15), transparent 50%), radial-gradient(circle at 80% 0%, rgba(243,0,212,0.12), transparent 55%), radial-gradient(circle at 50% 90%, rgba(10,248,205,0.12), transparent 55%)'
        }} />
      </div>

      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="size-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-sky-500 shadow-[0_0_20px_#f300d4]" />
            <span className="font-semibold text-white/90">Tommy Gail</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-white/70">
            <a href="#features" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Portfolio />
        <Contact />
      </main>

      <footer className="relative py-12 text-center text-slate-400">
        <p>© {new Date().getFullYear()} Tommy Gail — AI Designer</p>
      </footer>
    </div>
  )
}

export default App
