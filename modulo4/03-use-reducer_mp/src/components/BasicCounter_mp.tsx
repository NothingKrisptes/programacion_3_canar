// src/components/BasicCounter_mp.tsx

import { useReducer } from 'react'

type DiasAction =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'SET'; payload: number }

interface DiasState {
  dias: number
}

function diasReducer(
  state: DiasState,
  action: DiasAction
): DiasState {
  switch (action.type) {
    case 'INCREMENT': return { dias: state.dias + 1 }
    case 'DECREMENT': return { dias: Math.max(0, state.dias - 1) }
    case 'RESET':     return { dias: 0 }
    case 'SET':       return { dias: action.payload }
  }
}

const INITIAL_STATE: DiasState = { dias: 1 }

export default function BasicCounter_mp() {
  const [state, dispatch] = useReducer(diasReducer, INITIAL_STATE)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 220 }}>
      <p style={{ margin: 0, fontSize: 13, color: '#6b7280', textAlign: 'center' }}>
        Días de renta seleccionados
      </p>
      <p style={{ fontFamily: 'monospace', fontSize: 32, margin: 0, textAlign: 'center' }}>
        {state.dias}
      </p>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button
          onClick={() => dispatch({ type: 'DECREMENT' })}
          style={btnStyle}
        >
          −
        </button>
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}
          style={btnStyle}
        >
          +
        </button>
      </div>
      <button
        onClick={() => dispatch({ type: 'SET', payload: 7 })}
        style={{ ...btnStyle, fontSize: 12 }}
      >
        Reservar por 1 semana
      </button>
      <button
        onClick={() => dispatch({ type: 'RESET' })}
        style={{ ...btnStyle, background: '#f3f4f6', color: '#6b7280' }}
      >
        Reset
      </button>
    </div>
  )
}

const btnStyle: React.CSSProperties = {
  padding: '8px 16px',
  border: 'none',
  borderRadius: 6,
  background: '#0070f3',
  color: '#fff',
  cursor: 'pointer',
  fontWeight: 500,
}
