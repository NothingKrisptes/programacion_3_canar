// src/components/LiveClock_mp.tsx

import { useState, useEffect } from 'react'

export default function LiveClock_mp() {
  // Inicializador perezoso — new Date() se llama una sola vez
  const [hora, setHora] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Actualizando reloj de recepción');
      setHora(new Date())
      console.log('Reloj actualizado')
    }, 1000)

    // Limpieza obligatoria — detiene el interval al desmontar
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>Hora de recepción del vehículo</p>
      <p style={{ fontFamily: 'monospace', fontSize: 28, margin: 0, letterSpacing: 2 }}>
        {hora.toLocaleTimeString('es-EC', { hour12: true })}
      </p>
    </div>
  )
}
