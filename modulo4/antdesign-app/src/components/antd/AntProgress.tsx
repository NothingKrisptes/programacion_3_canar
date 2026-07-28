// src/components/antd/AntProgress.tsx

import { Card, Progress, Space, Typography } from 'antd'

const { Title, Text } = Typography

interface GoalProps {
  label:   string
  current: number
  target:  number
  color:   string
}

const GOALS: GoalProps[] = [
  { label: 'Meta de ventas mensual', current: 12840, target: 20000, color: '#1677ff' },
  { label: 'Nuevos clientes',        current: 48,    target: 80,    color: '#52c41a' },
  { label: 'Tickets resueltos',      current: 132,   target: 150,   color: '#722ed1' },
]

export default function AntGoals() {
  return (
    <Card style={{ marginBottom: 24 }}>
      <Title level={5} style={{ marginBottom: 16 }}>Objetivos del mes</Title>
      <Space direction="vertical" style={{ width: '100%' }}>
        {GOALS.map(g => {
          const percent = Math.round((g.current / g.target) * 100)
          return (
            <div key={g.label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <Text style={{ fontSize: 13 }}>{g.label}</Text>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {g.current.toLocaleString()} / {g.target.toLocaleString()}
                </Text>
              </div>
              <Progress
                percent={percent}
                strokeColor={g.color}
                size="small"
                style={{ margin: 0 }}
              />
            </div>
          )
        })}
      </Space>
    </Card>
  )
}