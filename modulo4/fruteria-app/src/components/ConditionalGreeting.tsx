// src/components/ConditionalGreeting.tsx

type TimeOfDay = 'morning' | 'afternoon' | 'evening'

interface ConditionalGreetingProps {
  isLoggedIn: boolean
  userName?: string
  timeOfDay?: TimeOfDay
}

export default function ConditionalGreeting({
  isLoggedIn,
  userName = 'visitante',
  timeOfDay = 'morning',
}: ConditionalGreetingProps) {
  const greetings: Record<TimeOfDay, string> = {
    morning:   'Buenos días',
    afternoon: 'Buenas tardes',
    evening:   'Buenas noches',
  }

  if (!isLoggedIn) {
    return (
      <p style={{ color: '#e00' }}>
        Por favor inicia sesión para continuar.
      </p>
    )
  }

  return (
    <p style={{ color: '#333' }}>
      {greetings[timeOfDay]}, <strong>{userName}</strong>. Bienvenido de vuelta.
    </p>
  )
}