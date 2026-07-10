// src/pages/HomeDashboard.tsx

import { Typography }  from 'antd'
import AntKpis         from '../components/antd/AntKpis'
import AntGoals        from '../components/antd/AntProgress'
import AntSalesTable   from '../components/antd/AntSalesTable'

const { Title, Text } = Typography

export default function HomeDashboard() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '24px 16px' }}>
      <Title level={3} style={{ marginBottom: 4 }}>Dashboard de Ventas</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 24 }}>
        KPIs, objetivos y últimas transacciones del período.
      </Text>
      <AntKpis />
      <AntGoals />
      <AntSalesTable />
    </div>
  )
}