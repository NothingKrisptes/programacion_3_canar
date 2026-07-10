// src/lab/LabMuiForm.tsx

import { useState } from 'react'
import {
  Box, Button, TextField, MenuItem,
  Alert, Typography, Stack,
} from '@mui/material'

interface FormValues {
  name:  string
  email: string
  role:  string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const ROLES = [
  { value: 'viewer', label: 'Viewer' },
  { value: 'editor', label: 'Editor' },
  { value: 'admin',  label: 'Admin'  },
]

export default function LabMuiForm() {
  const [values,  setValues]  = useState<FormValues>({ name: '', email: '', role: 'viewer' })
  const [errors,  setErrors]  = useState<FormErrors>({})
  const [success, setSuccess] = useState(false)

  function validate(): boolean {
    const e: FormErrors = {}
    if (!values.name.trim())         e.name  = 'El nombre es requerido'
    if (!values.email.includes('@')) e.email = 'Email inválido'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return
    setSuccess(true)
    setValues({ name: '', email: '', role: 'viewer' })
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h6" fontWeight={700} gutterBottom>LAB: Form</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        TextField con error/helperText, Select con MenuItem y validación manual.
      </Typography>

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>Registro enviado correctamente</Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 480 }}>
        <Stack spacing={2}>
          <TextField
            label="Nombre completo"
            value={values.name}
            onChange={e => {
              setValues(v => ({ ...v, name: e.target.value }))
              setErrors(v => ({ ...v, name: undefined }))
            }}
            error={!!errors.name}
            helperText={errors.name}
            placeholder="Ana García"
            fullWidth
          />
          <TextField
            label="Correo electrónico"
            type="email"
            value={values.email}
            onChange={e => {
              setValues(v => ({ ...v, email: e.target.value }))
              setErrors(v => ({ ...v, email: undefined }))
            }}
            error={!!errors.email}
            helperText={errors.email}
            placeholder="ana@ejemplo.com"
            fullWidth
          />
          <TextField
            label="Rol"
            select
            value={values.role}
            onChange={e => setValues(v => ({ ...v, role: e.target.value }))}
            fullWidth
          >
            {ROLES.map(r => (
              <MenuItem key={r.value} value={r.value}>{r.label}</MenuItem>
            ))}
          </TextField>
          <Button type="submit" variant="contained" sx={{ alignSelf: 'flex-start' }}>
            Registrar
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}