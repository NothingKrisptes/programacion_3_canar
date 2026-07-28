// Uso — API idéntica a useState, pero persiste entre recargas
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function ThemeSelector() {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light')

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {(['light', 'dark'] as const).map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          style={{
            padding: '6px 14px', borderRadius: 6,
            border: '1px solid #d1d5db',
            background: theme === t ? '#0070f3' : '#fff',
            color:      theme === t ? '#fff'    : '#333',
            cursor: 'pointer',
          }}
        >
          {t === 'light' ? '☀️ Claro' : '🌙 Oscuro'}
        </button>
      ))}
    </div>
  )
}