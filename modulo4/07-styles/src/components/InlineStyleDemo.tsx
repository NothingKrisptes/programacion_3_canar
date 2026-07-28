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

  const card1: CSSProperties = {
    border:       '1px solid var(--border)',
    background:   'var(--card)',
    borderRadius: 15,
    padding:      20,
    backgroundColor: 'purple',
  }

  const title1: CSSProperties = {
    margin:     '0 0 10px 0',
    color:      'var(--accent)',
    fontWeight: 600,
  }

  return (
    <><div style={card}>
      <h3 style={title}>Inline styles</h3>
      <p style={{ margin: 0, color: 'var(--muted)' }}> 
        Estilos como objetos JS dentro del componente. Útil para valores dinámicos
        pero sin soporte de pseudo-clases (<code>:hover</code>) ni media queries.
      </p>
    </div>
    <br></br>
    <div style={card1}>
      <h3 style={title1}>Style</h3>
      <p style={{ margin: 1 , color: 'black' }}>  
        Este estilo es propiedad de Christian Cañar y estoy haciendo una practica
        para tener un punto(<code>:extra</code>) para alcanzar el 10.
      </p>
    </div>
    </>
  )
}