// src/components/InlineStyleDemo.tsx

import type { CSSProperties } from 'react'

export default function InlineStyleDemo() {
  // CSSProperties tipa el objeto — TypeScript detecta errores al escribir
  const card: CSSProperties = {
    border:       '1px solid var(--border)',
    background:   'var(--card)',
    borderRadius: 10,
    padding:      16,
  }

  const title: CSSProperties = {
    margin:     '0 0 8px 0',
    color:      'var(--accent)',
    fontWeight: 800,
  }

  return (
    <div style={card}>
      <h3 style={title}>Inline styles</h3>
      <p style={{ margin: 0, color: 'var(--muted)' }}>
        Estilos como objetos JS dentro del componente. Útil para valores dinámicos
        pero sin soporte de pseudo-clases (<code>:hover</code>) ni media queries.
      </p>
    </div>
  )
}