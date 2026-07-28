// src/components/DebounceSearch_mp.tsx

import { useState, useEffect } from 'react'

export default function DebounceSearch_mp() {
  const [placa,           setPlaca]           = useState('')
  const [placaBuscada,    setPlacaBuscada]    = useState('')

  useEffect(() => {
    // Se ejecuta 500ms después de que el usuario dejó de escribir
    const timer = setTimeout(() => {
      console.log('Consultar disponibilidad del vehículo en la API');
      setPlacaBuscada(placa)
    }, 500)

    // La limpieza cancela el timer si placa vuelve a cambiar
    // antes de que pasen los 500ms
    return () => clearTimeout(timer)
  }, [placa])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <input
        value={placa}
        onChange={(e) => setPlaca(e.target.value)}
        placeholder="Escribe la placa del vehículo..."
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
        }}
      />
      <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
        Placa consultada (500ms): <strong>{placaBuscada || '—'}</strong>
      </p>
      <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>
        Útil para evitar llamadas a la API en cada pulsación de tecla.
      </p>
    </div>
  )
}
