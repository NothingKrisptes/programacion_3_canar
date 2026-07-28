// src/lab/LabMuiButtons.tsx

import { Box, Button, Stack, Typography, IconButton, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon   from '@mui/icons-material/Send'
import AddIcon    from '@mui/icons-material/Add'

export default function LabMuiButtons() {
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h6" fontWeight={700} gutterBottom>LAB: Buttons</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Variantes, colores, tamaños, íconos y estados.
      </Typography>

      <Typography variant="subtitle2" sx={{ mb: 1 }}>Variantes</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 3 }}>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </Stack>

      <Typography variant="subtitle2" sx={{ mb: 1 }}>Colores</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 3 }}>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="success">Success</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="warning">Warning</Button>
      </Stack>

      <Typography variant="subtitle2" sx={{ mb: 1 }}>Con íconos</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 3 }}>
        <Button variant="contained" startIcon={<SendIcon />}>Enviar</Button>
        <Button variant="outlined"  startIcon={<AddIcon />}>Agregar</Button>
        <Button variant="outlined"  endIcon={<DeleteIcon />} color="error">Eliminar</Button>
        <Tooltip title="Eliminar elemento">
          <IconButton color="error"><DeleteIcon /></IconButton>
        </Tooltip>
      </Stack>

      <Typography variant="subtitle2" sx={{ mb: 1 }}>Tamaños y estados</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
        <Button variant="contained" size="large">Grande</Button>
        <Button variant="contained">Normal</Button>
        <Button variant="contained" size="small">Pequeño</Button>
        <Button variant="contained" disabled>Deshabilitado</Button>
        <Button variant="contained" loading>Cargando</Button>
      </Stack>
    </Box>
  )
}