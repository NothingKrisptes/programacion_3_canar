// src/components/ThemeToggle_mp.tsx
// No recibe ninguna prop — lee el contexto directamente

import { useTheme } from '../contexts/ThemeContext_mp'

export default function ThemeToggle_mp() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '8px 16px',
        borderRadius: 20,
        border: '1px solid #d1d5db',
        background: theme === 'dark' ? '#1f2937' : '#f9fafb',
        color:      theme === 'dark' ? '#f9fafb' : '#1f2937',
        cursor: 'pointer',
        fontWeight: 500,
        fontSize: 14,
      }}
    >
      {theme === 'light' ? '🌙 Modo oscuro' : '☀️ Modo claro'}
    </button>
  )
}
