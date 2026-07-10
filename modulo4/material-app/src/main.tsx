// src/main.tsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import App from './App.tsx'

const theme = createTheme({
  palette: { mode: 'light', primary: { main: '#1976d2' } },
  shape:   { borderRadius: 10 },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />   {/* normalize CSS global de MUI */}
      <App />
    </ThemeProvider>
  </StrictMode>,
)