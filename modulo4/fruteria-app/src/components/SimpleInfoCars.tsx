// src/components/SimpleInfoCars.tsx

interface CarsRow {
  label: string
  value: string | number
  highlight?: boolean
}

interface SimpleInfoCarsProps {
  title?: string
  rows: CarsRow[]
}

export default function SimpleInfoCars({ title, rows }: SimpleInfoCarsProps) {
  return (
    <div style={{ maxWidth: 1260 }}>
      {title && <h3 style={{ marginBottom: 8, fontSize: 15 }}>{title}</h3>}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.label}
              style={{
                backgroundColor: row.highlight ? '#fef9c3' : 'transparent',
              }}
            >
              <td
                style={{
                  padding: '8px 12px',
                  borderBottom: '1px solid #e5e7eb',
                  color: '#6b7280',
                  width: '86%',
                }}
              >
                {row.label}
              </td>
              <td
                style={{
                  padding: '8px 12px',
                  borderBottom: '1px solid #e5e7eb',
                  fontWeight: row.highlight ? 1260 : 600,
                }}
              >
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}