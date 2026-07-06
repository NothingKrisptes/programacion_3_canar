// src/pages/LoginPage.tsx

import { useState }     from 'react'
import { useNavigate }  from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [loading,  setLoading]  = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    // Simulación de login
    await new Promise((r) => setTimeout(r, 800))

    // replace: true — reemplaza la entrada en el historial
    // el usuario no puede volver al login con el botón "atrás"
    navigate('/dashboard', { replace: true })
  }

  return (
    <div style={{ maxWidth: 320, margin: '0 auto' }}>
      <h1 style={{ fontSize: 22, marginBottom: 20 }}>Iniciar sesión</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          style={inputStyle}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
          style={inputStyle}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '10px', background: loading ? '#93c5fd' : '#0070f3',
            color: '#fff', border: 'none', borderRadius: 6,
            cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 500,
          }}
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  )
}

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #d1d5db',
  borderRadius: 6, fontSize: 14,
}