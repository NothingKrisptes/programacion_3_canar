// src/components/InlineEditor.tsx

import { useRef, useState } from 'react'

export default function InlineEditor() {
  const inputRef = useRef<HTMLInputElement>(null)
  const inputRef2 = useRef<HTMLInputElement>(null)
  const [saved, setSaved] = useState('Escribe algo y guarda')

  function handleSave() {
    // Se lee el valor directamente del DOM — sin useState intermedio
    const value = inputRef.current?.value ?? ''
    const value2 = inputRef2.current?.value ?? ''
    setSaved(value.trim() && value2.trim() === '' ? '(vacío)' : value+' '+value2)
  }

  function handleClear() {
    if (inputRef.current) {
      inputRef.current.value = ''  // muta el DOM directamente
      inputRef.current.focus()
       if (inputRef2.current) {
        inputRef2.current.value = ''  // muta el DOM directamente
        inputRef2.current.focus()
     }
    }
  }

  return (
    <div style={{ maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
        Guardado: <strong style={{ color: '#ffffff' }}>{saved} </strong>
      </p>

      <input
        ref={inputRef}
        defaultValue=""
        placeholder="Escribe sin causar re-renders..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <input
        ref={inputRef2}
        defaultValue=""
        placeholder="Continuacion del input..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={handleSave}
          style={{ flex: 1, padding: '8px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Guardar
        </button>
        <button
          onClick={handleClear}
          style={{ padding: '8px 16px', background: '#f3f4f6', color: '#6b7280', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Limpiar
        </button>
      </div>
    </div>
  )
}