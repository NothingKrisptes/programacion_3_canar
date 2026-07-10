// src/components/antd/AntSalesTable.tsx

import { Table, Tag, Typography, Progress } from 'antd'
import type { ColumnsType } from 'antd/es/table'

const { Title, Text } = Typography

interface SaleRow {
  key:      number
  customer: string
  product:  string
  total:    number
  progress: number
  status:   'paid' | 'pending' | 'failed'
}

const DATA: SaleRow[] = [
  { key: 1, customer: 'Empresa Alpha',    product: 'Plan Pro',    total: 1200, progress: 100, status: 'paid'    },
  { key: 2, customer: 'StartupBeta',      product: 'Plan Básico', total: 740,  progress: 65,  status: 'pending' },
  { key: 3, customer: 'Consultora Gamma', product: 'Plan Pro',    total: 1200, progress: 100, status: 'paid'    },
  { key: 4, customer: 'MiPyme Delta',     product: 'Plan Team',   total: 310,  progress: 0,   status: 'failed'  },
  { key: 5, customer: 'TechEpsilon',      product: 'Plan Pro',    total: 1200, progress: 40,  status: 'pending' },
]

const STATUS_COLOR: Record<SaleRow['status'], string> = {
  paid:    'success',
  pending: 'warning',
  failed:  'error',
}

const STATUS_LABEL: Record<SaleRow['status'], string> = {
  paid:    'Pagado',
  pending: 'Pendiente',
  failed:  'Fallido',
}

const COLUMNS: ColumnsType<SaleRow> = [
  {
    title:     'Cliente',
    dataIndex: 'customer',
    render:    (v: string) => <Text strong>{v}</Text>,
  },
  { title: 'Producto', dataIndex: 'product' },
  {
    title:     'Total',
    dataIndex: 'total',
    align:     'right',
    render:    (v: number) => <Text strong>${v.toLocaleString()}</Text>,
    sorter:    (a, b) => a.total - b.total,
  },
  {
    title:     'Avance',
    dataIndex: 'progress',
    render:    (v: number) => (
      <Progress percent={v} size="small" style={{ margin: 0 }} />
    ),
  },
  {
    title:     'Estado',
    dataIndex: 'status',
    render:    (v: SaleRow['status']) => (
      <Tag color={STATUS_COLOR[v]}>{STATUS_LABEL[v]}</Tag>
    ),
    filters: [
      { text: 'Pagado',    value: 'paid'    },
      { text: 'Pendiente', value: 'pending' },
      { text: 'Fallido',   value: 'failed'  },
    ],
    onFilter: (value, record) => record.status === value,
  },
]

export default function AntSalesTable() {
  return (
    <div style={{ marginBottom: 24 }}>
      <Title level={5} style={{ marginBottom: 12 }}>Últimas ventas</Title>
      <Table<SaleRow>
        columns={COLUMNS}
        dataSource={DATA}
        pagination={{ pageSize: 4 }}
        size="middle"
      />
    </div>
  )
}