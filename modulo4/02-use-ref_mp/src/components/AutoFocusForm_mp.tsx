// src/components/AutoFocusForm_mp.tsx

import { useRef, useEffect } from 'react'

export default function AutoFocusForm_mp() {
  const conductorRef  = useRef<HTMLInputElement>(null)
  const emailRef      = useRef<HTMLInputElement>(null)

  // Foco en el primer campo al montar
  useEffect(() => {
    conductorRef.current?.focus()
  }, [])

  function handleConductorKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    // Avanza al siguiente campo con Enter
    if (e.key === 'Enter') {
      e.preventDefault()
      emailRef.current?.focus()
    }
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 300 }}>
      <input
        ref={conductorRef}
        placeholder="Nombre del conductor"
        onKeyDown={handleConductorKeyDown}
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <input
        ref={emailRef}
        type="email"
        placeholder="Email de contacto"
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <button
        type="submit"
        style={{ padding: '8px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
      >
        Confirmar Reserva
      </button>
    </form>
  )
}
