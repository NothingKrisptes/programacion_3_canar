// src/AppLab.tsx

import { useState } from 'react'
import LabTwButtons from './lab/LabTwButtons'
import LabTwAlert   from './lab/LabTwAlert'
import LabTwCard    from './lab/LabTwCard'
import LabTwForm    from './lab/LabTwForm'
import LabTwTable   from './lab/LabTwTable'

type LabKey = 'buttons' | 'alert' | 'card' | 'form' | 'table'

export default function AppLab() {
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
          <option value="buttons">Buttons</option>
          <option value="alert">Alerts</option>
          <option value="card">Cards</option>
          <option value="form">Form</option>
          <option value="table">Table</option>
        </select>
      </div>

      {lab === 'buttons' && <LabTwButtons />}
      {lab === 'alert'   && <LabTwAlert />}
      {lab === 'card'    && <LabTwCard />}
      {lab === 'form'    && <LabTwForm />}
      {lab === 'table'   && <LabTwTable />}
    </div>
  )
}