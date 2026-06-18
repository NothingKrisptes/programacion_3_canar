// src/App.tsx

import WelcomeBanner       from './components/WelcomeBanner'
import UserGreeting        from './components/UserGreeting'
import CurrentDateDisplay  from './components/CurrentDateDisplay'
import ColoredBox          from './components/ColoredBox'
import ConditionalGreeting from './components/ConditionalGreeting'
import FruitList           from './components/FruitList'
import PriceTag            from './components/PriceTag'
import StatusBadge         from './components/StatusBadge'
import MiniProfileCard     from './components/MiniProfileCard'
import SimpleInfoTable     from './components/SimpleInfoTable'
import SimpleInfoCars      from './components/SimpleInfoCars'
/*import ProductCard         from './components/ProductCard'
import ProductCatalogList  from './components/ProductCatalogList'
import UserProfileCard     from './components/UserProfileCard'*/


// ┌──────────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.          │
// │   1  WelcomeBanner       — banner estático sin props                    │
// │   2  UserGreeting        — props string + cálculo de iniciales          │
// │   3  CurrentDateDisplay  — fecha calculada al renderizar                │
// │   4  ColoredBox          — estilos dinámicos con props numéricas        │
// │   5  ConditionalGreeting — renderizado condicional + tipo unión         │
// │   6  FruitList           — lista tipada con .map()                      │
// │   7  PriceTag            — cálculos con props numéricas                 │
// │   8  StatusBadge         — Record para mapear tipos a estilos           │
// │   9  MiniProfileCard     — composición de componentes                   │
// │  10  SimpleInfoTable     — tabla con rows tipadas                       │
// │  11  ProductCard         — interfaz de props con opcionales y booleanas │
// │  12  ProductCatalogList  — lista con renderizado condicional de items   │
// │  13  UserProfileCard     — ejercicio: props complejas + rol             │
// └──────────────────────────────────────────────────────────────────────────┘
const PASO = 11

const fruits = [
  { name: 'Manzana', emoji: '🍎', inSeason: true, calories: 52 },
  { name: 'Banana',  emoji: '🍌', calories: 89 },
  { name: 'Naranja', emoji: '🍊', calories: 47 },
  { name: 'Kiwi', emoji: '🥝', calories: 61 },
  { name: 'Piña', emoji: '🍍', calories: 68 },
  { name: 'Mango', emoji: '🥭', calories: 86 },
]

const catalog = [
  { id: 1, name: 'Teclado mecánico',  price: 89.99 },
  { id: 2, name: 'Monitor 27 pulgadas', price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99, outOfStock: true },
  { id: 4, name: 'Webcam HD',         price: 59.99 },
]

export default function App() {
  const content =
    PASO ===  1 ? <WelcomeBanner subtitle='Programadores Estrellas'/> :
    PASO ===  2 ? <><UserGreeting name="Ana García" occupation="Desarrolladora Frontend" /></> :
    PASO ===  3 ? <CurrentDateDisplay /> :
    PASO ===  4 ? (
      <div style={{ display: 'flex', gap: 12 }}>
        <ColoredBox color="#0070f3" label="Primary" borderRadius={50}/>
        <ColoredBox color="#22c55e" label="Success" borderRadius={130} />
        <ColoredBox color="#e00"  borderRadius={40}  />
      </div>
    ) :
    PASO ===  5 ? <ConditionalGreeting isLoggedIn={true} userName="Carlos" timeOfDay="evening" /> :
    PASO ===  6 ? <FruitList fruits={fruits} title="Frutas favoritas" /> :
    PASO ===  7 ? (
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
        <PriceTag amount={99.99} currency="USD" />
        <PriceTag amount={99.99} currency="USD" discountPercent={20} />
      </div>
    ) :
    PASO ===  8 ? (
      <div style={{ display: 'flex', gap: 8 }}>
        <StatusBadge status="active" />
        <StatusBadge status="pending" label="En revisión" />
        <StatusBadge status="error" />
        <StatusBadge status="inactive" label="Inactivation" />
      </div>
    ) :
    PASO ===  9 ? (
      <MiniProfileCard
        fullName="Ana García"
        role="Senior Developer"
        department="Ingeniería"
        status="active"
        joinedYear={2019}
      />
    ) :
    PASO === 10 ? (
      <SimpleInfoTable
        title="Resumen del pedido"
        rows={[
          { label: 'Subtotal',  value: '$89.99' },
          { label: 'Envío',     value: '$5.00' },
          { label: 'Total',     value: '$94.99', highlight: true },
        ]}
      />
    ) :
    PASO === 11 ? (
      <SimpleInfoCars
        title="Resumen del pedido"
        rows={[
          { label: 'Marca',  value: 'Subaru' },
          { label: 'Modelo',   value: 'WRX' },
          { label: 'Año',     value: '2026'},
          { label: 'Precio',   value: '$60000.00'},
          { label: 'Envio',   value: '$25.00'},
          { label: 'Total',   value: '$60025.00', highlight: true },
        ]}
        
      />
    ) :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>
  return (
    <main style={{ maxWidth: 1260, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}