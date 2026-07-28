// src/components/Stopwatch.tsx

import { useState, useRef } from 'react'

export default function Stopwatch() {
  const [time,    setTime]    = useState(0)
  const [running, setRunning] = useState(false)

  // ReturnType<typeof setInterval> es el tipo correcto para el ID
  // del interval — funciona igual en browser y Node.js
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  function handleStart() {
    if (running) return
    setRunning(true)
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000)
  }

  function handleStop() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setRunning(false)
  }

  function handleReset() {
    handleStop()
    setTime(0)
  }

  const minutes = Math.floor(time / 60).toString().padStart(2, '0')
  const seconds = (time % 60).toString().padStart(2, '0')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <p style={{ fontFamily: 'monospace', fontSize: 36, margin: 0, letterSpacing: 4 }}>
        {minutes}:{seconds}
      </p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={handleStart}
          disabled={running}
          style={btnStyle('#22c55e')}
        >
          Iniciar
        </button>
        <button
          onClick={handleStop}
          disabled={!running}
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