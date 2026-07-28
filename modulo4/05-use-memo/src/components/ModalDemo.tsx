// Uso — renombra value al desestructurar para mayor claridad
import { useToggle } from '../hooks/useToggle'

export default function ModalDemo() {
  const { value: isOpen, toggle, setFalse } = useToggle()

  return (
    <>
      <button onClick={toggle}>Abrir modal</button>
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
            <h3 style={{ marginTop: 0 }}>Modal</h3>
            <p>Contenido del modal.</p>
            <button onClick={setFalse}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  )
}