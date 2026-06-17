// src/components/PriceTag.tsx

type Currency = 'USD' | 'EUR' | 'COP' | 'MXN'

interface PriceTagProps {
  amount: number
  currency?: Currency
  discountPercent?: number
}

export default function PriceTag({
  amount,
  currency = 'USD',
  discountPercent = 0,
}: PriceTagProps) {
  const hasDiscount = discountPercent > 0
  const finalPrice  = hasDiscount ? amount * (1 - discountPercent / 100) : amount

  const symbols: Record<Currency, string> = {
    USD: '$',
    EUR: '€',
    COP: '$',
    MXN: '$',
  }

  const symbol = symbols[currency]

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      {hasDiscount && (
        <span style={{ fontSize: 13, color: '#aaa', textDecoration: 'line-through' }}>
          {symbol}{amount.toFixed(2)} {currency}
        </span>
      )}
      <span style={{ fontSize: 20, fontWeight: 700, color: hasDiscount ? '#e00' : '#333' }}>
        {symbol}{finalPrice.toFixed(2)} {currency}
      </span>
      {hasDiscount && (
        <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 500 }}>
          {discountPercent}% de descuento
        </span>
      )}
    </div>
  )
}