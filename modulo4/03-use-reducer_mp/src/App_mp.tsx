// src/App_mp.tsx

import BasicCounter_mp     from './components/BasicCounter_mp'
import RegistrationForm_mp from './components/RegistrationForm_mp'
import ShoppingCart_mp     from './components/ShoppingCart_mp'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Wheels To Go — Cambia PASO y guarda (Ctrl+S) para navegar.          │
// │  1  BasicCounter_mp      — useReducer básico, contador de días       │
// │  2  RegistrationForm_mp  — formulario de registro con validación     │
// │  3  ShoppingCart_mp      — carrito de reserva de vehículos completo  │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 3

export default function App_mp() {
  const content =
    PASO === 1 ? <BasicCounter_mp /> :
    PASO === 2 ? <RegistrationForm_mp /> :
    PASO === 3 ? <ShoppingCart_mp /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h1 style={{ fontSize: 20, marginBottom: 8 }}>Wheels To Go</h1>
      {content}
    </main>
  )
}
