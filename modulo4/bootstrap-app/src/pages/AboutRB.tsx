// src/pages/AboutRB.tsx

import { Container, Card, ListGroup } from 'react-bootstrap'

export default function AboutRB() {
  return (
    <Container className="py-5" style={{ maxWidth: 600 }}>
      <h1 className="h3 fw-bold mb-4">Acerca de este proyecto</h1>
      <Card className="shadow-sm">
        <Card.Header className="fw-semibold">Stack utilizado</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>React 19 + TypeScript</ListGroup.Item>
          <ListGroup.Item>React-Bootstrap v2 + Bootstrap 5</ListGroup.Item>
          <ListGroup.Item>React Router v7</ListGroup.Item>
          <ListGroup.Item>Vite 8</ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  )
}