// src/contexts/AuthContext.tsx

import { createContext, useContext, useReducer } from 'react'

interface User {
  id:    number
  name:  string
  email: string
  role:  'admin' | 'user'
}

interface AuthState {
  user:      User | null
  isLoading: boolean
  error:     string | null
}

type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; user: User }
  | { type: 'LOGIN_ERROR';   message: string }
  | { type: 'LOGOUT' }

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true, error: null }
    case 'LOGIN_SUCCESS':
      return { user: action.user, isLoading: false, error: null }
    case 'LOGIN_ERROR':
      return { user: null, isLoading: false, error: action.message }
    case 'LOGOUT':
      return { user: null, isLoading: false, error: null }
  }
}

const INITIAL_STATE: AuthState = {
  user:      null,
  isLoading: false,
  error:     null,
}

interface AuthContextValue {
  state:  AuthState
  login:  (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE)

  async function login(email: string, _password: string) {
    dispatch({ type: 'LOGIN_START' })

    // Simulación de llamada a API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (email === 'error@test.com') {
      dispatch({ type: 'LOGIN_ERROR', message: 'Credenciales incorrectas' })
      return
    }

    dispatch({
      type: 'LOGIN_SUCCESS',
      user: { id: 1, name: 'Ana García', email, role: 'admin' },
    })
  }

  function logout() {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <AuthContext value={{ state, login, logout }}>
      {children}
    </AuthContext>
  )
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth debe usarse dentro de <AuthProvider>')
  return context
}