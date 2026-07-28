// src/components/AppHeader_mp.tsx

import { useTheme } from '../contexts/ThemeContext_mp'
import { useAuth }  from '../contexts/AuthContext_mp'
import ThemeToggle_mp  from './ThemeToggle_mp'
import UserBadge_mp    from './UserBadge_mp'

export default function AppHeader_mp() {
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
          Wheels To Go
        </h1>
        {auth.user && (
          <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>
            Panel de {auth.user.role}
          </p>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <ThemeToggle_mp />
        <UserBadge_mp />
      </div>
    </header>
  )
}
