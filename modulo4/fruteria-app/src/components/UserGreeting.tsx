// src/components/UserGreeting.tsx
interface UserGreetingProps {
  name: string
  occupation?: string
}

export default function UserGreeting({ name, occupation }: UserGreetingProps) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: '#6366f1',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
        }}
      >
        {initials}
      </div>
      <div>
        <p style={{ margin: 0, fontWeight: 600 }}>Hola, {name}</p>
        {occupation && (
          <p style={{ margin: 0, fontSize: 13, color: '#888' }}>{occupation}</p>
        )}
      </div>
    </div>
  )
}