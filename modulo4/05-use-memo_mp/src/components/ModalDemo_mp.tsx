// src/components/ModalDemo_mp.tsx
// Uso — renombra value al desestructurar para mayor claridad
import { useToggle } from '../hooks/useToggle_mp'

export default function ModalDemo_mp() {
  const { value: isOpen, toggle, setFalse } = useToggle()

  return (
    <>
      <button onClick={toggle}>Confirmar reserva</button>
      {isOpen && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            background: '#fff', borderRadius: 10,
            padding: 24, minWidth: 300,
          }}>
            <h3 style={{ marginTop: 0 }}>Reserva Confirmada</h3>
            <p>Tu vehículo ha sido reservado en Wheels To Go.</p>
            <button onClick={setFalse}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  )
}
