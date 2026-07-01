// src/components/BasicCounter.tsx

import { useReducer } from 'react'

type CounterAction =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'SET'; payload: number }

interface CounterState {
  count: number
}

function counterReducer(
  state: CounterState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1 }
    case 'DECREMENT': return { count: state.count - 1 }
    case 'RESET':     return { count: 0 }
    case 'SET':       return { count: action.payload }
  }
}

const INITIAL_STATE: CounterState = { count: 0 }

export default function BasicCounter() {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 200 }}>
      <p style={{ fontFamily: 'monospace', fontSize: 32, margin: 0, textAlign: 'center' }}>
        {state.count}
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
        onClick={() => dispatch({ type: 'SET', payload: 100 })}
        style={{ ...btnStyle, fontSize: 12 }}
      >
        Poner en 100
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