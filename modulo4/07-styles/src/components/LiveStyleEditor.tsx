// src/components/LiveStyleEditor.tsx

import { useStyles } from '../hooks/useStyles'

export default function LiveStyleEditor() {
  const { style, setColor, setSize, setBold, reset, setBackgroundColor } = useStyles({
    backgroundColor: '#2c5899',
    color:      '#111827',
    fontSize:   16,
    fontWeight: 400,
  })

  return (
    <div style={{
      border:       '1px solid var(--border)',
      background:   'var(--card)',
      borderRadius: 10,
      padding:      16,
    }}>
      <h3 style={{ margin: '0 0 12px', color: 'var(--accent)', fontWeight: 800 }}>
        Hook useStyles — editor en tiempo real
      </h3>

      {/* Controles */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: 'var(--muted)' }}>
          Color
          <input
            type="color"
            defaultValue="#111827"
            onChange={e => setColor(e.target.value)}
            style={{ width: 48, height: 32, border: 'none', cursor: 'pointer' }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: 'var(--muted)' }}>
          Color de fondo
          <input
            type="backgroundColor"
            onChange={e => setBackgroundColor(e.target.value)}
            style={{ width: 48, height: 32, border: 'none', cursor: 'pointer' }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: 'var(--muted)' }}>
          Tamaño
          <input
            type="range"
            min={12}
            max={36}
            defaultValue={16}
            onChange={e => setSize(Number(e.target.value))}
          />
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--muted)', cursor: 'pointer' }}>
          <input
            type="checkbox"
            onChange={e => setBold(e.target.checked)}
          />
          Negrita
        </label>

        <button
          onClick={reset}
          style={{
            padding:      '4px 12px',
            border:       '1px solid var(--border)',
            borderRadius: 6,
            background:   'transparent',
            color:        'var(--muted)',
            cursor:       'pointer',
            fontSize:     13,
            alignSelf:    'flex-end',
          }}
        >
          Reset
        </button>
      </div>

      {/* Preview en tiempo real */}
      <div style={{
        padding:      12,
        border:       '1px dashed var(--border)',
        borderRadius: 8,
        background:   'var(--bg)',
      }}>
        <p style={{ margin: 0, ...style }}>
          Este texto cambia de estilo en tiempo real usando el hook useStyles.
        </p>
      </div>
    </div>
  )
}