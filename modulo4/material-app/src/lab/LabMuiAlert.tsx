// src/lab/LabMuiAlert.tsx

import { useState } from 'react'
import { Box, Alert, AlertTitle, Button, Collapse, Stack, Typography } from '@mui/material'

export default function LabMuiAlert() {
  const [show, setShow] = useState(true)

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h6" fontWeight={700} gutterBottom>LAB: Alert</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Severidades, títulos y control de visibilidad con Collapse.
      </Typography>

      <Stack spacing={2} sx={{ mb: 3 }}>
        <Alert severity="info">    Información de referencia.</Alert>
        <Alert severity="success"> Operación completada correctamente.</Alert>
        <Alert severity="warning"> Advertencia: acción irreversible.</Alert>
        <Alert severity="error">   Se produjo un error inesperado.</Alert>
      </Stack>

      <Typography variant="subtitle2" sx={{ mb: 1 }}>Con título (AlertTitle)</Typography>
      <Stack spacing={2} sx={{ mb: 3 }}>
        <Alert severity="success">
          <AlertTitle>Éxito</AlertTitle>
          El formulario fue enviado correctamente (demo).
        </Alert>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          No se pudo conectar al servidor. Intenta de nuevo.
        </Alert>
      </Stack>

      <Typography variant="subtitle2" sx={{ mb: 1 }}>Con Collapse (animación suave)</Typography>
      <Collapse in={show}>
        <Alert severity="info" onClose={() => setShow(false)} sx={{ mb: 1 }}>
          Esta alerta se puede cerrar con la X o con el botón de abajo.
        </Alert>
      </Collapse>
      {!show && (
        <Button size="small" onClick={() => setShow(true)}>Mostrar alerta</Button>
      )}
    </Box>
  )
}