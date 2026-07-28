// src/components/ShoppingCartSummary.tsx
// Sin cambios respecto a la página 3

interface CartItem {
  id: number
  name: string
  price: number
}

interface ShoppingCartSummaryProps {
  items: CartItem[]
  onClearCart: () => void
}

export default function ShoppingCartSummary({
  items,
  onClearCart,
}: ShoppingCartSummaryProps) {
  const total = items.reduce((acc, item) => acc + item.price, 0)

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: 10,
        padding: 16,
        marginTop: 24,
      }}
    >
      <h3 style={{ marginTop: 0 }}>Carrito ({items.length} items)</h3>

      {items.length === 0 && (
        <p style={{ color: '#999' }}>El carrito está vacío.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}
          >
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>

      {items.length > 0 && (
        <>
          <hr />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={onClearCart}
            style={{
              marginTop: 12,
              backgroundColor: '#e00',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              padding: '8px 16px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  )
}