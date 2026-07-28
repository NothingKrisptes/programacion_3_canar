// src/layouts/RootLayout.tsx

import { Link, NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <header style={{
        display: 'flex', alignItems: 'center', gap: 24,
        padding: '12px 24px', borderBottom: '1px solid #e5e7eb',
      }}>
        <Link
          to="/"
          style={{ fontWeight: 700, fontSize: 18, textDecoration: 'none', color: '#111' }}
        >
          Mi App
        </Link>

        <nav style={{ display: 'flex', gap: 16 }}>
          {[
            { to: '/',        label: 'Inicio'    },
            { to: '/products', label: 'Productos' },
            { to: '/about',   label: 'Acerca de' },
            { to: '/registration' , label: 'Registro'},
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}  // evita que "/" quede activo en todas las rutas
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontWeight:   isActive ? 600   : 400,
                color:        isActive ? '#0070f3' : '#6b7280',
                borderBottom: isActive ? '2px solid #0070f3' : '2px solid transparent',
                paddingBottom: 4,
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main style={{ maxWidth: 720, margin: '32px auto', padding: '0 16px' }}>
        <Outlet />  {/* aquí se renderiza la página activa */}
      </main>
    </div>
  )
}