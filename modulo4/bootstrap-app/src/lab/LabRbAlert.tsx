// src/lab/LabRbAlert.tsx

import { useState } from 'react'
import { Container, Alert, Button } from 'react-bootstrap'

export default function LabRbAlert() {
  const [show, setShow] = useState(true)
   const [showAlert, setShowAlert] = useState(true)

  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Alert</h2>
      <p className="text-secondary mb-3">Con dismissible y control de visibilidad.</p>

      {show 
        ? (
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Operación exitosa</Alert.Heading>
            <p className="mb-0">El formulario se envió correctamente (demo).</p>
          </Alert>
        )
        : <Button onClick={() => setShow(true)}>Mostrar alerta</Button>
      }

      {showAlert
        ? (
          <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
            <Alert.Heading>Error de cálculo</Alert.Heading>
            <p className="mb-0">Division por cero no permitida.</p>
          </Alert>
        )
        : <Button onClick={() => setShowAlert(true)}>Calcular</Button>
      }
    </Container>
  )
}