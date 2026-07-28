// src/components/RegistrationForm_mp.tsx

import { useReducer } from 'react'

interface FormState {
  nombre:   string
  apellido: string
  email:    string
  password: string
  errors:   Partial<Record<'nombre' | 'email' | 'password' | 'apellido', string>>
  status:   'idle' | 'submitting' | 'success' | 'error' | 'validating'
}

type FormAction =
  | { type: 'SET_FIELD'; field: keyof Pick<FormState, 'nombre' | 'apellido' | 'email' | 'password'>; value: string }
  | { type: 'SET_ERRORS'; errors: FormState['errors'] }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_VALIDATING' }
  | { type: 'SUBMIT_SUCCESS' }
  | { type: 'SUBMIT_ERROR' }
  | { type: 'RESET' }

const INITIAL_STATE: FormState = {
  nombre:   '',
  apellido: '',
  email:    '',
  password: '',
  errors:   {},
  status:   'idle',
}

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        // Limpia el error del campo al escribir
        errors: { ...state.errors, [action.field]: undefined },
      }
    case 'SET_ERRORS':
      return { ...state, errors: action.errors }
    case 'SUBMIT_START':
      return { ...state, status: 'submitting' }
    case 'SUBMIT_VALIDATING':
      return { ...state, status: 'validating' }
    case 'SUBMIT_SUCCESS':
      return { ...INITIAL_STATE, status: 'success' }
    case 'SUBMIT_ERROR':
      return { ...state, status: 'error' }
    case 'RESET':
      return INITIAL_STATE
  }
}

export default function RegistrationForm_mp() {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE)

  function validate(): boolean {
    const errors: FormState['errors'] = {}
    if (!state.nombre.trim())        errors.nombre   = 'El nombre es requerido'
    if (!state.apellido.trim())      errors.apellido = 'El apellido es requerido'
    if (!state.email.includes('@'))  errors.email    = 'Email inválido'
    if (state.password.length < 6)   errors.password = 'Mínimo 6 caracteres'

    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors })
      return false
    }
    return true
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return

    dispatch({ type: 'SUBMIT_START' })
    // Simulación de llamada a API — registrar cliente
    await new Promise((resolve) => setTimeout(resolve, 1200))
    dispatch({ type: 'SUBMIT_VALIDATING' })
    // Simulación de validación de licencia de conducir
    await new Promise((resolve) => setTimeout(resolve, 1200))
    dispatch({ type: 'SUBMIT_SUCCESS' })
  }

  const isSubmitting = state.status === 'submitting'
  const isValidatig = state.status === 'validating'

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}
    >
      {state.status === 'success' && (
        <div style={{ padding: 12, background: '#dcfce7', borderRadius: 6, color: '#166534' }}>
          ✅ Cliente registrado en Wheels To Go
        </div>
      )}

      <div>
        <input
          value={state.nombre}
          onChange={(e) =>
            dispatch({ type: 'SET_FIELD', field: 'nombre', value: e.target.value })
          }
          placeholder="Nombre del conductor"
          disabled={isSubmitting}
          style={inputStyle(!!state.errors.nombre)}
        />
        {state.errors.nombre && (
          <p style={errorStyle}>{state.errors.nombre}</p>
        )}
      </div>
      <div>
        <input
          value={state.apellido}
          onChange={(e) =>
            dispatch({ type: 'SET_FIELD', field: 'apellido', value: e.target.value })
          }
          placeholder="Apellido del conductor"
          disabled={isSubmitting}
          style={inputStyle(!!state.errors.apellido)}
        />
        {state.errors.apellido && (
          <p style={errorStyle}>{state.errors.apellido}</p>
        )}
      </div>
      <div>
        <input
          type="email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })
          }
          placeholder="Correo electrónico"
          disabled={isSubmitting}
          style={inputStyle(!!state.errors.email)}
        />
        {state.errors.email && (
          <p style={errorStyle}>{state.errors.email}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          value={state.password}
          onChange={(e) =>
            dispatch({ type: 'SET_FIELD', field: 'password', value: e.target.value })
          }
          placeholder="Contraseña (mín. 6 caracteres)"
          disabled={isSubmitting}
          style={inputStyle(!!state.errors.password)}
        />
        {state.errors.password && (
          <p style={errorStyle}>{state.errors.password}</p>
        )}
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            flex: 1, padding: '10px',
            background: isSubmitting || isValidatig ? '#93c5fd' : '#0070f3',
            color: '#fff', border: 'none', borderRadius: 6,
            cursor: isSubmitting || isValidatig ? 'not-allowed' : 'pointer',
            fontWeight: 500,
          }}
        >
          {isSubmitting ? 'Registrando...' : isValidatig ? 'Validando licencia...' : 'Registrar'}
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: 'RESET' })}
          disabled={isSubmitting}
          style={{
            padding: '10px 16px',
            background: '#f3f4f6', color: '#6b7280',
            border: 'none', borderRadius: 6, cursor: 'pointer',
          }}
        >
          Limpiar
        </button>
      </div>
    </form>
  )
}

function inputStyle(hasError: boolean): React.CSSProperties {
  return {
    width: '100%',
    padding: '8px 12px',
    border: `1px solid ${hasError ? '#ef4444' : '#d1d5db'}`,
    borderRadius: 6,
    fontSize: 14,
    boxSizing: 'border-box',
  }
}

const errorStyle: React.CSSProperties = {
  margin: '4px 0 0',
  fontSize: 12,
  color: '#ef4444',
}
