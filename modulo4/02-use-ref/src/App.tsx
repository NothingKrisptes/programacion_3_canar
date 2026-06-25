// src/App.tsx
import AutoFocusForm    from './components/AutoFocusForm'
// import Stopwatch        from './components/Stopwatch'
// import FilterableList   from './components/FilterableList'
// import ProductAnalytics from './components/ProductAnalytics'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  1  AutoFocusForm    — useRef: foco automático y tecla Enter        │
// │  2  Stopwatch        — useRef: interval sin re-renders extra        │
// │  3  FilterableList   — useCallback: función estable para hijo       │
// │  4  ProductAnalytics — useMemo: stats y filtro memoizados           │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 1

export default function App() {
  const content =
    PASO === 1 ? <AutoFocusForm /> :
    // PASO === 2 ? <Stopwatch /> :
    // PASO === 3 ? <FilterableList /> :
    // PASO === 4 ? <ProductAnalytics /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 500, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}