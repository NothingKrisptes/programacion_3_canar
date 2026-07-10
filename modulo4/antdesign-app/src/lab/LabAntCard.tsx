// src/lab/LabAntCard.tsx

import { Card, Tag, Space, Typography, Row, Col } from 'antd'

const { Title, Text } = Typography

interface ProductCardProps {
  name:     string
  category: string
  price:    number
  active:   boolean
}

function ProductCard({ name, category, price, active }: ProductCardProps) {
  return (
    <Card
      hoverable
      styles={{ body: { display: 'flex', flexDirection: 'column', gap: 8 } }}
    >
      <Text strong>{name}</Text>
      <Text type="secondary" style={{ fontSize: 13 }}>{category}</Text>
      <Space>
        <Tag color={active ? 'success' : 'default'}>
          {active ? 'Activo' : 'Inactivo'}
        </Tag>
        <Text strong>${price.toFixed(2)}</Text>
      </Space>
    </Card>
  )
}

export default function LabAntCard() {
  const products: ProductCardProps[] = [
    { name: 'Teclado mecánico',  category: 'Periféricos', price: 89.99,  active: true  },
    { name: 'Monitor 27"',       category: 'Pantallas',   price: 349.99, active: true  },
    { name: 'Mouse inalámbrico', category: 'Periféricos', price: 29.99,  active: false },
  ]

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <Title level={4} style={{ marginBottom: 4 }}>LAB: Cards</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 20 }}>
        Cards tipadas con grid de Ant Design.
      </Text>
      <Row gutter={[16, 16]}>
        {products.map(p => (
          <Col key={p.name} xs={24} sm={12} md={8}>
            <ProductCard {...p} />
          </Col>
        ))}
      </Row>
    </div>
  )
}