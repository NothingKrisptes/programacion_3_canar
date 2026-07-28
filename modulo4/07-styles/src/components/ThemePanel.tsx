// src/components/ThemePanel.tsx

import { useTheme } from '../theme/ThemeContext'

export default function ThemePanel() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div style={{
      border:       '1px solid var(--border)',
      background:   'var(--card)',
      borderRadius: 10,
      padding:      16,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h3 style={{ margin: 0, color: 'var(--accent)', fontWeight: 800 }}>
          Theming con Context + CSS variables
        </h3>
        <button
          onClick={toggleTheme}
          style={{
            padding:      '6px 14px',
            border:       '1px solid var(--border)',
            borderRadius: 8,
            background:   'var(--bg)',
            color:        'var(--text)',
            cursor:       'pointer',
            fontWeight:   600,
            fontSize:     13,
          }}
        >
          {theme === 'light' ? '🌙 Modo oscuro' : '☀️ Modo claro'}
        </button>
      </div>

      <p style={{ margin: '0 0 12px', color: 'var(--muted)', fontSize: 14 }}>
        El atributo <code>data-theme</code> en el contenedor raíz activa el bloque
        CSS correspondiente. Todos los componentes heredan las variables sin
        necesidad de props ni contexto adicional.
      </p>

      {/* Paleta visual de las variables activas */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {['--bg', '--card', '--border', '--text', '--accent', '--muted'].map(v => (
          <div
            key={v}
            style={{
              padding:      '4px 10px',
              background:   `var(${v})`,
              border:       '1px solid var(--border)',
              borderRadius: 6,
              fontSize:     12,
              color:        v === '--bg' || v === '--card' ? 'var(--text)' : 'var(--bg)',
            }}
          >
            {v}
          </div>
        ))}
      </div>
    </div>
  )
}