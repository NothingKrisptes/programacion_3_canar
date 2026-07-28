console.log("Ciclo For")
for (let i=0;i<5;i++){
  console.log(i);
}

const frutas = ["pera","manzana","naranja"]
for (let i=0;i<frutas.length;i++){
    console.log(frutas[i]);
}

for(let fruta of frutas){
  console.log(fruta)
}

// Ejemplo — reporte de inventario con alertas por posición
const inventario = [
  { codigo: "A01", nombre: "Teclado",  stock: 2  },
  { codigo: "A02", nombre: "Monitor",  stock: 15 },
  { codigo: "A03", nombre: "Mouse",    stock: 0  },
  { codigo: "A04", nombre: "Audífonos",stock: 7  },
  { codigo: "A05", nombre: "Webcam",   stock: 1  },
];

const STOCK_CRITICO = 3;

console.log("=== Reporte de inventario ===");
console.log(`${"#".padEnd(4)} ${"Código".padEnd(6)} ${"Producto".padEnd(12)} Stock  Estado`);
console.log("─".repeat(48));

for (let i = 0; i < inventario.length; i++) {
  const item   = inventario[i];
  const numero = String(i + 1).padStart(2, "0");

  let estado;
  if (item.stock === 0) {
    estado = "🔴 AGOTADO";
  } else if (item.stock <= STOCK_CRITICO) {
    estado = "🟡 CRÍTICO";
  } else {
    estado = "🟢 Normal";
  }

  console.log(
    `${numero}.  ${item.codigo.padEnd(6)} ${item.nombre.padEnd(12)} ` +
    `${String(item.stock).padStart(3)}u   ${estado}`
  );
}
// ===  Reporte de inventario ===
// #    Código Producto     Stock  Estado
// ────────────────────────────────────────────────
// 01.  A01    Teclado        2u   🟡 CRÍTICO
// 02.  A02    Monitor       15u   🟢 Normal
// 03.  A03    Mouse          0u   🔴 AGOTADO
// 04.  A04    Audífonos      7u   🟢 Normal
// 05.  A05    Webcam         1u   🟡 CRÍTICO


// Ejemplo — tabla de amortización de préstamo (bucle hacia atrás no recomendado
// aquí, pero sí recorrer con índice para cálculos financieros)
const montoPrestamo  = 1000;
const tasaMensual    = 0.02;    // 2% mensual
const numeroCuotas   = 5;
const cuotaMensual   = montoPrestamo / numeroCuotas;

let saldoPendiente = montoPrestamo;

console.log("=== Tabla de amortización ===");
console.log(`Préstamo: $${montoPrestamo} | Tasa: ${tasaMensual * 100}% mensual | Cuotas: ${numeroCuotas}`);
console.log("─".repeat(55));
console.log("Cuota  Capital     Interés    Total       Saldo");
console.log("─".repeat(55));

for (let cuota = 1; cuota <= numeroCuotas; cuota++) {
  const interesMes  = saldoPendiente * tasaMensual;
  const totalCuota  = cuotaMensual + interesMes;
  saldoPendiente   -= cuotaMensual;

  const estado = saldoPendiente <= 0 ? " ← Cancelado" : "";

  console.log(
    `  ${String(cuota).padStart(2)}     ` +
    `$${cuotaMensual.toFixed(2).padStart(7)}  ` +
    `$${interesMes.toFixed(2).padStart(7)}  ` +
    `$${totalCuota.toFixed(2).padStart(7)}  ` +
    `$${Math.max(0, saldoPendiente).toFixed(2).padStart(7)}${estado}`
  );
}
// === Tabla de amortización ===
// Préstamo: $1000 | Tasa: 2% mensual | Cuotas: 5
// ──────────────────────────────────────────────────────
// Cuota  Capital     Interés    Total       Saldo
// ──────────────────────────────────────────────────────
//    1     $200.00    $20.00   $220.00   $800.00
//    2     $200.00    $16.00   $216.00   $600.00
//    3     $200.00    $12.00   $212.00   $400.00
//    4     $200.00     $8.00   $208.00   $200.00
//    5     $200.00     $4.00   $204.00     $0.00 ← Cancelado

// Ejemplo — resumen de ventas por vendedor
const reporteVentas = [
  { vendedor: "Carlos",  monto: 3200, region: "Norte" },
  { vendedor: "María",   monto: 4750, region: "Sur"   },
  { vendedor: "Luis",    monto: 2100, region: "Norte" },
  { vendedor: "Sofía",   monto: 5300, region: "Sur"   },
  { vendedor: "Roberto", monto: 1800, region: "Este"  },
];

const META_INDIVIDUAL  = 3000;
let totalGeneral       = 0;
let vendedoresEnMeta   = 0;

console.log("=== Resumen de ventas ===");

for (const venta of reporteVentas) {
  totalGeneral += venta.monto;

  const cumpleMeta = venta.monto >= META_INDIVIDUAL;
  if (cumpleMeta) {
    vendedoresEnMeta++;
  }

  const indicador = cumpleMeta ? "✅" : "⚠️";
  console.log(
    `${indicador} ${venta.vendedor.padEnd(8)} ` +
    `[${venta.region.padEnd(5)}]  ` +
    `$${venta.monto.toLocaleString()}`
  );
}

console.log("─".repeat(38));
console.log(`Total general:    $${totalGeneral.toLocaleString()}`);
console.log(`En meta (≥$${META_INDIVIDUAL}): ${vendedoresEnMeta}/${reporteVentas.length} vendedores`);
// ✅ Carlos   [Norte]  $3,200
// ✅ María    [Sur  ]  $4,750
// ⚠️ Luis     [Norte]  $2,100
// ✅ Sofía    [Sur  ]  $5,300
// ⚠️ Roberto  [Este ]  $1,800
// ──────────────────────────────────────
// Total general:    $17,150
// En meta (≥$3000): 3/5 vendedores

const reporteVentas2 = [
  { vendedor: "Carlos",  monto: 3200, region: "Norte" },
  { vendedor: "María",   monto: 4750, region: "Sur"   },
  { vendedor: "Luis",    monto: 2100, region: "Norte" },
  { vendedor: "Sofía",   monto: 5300, region: "Sur"   },
  { vendedor: "Roberto", monto: 1800, region: "Este"  },
];

const META_INDIVIDUAL2  = 3000;
let totalGeneral2       = 0;
let vendedoresEnMeta2   = 0;

console.log("=== Resumen de ventas ===");

for (const venta2 of reporteVentas2) {
  totalGeneral2 += venta2.monto;

  let indicador2 = "⚠️";
  if (venta2.monto >= META_INDIVIDUAL2) {
    indicador2 = "✅";
    vendedoresEnMeta2++;
  }
  console.log(
    `${indicador2} ${venta2.vendedor.padEnd(8)} ` +
    `[${venta2.region.padEnd(5)}]  ` +
    `$${venta2.monto.toLocaleString()}`
  );
}

console.log("─".repeat(38));
console.log(`Total general:    $${totalGeneral2.toLocaleString()}`);
console.log(`En meta (≥$${META_INDIVIDUAL2}): ${vendedoresEnMeta2}/${reporteVentas2.length} vendedores`);

// Ejemplo — análisis de texto: contar vocales y consonantes
const texto      = "JavaScript es increíble";
const VOCALES    = new Set(["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"]);
let conteoVocales    = 0;
let conteoConsonantes = 0;
let conteoEspacios    = 0;

for (const caracter of texto.toLowerCase()) {
  if (caracter === " ") {
    conteoEspacios++;
  } else if (VOCALES.has(caracter)) {
    conteoVocales++;
  } else if (caracter >= "a" && caracter <= "z") {
    conteoConsonantes++;
  }
}

console.log(`Texto: "${texto}"`);
console.log(`Vocales:     ${conteoVocales}`);
console.log(`Consonantes: ${conteoConsonantes}`);
console.log(`Espacios:    ${conteoEspacios}`);
console.log(`Total letras:${conteoVocales + conteoConsonantes}`);
// Texto: "JavaScript es increíble"
// Vocales:     8
// Consonantes: 12
// Espacios:    2
// Total letras: 20

// Ejemplo — ranking de productos más vendidos
const productosTop = ["Laptop Pro", "Auriculares BT", "Teclado Mec.", "Monitor 4K", "Webcam HD"];

console.log("=== Top 5 productos más vendidos ===");

for (const [posicion, producto] of productosTop.entries()) {
  const medalla =
    posicion === 0 ? "🥇" :
    posicion === 1 ? "🥈" :
    posicion === 2 ? "🥉" : `${posicion + 1}. `;

  console.log(`${medalla} ${producto}`);
}
// 🥇 Laptop Pro
// 🥈 Auriculares BT
// 🥉 Teclado Mec.
// 4.  Monitor 4K
// 5.  Webcam HD

// Ejemplo — mostrar configuración de sistema
const configuracionSistema = {
  idioma:       "es-EC",
  moneda:       "USD",
  zonaHoraria:  "America/Guayaquil",
  formatoFecha: "DD/MM/YYYY",
  maxSesiones:  3,
  modoOscuro:   false
};

console.log("=== Configuración actual del sistema ===");

for (const clave in configuracionSistema) {
  const valor = configuracionSistema[clave];

  // Formatear booleanos para mejor legibilidad
  const valorMostrado = typeof valor === "boolean"
    ? (valor ? "Activado" : "Desactivado")
    : valor;

  console.log(`  ${clave.padEnd(14)}: ${valorMostrado}`);
}
// === Configuración actual del sistema ===
//   idioma        : es-EC
//   moneda        : USD
//   zonaHoraria   : America/Guayaquil
//   formatoFecha  : DD/MM/YYYY
//   maxSesiones   : 3
//   modoOscuro    : Desactivado

// break — sale del bucle inmediatamente
// Ejemplo: buscar el primer producto con stock crítico
const productos = [
  { nombre: "Router",    stock: 10 },
  { nombre: "Switch",    stock: 4  },
  { nombre: "Firewall",  stock: 1  }, // ← primero con stock crítico
  { nombre: "Access Point", stock: 0 },
];

const STOCK_CRITICO_PRODUCTO = 2;

for (const producto of productos) {
  if (producto.stock <= STOCK_CRITICO_PRODUCTO) {
    console.log(`⚠️ Primer producto crítico encontrado: ${producto.nombre} (stock: ${producto.stock})`);
    break; // no es necesario seguir buscando
  }
}
// ⚠️ Primer producto crítico encontrado: Firewall (stock: 1)

// continue — salta a la siguiente iteración
// Ejemplo: procesar solo transacciones aprobadas
const transacciones = [
  { id: "TX001", monto: 500,  estado: "aprobada"  },
  { id: "TX002", monto: 200,  estado: "rechazada" },
  { id: "TX003", monto: 850,  estado: "aprobada"  },
  { id: "TX004", monto: 120,  estado: "pendiente" },
  { id: "TX005", monto: 1200, estado: "aprobada"  },
];

let totalAprobado = 0;

console.log("=== Procesando transacciones aprobadas ===");

for (const tx of transacciones) {
  if (tx.estado !== "aprobada") {
    console.log(`  ↩️  ${tx.id} omitida (${tx.estado})`);
    continue; // saltar transacciones no aprobadas
  }

  totalAprobado += tx.monto;
  console.log(`  ✅ ${tx.id}: $${tx.monto}`);
}

console.log(`Total aprobado: $${totalAprobado}`);
// ✅ TX001: $500
// ↩️  TX002 omitida (rechazada)
// ✅ TX003: $850
// ↩️  TX004 omitida (pendiente)
// ✅ TX005: $1200
// Total aprobado: $2550