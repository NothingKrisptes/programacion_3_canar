// src/components/CssModuleDemo_mp.tsx

import styles from '../styles/card_mp.module.css'

export default function CssModuleDemo_mp() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>CSS Modules</h3>
      <p style={{ margin: '0 0 12px', color: 'var(--muted)' }}>
        Cada clase recibe un nombre único generado en build time.
        Elimina colisiones sin necesitar BEM ni prefijos manuales.
      </p>
      <button className={styles.btn}>Reservar vehículo</button>
    </div>
  )
}
