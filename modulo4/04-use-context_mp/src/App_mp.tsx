// src/App_mp.tsx

import { AuthProvider, useAuth } from './contexts/AuthContext_mp'
import { ThemeProvider }         from './contexts/ThemeContext_mp'
import AppHeader_mp     from './components/AppHeader_mp'
import LoginForm_mp     from './components/LoginForm_mp'
import ThemeToggle_mp   from './components/ThemeToggle_mp'
import UserBadge_mp     from './components/UserBadge_mp'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Wheels To Go — Cambia PASO y guarda (Ctrl+S) para navegar.          │
// │  1  ThemeToggle_mp   — botón que alterna el tema desde el contexto   │
// │  2  UserBadge_mp     — badge de usuario autenticado con logout       │
// │  3  LoginForm_mp     — formulario de login conectado a AuthContext   │
// │  4  AppHeader_mp     — header con dos contextos simultáneos          │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 4

export default function App_mp() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  )
}

function AppContent() {
  const { state } = useAuth()

  const content =
    PASO === 1 ? <ThemeToggle_mp /> :
    PASO === 2 ? <UserBadge_mp /> :
    PASO === 3 ? <LoginForm_mp /> :
    PASO === 4 ? <AppHeader_mp /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {PASO === 4 ? content : (
        <>
          {state.user && (
            <p style={{ marginBottom: 16, fontSize: 14, color: '#6b7280' }}>
              Sesión activa: <strong>{state.user.name}</strong>
            </p>
          )}
          {content}
        </>
      )}
    </main>
  )
}