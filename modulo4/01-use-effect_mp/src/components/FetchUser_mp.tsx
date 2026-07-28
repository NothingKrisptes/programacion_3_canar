// src/components/FetchUser_mp.tsx

import { useState, useEffect } from 'react'

interface Cliente {
  id:       number
  name:     string
  email:    string
  username: string
  address: any
  website: string
}

export default function FetchUser_mp() {
  const [clienteId, setClienteId] = useState(1)
  const [cliente,   setCliente]   = useState<Cliente | null>(null)
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState<string | null>(null)

  useEffect(() => {
    // Flag de cancelación — evita race conditions y
    // actualizaciones de estado en componentes desmontados
    let cancelled = false

    async function fetchCliente() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${clienteId}`
        )
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)

        const data: Cliente = await res.json()

        // Solo actualiza si el componente sigue montado
        if (!cancelled) setCliente(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchCliente()

    return () => { cancelled = true }
  }, [clienteId])

  return (
    <div style={{ maxWidth: 420 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {[1, 2, 3, 4, 5].map((id) => (
          <button
            key={id}
            onClick={() => setClienteId(id)}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              border: '1px solid #d1d5db',
              background: clienteId === id ? '#0070f3' : '#fff',
              color:      clienteId === id ? '#fff'    : '#333',
              cursor: 'pointer',
              fontWeight: clienteId === id ? 600 : 400,
            }}
          >
            Cliente {id}
          </button>
        ))}
      </div>

      {loading && (
        <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando datos del cliente...</p>
      )}
      {error && (
        <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>
      )}
      {cliente && !loading && (
        <div style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600 }}>{cliente.name}</p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
            @{cliente.username}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {cliente.email}
          </p>
           <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {cliente.address.street}
          </p>
           <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {cliente.address.city}
          </p>
           <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {cliente.website}
          </p>
           <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {cliente.address.geo.lat}
          </p>
        </div>
      )}
    </div>
  )
}
