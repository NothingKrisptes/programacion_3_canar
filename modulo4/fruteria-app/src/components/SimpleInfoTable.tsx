// src/components/SimpleInfoTable.tsx

interface TableRow {
  label: string
  value: string | number
  highlight?: boolean
}

interface SimpleInfoTableProps {
  title?: string
  rows: TableRow[]
}

export default function SimpleInfoTable({ title, rows }: SimpleInfoTableProps) {
  return (
    <div style={{ maxWidth: 360 }}>
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
                  width: '45%',
                }}
              >
                {row.label}
              </td>
              <td
                style={{
                  padding: '8px 12px',
                  borderBottom: '1px solid #e5e7eb',
                  fontWeight: row.highlight ? 600 : 400,
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