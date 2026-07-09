// src/components/rb/RBHero.tsx

import { Container, Button, Stack, Badge } from 'react-bootstrap'

export default function RBHero() {
  return (
    <section className="py-5 bg-dark text-white">
      <Container>
        <Badge bg="primary" className="mb-3">React-Bootstrap v2</Badge>
        <h1 className="display-5 fw-bold mb-3">
          Aprende React con componentes probados
        </h1>
        <p className="lead text-white-50 mb-4" style={{ maxWidth: 560 }}>
          Componentes Bootstrap nativos en React. Sin clases manuales,
          sin jQuery, sin conflictos.
        </p>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          <Button variant="primary"      size="lg">Ver cursos</Button>
          <Button variant="outline-light" size="lg">Plan de estudio</Button>
        </Stack>
      </Container>
    </section>
  )
}