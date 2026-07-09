// src/lab/LabRbTable.tsx

import { useState } from 'react'
import { Container, Table, Badge, Form, InputGroup } from 'react-bootstrap'

interface Product {
  id:       number
  name:     string
  category: string
  price:    number
  active:   boolean
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Teclado mecánico',   category: 'Periféricos', price: 89.99,  active: true  },
  { id: 2, name: 'Monitor 27"',        category: 'Pantallas',   price: 349.99, active: true  },
  { id: 3, name: 'Mouse inalámbrico',  category: 'Periféricos', price: 29.99,  active: false },
  { id: 4, name: 'Webcam HD',          category: 'Cámaras',     price: 59.99,  active: true  },
  { id: 5, name: 'Auriculares BT',     category: 'Audio',       price: 149.99, active: false },
]

export default function LabRbTable() {
  const [search, setSearch] = useState('')

  const filtered = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Table</h2>
      <p className="text-secondary mb-3">
        Striped, hover, responsive y búsqueda en tiempo real.
      </p>

      <InputGroup className="mb-3" style={{ maxWidth: 340 }}>
        <Form.Control
          placeholder="Buscar producto o categoría..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </InputGroup>

      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th className="text-end">Precio</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td className="fw-semibold">{p.name}</td>
              <td>{p.category}</td>
              <td className="text-end">${p.price.toFixed(2)}</td>
              <td>
                <Badge bg={p.active ? 'success' : 'secondary'}>
                  {p.active ? 'Activo' : 'Inactivo'}
                </Badge>
              </td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center text-muted">
                Sin resultados.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  )
}