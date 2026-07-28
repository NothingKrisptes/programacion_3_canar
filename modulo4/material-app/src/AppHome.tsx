// src/AppHome.tsx

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MuiShell      from './components/mui/MuiShell'
import DashboardPage from './pages/DashboardPage'
import AboutPage     from './pages/AboutPage'

export default function AppHome() {
  return (
    <BrowserRouter>
      <MuiShell>
        <Routes>
          <Route path="/"      element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </MuiShell>
    </BrowserRouter>
  )
}