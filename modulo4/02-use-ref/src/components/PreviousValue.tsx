// src/components/PreviousValue.tsx

import { useState, useRef, useEffect } from 'react'

export default function PreviousValue() {
  const [text, setText] = useState('')
  const previousRef = useRef('')

  useEffect(() => {
    // Se ejecuta DESPUÉS de renderizar con el nuevo `text`,
    // así que aquí guardamos el valor que quedará "anterior" en el próximo render
    previousRef.current = text
  }, [text])

  return (
    <div style={{ maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe algo..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <div style={{ display: 'flex', gap: 16, fontSize: 14 }}>
        <p style={{ margin: 0 }}>
          Actual: <strong>{text || '—'}</strong>
        </p>
        <p style={{ margin: 0, color: '#6b7280' }}>
          Anterior: <strong>{previousRef.current || '—'}</strong>
        </p>
      </div>
    </div>
  )
}