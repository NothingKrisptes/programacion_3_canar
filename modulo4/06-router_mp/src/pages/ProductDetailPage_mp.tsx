// src/pages/ProductDetailPage_mp.tsx

import { useParams, Link } from 'react-router-dom'

// Define el tipo de los parámetros de la URL
interface VehiculoParams {
  id: string   // los params siempre son string — convierte si necesitas número
}

export default function ProductDetailPage_mp() {
  const { id } = useParams<VehiculoParams>()

  // Convierte a número cuando lo necesites
  const vehiculoId = Number(id)

  if (!id || isNaN(vehiculoId)) {
    return <p style={{ color: '#ef4444' }}>ID de vehículo inválido.</p>
  }

  return (
    <div>
      <Link
        to="/products"
        style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none' }}
      >
        ← Volver a vehículos
      </Link>
      <h1 style={{ marginTop: 12 }}>Vehículo #{vehiculoId}</h1>
      <p style={{ color: '#6b7280' }}>
        Aquí iría el detalle del vehículo con ID {vehiculoId} — disponibilidad, tarifa por día y oficina de retiro.
      </p>
    </div>
  )
}
