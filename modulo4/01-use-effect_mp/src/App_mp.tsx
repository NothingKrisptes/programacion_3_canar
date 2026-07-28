// src/App_mp.tsx
import DocumentTitle_mp    from './components/DocumentTitle_mp'
import OnlineStatus_mp     from './components/OnlineStatus_mp'
import WindowSize_mp       from './components/WindowSize_mp'
import LiveClock_mp        from './components/LiveClock_mp'
import SearchWithEffect_mp from './components/SearchWithEffect_mp'
import DebounceSearch_mp   from './components/DebounceSearch_mp'
import FetchUser_mp        from './components/FetchUser_mp'
import AutoFocusInput_mp   from './components/AutoFocusInput_mp'
// ┌──────────────────────────────────────────────────────────────────────┐
// │  Wheels To Go — Cambia PASO y guarda (Ctrl+S) para navegar.          │
// │  1  DocumentTitle_mp    — useEffect con array vacío, título de reserva│
// │  2  OnlineStatus_mp     — subscripción a eventos online/offline       │
// │  3  WindowSize_mp       — evento resize con estado objeto tipado      │
// │  4  LiveClock_mp        — setInterval, reloj de recepción             │
// │  5  SearchWithEffect_mp — efecto con dependencia, catálogo de autos   │
// │  6  DebounceSearch_mp   — setTimeout/clearTimeout, búsqueda por placa │
// │  7  FetchUser_mp        — fetch real, loading/error, datos de cliente │
// │  8  AutoFocusInput_mp   — useRef + useEffect para foco imperativo     │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 7

export default function App_mp() {
  const content =
    PASO === 1 ? <DocumentTitle_mp /> :
    PASO === 2 ? <OnlineStatus_mp /> :
    PASO === 3 ? <WindowSize_mp /> :
    PASO === 4 ? <LiveClock_mp /> :
    PASO === 5 ? <SearchWithEffect_mp /> :
    PASO === 6 ? <DebounceSearch_mp /> :
    PASO === 7 ? <FetchUser_mp /> :
    PASO === 8 ? <AutoFocusInput_mp /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h1 style={{ fontSize: 20, marginBottom: 8 }}>Wheels To Go</h1>
      {content}
    </main>
  )
}
