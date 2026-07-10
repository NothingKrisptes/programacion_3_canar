// src/lab/LabAntAlert.tsx

import { useState } from 'react'
import { Alert, Button, Space, Typography } from 'antd'

const { Title, Text } = Typography

export default function LabAntAlert() {
  const [show, setShow] = useState(true)

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <Title level={4} style={{ marginBottom: 4 }}>LAB: Alert</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 20 }}>
        Las cuatro variantes y control de visibilidad.
      </Text>

      <Space direction="vertical" style={{ width: '100%', marginBottom: 20 }}>
        <Alert message="Información de referencia." type="info"    showIcon />
        <Alert message="Operación exitosa."         type="success" showIcon />
        <Alert message="Advertencia importante."    type="warning" showIcon />
        <Alert message="Se produjo un error."       type="error"   showIcon />
      </Space>

      <Text strong style={{ display: 'block', marginBottom: 8 }}>Con closable</Text>
      <Space direction="vertical" style={{ width: '100%', marginBottom: 16 }}>
        {show && (
          <Alert
            message="Alerta con cierre"
            description="Haz clic en la X para cerrar esta alerta."
            type="success"
            showIcon
            closable
            onClose={() => setShow(false)}
          />
        )}
      </Space>
      <Button onClick={() => setShow(true)}>Mostrar alerta</Button>
    </div>
  )
}