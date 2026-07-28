// src/components/SearchWithEffect.tsx

import { useState, useEffect } from 'react'

const MOCK_DB: Record<string, string> = {
  react:      'Biblioteca para construir interfaces de usuario.',
  typescript: 'JavaScript con tipos estáticos.',
  vite:       'Herramienta de desarrollo frontend ultrarrápida.',
  hooks:      'Funciones que permiten usar estado y efectos en componentes funcionales.',
}

export default function SearchWithEffect() {
  const [query,  setQuery]  = useState('')
  const [result, setResult] = useState<string | null>(null)

  useEffect(() => {
    const normalized = query.toLowerCase().trim()

    if (!normalized) {
      setResult(null)
      return
    }

    const found = MOCK_DB[normalized]
    setResult(found ?? 'Sin resultados para esa búsqueda.')
  }, [query])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 340 }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Busca: react, typescript, vite, hooks..."
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
        }}
      />
      {result && (
        <p style={{ margin: 0, fontSize: 14, color: '#374151', padding: '8px 12px', background: '#f9fafb', borderRadius: 6 }}>
          {result}
        </p>
      )}
    </div>
  )
}