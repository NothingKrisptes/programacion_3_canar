// src/components/MiniProfileCard.tsx

import StatusBadge from './StatusBadge'

type BadgeStatus = 'active' | 'inactive' | 'pending' | 'error'

interface MiniProfileCardProps {
  fullName: string
  role: string
  department?: string
  status: BadgeStatus
  joinedYear: number
}

export default function MiniProfileCard({
  fullName,
  role,
  department,
  status,
  joinedYear,
}: MiniProfileCardProps) {
  const initials = fullName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  const yearsInCompany = new Date().getFullYear() - joinedYear

  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 10,
        padding: 16,
        maxWidth: 280,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: '#6366f1',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: 16,
            flexShrink: 0,
          }}
        >
          {initials}
        </div>
        <div>
          <p style={{ margin: 0, fontWeight: 600, fontSize: 15 }}>{fullName}</p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>{role}</p>
        </div>
      </div>

      {department && (
        <p style={{ margin: 0, fontSize: 13, color: '#9ca3af' }}>
          📂 {department}
        </p>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <StatusBadge status={status} />
        <span style={{ fontSize: 12, color: '#9ca3af' }}>
          {yearsInCompany === 0
            ? 'Nuevo ingreso'
            : `${yearsInCompany} año${yearsInCompany > 1 ? 's' : ''} en la empresa`}
        </span>
      </div>
    </div>
  )
}