// src/theme/ThemeContext.tsx
// React 19 — <ThemeContext value={...}> sin .Provider

import { createContext, useContext, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme:       Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  function toggleTheme() {
    setTheme(t => t === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      <div
        data-theme={theme}
        style={{
          background: 'var(--bg)',
          color:      'var(--text)',
          minHeight:  '100vh',
          transition: 'background 0.25s, color 0.25s',
        }}
      >
        {children}
      </div>
    </ThemeContext>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme debe usarse dentro de ThemeProvider')
  return ctx
}