// src/AppLab.tsx

import { useState } from 'react'
import { Box, AppBar, Toolbar, Typography, Tabs, Tab, Container } from '@mui/material'
import LabMuiButtons from './lab/LabMuiButtons'
import LabMuiAlert   from './lab/LabMuiAlert'
import LabMuiCard    from './lab/LabMuiCard'
import LabMuiForm    from './lab/LabMuiForm'
import LabMuiTable   from './lab/LabMuiTable'

type LabKey = 0 | 1 | 2 | 3 | 4

const LAB_LABELS = ['Buttons', 'Alert', 'Cards', 'Form', 'Table']

export default function AppLab() {
  const [tab, setTab] = useState<LabKey>(0)

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ gap: 2 }}>
          <Typography variant="h6" fontWeight={700} sx={{ whiteSpace: 'nowrap' }}>
            Material UI v7 LAB
          </Typography>
          <Tabs
            value={tab}
            onChange={(_, v: LabKey) => setTab(v)}
            textColor="inherit"
            indicatorColor="secondary"
          >
            {LAB_LABELS.map((label, i) => (
              <Tab key={label} label={label} value={i as LabKey} />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 3 }}>
        {tab === 0 && <LabMuiButtons />}
        {tab === 1 && <LabMuiAlert />}
        {tab === 2 && <LabMuiCard />}
        {tab === 3 && <LabMuiForm />}
        {tab === 4 && <LabMuiTable />}
      </Container>
    </Box>
  )
}