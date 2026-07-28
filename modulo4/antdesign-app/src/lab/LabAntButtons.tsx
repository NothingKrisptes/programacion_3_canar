// src/lab/LabAntButtons.tsx

import { Button, Space, Typography } from 'antd'

const { Title, Text } = Typography

export default function LabAntButtons() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <Title level={4} style={{ marginBottom: 4 }}>LAB: Buttons</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 20 }}>
        Tipos, tamaños y estados.
      </Text>

      <Text strong style={{ display: 'block', marginBottom: 8 }}>Tipos</Text>
      <Space wrap style={{ marginBottom: 20 }}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
        <Button type="text">Text</Button>
        <Button danger>Danger</Button>
        <Button type="primary" danger>Primary Danger</Button>
      </Space>

      <Text strong style={{ display: 'block', marginBottom: 8 }}>Tamaños</Text>
      <Space wrap style={{ marginBottom: 20 }}>
        <Button type="primary" size="large">Grande</Button>
        <Button type="primary">Normal</Button>
        <Button type="primary" size="small">Pequeño</Button>
      </Space>

      <Text strong style={{ display: 'block', marginBottom: 8 }}>Estados</Text>
      <Space wrap>
        <Button type="primary" loading>Cargando</Button>
        <Button type="primary" disabled>Deshabilitado</Button>
      </Space>
    </div>
  )
}