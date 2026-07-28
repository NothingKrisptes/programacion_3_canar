// src/components/PostList_mp.tsx
// Uso — toda la lógica de fetch en una línea
import { useFetch } from '../hooks/useFetch_mp'

interface Resena { id: number; title: string; body: string }

export default function PostList_mp() {
  const { data: resenas, loading, error } = useFetch<Resena[]>(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  )

  if (loading) return <p style={{ color: '#6b7280' }}>Cargando...</p>
  if (error)   return <p style={{ color: '#ef4444' }}>Error: {error}</p>

  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {resenas?.map((resena) => (
        <li key={resena.id} style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600, fontSize: 14 }}>{resena.title}</p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {resena.body.slice(0, 80)}...
          </p>
        </li>
      ))}
    </ul>
  )
}
