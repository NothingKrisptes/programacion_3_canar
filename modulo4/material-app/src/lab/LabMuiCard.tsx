// src/lab/LabMuiCard.tsx

import {
  Box, Card, CardContent, CardActions, CardMedia,
  Button, Typography, Chip, Grid,
} from '@mui/material'

interface ProductCardProps {
  name:     string
  category: string
  price:    number
  active:   boolean
  imageUrl: string
}

function ProductCard({ name, category, price, active, imageUrl }: ProductCardProps) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height={160}
        image={imageUrl}
        alt={name}
        onError={(e) => {
          ;(e.currentTarget as HTMLImageElement).src =
            'https://placehold.co/400x160?text=Sin+imagen'
        }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="subtitle1" fontWeight={700} gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {category}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <Chip
            label={active ? 'Activo' : 'Inactivo'}
            color={active ? 'success' : 'default'}
            size="small"
          />
          <Typography variant="h6" fontWeight={700}>${price.toFixed(2)}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">Ver detalle</Button>
      </CardActions>
    </Card>
  )
}

export default function LabMuiCard() {
  const products: ProductCardProps[] = [
    { name: 'Teclado mecánico',  category: 'Periféricos', price: 89.99,  active: true,  imageUrl: 'https://picsum.photos/seed/kb/400/160'  },
    { name: 'Monitor 27"',       category: 'Pantallas',   price: 349.99, active: true,  imageUrl: 'https://picsum.photos/seed/mon/400/160' },
    { name: 'Mouse inalámbrico', category: 'Periféricos', price: 29.99,  active: false, imageUrl: 'https://picsum.photos/seed/ms/400/160'  },
  ]

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', p: 3 }}>
      <Typography variant="h6" fontWeight={700} gutterBottom>LAB: Cards</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Con CardMedia, CardContent, CardActions, Chip y Grid v7.
      </Typography>
      <Grid container spacing={2}>
        {products.map(p => (
          // MUI v7 — size en lugar de xs/md
          <Grid key={p.name} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProductCard {...p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}