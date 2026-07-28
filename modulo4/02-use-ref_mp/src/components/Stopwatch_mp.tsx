// src/components/Stopwatch_mp.tsx

import { useState, useRef } from 'react'

export default function Stopwatch_mp() {
  const [tiempo,   setTiempo]  = useState(0)
  const [corriendo, setCorriendo] = useState(false)

  // ReturnType<typeof setInterval> es el tipo correcto para el ID
  // del interval — funciona igual en browser y Node.js
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  function handleIniciar() {
    if (corriendo) return
    setCorriendo(true)
    intervalRef.current = setInterval(() => {
      setTiempo((prev) => prev + 1)
    }, 1000)
  }

  function handlePausar() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setCorriendo(false)
  }

  function handleReset() {
    handlePausar()
    setTiempo(0)
  }

  const minutos = Math.floor(tiempo / 60).toString().padStart(2, '0')
  const segundos = (tiempo % 60).toString().padStart(2, '0')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
        Tiempo de uso del vehículo en el patio
      </p>
      <p style={{ fontFamily: 'monospace', fontSize: 36, margin: 0, letterSpacing: 4 }}>
        {minutos}:{segundos}
      </p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={handleIniciar}
          disabled={corriendo}
          style={btnStyle('#22c55e')}
        >
          Iniciar
        </button>
        <button
          onClick={handlePausar}
          disabled={!corriendo}
          style={btnStyle('#f59e0b')}
        >
          Pausar
        </button>
        <button
          onClick={handleReset}
          style={btnStyle('#6b7280')}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

function btnStyle(bg: string) {
  return {
    padding: '8px 16px',
    background: bg,
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontWeight: 500,
  }
}
