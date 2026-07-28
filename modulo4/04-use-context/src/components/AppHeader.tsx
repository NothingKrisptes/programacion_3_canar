// src/components/AppHeader.tsx

import { useTheme } from '../contexts/ThemeContext'
import { useAuth }  from '../contexts/AuthContext'
import ThemeToggle  from './ThemeToggle'
import UserBadge    from './UserBadge'

export default function AppHeader() {
  const { theme }        = useTheme()
  const { state: auth }  = useAuth()

  return (
    <header style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '12px 24px',
      background: theme === 'dark' ? '#111827' : '#fff',
      borderBottom: '1px solid #e5e7eb',
    }}>
      <div>
        <h1 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>
          Mi App
        </h1>
        {auth.user && (
          <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>
            Panel de {auth.user.role}
          </p>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <ThemeToggle />
        <UserBadge />
      </div>
    </header>
  )
}