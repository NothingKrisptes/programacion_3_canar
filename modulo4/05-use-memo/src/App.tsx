// src/App.tsx

import PrimeSieve        from './components/PrimeSieve'
import FilteredCatalog   from './components/FilteredCatalog'
import OrderMetrics      from './components/OrderMetrics'
import MultiTagFilter    from './components/MultiTagFilter'
//USE CALLBACK
import MemoizedList    from './components/MemoizedList'
import SearchWithFetch from './components/SearchWithFetch'
import FilterTable     from './components/FilterTable'
import PaginatedFetch  from './components/PaginatedFetch'
//HOOKS PERSONALIZADOS
import ModalDemo        from './components/ModalDemo'
// import QuantitySelector from './components/QuantitySelector'
import ThemeSelector    from './components/ThemeSelector'
// import LiveSearch       from './components/LiveSearch'
import PostList         from './components/PostList'
// import ResponsiveLayout from './components/ResponsiveLayout'
// import CodeBlock        from './components/CodeBlock'
// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  1  PrimeSieve       — useMemo para cálculo costoso (criba primos)  │
// │  2  FilteredCatalog  — dos useMemo encadenados: filtrar → ordenar   │
// │  3  OrderMetrics     — múltiples useMemo derivados de un filtro     │
// │  4  MultiTagFilter   — filtro AND por tags con conteos memoizados   │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 13

export default function App() {
  const content =
  // USE MEMO
    PASO === 1 ? <PrimeSieve /> :
    PASO === 2 ? <FilteredCatalog /> :
    PASO === 3 ? <OrderMetrics /> :
    PASO === 4 ? <MultiTagFilter /> :
  // USE CALLBACK
    PASO === 5 ? <MemoizedList /> :
    PASO === 6 ? <SearchWithFetch /> :
    PASO === 7 ? <FilterTable /> :
    PASO === 8 ? <PaginatedFetch /> :

  // HOOKS PERSONALIZADOS
    PASO === 9 ? <ModalDemo /> :
    //PASO === 10 ? <QuantitySelector /> :
    PASO === 11 ? <ThemeSelector /> :
    // PASO === 12 ? <LiveSearch /> :
    PASO === 13? <PostList /> :
    // PASO === 14 ? <ResponsiveLayout /> :
    // PASO === 15 ? <CodeBlock code={EXAMPLE_CODE} language="tsx" /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 620, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}