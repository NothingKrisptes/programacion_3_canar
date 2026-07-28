// src/lab/LabAntTable.tsx

import { useState } from 'react'
import { Table, Tag, Input, Typography, Space } from 'antd'
import type { ColumnsType } from 'antd/es/table'

const { Title, Text } = Typography

interface Product {
  key:      number
  name:     string
  category: string
  price:    number
  active:   boolean
}

const PRODUCTS: Product[] = [
  { key: 1, name: 'Teclado mecánico',  category: 'Periféricos', price: 89.99,  active: true  },
  { key: 2, name: 'Monitor 27"',       category: 'Pantallas',   price: 349.99, active: true  },
  { key: 3, name: 'Mouse inalámbrico', category: 'Periféricos', price: 29.99,  active: false },
  { key: 4, name: 'Webcam HD',         category: 'Cámaras',     price: 59.99,  active: true  },
  { key: 5, name: 'Auriculares BT',    category: 'Audio',       price: 149.99, active: false },
]

// ColumnsType<T> — tipado completo de columnas con render y sorter
const COLUMNS: ColumnsType<Product> = [
  { title: '#', dataIndex: 'key', width: 50 },
  {
    title:     'Nombre',
    dataIndex: 'name',
    render:    (v: string) => <Text strong>{v}</Text>,
  },
  { title: 'Categoría', dataIndex: 'category' },
  {
    title:     'Precio',
    dataIndex: 'price',
    align:     'right',
    render:    (v: number) => <Text strong>${v.toFixed(2)}</Text>,
    sorter:    (a, b) => a.price - b.price,   // sorting integrado
  },
  {
    title:     'Estado',
    dataIndex: 'active',
    render:    (v: boolean) => (
      <Tag color={v ? 'success' : 'default'}>{v ? 'Activo' : 'Inactivo'}</Tag>
    ),
    filters: [
      { text: 'Activo',   value: true  },
      { text: 'Inactivo', value: false },
    ],
    onFilter: (value, record) => record.active === value,  // filtrado integrado
  },
]

export default function LabAntTable() {
  const [search, setSearch] = useState('')

  const filtered = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
      <Title level={4} style={{ marginBottom: 4 }}>LAB: Table</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 16 }}>
        Con ColumnsType, sorting, filtering y búsqueda.
      </Text>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Input.Search
          placeholder="Buscar producto o categoría..."
          allowClear
          onChange={e => setSearch(e.target.value)}
          style={{ maxWidth: 340 }}
        />
        <Table<Product>
          columns={COLUMNS}
          dataSource={filtered}
          pagination={{ pageSize: 4 }}
          size="middle"
        />
      </Space>
    </div>
  )
}