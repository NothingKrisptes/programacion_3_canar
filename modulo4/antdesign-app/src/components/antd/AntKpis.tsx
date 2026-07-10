// src/components/antd/AntKpis.tsx

import { Card, Col, Row, Statistic, Typography } from 'antd'
import {
  ArrowUpOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  PercentageOutlined,
} from '@ant-design/icons'

const { Title } = Typography

interface KpiData {
  title:   string
  value:   number
  suffix?: string
  prefix?: string
  trend:   number
  icon:    React.ReactNode
  color:   string
}

const KPIS: KpiData[] = [
  { title: 'Ventas',     value: 12840, prefix: '$', trend:  12.5, icon: <ArrowUpOutlined />,     color: '#1677ff' },
  { title: 'Órdenes',    value: 342,                trend:   8.2, icon: <ShoppingCartOutlined />, color: '#52c41a' },
  { title: 'Clientes',   value: 1280,               trend:   5.1, icon: <TeamOutlined />,         color: '#722ed1' },
  { title: 'Conversión', value: 3.4,  suffix: '%',  trend:  -0.8, icon: <PercentageOutlined />,   color: '#fa8c16' },
]

export default function AntKpis() {
  return (
    <div style={{ marginBottom: 24 }}>
      <Title level={5} style={{ marginBottom: 12 }}>Resumen del período</Title>
      <Row gutter={[16, 16]}>
        {KPIS.map(kpi => (
          <Col key={kpi.title} xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title={kpi.title}
                value={kpi.value}
                suffix={kpi.suffix}
                prefix={kpi.prefix}
                precision={kpi.suffix === '%' ? 1 : 0}
                valueStyle={{ color: kpi.color }}
              />
              <div style={{ marginTop: 8, fontSize: 12, color: kpi.trend > 0 ? '#52c41a' : '#ff4d4f' }}>
                {kpi.trend > 0 ? '↑' : '↓'} {Math.abs(kpi.trend)}% vs mes anterior
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}