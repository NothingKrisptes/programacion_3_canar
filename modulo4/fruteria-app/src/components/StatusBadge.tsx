// src/components/StatusBadge.tsx

type BadgeStatus = 'active' | 'inactive' | 'pending' | 'error'

interface StatusBadgeProps {
  status: BadgeStatus
  label?: string
}

export default function StatusBadge({ status, label }: StatusBadgeProps) {
  const config: Record<BadgeStatus, { bg: string; color: string; text: string }> = {
    active:   { bg: '#dcfce7', color: '#166534', text: 'Activo' },
    inactive: { bg: '#f3f4f6', color: '#6b7280', text: 'Inactivo' },
    pending:  { bg: '#fef9c3', color: '#854d0e', text: 'Pendiente' },
    error:    { bg: '#fee2e2', color: '#991b1b', text: 'Error' },
  }

  const { bg, color, text } = config[status]

  return (
    <span
      style={{
        backgroundColor: bg,
        color,
        padding: '3px 10px',
        borderRadius: 12,
        fontSize: 12,
        fontWeight: 600,
        display: 'inline-block',
      }}
    >
      {label ?? text}
    </span>
  )
}