// src/App.tsx
// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  1  PrimerComponente  — componente de bienvenida                    │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 2

function PrimerComponente() {
  return (
    <main style={{ maxWidth: 480, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Hola desde Mi Primer Componente</h1>
      <p>Proyecto configurado con Vite 8.</p>
    </main>
  )
}

function SegundoComponente() {
  return (
    <main style={{ maxWidth: 480, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1> Este es el Segundo Componente</h1>
      <p>Proyecto configurado con Vite 8.</p>
    </main>
  )
}

export default function AppPrimerComponente() {
  const content =
    PASO === 1 ? <PrimerComponente /> : <SegundoComponente /> 


  return content
}