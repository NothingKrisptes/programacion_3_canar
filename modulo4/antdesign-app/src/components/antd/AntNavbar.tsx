// src/components/antd/AntNavbar.tsx

import { NavLink }    from 'react-router-dom'
import { Layout, Menu } from 'antd'

const { Header } = Layout

export default function AntNavbar() {
  const items = [
    { key: 'home',  label: <NavLink to="/">Dashboard</NavLink>  },
    { key: 'about', label: <NavLink to="/about">Acerca de</NavLink> },
  ]

  return (
    <Header style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <span style={{ color: 'white', fontWeight: 900, fontSize: 16, whiteSpace: 'nowrap' }}>
        SalesBoard
      </span>
      <Menu
        theme="dark"
        mode="horizontal"
        items={items}
        style={{ flex: 1 }}
        defaultSelectedKeys={['home']}
      />
    </Header>
  )
}