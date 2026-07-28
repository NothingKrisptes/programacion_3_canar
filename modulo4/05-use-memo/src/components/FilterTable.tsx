// src/components/FilterTable.tsx

import { useState, useCallback, useMemo, memo } from 'react'

interface Employee {
  id:         number
  name:       string
  department: string
  salary:     number
  active:     boolean
}

const EMPLOYEES: Employee[] = [
  { id: 1, name: 'Ana García',    department: 'Diseño',       salary: 2800, active: true  },
  { id: 2, name: 'Luis Pérez',    department: 'Ingeniería',   salary: 3500, active: true  },
  { id: 3, name: 'María López',   department: 'Marketing',    salary: 2400, active: false },
  { id: 4, name: 'Carlos Ruiz',   department: 'Ingeniería',   salary: 4000, active: true  },
  { id: 5, name: 'Sofía Torres',  department: 'Diseño',       salary: 3100, active: true  },
  { id: 6, name: 'Pedro Jiménez', department: 'Marketing',    salary: 2600, active: false },
]

// ─── Fila memoizada ──────────────────────────────────────────────────────
const EmployeeRow = memo(function EmployeeRow({
  emp,
  onToggle,
  onRaise,
  onRemove,
}: {
  emp:      Employee
  onToggle: (id: number) => void
  onRaise:  (id: number, amount: number) => void
  onRemove: (id: number) => void
}) {
  return (
    <tr style={{ opacity: emp.active ? 1 : 0.5 }}>
      <td style={{ padding: '8px 12px', fontWeight: 500 }}>{emp.name}</td>
      <td style={{ padding: '8px 12px', color: '#666' }}>{emp.department}</td>
      <td style={{ padding: '8px 12px', fontWeight: 700 }}>${emp.salary.toLocaleString()}</td>
      <td style={{ padding: '8px 12px' }}>
        <span style={{
          padding:      '2px 10px',
          borderRadius: 999,
          fontSize:     12,
          fontWeight:   600,
          background:   emp.active ? '#dcfce7' : '#f3f4f6',
          color:        emp.active ? '#15803d' : '#6b7280',
        }}>
          {emp.active ? 'Activo' : 'Inactivo'}
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
            {emp.active ? 'Desactivar' : 'Activar'}
          </button>
          <button
            onClick={() => onRaise(emp.id, 200)}
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
            +$200
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
export default function FilterTable() {
  const [employees,   setEmployees]   = useState<Employee[]>(EMPLOYEES)
  const [deptFilter,  setDeptFilter]  = useState('Todos')
  const [showInactive,setShowInactive]= useState(true)

  const departments = useMemo(
    () => ['Todos', ...new Set(EMPLOYEES.map(e => e.department))],
    []
  )

  const visible = useMemo(
    () => employees.filter(e =>
      (deptFilter === 'Todos' || e.department === deptFilter) &&
      (showInactive || e.active)
    ),
    [employees, deptFilter, showInactive]
  )

  // useCallback: handlers estables → EmployeeRow no re-renderiza por filtros
  const handleToggle = useCallback((id: number) => {
    setEmployees(prev => prev.map(e => e.id === id ? { ...e, active: !e.active } : e))
  }, [])

  const handleRaise = useCallback((id: number, amount: number) => {
    setEmployees(prev => prev.map(e => e.id === id ? { ...e, salary: e.salary + amount } : e))
  }, [])

  const handleRemove = useCallback((id: number) => {
    setEmployees(prev => prev.filter(e => e.id !== id))
  }, [])

  const totalSalary = useMemo(() => visible.reduce((s, e) => s + e.salary, 0), [visible])

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 700, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>FilterTable</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        Tres callbacks estables para una tabla con <code>React.memo</code>. Cambiar filtros no re-renderiza las filas.
      </p>

      {/* Filtros */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
        <select
          value={deptFilter}
          onChange={e => setDeptFilter(e.target.value)}
          style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        >
          {departments.map(d => <option key={d}>{d}</option>)}
        </select>
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={showInactive}
            onChange={e => setShowInactive(e.target.checked)}
          />
          Mostrar inactivos
        </label>
        <span style={{ fontSize: 13, color: '#888', alignSelf: 'center' }}>
          {visible.length} empleado{visible.length !== 1 ? 's' : ''} · Salario total: ${totalSalary.toLocaleString()}
        </span>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            {['Nombre', 'Depto.', 'Salario', 'Estado', 'Acciones'].map(h => (
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
            <EmployeeRow
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
                Sin empleados para los filtros actuales.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}