// src/App_mp.tsx — rutas anidadas
import { Routes, Route } from 'react-router-dom'
import RootLayout_mp        from './layouts/RootLayout_mp'
import DashboardLayout_mp   from './layouts/DashboardLayout_mp'
import HomePage_mp          from './pages/HomePage_mp'
import ProductsPage_mp      from './pages/ProductsPage_mp'
import ProductDetailPage_mp from './pages/ProductDetailPage_mp'
import AboutPage_mp         from './pages/AboutPage_mp'
import LoginPage_mp         from './pages/LoginPage_mp'
import NotFoundPage_mp      from './pages/NotFoundPage_mp'
import ZodRegistrationForm_mp from './pages/ZodRegistrationForm_mp'

// Páginas del dashboard (simples por ahora)
function Overview()   { return <h2>Resumen</h2> }
function Analytics()  { return <h2>Analítica</h2> }
function SettingsPage(){ return <h2>Configuración</h2> }

export default function App_mp() {
  return (
    <Routes>
      {/* Layout raíz — todas las páginas comparten header de Wheels To Go */}
      <Route element={<RootLayout_mp />}>
        <Route index          element={<HomePage_mp />} />
        <Route path="products" element={<ProductsPage_mp />} />
        <Route path="products/:id" element={<ProductDetailPage_mp />} />
        <Route path="about"   element={<AboutPage_mp />} />
        <Route path="login"   element={<LoginPage_mp />} />
        <Route path="registration" element={<ZodRegistrationForm_mp/>}/>

        {/* Dashboard con su propio layout anidado */}
        <Route path="dashboard" element={<DashboardLayout_mp />}>
          <Route index          element={<Overview />} />
          <Route path="analytics"  element={<Analytics />} />
          <Route path="settings"   element={<SettingsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage_mp />} />
      </Route>
    </Routes>
  )
}
