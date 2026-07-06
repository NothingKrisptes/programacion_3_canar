// src/components/CssModuleDemo.tsx

import styles from '../styles/card.module.css'

export default function CssModuleDemo() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>CSS Modules</h3>
      <p style={{ margin: '0 0 12px', color: 'var(--muted)' }}>
        Cada clase recibe un nombre único generado en build time.
        Elimina colisiones sin necesitar BEM ni prefijos manuales.
      </p>
      <button className={styles.btn}>Botón con módulo</button>
    </div>
  )
}