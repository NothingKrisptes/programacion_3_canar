// src/components/InlineEditor_mp.tsx

import { useRef, useState } from 'react'

export default function InlineEditor_mp() {
  const placaRef   = useRef<HTMLInputElement>(null)
  const notasRef   = useRef<HTMLInputElement>(null)
  const [guardado, setGuardado] = useState('Escribe la placa y las notas del vehículo')

  function handleGuardar() {
    // Se lee el valor directamente del DOM — sin useState intermedio
    const placa = placaRef.current?.value ?? ''
    const notas = notasRef.current?.value ?? ''
    setGuardado(placa.trim() && notas.trim() === '' ? '(vacío)' : placa + ' ' + notas)
  }

  function handleLimpiar() {
    if (placaRef.current) {
      placaRef.current.value = ''  // muta el DOM directamente
      placaRef.current.focus()
       if (notasRef.current) {
        notasRef.current.value = ''  // muta el DOM directamente
        notasRef.current.focus()
     }
    }
  }

  return (
    <div style={{ maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
        Guardado: <strong style={{ color: '#ffffff' }}>{guardado} </strong>
      </p>

      <input
        ref={placaRef}
        defaultValue=""
        placeholder="Placa del vehículo (sin causar re-renders)..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <input
        ref={notasRef}
        defaultValue=""
        placeholder="Notas de inspección..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={handleGuardar}
          style={{ flex: 1, padding: '8px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Guardar
        </button>
        <button
          onClick={handleLimpiar}
          style={{ padding: '8px 16px', background: '#f3f4f6', color: '#6b7280', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Limpiar
        </button>
      </div>
    </div>
  )
}
