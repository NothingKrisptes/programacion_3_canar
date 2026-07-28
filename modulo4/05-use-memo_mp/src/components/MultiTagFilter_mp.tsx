// src/components/MultiTagFilter_mp.tsx

import { useState, useMemo } from 'react'

interface Vehiculo {
  id:    number
  title: string
  tags:  string[]
  views: number
}

const VEHICULOS: Vehiculo[] = [
  { id: 1, title: 'Sedán Compacto 2023',      tags: ['sedan', 'economico', 'automatico'],  views: 4200 },
  { id: 2, title: 'SUV Familiar 2024',        tags: ['suv', '4x4', 'espacioso'],            views: 3100 },
  { id: 3, title: 'Pickup 4x4 Trabajo',       tags: ['pickup', '4x4', 'carga'],              views: 2800 },
  { id: 4, title: 'Sedán Ejecutivo',          tags: ['sedan', 'automatico', 'premium'],      views: 1900 },
  { id: 5, title: 'Furgoneta de Carga',       tags: ['furgoneta', 'carga', 'manual'],        views: 5100 },
  { id: 6, title: 'SUV Premium 4x4',          tags: ['suv', '4x4', 'premium'],                views: 2200 },
  { id: 7, title: 'Compacto Económico',       tags: ['economico', 'manual', 'sedan'],        views: 3600 },
  { id: 8, title: 'Minivan 7 Pasajeros',      tags: ['furgoneta', 'espacioso', 'automatico'],views: 1500 },
]

export default function MultiTagFilter_mp() {
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set())
  const [sortByViews, setSortByViews] = useState(false)

  // Todos los tags únicos con sus conteos
  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    VEHICULOS.forEach(a => a.tags.forEach(t => { counts[t] = (counts[t] ?? 0) + 1 }))
    return counts
  }, []) // VEHICULOS es estático

  // Vehículos que tienen TODOS los tags activos
  const filtered = useMemo(() => {
    if (activeTags.size === 0) return VEHICULOS
    return VEHICULOS.filter(a => [...activeTags].every(t => a.tags.includes(t)))
  }, [activeTags])

  // Ordenar — depende de filtered y sortByViews
  const sorted = useMemo(
    () => sortByViews
      ? [...filtered].sort((a, b) => b.views - a.views)
      : filtered,
    [filtered, sortByViews]
  )

  function toggleTag(tag: string) {
    setActiveTags(prev => {
      const next = new Set(prev)
      next.has(tag) ? next.delete(tag) : next.add(tag)
      return next
    })
  }

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 580, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Filtro de Características</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        Características múltiples con filtro AND. Conteos memoizados — se calculan una sola vez.
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
        {Object.entries(tagCounts).map(([tag, count]) => {
          const active = activeTags.has(tag)
          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              style={{
                padding:      '4px 12px',
                borderRadius: 999,
                border:       '1px solid',
                borderColor:  active ? '#0070f3' : '#ddd',
                background:   active ? '#0070f3' : 'white',
                color:        active ? 'white'    : '#555',
                fontSize:     13,
                cursor:       'pointer',
                fontWeight:   active ? 700 : 400,
              }}
            >
              {tag} <span style={{ opacity: 0.7 }}>({count})</span>
            </button>
          )
        })}
      </div>

      {/* Controles secundarios */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ fontSize: 13, color: '#888' }}>
          {sorted.length} vehículo{sorted.length !== 1 ? 's' : ''}
          {activeTags.size > 0 && ` (filtrado por: ${[...activeTags].join(', ')})`}
        </span>
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={sortByViews}
            onChange={e => setSortByViews(e.target.checked)}
          />
          Ordenar por visitas
        </label>
      </div>

      {/* Vehículos */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {sorted.map(a => (
          <div key={a.id} style={{
            padding:      '12px 16px',
            background:   '#f9f9f9',
            borderRadius: 10,
            border:       '1px solid #eee',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ fontWeight: 600, fontSize: 14 }}>{a.title}</span>
              <span style={{ fontSize: 12, color: '#888', whiteSpace: 'nowrap', marginLeft: 12 }}>
                {a.views.toLocaleString()} vistas
              </span>
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
              {a.tags.map(t => (
                <span
                  key={t}
                  onClick={() => toggleTag(t)}
                  style={{
                    padding:      '2px 8px',
                    borderRadius: 999,
                    fontSize:     11,
                    background:   activeTags.has(t) ? '#0070f320' : '#f0f0f0',
                    color:        activeTags.has(t) ? '#0070f3'   : '#666',
                    cursor:       'pointer',
                    fontWeight:   activeTags.has(t) ? 700 : 400,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {activeTags.size > 0 && (
        <button
          onClick={() => setActiveTags(new Set())}
          style={{
            marginTop:    16,
            padding:      '6px 16px',
            borderRadius: 6,
            border:       '1px solid #ddd',
            cursor:       'pointer',
            fontSize:     13,
            background:   'white',
          }}
        >
          Limpiar filtros
        </button>
      )}
    </div>
  )
}
