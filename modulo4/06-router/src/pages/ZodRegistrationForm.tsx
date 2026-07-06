// src/components/ZodRegistrationForm.tsx

import { useState } from 'react'
import { z }        from 'zod'

// 1. Definir el schema — es la única fuente de verdad
const RegisterSchema = z.object({
  fullName:  z.string().min(2, 'Mínimo 2 caracteres'),
  email:     z.string().email('Introduce un email válido'),
  password:  z.string()
    .min(8, 'Mínimo 8 caracteres')
    .regex(/[A-Z]/, 'Debe contener al menos una mayúscula')
    .regex(/[0-9]/, 'Debe contener al menos un número'),
  confirm:   z.string(),
  role:      z.enum(['admin', 'editor', 'viewer']),
  birthYear: z.number({ error: 'Debe ser un número' })
    .int('Debe ser un año completo')
    .min(1900, 'Año inválido')
    .max(new Date().getFullYear() - 18, 'Debes ser mayor de edad'),
}).refine(
  (data) => data.password === data.confirm,
  { message: 'Las contraseñas no coinciden', path: ['confirm'] }
)

// 2. Inferir el tipo desde el schema — sin duplicar la interface
type RegisterFormData = z.infer<typeof RegisterSchema>

// Errores: un string opcional por campo
type FormErrors = Partial<Record<keyof RegisterFormData, string>>

const INITIAL_VALUES: RegisterFormData = {
  fullName:  '',
  email:     '',
  password:  '',
  confirm:   '',
  role:      'viewer',
  birthYear: 2000,
}

export default function ZodRegistrationForm() {
  const [values, setValues] = useState<RegisterFormData>(INITIAL_VALUES)
  const [errors, setErrors] = useState<FormErrors>({})
  const [success, setSuccess] = useState(false)

  // Tipado genérico — field es una clave válida, value tiene el tipo correcto
  function handleChange<K extends keyof RegisterFormData>(
    field: K,
    value: RegisterFormData[K]
  ) {
    setValues((prev) => ({ ...prev, [field]: value }))
    // Limpia el error del campo al escribir
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // safeParse — nunca lanza, retorna { success, data } o { success, error }
    const result = RegisterSchema.safeParse(values)

    if (!result.success) {
      // Convertir los issues de Zod a nuestro mapa de errores
      const zodErrors: FormErrors = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof RegisterFormData
        // Guarda solo el primer error por campo
        if (field && !zodErrors[field]) {
          zodErrors[field] = issue.message
        }
      }
      setErrors(zodErrors)
      return
    }

    // result.data está completamente tipado — TypeScript lo sabe
    console.log('Datos validados:', result.data)
    setSuccess(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}
    >
      {success && (
        <div style={{ padding: 12, background: '#dcfce7', borderRadius: 6, color: '#166534' }}>
          ✅ Registro completado
        </div>
      )}

      {/* Nombre */}
      <FormField
        label="Nombre completo"
        value={values.fullName}
        error={errors.fullName}
        placeholder="Ana García"
        onChange={(v) => handleChange('fullName', v)}
      />

      {/* Email */}
      <FormField
        label="Correo electrónico"
        type="email"
        value={values.email}
        error={errors.email}
        placeholder="tu@email.com"
        onChange={(v) => handleChange('email', v)}
      />

      {/* Contraseña */}
      <FormField
        label="Contraseña"
        type="password"
        value={values.password}
        error={errors.password}
        placeholder="Mín. 8 caracteres, 1 mayúscula, 1 número"
        onChange={(v) => handleChange('password', v)}
      />

      {/* Confirmar contraseña */}
      <FormField
        label="Confirmar contraseña"
        type="password"
        value={values.confirm}
        error={errors.confirm}
        placeholder="Repite la contraseña"
        onChange={(v) => handleChange('confirm', v)}
      />

      {/* Rol */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <label style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>Rol</label>
        <select
          value={values.role}
          onChange={(e) =>
            handleChange('role', e.target.value as RegisterFormData['role'])
          }
          style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        >
          <option value="viewer">Viewer</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
        {errors.role && <p style={errorStyle}>{errors.role}</p>}
      </div>

      {/* Año de nacimiento */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <label style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>
          Año de nacimiento
        </label>
        <input
          type="number"
          value={values.birthYear}
          onChange={(e) => handleChange('birthYear', Number(e.target.value))}
          style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        />
        {errors.birthYear && <p style={errorStyle}>{errors.birthYear}</p>}
      </div>

      <button
        type="submit"
        style={{
          padding: '10px', background: '#0070f3', color: '#fff',
          border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 500,
        }}
      >
        Registrar
      </button>
    </form>
  )
}

interface FormFieldProps {
  label:        string
  value:        string
  error?:       string
  placeholder?: string
  type?:        string
  onChange:     (value: string) => void
}

function FormField({ label, value, error, placeholder, type = 'text', onChange }: FormFieldProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <label style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          padding: '8px 12px', fontSize: 14,
          border: `1px solid ${error ? '#ef4444' : '#d1d5db'}`,
          borderRadius: 6,
        }}
      />
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  )
}

const errorStyle = { margin: 0, fontSize: 12, color: '#ef4444' }