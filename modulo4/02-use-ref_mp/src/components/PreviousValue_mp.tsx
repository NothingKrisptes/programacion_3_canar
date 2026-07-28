// src/components/PreviousValue_mp.tsx

import { useState, useRef, useEffect } from 'react'

export default function PreviousValue_mp() {
  const [modelo, setModelo] = useState('')
  const previousRef = useRef('')

  useEffect(() => {
    // Se ejecuta DESPUÉS de renderizar con el nuevo `modelo`,
    // así que aquí guardamos el valor que quedará "anterior" en el próximo render
    previousRef.current = modelo
  }, [modelo])

  return (
    <div style={{ maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <input
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
        placeholder="Busca un modelo de vehículo..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <div style={{ display: 'flex', gap: 16, fontSize: 14 }}>
        <p style={{ margin: 0 }}>
          Búsqueda actual: <strong>{modelo || '—'}</strong>
        </p>
        <p style={{ margin: 0, color: '#6b7280' }}>
          Búsqueda anterior: <strong>{previousRef.current || '—'}</strong>
        </p>
      </div>
    </div>
  )
}
