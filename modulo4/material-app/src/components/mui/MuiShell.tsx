// src/components/mui/MuiShell.tsx

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  AppBar, Box, CssBaseline, Divider, Drawer,
  IconButton, List, ListItemButton, ListItemIcon,
  ListItemText, Toolbar, Typography,
} from '@mui/material'
import MenuIcon      from '@mui/icons-material/Menu'
import DashboardIcon from '@mui/icons-material/Dashboard'
import InfoIcon      from '@mui/icons-material/Info'

const DRAWER_WIDTH = 240

const NAV = [
  { to: '/',      label: 'Dashboard', icon: <DashboardIcon /> },
  { to: '/about', label: 'Acerca de', icon: <InfoIcon /> },
]

// NavLink acepta style como función — { isActive } para resaltar el link activo
const linkSx = ({ isActive }: { isActive: boolean }) => ({
  display:        'block',
  textDecoration: 'none',
  color:          'inherit',
  borderRadius:   1,
  background:     isActive ? 'rgba(25,118,210,.10)' : 'transparent',
})

export default function MuiShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const drawer = (
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle1" fontWeight={900} sx={{ mb: 0.5 }}>
        Billing Admin
      </Typography>
      <Typography variant="caption" color="text.secondary">
        MUI v7 + API Products
      </Typography>
      <Divider sx={{ my: 1.5 }} />
      <List disablePadding sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        {NAV.map(({ to, label, icon }) => (
          <NavLink key={to} to={to} end={to === '/'} style={linkSx}>
            <ListItemButton dense>
              <ListItemIcon sx={{ minWidth: 36 }}>{icon}</ListItemIcon>
              <ListItemText
                primary={label}
                primaryTypographyProps={{ fontSize: 14 }}
              />
            </ListItemButton>
          </NavLink>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" sx={{ zIndex: t => t.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setMobileOpen(v => !v)}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" fontWeight={700} noWrap>
            Billing Admin
          </Typography>
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}>
        {/* Drawer temporal — móvil */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { width: DRAWER_WIDTH },
          }}
        >
          {drawer}
        </Drawer>

        {/* Drawer permanente — escritorio */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { width: DRAWER_WIDTH, boxSizing: 'border-box' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
          minHeight: '100vh',
          bgcolor: 'background.default',
        }}
      >
        <Toolbar />   {/* spacer para que el contenido no quede bajo el AppBar */}
        {children}
      </Box>
    </Box>
  )
}