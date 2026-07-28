// src/App.tsx
import PetCatalogList from './components/PetsCard'

interface Pet {
  id: number
  name: string
  type: string
  edad?: number
  price: number
}

const catalog: Pet[] = [
  { id: 1, name: 'Felipe', type: 'felino', edad: 2, price: 10},
  { id: 2, name: 'Negrito', type: 'canino', edad: 3, price: 15},
  { id: 3, name: 'Garph', type: 'felino', edad: 5, price: 20},
  { id: 4, name: 'Deacon', type: 'canino' , edad: 6, price: 15},
  { id: 5, name: 'Pancho', type: 'felino', edad: 4, price: 14.99},
]

export default function App() {
  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif' }}>

      <PetCatalogList pets={catalog} title="Lista de Mascotas" />

    </main>
  )
}