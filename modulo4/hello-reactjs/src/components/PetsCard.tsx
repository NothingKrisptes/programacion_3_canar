// src/components/ProductCatalogList.tsx

interface Pet {
  id: number
  name: string
  type: string
  edad?: number
  price: number
}

interface PetListProps {
  pets: Pet[]
  title?: string
}

export default function PetCatalogList({
  pets,
  title = 'Mascotas',
}: PetListProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>

      {pets.length === 0 && (
        <p style={{ color: '#999' }}>No hay mascotas disponibles.</p>
      )}

      <ul style={{ listStyle: 'disc', padding: 0 }}>
        {pets.map((pet) => (
          <li
            key={pet.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: '1px solid #eee',
              opacity: pet.type ? 0.4 : 1,
            }}
          >
            <span>
              {pet.name}
              <em style={{ marginLeft: 12, color: 'rgb(255, 255, 255)' }}>
                 {pet.type}
              </em>
             
                <em style={{ marginLeft: 12, color: 'rgb(255, 255, 255)' }}>
                    {pet.edad}
                </em>
            </span>
            <strong>${pet.price.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
      <footer>
        {pets.length} mascota(s)
      </footer>
    </section>
  )
}