// src/components/DocumentTitle_mp.tsx

import { useEffect } from 'react'

export default function DocumentTitle_mp() {
  const numeroReserva = Math.floor(Math.random() * 10000);

  useEffect(() => {
    document.title = `Wheels To Go - Reserva #${numeroReserva}`
    console.log('efecto ejecutado')
    console.log('Número de reserva generado:', numeroReserva)

    // Limpieza: restaurar el título al desmontar
    return () => {
      document.title = 'Wheels To Go'
      console.log('limpieza ejecutado')
    }
  }, [numeroReserva])

  return (
    <p style={{ fontSize: 14, color: '#6b7280' }}>
      El título de la pestaña cambió al abrir esta reserva.
    </p>
  )
}
