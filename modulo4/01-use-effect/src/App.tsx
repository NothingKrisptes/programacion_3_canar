// src/App.tsx
import DocumentTitle    from './components/DocumentTitle'
import OnlineStatus     from './components/OnlineStatus'
import WindowSize       from './components/WindowSize'
import LiveClock        from './components/LiveClock'
import SearchWithEffect from './components/SearchWithEffect'
import DebounceSearch   from './components/DebounceSearch'
import FetchUser        from './components/FetchUser'
import AutoFocusInput   from './components/AutoFocusInput'
// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  1  DocumentTitle    — useEffect con array vacío, limpia al desmontar│
// │  2  OnlineStatus     — subscripción a eventos online/offline         │
// │  3  WindowSize       — evento resize con estado objeto tipado        │
// │  4  LiveClock        — setInterval con inicializador perezoso        │
// │  5  SearchWithEffect — efecto con dependencia, búsqueda sincronizada │
// │  6  DebounceSearch   — setTimeout/clearTimeout, patrón debounce      │
// │  7  FetchUser        — fetch real, loading/error, flag cancelled      │
// │  8  AutoFocusInput   — useRef + useEffect para foco imperativo       │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 8

export default function App() {
  const content =
    PASO === 1 ? <DocumentTitle /> :
    PASO === 2 ? <OnlineStatus /> :
    PASO === 3 ? <WindowSize /> :
    PASO === 4 ? <LiveClock /> :
    PASO === 5 ? <SearchWithEffect /> :
    PASO === 6 ? <DebounceSearch /> :
    PASO === 7 ? <FetchUser /> :
    PASO === 8 ? <AutoFocusInput /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}