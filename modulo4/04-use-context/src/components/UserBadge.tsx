// src/components/UserBadge.tsx

import { useAuth } from '../contexts/AuthContext'

export default function UserBadge() {
  const { state, logout } = useAuth()

  if (!state.user) {
    return (
      <span style={{ fontSize: 13, color: '#9ca3af' }}>
        No autenticado
      </span>
    )
  }

  const initials = state.user.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        width: 34, height: 34, borderRadius: '50%',
        background: '#6366f1', color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 700, fontSize: 13,
      }}>
        {initials}
      </div>
      <div>
        <p style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>
          {state.user.name}
        </p>
        <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>
          {state.user.role}
        </p>
      </div>
      <button
        onClick={logout}
        style={{
          marginLeft: 8, padding: '4px 10px',
          background: 'none', border: '1px solid #d1d5db',
          borderRadius: 6, cursor: 'pointer',
          fontSize: 12, color: '#6b7280',
        }}
      >
        Salir
      </button>
    </div>
  )
}