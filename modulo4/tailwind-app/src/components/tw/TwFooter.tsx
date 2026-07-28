// src/components/tw/TwFooter.tsx

export default function TwFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-6">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4">
        <span className="font-extrabold text-white">DevCursos</span>
        <span className="text-sm text-white/40">
          Construido con Tailwind CSS v4 + React 19
        </span>
        <div className="flex gap-4">
          <a href="#" className="text-sm text-white/50 hover:text-white transition">Docs</a>
          <a href="#" className="text-sm text-white/50 hover:text-white transition">GitHub</a>
        </div>
      </div>
    </footer>
  )
}