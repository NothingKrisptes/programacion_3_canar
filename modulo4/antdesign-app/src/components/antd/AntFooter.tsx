// src/components/antd/AntFooter.tsx

import { Layout, Typography } from 'antd'

const { Footer } = Layout
const { Text }   = Typography

export default function AntFooter() {
  return (
    <Footer style={{ textAlign: 'center' }}>
      <Text type="secondary">
        SalesBoard © {new Date().getFullYear()} — Ant Design v6 + React 19
      </Text>
    </Footer>
  )
}