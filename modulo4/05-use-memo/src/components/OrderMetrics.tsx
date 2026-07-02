// src/components/OrderMetrics.tsx

import { useState, useMemo } from 'react'

interface Order {
  id:        number
  customer:  string
  amount:    number
  status:    'pending' | 'paid' | 'refunded'
  createdAt: string
}

const ORDERS: Order[] = [
  { id: 1, customer: 'Ana García',    amount:  120.00, status: 'paid',     createdAt: '2024-01-15' },
  { id: 2, customer: 'Luis Pérez',    amount:  340.50, status: 'paid',     createdAt: '2024-01-18' },
  { id: 3, customer: 'María López',   amount:   89.99, status: 'pending',  createdAt: '2024-01-20' },
  { id: 4, customer: 'Carlos Ruiz',   amount:  560.00, status: 'refunded', createdAt: '2024-01-22' },
  { id: 5, customer: 'Ana García',    amount:  210.00, status: 'paid',     createdAt: '2024-02-01' },
  { id: 6, customer: 'Sofía Torres',  amount:   75.00, status: 'pending',  createdAt: '2024-02-05' },
  { id: 7, customer: 'Luis Pérez',    amount: 1100.00, status: 'paid',     createdAt: '2024-02-08' },
  { id: 8, customer: 'Elena Díaz',    amount:  290.00, status: 'paid',     createdAt: '2024-02-10' },
]

export default function OrderMetrics() {
  const [statusFilter, setStatusFilter] = useState<Order['status'] | 'all'>('all')
  const [minAmount,    setMinAmount]    = useState(0)

  // Filtrado base — depende de statusFilter y minAmount
  const visibleOrders = useMemo(
    () => ORDERS.filter(o =>
      (statusFilter === 'all' || o.status === statusFilter) &&
      o.amount >= minAmount
    ),
    [statusFilter, minAmount]
  )

  // Métricas — cada una depende de visibleOrders
  const total   = useMemo(() => visibleOrders.reduce((s, o) => s + o.amount, 0), [visibleOrders])
  const average = useMemo(() => visibleOrders.length ? total / visibleOrders.length : 0, [total, visibleOrders.length])
  const maxOrder = useMemo(
    () => visibleOrders.reduce<Order | null>((max, o) => (!max || o.amount > max.amount) ? o : max, null),
    [visibleOrders]
  )
  const byStatus = useMemo(
    () => ({
      paid:     visibleOrders.filter(o => o.status === 'paid').length,
      pending:  visibleOrders.filter(o => o.status === 'pending').length,
      refunded: visibleOrders.filter(o => o.status === 'refunded').length,
    }),
    [visibleOrders]
  )

  const STATUS_COLORS: Record<Order['status'], string> = {
    paid:     '#15803d',
    pending:  '#b45309',
    refunded: '#9333ea',
  }

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 580, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>OrderMetrics</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        Múltiples <code>useMemo</code> independientes derivados de un filtro base.
      </p>

      {/* Controles */}
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
        <label style={{ fontSize: 14, display: 'flex', flexDirection: 'column', gap: 4 }}>
          Estado
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value as typeof statusFilter)}
            style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 6 }}
          >
            <option value="all">Todos</option>
            <option value="paid">Pagado</option>
            <option value="pending">Pendiente</option>
            <option value="refunded">Reembolsado</option>
          </select>
        </label>

        <label style={{ fontSize: 14, display: 'flex', flexDirection: 'column', gap: 4 }}>
          Importe mínimo: ${minAmount}
          <input
            type="range"
            min={0}
            max={500}
            step={50}
            value={minAmount}
            onChange={e => setMinAmount(Number(e.target.value))}
            style={{ width: 160 }}
          />
        </label>
      </div>

      {/* Métricas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 12,
        marginBottom: 24,
      }}>
        {[
          { label: 'Pedidos visibles', value: visibleOrders.length },
          { label: 'Total',            value: `$${total.toFixed(2)}` },
          { label: 'Promedio',         value: `$${average.toFixed(2)}` },
          { label: 'Mayor pedido',     value: maxOrder ? `$${maxOrder.amount.toFixed(2)} (${maxOrder.customer})` : '—' },
        ].map(({ label, value }) => (
          <div key={label} style={{
            padding: 14,
            background: '#f5f5f5',
            borderRadius: 10,
            fontSize: 13,
          }}>
            <div style={{ color: '#888', marginBottom: 4 }}>{label}</div>
            <div style={{ fontWeight: 700, fontSize: 16 }}>{value}</div>
          </div>
        ))}
      </div>

      {/* Contador por estado */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        {(Object.entries(byStatus) as [Order['status'], number][]).map(([status, count]) => (
          <span key={status} style={{
            padding:    '4px 12px',
            borderRadius: 999,
            fontSize:   12,
            fontWeight: 600,
            background: `${STATUS_COLORS[status]}20`,
            color:      STATUS_COLORS[status],
          }}>
            {status}: {count}
          </span>
        ))}
      </div>

      {/* Tabla de pedidos */}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr>
            {['#', 'Cliente', 'Importe', 'Estado', 'Fecha'].map(h => (
              <th key={h} style={{
                textAlign: 'left',
                padding:   '6px 8px',
                borderBottom: '2px solid #e5e5e5',
                color: '#666',
                fontWeight: 600,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visibleOrders.map(o => (
            <tr key={o.id}>
              <td style={{ padding: '6px 8px', color: '#aaa' }}>{o.id}</td>
              <td style={{ padding: '6px 8px', fontWeight: 500 }}>{o.customer}</td>
              <td style={{ padding: '6px 8px', fontWeight: 700 }}>${o.amount.toFixed(2)}</td>
              <td style={{ padding: '6px 8px' }}>
                <span style={{
                  padding:  '2px 8px',
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 700,
                  background: `${STATUS_COLORS[o.status]}20`,
                  color:      STATUS_COLORS[o.status],
                }}>
                  {o.status}
                </span>
              </td>
              <td style={{ padding: '6px 8px', color: '#888' }}>{o.createdAt}</td>
            </tr>
          ))}
          {visibleOrders.length === 0 && (
            <tr>
              <td colSpan={5} style={{ textAlign: 'center', padding: 24, color: '#aaa' }}>
                Sin pedidos para los filtros actuales.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}