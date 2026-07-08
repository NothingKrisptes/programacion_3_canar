// src/components/HoverDemo.tsx

import { useHover } from '../hooks/useHover'

export default function HoverDemo() {
  const btn1 = useHover(
    {
      padding: '10px 20px', background: '#0070f3', color: 'white',
      border: 'none', borderRadius: 8, cursor: 'pointer',
      fontWeight: 600, transition: 'all 0.2s',
    },
    {
      background: '#2563eb',
      transform:  'translateY(-2px)',
      boxShadow:  '0 4px 12px rgba(0,112,243,0.35)',
    }
  )

  const btn2 = useHover(
    {
      padding: '10px 20px', background: 'transparent', color: 'var(--accent)',
      border: '1px solid var(--accent)', borderRadius: 8, cursor: 'pointer',
      fontWeight: 600, transition: 'all 0.2s',
    },
    { background: 'var(--accent)', color: 'white' }
  )

  const card = useHover(
    {
      border: '1px solid var(--border)', background: 'var(--card)',
      borderRadius: 10, padding: 16, transition: 'all 0.2s', cursor: 'default',
    },
    {
      borderColor: 'var(--accent)',
      boxShadow:   '0 4px 16px rgba(0,0,0,0.08)',
    }
  )

  return (
    <div {...card.hoverProps} style={card.style}>
      <h3 style={{ margin: '0 0 12px', color: 'var(--accent)', fontWeight: 800 }}>
        Hook useHover — estilos al pasar el cursor
      </h3>
      <p style={{ margin: '0 0 14px', color: 'var(--muted)', fontSize: 14 }}>
        Pasa el cursor sobre la tarjeta y sobre los botones para ver los efectos.
        El hook devuelve <code>hoverProps</code> y el <code>style</code> mezclado.
      </p>
      <div style={{ display: 'flex', gap: 10 }}>
        <button {...btn1.hoverProps} style={btn1.style}>Hover elevación</button>
        <button {...btn2.hoverProps} style={btn2.style}>Hover relleno</button>
      </div>
    </div>
  )
}