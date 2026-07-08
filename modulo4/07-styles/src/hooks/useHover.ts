// src/hooks/useHover.ts

import { useState, useCallback } from 'react'
import type { CSSProperties } from 'react'

interface UseHoverReturn {
  hoverProps: {
    onMouseEnter: () => void
    onMouseLeave: () => void
  }
  style: CSSProperties
}

export function useHover(
  baseStyle:  CSSProperties,
  hoverStyle: CSSProperties
): UseHoverReturn {
  const [hovered, setHovered] = useState(false)

  const onMouseEnter = useCallback(() => setHovered(true),  [])
  const onMouseLeave = useCallback(() => setHovered(false), [])

  return {
    hoverProps: { onMouseEnter, onMouseLeave },
    style:      hovered ? { ...baseStyle, ...hoverStyle } : baseStyle,
  }
}