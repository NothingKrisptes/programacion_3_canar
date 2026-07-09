// src/lab/LabRbButtons.tsx

import { Container, Button, Stack } from 'react-bootstrap'

export default function LabRbButtons() {
  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Buttons</h2>
      <p className="text-secondary mb-3">Variantes, outline y tamaños.</p>

      <Stack direction="horizontal" gap={2} className="flex-wrap mb-3">
        <Button variant="primary">Primary</Button>
        <Button variant="outline-primary">Outline</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline-danger">Outline Danger</Button>
      </Stack>

      <Stack direction="horizontal" gap={2}>
        <Button variant="primary" size="lg">Large</Button>
        <Button variant="primary">Normal</Button>
        <Button variant="primary" size="sm">Small</Button>
      </Stack>
    </Container>
  )
}