// src/components/DocumentTitle.tsx

import { useEffect } from 'react'

export default function DocumentTitle() {
  const randomNumber = Math.random();
  useEffect(() => {
    document.title = 'Christian Cañar'
    console.log('efecto ejecutado')
    console.log('Número cualquiera',randomNumber)

    // Limpieza: restaurar el título al desmontar
    return () => {
      document.title = 'React App'
      console.log('limpieza ejecutado')
    }
  }, [randomNumber])

  return (
    <p style={{ fontSize: 14, color: '#6b7280' }}>
      El título de la pestaña cambió al montar este componente.
    </p>
  )
}