// src/lab/LabTwTable.tsx

import { useState } from 'react'

interface Product {
  id:       number
  name:     string
  category: string
  price:    number
  active:   boolean
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Teclado mecánico',  category: 'Periféricos', price: 89.99,  active: true  },
  { id: 2, name: 'Monitor 27"',       category: 'Pantallas',   price: 349.99, active: true  },
  { id: 3, name: 'Mouse inalámbrico', category: 'Periféricos', price: 29.99,  active: false },
  { id: 4, name: 'Webcam HD',         category: 'Cámaras',     price: 59.99,  active: true  },
  { id: 5, name: 'Auriculares BT',    category: 'Audio',       price: 149.99, active: false },
]

export default function LabTwTable() {
  const [search, setSearch] = useState('')

  const filtered = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h2 className="text-xl font-extrabold mb-1">LAB: Table</h2>
      <p className="text-white/60 mb-4 text-sm">Tabla responsiva con búsqueda en tiempo real.</p>

      <input
        className="mb-4 h-10 w-full max-w-xs rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-500/40"
        placeholder="Buscar producto o categoría..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="min-w-full text-sm">
          <thead className="bg-white/5 text-white/70">
            <tr>
              {['#', 'Nombre', 'Categoría', 'Precio', 'Estado'].map(h => (
                <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(p => (
              <tr key={p.id} className="border-t border-white/10 hover:bg-white/5 transition">
                <td className="px-4 py-3 text-white/50">{p.id}</td>
                <td className="px-4 py-3 font-semibold">{p.name}</td>
                <td className="px-4 py-3 text-white/70">{p.category}</td>
                <td className="px-4 py-3 font-semibold">${p.price.toFixed(2)}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block rounded-full border px-3 py-0.5 text-xs font-semibold ${
                    p.active
                      ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                      : 'border-white/10 bg-white/5 text-white/50'
                  }`}>
                    {p.active ? 'Activo' : 'Inactivo'}
                  </span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-white/40">
                  Sin resultados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  )
}