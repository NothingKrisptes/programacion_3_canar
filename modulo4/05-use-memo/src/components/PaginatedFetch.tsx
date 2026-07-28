// src/components/PaginatedFetch.tsx

import { useState, useCallback, useEffect } from 'react'

interface User {
  id:       number
  name:     string
  email:    string
  username: string
}

const PAGE_SIZE = 5

export default function PaginatedFetch() {
  const [page,    setPage]    = useState(1)
  const [users,   setUsers]   = useState<User[]>([])
  const [total,   setTotal]   = useState(0)
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState<string | null>(null)

  // useCallback: fetchPage se recrea solo cuando `page` cambia
  const fetchPage = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      // JSONPlaceholder: _start y _limit para paginación
      const start = (page - 1) * PAGE_SIZE
      const res   = await fetch(
        `https://jsonplaceholder.typicode.com/users?_start=${start}&_limit=${PAGE_SIZE}`
      )
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      // El total viene en el header X-Total-Count
      const totalCount = Number(res.headers.get('x-total-count') ?? 10)
      const data: User[] = await res.json()
      setUsers(data)
      setTotal(totalCount)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Error')
    } finally {
      setLoading(false)
    }
  }, [page]) // ← nueva función solo cuando page cambia

  useEffect(() => { fetchPage() }, [fetchPage])

  const totalPages = Math.ceil(total / PAGE_SIZE) || 1

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 540, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>PaginatedFetch</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        <code>useCallback</code> con <code>[page]</code> como dep — fetch al cambiar de página.
      </p>

      {error && (
        <div style={{
          padding:    12,
          background: '#fef2f2',
          border:     '1px solid #fca5a5',
          borderRadius: 8,
          color:      '#dc2626',
          marginBottom: 16,
          fontSize:   14,
        }}>
          {error}
        </div>
      )}

      {loading ? (
        <div style={{ textAlign: 'center', padding: 32, color: '#aaa' }}>Cargando…</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
          {users.map(u => (
            <div key={u.id} style={{
              display:        'flex',
              justifyContent: 'space-between',
              alignItems:     'center',
              padding:        '10px 14px',
              background:     '#f9f9f9',
              borderRadius:   8,
              border:         '1px solid #eee',
            }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{u.name}</div>
                <div style={{ fontSize: 12, color: '#888' }}>@{u.username}</div>
              </div>
              <div style={{ fontSize: 13, color: '#555' }}>{u.email}</div>
            </div>
          ))}
        </div>
      )}

      {/* Paginación */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center' }}>
        <button
          onClick={() => setPage(1)}
          disabled={page === 1 || loading}
          style={{ padding: '5px 10px', borderRadius: 6, border: '1px solid #ddd', cursor: 'pointer' }}
        >«</button>
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1 || loading}
          style={{ padding: '5px 10px', borderRadius: 6, border: '1px solid #ddd', cursor: 'pointer' }}
        >‹</button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
          <button
            key={p}
            onClick={() => setPage(p)}
            disabled={loading}
            style={{
              padding:    '5px 12px',
              borderRadius: 6,
              border:     '1px solid',
              borderColor: p === page ? '#0070f3' : '#ddd',
              background:  p === page ? '#0070f3' : 'white',
              color:       p === page ? 'white'    : '#333',
              cursor:      'pointer',
              fontWeight:  p === page ? 700 : 400,
            }}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          disabled={page === totalPages || loading}
          style={{ padding: '5px 10px', borderRadius: 6, border: '1px solid #ddd', cursor: 'pointer' }}
        >›</button>
        <button
          onClick={() => setPage(totalPages)}
          disabled={page === totalPages || loading}
          style={{ padding: '5px 10px', borderRadius: 6, border: '1px solid #ddd', cursor: 'pointer' }}
        >»</button>
      </div>

      <p style={{ textAlign: 'center', fontSize: 12, color: '#aaa', marginTop: 10 }}>
        Página {page} de {totalPages} · {total} usuarios en total
      </p>
    </div>
  )
}