// src/lab/LabRbCard.tsx

import { Container, Card, Button, Row, Col, Badge } from 'react-bootstrap'

interface ProductCardProps {
  title:    string
  price:    string
  category: string
  active:   boolean
}

function ProductCard({ title, price, category, active }: ProductCardProps) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
        <Card.Text>
          <Badge bg={active ? 'success' : 'secondary'} className="me-2">
            {active ? 'Activo' : 'Inactivo'}
          </Badge>
          <strong>{price}</strong>
        </Card.Text>
        <Button variant="primary" size="sm">Ver detalle</Button>
      </Card.Body>
    </Card>
  )
}

export default function LabRbCard() {
  const products = [
    { title: 'Teclado mecánico',  price: '$89.99',  category: 'Periféricos', active: true  },
    { title: 'Monitor 27"',       price: '$349.99', category: 'Pantallas',   active: true  },
    { title: 'Mouse inalámbrico', price: '$29.99',  category: 'Periféricos', active: false },
    { title: 'Impresora', price: '$99.99',  category: 'Periféricos', active: true },
  ]

  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Cards</h2>
      <p className="text-secondary mb-3">Grid responsivo con cards tipadas.</p>
      <Row className="g-3">
        {products.map(p => (
          <Col key={p.title} xs={12} sm={6} md={4}>
            <ProductCard {...p} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}