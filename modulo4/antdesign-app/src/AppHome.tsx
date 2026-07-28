// src/AppHome.tsx

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout }        from 'antd'
import AntNavbar         from './components/antd/AntNavbar'
import AntFooter         from './components/antd/AntFooter'
import HomeDashboard     from './pages/HomeDashboard'
import AboutPage         from './pages/AboutPage'

const { Content } = Layout

export default function AppHome() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <AntNavbar />
        <Content>
          <Routes>
            <Route path="/"      element={<HomeDashboard />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Content>
        <AntFooter />
      </Layout>
    </BrowserRouter>
  )
}