// src/components/OnlineStatus.tsx

import { useState, useEffect } from 'react'

export default function OnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    function handleOnline()  { setIsOnline(true)  }
    function handleOffline() { setIsOnline(false) }

    window.addEventListener('online',  handleOnline)
    window.addEventListener('offline', handleOffline)

    // Limpieza — se ejecuta al desmontar
    return () => {
      window.removeEventListener('online',  handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <p style={{ color: isOnline ? '#166534' : '#991b1b', fontWeight: 500 }}>
      {isOnline ? '🟢 Conectado a Internet' : '🔴 Sin conexión'}
    </p>
  )
}