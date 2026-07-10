// src/AppLab.tsx

import { useState } from 'react'
import FormularioUsuario from './components/shadcn/FormularioUsuario'
import TarjetaProducto from './components/shadcn/TarjetaProducto'

type LabKey = 'buttons' | 'alert' | 'card' | 'form' | 'table'

export default function AppShadcn() {
  const [lab, setLab] = useState<LabKey>('buttons')

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="flex items-center gap-4 border-b border-white/10 bg-slate-900 px-4 py-2">
        <span className="font-bold text-white text-sm">Tailwind v4 LAB</span>
        <select
          className="rounded-lg border border-white/10 bg-slate-800 px-3 py-1 text-sm text-white outline-none"
          value={lab}
          onChange={e => setLab(e.target.value as LabKey)}
        >
          <option value="card">Cards</option>
          <option value="form">Form</option>
        </select>
      </div>

      {lab === 'card'    && <TarjetaProducto />}
      {lab === 'form'    && <FormularioUsuario />}
    </div>
  )
}