// src/AppLab.tsx

import { useState } from 'react'
import { Layout, Menu } from 'antd'
import LabAntButtons from './lab/LabAntButtons'
import LabAntAlert   from './lab/LabAntAlert'
import LabAntCard    from './lab/LabAntCard'
import LabAntForm    from './lab/LabAntForm'
import LabAntTable   from './lab/LabAntTable'

const { Header, Content } = Layout

type LabKey = 'buttons' | 'alert' | 'card' | 'form' | 'table'

const ITEMS = [
  { key: 'buttons', label: 'Buttons' },
  { key: 'alert',   label: 'Alert'   },
  { key: 'card',    label: 'Cards'   },
  { key: 'form',    label: 'Form'    },
  { key: 'table',   label: 'Table'   },
]

export default function AppLab() {
  const [lab, setLab] = useState<LabKey>('buttons')

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ color: 'white', fontWeight: 700, whiteSpace: 'nowrap' }}>
          Ant Design v6 LAB
        </span>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[lab]}
          items={ITEMS}
          onClick={({ key }) => setLab(key as LabKey)}
          style={{ flex: 1 }}
        />
      </Header>
      <Content style={{ padding: '24px 0' }}>
        {lab === 'buttons' && <LabAntButtons />}
        {lab === 'alert'   && <LabAntAlert />}
        {lab === 'card'    && <LabAntCard />}
        {lab === 'form'    && <LabAntForm />}
        {lab === 'table'   && <LabAntTable />}
      </Content>
    </Layout>
  )
}