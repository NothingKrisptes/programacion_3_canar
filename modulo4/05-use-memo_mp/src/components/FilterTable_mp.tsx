// src/components/FilterTable_mp.tsx

import { useState, useCallback, useMemo, memo } from 'react'

interface VehiculoFlota {
  id:         number
  name:       string
  department: string
  salary:     number
  active:     boolean
}

const FLOTA: VehiculoFlota[] = [
  { id: 1, name: 'PCX-1234 Sedán',    department: 'Sedán',     salary: 35, active: true  },
  { id: 2, name: 'PBX-5678 SUV',      department: 'SUV',       salary: 50, active: true  },
  { id: 3, name: 'TBY-9012 Pickup',   department: 'Pickup',    salary: 60, active: false },
  { id: 4, name: 'QWX-3344 SUV',      department: 'SUV',       salary: 75, active: true  },
  { id: 5, name: 'RTZ-7788 Sedán',    department: 'Sedán',     salary: 45, active: true  },
  { id: 6, name: 'HJK-2211 Furgoneta',department: 'Furgoneta', salary: 70, active: false },
]

// ─── Fila memoizada ──────────────────────────────────────────────────────
const VehiculoRow = memo(function VehiculoRow({
  emp,
  onToggle,
  onRaise,
  onRemove,
}: {
  emp:      VehiculoFlota
  onToggle: (id: number) => void
  onRaise:  (id: number, amount: number) => void
  onRemove: (id: number) => void
}) {
  return (
    <tr style={{ opacity: emp.active ? 1 : 0.5 }}>
      <td style={{ padding: '8px 12px', fontWeight: 500 }}>{emp.name}</td>
      <td style={{ padding: '8px 12px', color: '#666' }}>{emp.department}</td>
      <td style={{ padding: '8px 12px', fontWeight: 700 }}>${emp.salary.toLocaleString()}/día</td>
      <td style={{ padding: '8px 12px' }}>
        <span style={{
          padding:      '2px 10px',
          borderRadius: 999,
          fontSize:     12,
          fontWeight:   600,
          background:   emp.active ? '#dcfce7' : '#f3f4f6',
          color:        emp.active ? '#15803d' : '#6b7280',
        }}>
          {emp.active ? 'Disponible' : 'En mantenimiento'}
        </span>
      </td>
      <td style={{ padding: '8px 12px' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <button
            onClick={() => onToggle(emp.id)}
            style={{
              padding:      '3px 10px',
              borderRadius: 4,
              border:       '1px solid #d1d5db',
              cursor:       'pointer',
              fontSize:     12,
              background:   'white',
            }}
          >
            {emp.active ? 'Enviar a mantenimiento' : 'Habilitar'}
          </button>
          <button
            onClick={() => onRaise(emp.id, 5)}
            style={{
              padding:    '3px 10px',
              borderRadius: 4,
              border:     '1px solid #86efac',
              background: '#f0fdf4',
              color:      '#15803d',
              cursor:     'pointer',
              fontSize:   12,
            }}
          >
            +$5/día
          </button>
          <button
            onClick={() => onRemove(emp.id)}
            style={{
              padding:    '3px 10px',
              borderRadius: 4,
              border:     '1px solid #fca5a5',
              background: '#fef2f2',
              color:      '#dc2626',
              cursor:     'pointer',
              fontSize:   12,
            }}
          >
            ✕
          </button>
        </div>
      </td>
    </tr>
  )
})

// ─── Padre ───────────────────────────────────────────────────────────────
export default function FilterTable_mp() {
  const [flota,        setFlota]        = useState<VehiculoFlota[]>(FLOTA)
  const [tipoFilter,   setTipoFilter]   = useState('Todos')
  const [showInactive, setShowInactive] = useState(true)

  const tipos = useMemo(
    () => ['Todos', ...new Set(FLOTA.map(e => e.department))],
    []
  )

  const visible = useMemo(
    () => flota.filter(e =>
      (tipoFilter === 'Todos' || e.department === tipoFilter) &&
      (showInactive || e.active)
    ),
    [flota, tipoFilter, showInactive]
  )

  // useCallback: handlers estables → VehiculoRow no re-renderiza por filtros
  const handleToggle = useCallback((id: number) => {
    setFlota(prev => prev.map(e => e.id === id ? { ...e, active: !e.active } : e))
  }, [])

  const handleRaise = useCallback((id: number, amount: number) => {
    setFlota(prev => prev.map(e => e.id === id ? { ...e, salary: e.salary + amount } : e))
  }, [])

  const handleRemove = useCallback((id: number) => {
    setFlota(prev => prev.filter(e => e.id !== id))
  }, [])

  const totalTarifa = useMemo(() => visible.reduce((s, e) => s + e.salary, 0), [visible])

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 700, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Flota de Vehículos</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        Tres callbacks estables para una tabla con <code>React.memo</code>. Cambiar filtros no re-renderiza las filas.
      </p>

      {/* Filtros */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
        <select
          value={tipoFilter}
          onChange={e => setTipoFilter(e.target.value)}
          style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        >
          {tipos.map(d => <option key={d}>{d}</option>)}
        </select>
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={showInactive}
            onChange={e => setShowInactive(e.target.checked)}
          />
          Mostrar en mantenimiento
        </label>
        <span style={{ fontSize: 13, color: '#888', alignSelf: 'center' }}>
          {visible.length} vehículo{visible.length !== 1 ? 's' : ''} · Tarifa total: ${totalTarifa.toLocaleString()}/día
        </span>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            {['Placa/Modelo', 'Tipo', 'Tarifa', 'Estado', 'Acciones'].map(h => (
              <th key={h} style={{
                textAlign:    'left',
                padding:      '8px 12px',
                borderBottom: '2px solid #e5e5e5',
                fontWeight:   600,
                color:        '#555',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visible.map(emp => (
            <VehiculoRow
              key={emp.id}
              emp={emp}
              onToggle={handleToggle}
              onRaise={handleRaise}
              onRemove={handleRemove}
            />
          ))}
          {visible.length === 0 && (
            <tr>
              <td colSpan={5} style={{ padding: 24, textAlign: 'center', color: '#aaa' }}>
                Sin vehículos para los filtros actuales.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
