// src/components/LoginForm.tsx

import { useState } from 'react'
import { useAuth }  from '../contexts/AuthContext'

export default function LoginForm() {
  const { state, login } = useAuth()
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await login(email, password)
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 300 }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo electrónico"
        disabled={state.isLoading}
        style={inputStyle}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        disabled={state.isLoading}
        style={inputStyle}
      />

      {state.error && (
        <p style={{ margin: 0, fontSize: 13, color: '#ef4444' }}>
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={state.isLoading || !email || !password}
        style={{
          padding: '10px',
          background: state.isLoading ? '#93c5fd' : '#0070f3',
          color: '#fff', border: 'none', borderRadius: 6,
          cursor: state.isLoading ? 'not-allowed' : 'pointer',
          fontWeight: 500,
        }}
      >
        {state.isLoading ? 'Entrando...' : 'Iniciar sesión'}
      </button>

      <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>
        Prueba con error@test.com para ver el manejo de errores
      </p>
    </form>
  )
}

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #d1d5db',
  borderRadius: 6,
  fontSize: 14,
}