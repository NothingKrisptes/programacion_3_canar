// src/contexts/ThemeContext.tsx

import { createContext, useContext, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme:       Theme
  toggleTheme: () => void
}

// null como valor inicial — el guard en el hook lo protege
const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext>
  )
}

// Hook personalizado que encapsula el useContext + guard
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme debe usarse dentro de <ThemeProvider>')
  return context
}