// src/components/MemoizedList.tsx

import { useState, useCallback, memo } from 'react'

interface Task {
  id:        number
  text:      string
  completed: boolean
}

const INITIAL_TASKS: Task[] = [
  { id: 1, text: 'Diseñar la interfaz',    completed: false },
  { id: 2, text: 'Implementar los hooks',  completed: true  },
  { id: 3, text: 'Escribir los tests',     completed: false },
  { id: 4, text: 'Revisar accesibilidad',  completed: false },
  { id: 5, text: 'Deploy en producción',   completed: false },
]

// ─── Fila memoizada ──────────────────────────────────────────────────────
let rowRenderCount = 0

const TaskRow = memo(function TaskRow({
  task,
  onToggle,
  onDelete,
}: {
  task:     Task
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}) {
  rowRenderCount++
  const count = rowRenderCount

  return (
    <div style={{
      display:        'flex',
      alignItems:     'center',
      gap:            10,
      padding:        '10px 14px',
      background:     task.completed ? '#f0fdf4' : '#fafafa',
      borderRadius:   8,
      border:         '1px solid',
      borderColor:    task.completed ? '#86efac' : '#e5e5e5',
    }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        style={{ cursor: 'pointer', width: 16, height: 16 }}
      />
      <span style={{
        flex:           1,
        fontSize:       14,
        textDecoration: task.completed ? 'line-through' : 'none',
        color:          task.completed ? '#666' : '#111',
      }}>
        {task.text}
      </span>
      <span style={{ fontSize: 11, color: '#aaa' }}>render #{count}</span>
      <button
        onClick={() => onDelete(task.id)}
        style={{
          padding:      '2px 8px',
          borderRadius: 4,
          border:       '1px solid #fca5a5',
          background:   '#fef2f2',
          color:        '#dc2626',
          cursor:       'pointer',
          fontSize:     12,
        }}
      >
        ✕
      </button>
    </div>
  )
})

// ─── Padre ───────────────────────────────────────────────────────────────
export default function MemoizedList() {
  const [tasks,   setTasks]   = useState<Task[]>(INITIAL_TASKS)
  const [counter, setCounter] = useState(0)

  // useCallback: onToggle y onDelete tienen referencia estable
  // TaskRow no re-renderiza cuando solo cambia `counter`
  const handleToggle = useCallback((id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }, []) // sin dependencias externas — setTasks es estable

  const handleDelete = useCallback((id: number) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 520, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>MemoizedList</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        <code>React.memo</code> + <code>useCallback</code> — las filas no re-renderizan por un counter ajeno.
      </p>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20 }}>
        <button
          onClick={() => setCounter(c => c + 1)}
          style={{ padding: '6px 16px', borderRadius: 6, border: '1px solid #ccc', cursor: 'pointer' }}
        >
          Incrementar counter ({counter})
        </button>
        <span style={{ fontSize: 13, color: '#888' }}>
          ← no debe re-renderizar las filas
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {tasks.map(task => (
          <TaskRow
            key={task.id}
            task={task}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <p style={{ marginTop: 16, fontSize: 12, color: '#aaa' }}>
        Render total de filas: {rowRenderCount}
        {' '}(debería crecer solo al hacer toggle o delete, no al pulsar el counter)
      </p>
    </div>
  )
}