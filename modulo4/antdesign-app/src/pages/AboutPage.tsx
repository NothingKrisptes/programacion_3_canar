// src/pages/AboutPage.tsx

import { Card, Typography, List } from 'antd'

const { Title } = Typography

const STACK = [
  'React 19 + TypeScript',
  'Ant Design v6',
  'React Router v7',
  'Vite 8',
]

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '24px 16px' }}>
      <Title level={3} style={{ marginBottom: 20 }}>Acerca de este proyecto</Title>
      <Card>
        <List
          dataSource={STACK}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </Card>
    </div>
  )
}