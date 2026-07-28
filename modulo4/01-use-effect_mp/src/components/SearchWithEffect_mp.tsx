// src/components/SearchWithEffect_mp.tsx

import { useState, useEffect } from 'react'

const CATALOGO: Record<string, string> = {
  sedan:    'Sedán Compacto — ideal para ciudad, 5 pasajeros, $35/día.',
  suv:      'SUV Familiar — espacio amplio y tracción 4x4 opcional, $50/día.',
  pickup:   'Pickup 4x4 — capacidad de carga de 1000kg, $60/día.',
  furgoneta:'Furgoneta de Carga — ideal para mudanzas, $70/día.',
}

export default function SearchWithEffect_mp() {
  const [query,  setQuery]  = useState('')
  const [resultado, setResultado] = useState<string | null>(null)

  useEffect(() => {
    const normalized = query.toLowerCase().trim()

    if (!normalized) {
      setResultado(null)
      return
    }

    const encontrado = CATALOGO[normalized]
    setResultado(encontrado ?? 'No tenemos ese tipo de vehículo disponible.')
  }, [query])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 340 }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Busca: sedan, suv, pickup, furgoneta..."
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
        }}
      />
      {resultado && (
        <p style={{ margin: 0, fontSize: 14, color: '#374151', padding: '8px 12px', background: '#f9fafb', borderRadius: 6 }}>
          {resultado}
        </p>
      )}
    </div>
  )
}
