// src/App_mp.tsx

import PrimeSieve_mp        from './components/PrimeSieve_mp'
import FilteredCatalog_mp   from './components/FilteredCatalog_mp'
import OrderMetrics_mp      from './components/OrderMetrics_mp'
import MultiTagFilter_mp    from './components/MultiTagFilter_mp'
//USE CALLBACK
import MemoizedList_mp    from './components/MemoizedList_mp'
import SearchWithFetch_mp from './components/SearchWithFetch_mp'
import FilterTable_mp     from './components/FilterTable_mp'
import PaginatedFetch_mp  from './components/PaginatedFetch_mp'
//HOOKS PERSONALIZADOS
import ModalDemo_mp        from './components/ModalDemo_mp'
import ThemeSelector_mp    from './components/ThemeSelector_mp'
import PostList_mp         from './components/PostList_mp'
// ┌──────────────────────────────────────────────────────────────────────┐
// │  Wheels To Go — Cambia PASO y guarda (Ctrl+S) para navegar.          │
// │  1  PrimeSieve_mp       — useMemo para cálculo costoso                │
// │  2  FilteredCatalog_mp  — dos useMemo encadenados: filtrar → ordenar  │
// │  3  OrderMetrics_mp     — múltiples useMemo derivados de un filtro    │
// │  4  MultiTagFilter_mp   — filtro AND por características memoizadas  │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 13

export default function App_mp() {
  const content =
  // USE MEMO
    PASO === 1 ? <PrimeSieve_mp /> :
    PASO === 2 ? <FilteredCatalog_mp /> :
    PASO === 3 ? <OrderMetrics_mp /> :
    PASO === 4 ? <MultiTagFilter_mp /> :
  // USE CALLBACK
    PASO === 5 ? <MemoizedList_mp /> :
    PASO === 6 ? <SearchWithFetch_mp /> :
    PASO === 7 ? <FilterTable_mp /> :
    PASO === 8 ? <PaginatedFetch_mp /> :

  // HOOKS PERSONALIZADOS
    PASO === 9 ? <ModalDemo_mp /> :
    PASO === 11 ? <ThemeSelector_mp /> :
    PASO === 13? <PostList_mp /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 620, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h1 style={{ fontSize: 20, marginBottom: 8, paddingLeft: 24 }}>Wheels To Go</h1>
      {content}
    </main>
  )
}
