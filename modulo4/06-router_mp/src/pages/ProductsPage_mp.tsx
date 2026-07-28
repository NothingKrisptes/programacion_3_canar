// src/pages/ProductsPage_mp.tsx

import { useState, useMemo }  from 'react'
import { Link, useSearchParams } from 'react-router-dom'

interface Vehiculo {
  id:       number
  name:     string
  category: string
  price:    number
}

const VEHICULOS: Vehiculo[] = [
  { id: 1, name: 'Sedán Compacto',    category: 'sedán',      price: 35  },
  { id: 2, name: 'Sedán Ejecutivo',   category: 'sedán',      price: 55  },
  { id: 3, name: 'SUV Familiar',      category: 'suv',        price: 50  },
  { id: 4, name: 'SUV Premium 4x4',   category: 'suv',        price: 75  },
  { id: 5, name: 'Pickup 4x4',        category: 'pickup',     price: 60  },
  { id: 6, name: 'Furgoneta de Carga',category: 'furgoneta',  price: 70  },
]

export default function ProductsPage_mp() {
  // useSearchParams sincroniza filtros con la URL
  // ?q=suv&category=suv queda en la barra del navegador
  const [searchParams, setSearchParams] = useSearchParams()

  const query    = searchParams.get('q')        ?? ''
  const category = searchParams.get('category') ?? ''

  function handleQueryChange(value: string) {
    setSearchParams(
      (prev) => { prev.set('q', value); return prev },
      { replace: true }
    )
  }

  function handleCategoryChange(value: string) {
    setSearchParams(
      (prev) => {
        if (value) prev.set('category', value)
        else       prev.delete('category')
        return prev
      },
      { replace: true }
    )
  }

  const filtered = useMemo(() =>
    VEHICULOS
      .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
      .filter((p) => !category || p.category === category),
    [query, category]
  )

  const categories = [...new Set(VEHICULOS.map((p) => p.category))]

  return (
    <div>
      <h1 style={{ fontSize: 22, marginBottom: 16 }}>Vehículos Disponibles</h1>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          placeholder="Buscar vehículo..."
          style={{ flex: 1, padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        />
        <select
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
          style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        >
          <option value="">Todas las categorías</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {filtered.map((vehiculo) => (
          <Link
            key={vehiculo.id}
            to={`/products/${vehiculo.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: 8,
            }}>
              <div>
                <p style={{ margin: 0, fontWeight: 500 }}>{vehiculo.name}</p>
                <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>{vehiculo.category}</p>
              </div>
              <span style={{ fontWeight: 600 }}>${vehiculo.price}/día</span>
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p style={{ color: '#9ca3af' }}>Sin resultados.</p>
        )}
      </div>
    </div>
  )
}
