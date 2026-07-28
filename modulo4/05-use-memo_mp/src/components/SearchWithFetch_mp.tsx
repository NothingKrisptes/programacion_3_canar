// src/components/SearchWithFetch_mp.tsx

import { useState, useEffect, useCallback } from 'react'

interface Resena {
  id:    number
  title: string
  body:  string
}

export default function SearchWithFetch_mp() {
  const [query,   setQuery]   = useState('')
  const [resenas, setResenas] = useState<Resena[]>([])
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState<string | null>(null)

  // useCallback: fetchResenas es estable mientras `query` no cambie.
  // Sin useCallback, sería una función nueva en cada render
  // → useEffect la vería como nueva dep → bucle infinito.
  const fetchResenas = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const url = query.trim()
        ? `https://jsonplaceholder.typicode.com/posts?_limit=5&title_like=${encodeURIComponent(query)}`
        : 'https://jsonplaceholder.typicode.com/posts?_limit=5'
      const res  = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data: Resena[] = await res.json()
      setResenas(data)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Error desconocido')
    } finally {
      setLoading(false)
    }
  }, [query]) // ← recrear solo cuando query cambia

  // useEffect seguro — fetchResenas es estable, no hay bucle
  useEffect(() => {
    fetchResenas()
  }, [fetchResenas])

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 540, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Buscar Reseñas de Clientes</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        <code>useCallback</code> estabiliza la función de fetch en las deps de <code>useEffect</code>.
      </p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Buscar en reseñas..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{
            flex:    1,
            padding: '8px 12px',
            border:  '1px solid #ccc',
            borderRadius: 8,
            fontSize: 14,
          }}
        />
        <button
          onClick={fetchResenas}
          style={{
            padding:      '8px 16px',
            borderRadius: 8,
            border:       '1px solid #0070f3',
            background:   '#0070f3',
            color:        'white',
            cursor:       'pointer',
            fontSize:     14,
          }}
        >
          Buscar
        </button>
      </div>

      {error && (
        <div style={{
          padding:      12,
          background:   '#fef2f2',
          border:       '1px solid #fca5a5',
          borderRadius: 8,
          color:        '#dc2626',
          fontSize:     14,
          marginBottom: 16,
        }}>
          {error}
        </div>
      )}

      {loading ? (
        <div style={{ textAlign: 'center', padding: 32, color: '#aaa' }}>Cargando…</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {resenas.map(resena => (
            <div key={resena.id} style={{
              padding:      '12px 16px',
              background:   '#f9f9f9',
              borderRadius: 8,
              border:       '1px solid #eee',
            }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>
                {resena.title}
              </div>
              <div style={{ fontSize: 13, color: '#666', lineHeight: 1.5 }}>
                {resena.body.slice(0, 100)}…
              </div>
            </div>
          ))}
          {resenas.length === 0 && !loading && (
            <p style={{ textAlign: 'center', color: '#aaa' }}>Sin resultados.</p>
          )}
        </div>
      )}
    </div>
  )
}
