// src/App_mp.tsx
import AutoFocusForm_mp  from './components/AutoFocusForm_mp'
import Stopwatch_mp      from './components/Stopwatch_mp'
import InlineEditor_mp   from './components/InlineEditor_mp'
import PreviousValue_mp  from './components/PreviousValue_mp'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Wheels To Go — Cambia PASO y guarda (Ctrl+S) para navegar.          │
// │  1  AutoFocusForm_mp — useRef + useEffect, foco automático en form    │
// │  2  Stopwatch_mp     — useRef para guardar el ID del interval         │
// │  3  InlineEditor_mp  — inputs no controlados, lectura directa del DOM │
// │  4  PreviousValue_mp — useRef para recordar el valor anterior         │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 4

export default function App_mp() {
  const content =
    PASO === 1 ? <AutoFocusForm_mp /> :
    PASO === 2 ? <Stopwatch_mp /> :
    PASO === 3 ? <InlineEditor_mp /> :
    PASO === 4 ? <PreviousValue_mp /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 500, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h1 style={{ fontSize: 20, marginBottom: 8 }}>Wheels To Go</h1>
      {content}
    </main>
  )
}
