// src/components/tw/TwNavbar.tsx

import { NavLink } from 'react-router-dom'

// Función que devuelve clases según si la ruta está activa
const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-xl px-3 py-2 text-sm font-semibold transition border ${
    isActive
      ? 'border-white/20 bg-white/10 text-white'
      : 'border-transparent text-white/60 hover:text-white hover:bg-white/10'
  }`

export default function TwNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <span className="font-extrabold tracking-tight text-white">DevCursos</span>
        <nav className="flex items-center gap-1">
          <NavLink to="/"      className={linkClass} end>Inicio</NavLink>
          <NavLink to="/about" className={linkClass}>Acerca de</NavLink>
          <NavLink to="/contact" className={linkClass}>Contactanos</NavLink>
        </nav>
      </div>
    </header>
  )
}