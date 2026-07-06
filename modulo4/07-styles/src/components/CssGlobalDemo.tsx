// src/components/CssGlobalDemo.tsx

import '../styles/global.css'

export default function CssGlobalDemo() {
  return (
    <div className="globalCard">
      <h3 className="globalTitle">CSS Global</h3>
      <p style={{ margin: 0, color: 'red' }}>
        Clases definidas en un archivo <code>.css</code> importado en el componente.
        Scope global — pueden colisionar si dos componentes usan el mismo nombre de clase.
      </p>
    </div>
  )
}