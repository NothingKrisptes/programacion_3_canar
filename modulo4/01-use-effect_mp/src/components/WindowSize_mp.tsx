// src/components/WindowSize_mp.tsx

import { useState, useEffect } from 'react'

interface WindowDimensions {
  width:  number
  height: number
}

export default function WindowSize_mp() {
  const [dimensions, setDimensions] = useState<WindowDimensions>({
    width:  0,
    height: 0,
  })

  useEffect(() => {
    function handleResize() {
     console.log('resize detectado en el panel de reservas');
      setDimensions({
        width:  window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <p style={{ fontFamily: 'monospace', fontSize: 14, color: '#374151' }}>
      Panel de reservas: {dimensions.width} × {dimensions.height} px
    </p>
  )
}
