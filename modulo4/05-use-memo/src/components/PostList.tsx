// Uso — toda la lógica de fetch en una línea
import { useFetch } from '../hooks/useFetch'

interface Post { id: number; title: string; body: string }

export default function PostList() {
  const { data: posts, loading, error } = useFetch<Post[]>(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  )

  if (loading) return <p style={{ color: '#6b7280' }}>Cargando...</p>
  if (error)   return <p style={{ color: '#ef4444' }}>Error: {error}</p>

  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {posts?.map((post) => (
        <li key={post.id} style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600, fontSize: 14 }}>{post.title}</p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {post.body.slice(0, 80)}...
          </p>
        </li>
      ))}
    </ul>
  )
}