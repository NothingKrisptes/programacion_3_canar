// src/components/DebounceSearch.tsx

import { useState, useEffect } from 'react'

export default function DebounceSearch() {
  const [input,          setInput]          = useState('')
  const [debouncedValue, setDebouncedValue] = useState('')

  useEffect(() => {
    // Se ejecuta 500ms después de que el usuario dejó de escribir
    const timer = setTimeout(() => {
      console.log('Consultar API');
      setDebouncedValue(input)
    }, 500)

    // La limpieza cancela el timer si input vuelve a cambiar
    // antes de que pasen los 500ms
    return () => clearTimeout(timer)
  }, [input])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe algo..."
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
        }}
      />
      <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
        Valor debounced (500ms): <strong>{debouncedValue || '—'}</strong>
      </p>
      <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>
        Útil para evitar llamadas a API en cada pulsación de tecla.
      </p>
    </div>
  )
}