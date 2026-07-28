// src/components/FilteredCatalog_mp.tsx

import { useState, useMemo } from 'react'

interface Vehiculo {
  id:       number
  name:     string
  category: string
  price:    number
  active:   boolean
  stock:    number
}

const CATALOGO: Vehiculo[] = [
  { id:  1, name: 'Sedán Compacto',       category: 'Sedán',      price:  35.00, active: true,  stock: 15 },
  { id:  2, name: 'Sedán Ejecutivo',      category: 'Sedán',      price:  55.00, active: true,  stock:  8 },
  { id:  3, name: 'Compacto Económico',   category: 'Económico',  price:  25.00, active: false, stock:  0 },
  { id:  4, name: 'SUV Familiar',         category: 'SUV',        price:  50.00, active: true,  stock: 22 },
  { id:  5, name: 'SUV Premium 4x4',      category: 'SUV',        price:  75.00, active: true,  stock:  6 },
  { id:  6, name: 'Pickup 4x4',           category: 'Pickup',     price:  60.00, active: true,  stock:  3 },
  { id:  7, name: 'Pickup Doble Cabina',  category: 'Pickup',     price:  65.00, active: false, stock:  0 },
  { id:  8, name: 'Furgoneta de Carga',   category: 'Furgoneta',  price:  70.00, active: true,  stock:  4 },
  { id:  9, name: 'Minivan 7 Pasajeros',  category: 'Furgoneta',  price:  68.00, active: true,  stock: 11 },
  { id: 10, name: 'SUV de Lujo',          category: 'SUV',        price: 120.00, active: true,  stock:  2 },
]

type SortKey = 'name' | 'price' | 'stock'

export default function FilteredCatalog_mp() {
  const [search,    setSearch]    = useState('')
  const [onlyActive,setOnlyActive]= useState(true)
  const [category,  setCategory]  = useState('Todas')
  const [sortBy,    setSortBy]    = useState<SortKey>('name')

  // useMemo 1 — filtrar (depende de search, onlyActive, category)
  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return CATALOGO.filter(p =>
      (!onlyActive || p.active) &&
      (category === 'Todas' || p.category === category) &&
      (p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
    )
  }, [search, onlyActive, category])

  // useMemo 2 — ordenar (depende de filtered y sortBy)
  const sorted = useMemo(
    () => [...filtered].sort((a, b) =>
      sortBy === 'name'  ? a.name.localeCompare(b.name)  :
      sortBy === 'price' ? a.price - b.price              :
                           b.stock - a.stock              // disponibles desc
    ),
    [filtered, sortBy]
  )

  const categories = useMemo(
    () => ['Todas', ...new Set(CATALOGO.map(p => p.category))],
    [] // El catálogo es estático — solo se calcula una vez
  )

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 600, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Catálogo Wheels To Go</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        Dos <code>useMemo</code> encadenados: filtrar → ordenar.
      </p>

      {/* Controles */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Buscar vehículo..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ flex: 1, minWidth: 140, padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        />
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        >
          {categories.map(c => <option key={c}>{c}</option>)}
        </select>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value as SortKey)}
          style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
        >
          <option value="name">A–Z</option>
          <option value="price">Tarifa ↑</option>
          <option value="stock">Disponibles ↓</option>
        </select>
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={onlyActive}
            onChange={e => setOnlyActive(e.target.checked)}
          />
          Solo disponibles
        </label>
      </div>

      <p style={{ fontSize: 13, color: '#888', marginBottom: 12 }}>
        {sorted.length} de {CATALOGO.length} vehículos
      </p>

      {/* Lista */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {sorted.map(p => (
          <div key={p.id} style={{
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'center',
            padding:        '10px 14px',
            background:     p.active ? '#f9f9f9' : '#f0f0f0',
            borderRadius:   8,
            border:         '1px solid #e5e5e5',
            opacity:        p.active ? 1 : 0.6,
          }}>
            <div>
              <span style={{ fontWeight: 600, fontSize: 14 }}>{p.name}</span>
              <span style={{ marginLeft: 8, fontSize: 12, color: '#888' }}>{p.category}</span>
            </div>
            <div style={{ textAlign: 'right', fontSize: 13 }}>
              <div style={{ fontWeight: 700 }}>${p.price.toFixed(2)}/día</div>
              <div style={{ color: p.stock < 5 ? '#e00' : '#888' }}>
                Disponibles: {p.stock}
              </div>
            </div>
          </div>
        ))}
        {sorted.length === 0 && (
          <p style={{ textAlign: 'center', color: '#aaa', padding: 24 }}>
            Sin resultados.
          </p>
        )}
      </div>
    </div>
  )
}
