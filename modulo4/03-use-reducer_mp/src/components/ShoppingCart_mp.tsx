// src/components/ShoppingCart_mp.tsx

import { useReducer, useMemo } from 'react'

interface CartItem {
  id:       number
  name:     string
  price:    number
  quantity: number
}

interface CartState {
  items:  CartItem[]
  isOpen: boolean
}

type CartAction =
  | { type: 'ADD_ITEM';    item: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; id: number }
  | { type: 'INCREMENT';   id: number }
  | { type: 'DECREMENT';   id: number }
  | { type: 'CLEAR' }
  | { type: 'TOGGLE_CART' }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.items.find((i) => i.id === action.item.id)
      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.item, quantity: 1 }],
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.id),
      }
    case 'INCREMENT':
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      }
    case 'DECREMENT':
      return {
        ...state,
        items: state.items
          .map((i) => i.id === action.id ? { ...i, quantity: i.quantity - 1 } : i)
          .filter((i) => i.quantity > 0),
      }
    case 'CLEAR':
      return { ...state, items: [] }
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen }
  }
}

const VEHICULOS = [
  { id: 1, name: 'Sedán Compacto',  price: 35 },
  { id: 2, name: 'SUV Familiar',    price: 50 },
  { id: 3, name: 'Pickup 4x4',      price: 60 },
  { id: 4, name: 'Furgoneta Carga', price: 70 },
]

export default function ShoppingCart_mp() {
  const [cart, dispatch] = useReducer(cartReducer, { items: [], isOpen: false })

  const total     = useMemo(() => cart.items.reduce((acc, i) => acc + i.price * i.quantity, 0), [cart.items])
  const diasTotal = useMemo(() => cart.items.reduce((acc, i) => acc + i.quantity, 0),           [cart.items])

  return (
    <div style={{ maxWidth: 440, fontFamily: 'sans-serif' }}>

      {/* Catálogo de vehículos */}
      <div style={{ marginBottom: 16 }}>
        {VEHICULOS.map((vehiculo) => (
          <div
            key={vehiculo.id}
            style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', padding: '10px 0',
              borderBottom: '1px solid #e5e7eb',
            }}
          >
            <div>
              <p style={{ margin: 0, fontWeight: 500 }}>{vehiculo.name}</p>
              <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>${vehiculo.price}/día</p>
            </div>
            <button
              onClick={() => dispatch({ type: 'ADD_ITEM', item: vehiculo })}
              style={{
                padding: '6px 14px', background: '#0070f3', color: '#fff',
                border: 'none', borderRadius: 6, cursor: 'pointer',
              }}
            >
              + Reservar
            </button>
          </div>
        ))}
      </div>

      {/* Botón carrito de reserva */}
      <button
        onClick={() => dispatch({ type: 'TOGGLE_CART' })}
        style={{
          width: '100%', padding: '10px',
          background: diasTotal > 0 ? '#0070f3' : '#f3f4f6',
          color:      diasTotal > 0 ? '#fff'    : '#6b7280',
          border: 'none', borderRadius: 8, cursor: 'pointer',
          fontWeight: 600, marginBottom: 12,
        }}
      >
        {cart.isOpen ? 'Ocultar carrito de reserva' : `Ver carrito de reserva (${diasTotal} días)`}
      </button>

      {/* Panel del carrito */}
      {cart.isOpen && (
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 10, padding: 16 }}>
          {cart.items.length === 0 ? (
            <p style={{ color: '#9ca3af', margin: 0 }}>Aún no has seleccionado ningún vehículo.</p>
          ) : (
            <>
              {cart.items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', padding: '8px 0',
                    borderBottom: '1px solid #f3f4f6',
                  }}
                >
                  <span style={{ fontSize: 14, flex: 1 }}>{item.name}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <button
                      onClick={() => dispatch({ type: 'DECREMENT', id: item.id })}
                      style={qtyBtn}
                    >
                      −
                    </button>
                    <span style={{ minWidth: 20, textAlign: 'center', fontSize: 14 }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch({ type: 'INCREMENT', id: item.id })}
                      style={qtyBtn}
                    >
                      +
                    </button>
                    <span style={{ minWidth: 60, textAlign: 'right', fontSize: 14 }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444' }}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}

              <div style={{ paddingTop: 12, display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 600 }}>Total a pagar</span>
                <span style={{ fontWeight: 700, fontSize: 16 }}>${total.toFixed(2)}</span>
              </div>

              <button
                onClick={() => dispatch({ type: 'CLEAR' })}
                style={{
                  marginTop: 12, width: '100%', padding: '8px',
                  background: '#fee2e2', color: '#991b1b',
                  border: 'none', borderRadius: 6, cursor: 'pointer',
                }}
              >
                Vaciar carrito de reserva
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}

const qtyBtn: React.CSSProperties = {
  width: 24, height: 24, border: '1px solid #d1d5db',
  borderRadius: 4, background: '#f9fafb',
  cursor: 'pointer', fontSize: 14, lineHeight: 1,
}
