// src/hooks/useStyles.ts

import { useState, useCallback } from 'react'
import type { CSSProperties } from 'react'

interface UseStylesReturn {
  style:    CSSProperties
  setColor: (color: string) => void
  setSize:  (size: number) => void
  setBold:  (bold: boolean) => void
  reset:    () => void
  setBackgroundColor: (backgroundColor:string) => void
}

const DEFAULT: CSSProperties = {
  backgroundColor: '#1b43a0',
  color:      '#10141d',
  fontSize:   16,
  fontWeight: 400,
}

export function useStyles(
  initial: CSSProperties = DEFAULT
): UseStylesReturn {
  const [style, setStyle] = useState<CSSProperties>(initial)

  const setColor = useCallback((color: string) => {
    setStyle(prev => ({ ...prev, color }))
  }, [])

  const setBackgroundColor = useCallback((backgroundColor: string) => {
    setStyle(prev => ({ ...prev, backgroundColor }))
  }, [])

  const setSize = useCallback((size: number) => {
    setStyle(prev => ({ ...prev, fontSize: size }))
  }, [])

  const setBold = useCallback((bold: boolean) => {
    setStyle(prev => ({ ...prev, fontWeight: bold ? 700 : 400 }))
  }, [])

  const reset = useCallback(() => setStyle(initial), [initial])

  return { style, setColor, setSize, setBold, reset, setBackgroundColor }
}