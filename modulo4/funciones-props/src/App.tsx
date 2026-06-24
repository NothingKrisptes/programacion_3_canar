import { useState } from 'react'
import DigitalCounter from './components/DigitalCounter'
import UserProfileForm from './components/UserProfileForm'
import TaskManager from './components/TaskManager'
import SafeCounter from './components/SafeCounter'
import CatalogProductItem from './components/CatalogProductItem'
import ShoppingCartSummary from './components/ShoppingCartSummary'

const PASO = 5

interface CartItem { id: number; name: string; price: number }

const catalog = [
  { id: 1, name: 'Teclado mecánico',  price: 89.99 },
  { id: 2, name: 'Monitor 27"',       price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99 },
]

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function handleAddToCart(id: number, name: string, price: number) {
    const alreadyInCart = cartItems.some((item) => item.id === id)
    if (alreadyInCart) return
    setCartItems((prev) => [...prev, { id, name, price }])
  }

  function handleClearCart() {
    setCartItems([])
  }

  const content =
    PASO === 1 ? <DigitalCounter label="Contador" step={1} /> :
    PASO === 2 ? <SafeCounter /> :
    PASO === 3 ? <UserProfileForm /> :
    PASO === 4 ? <TaskManager /> :
    PASO === 5 ? (
      <>
        <h1 style={{ fontSize: 22 }}>Tienda</h1>
        <section>
          {catalog.map((p) => (
            <CatalogProductItem
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              onAddToCart={handleAddToCart}
            />
          ))}
        </section>
        <ShoppingCartSummary items={cartItems} onClearCart={handleClearCart} />
      </>
    ) :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 480, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}