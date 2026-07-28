// src/App.tsx — rutas anidadas
import { Routes, Route } from 'react-router-dom'
import RootLayout       from './layouts/RootLayout'
import DashboardLayout  from './layouts/DashboardLayout'
import HomePage         from './pages/HomePage'
import ProductsPage     from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import AboutPage        from './pages/AboutPage'
import LoginPage        from './pages/LoginPage'
import NotFoundPage     from './pages/NotFoundPage'
import ZodRegistrationForm from './pages/ZodRegistrationForm'

// Páginas del dashboard (simples por ahora)
function Overview()   { return <h2>Resumen</h2> }
function Analytics()  { return <h2>Analítica</h2> }
function SettingsPage(){ return <h2>Configuración</h2> }

export default function App() {
  return (
    <Routes>
      {/* Layout raíz — todas las páginas comparten header */}
      <Route element={<RootLayout />}>
        <Route index          element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductDetailPage />} />
        <Route path="about"   element={<AboutPage />} />
        <Route path="login"   element={<LoginPage />} />
        <Route path="registration" element={<ZodRegistrationForm/>}/>

        {/* Dashboard con su propio layout anidado */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index          element={<Overview />} />
          <Route path="analytics"  element={<Analytics />} />
          <Route path="settings"   element={<SettingsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}