console.log("Ciclo For - Días de alquiler");

for (let i = 0; i < 5; i++) {
  console.log(`Día ${i + 1} de alquiler`);
}


const tiposVehiculo = ["Económico", "Sedán", "SUV"];

for (let i = 0; i < tiposVehiculo.length; i++) {
  console.log(`Categoría ${i + 1}: ${tiposVehiculo[i]}`);
}

for (const tipo of tiposVehiculo) {
  console.log(`Tipo disponible: ${tipo}`);
}


// Ejemplo — reporte de flota con alertas por stock de vehículos
const flota = [
  { codigo: "C01", modelo: "Sedán Compacto",  stock: 2  },
  { codigo: "C02", modelo: "SUV Familiar",    stock: 10 },
  { codigo: "C03", modelo: "Económico",       stock: 0  },
  { codigo: "C04", modelo: "Pickup 4x4",      stock: 4  },
  { codigo: "C05", modelo: "Sedán Premium",   stock: 1  },
];

const STOCK_CRITICO = 3;

console.log("=== Reporte de flota Wheels to go ===");
console.log(`${"#".padEnd(4)} ${"Código".padEnd(6)} ${"Modelo".padEnd(18)} Stock  Estado`);
console.log("─".repeat(60));

for (let i = 0; i < flota.length; i++) {
  const item = flota[i];
  const numero = String(i + 1).padStart(2, "0");

  let estado;
  if (item.stock === 0) {
    estado = "🔴 SIN UNIDADES";
  } else if (item.stock <= STOCK_CRITICO) {
    estado = "🟡 POCO STOCK";
  } else {
    estado = "🟢 Disponible";
  }

  console.log(
    `${numero}.  ${item.codigo.padEnd(6)} ${item.modelo.padEnd(18)} ` +
    `${String(item.stock).padStart(3)}u   ${estado}`
  );
}


// Ejemplo — tabla de pagos de un plan de alquiler largo plazo
const montoContrato = 1000;
const tasaMensual = 0.02;     // 2% mensual de recargo
const numeroCuotas = 5;
const cuotaFija = montoContrato / numeroCuotas;

let saldoPendiente = montoContrato;

console.log("=== Tabla de pagos plan largo plazo ===");
console.log(`Contrato: $${montoContrato} | Recargo: ${tasaMensual * 100}% mensual | Cuotas: ${numeroCuotas}`);
console.log("─".repeat(60));
console.log("Cuota  Capital    Recargo    Total      Saldo");
console.log("─".repeat(60));

for (let cuota = 1; cuota <= numeroCuotas; cuota++) {
  const recargoMes = saldoPendiente * tasaMensual;
  const totalCuota = cuotaFija + recargoMes;
  saldoPendiente -= cuotaFija;

  const estado = saldoPendiente <= 0 ? " ← Contrato cancelado" : "";

  console.log(
    `  ${String(cuota).padStart(2)}   ` +
    `$${cuotaFija.toFixed(2).padStart(7)}  ` +
    `$${recargoMes.toFixed(2).padStart(7)}  ` +
    `$${totalCuota.toFixed(2).padStart(7)}  ` +
    `$${Math.max(0, saldoPendiente).toFixed(2).padStart(7)}${estado}`
  );
}


// Ejemplo — resumen de reservas por asesor
const reservasPorAsesor = [
  { asesor: "Carlos", reservas: 12, sucursal: "Norte" },
  { asesor: "María",  reservas: 18, sucursal: "Centro" },
  { asesor: "Luis",   reservas: 7,  sucursal: "Norte" },
  { asesor: "Sofía",  reservas: 20, sucursal: "Sur" },
];

const META_RESERVAS = 10;
let totalReservas = 0;
let asesoresEnMeta = 0;

console.log("=== Resumen de reservas por asesor ===");

for (const registro of reservasPorAsesor) {
  totalReservas += registro.reservas;

  const cumpleMeta = registro.reservas >= META_RESERVAS;
  if (cumpleMeta) {
    asesoresEnMeta++;
  }

  const indicador = cumpleMeta ? "✅" : "⚠️";
  console.log(
    `${indicador} ${registro.asesor.padEnd(8)} ` +
    `[${registro.sucursal.padEnd(6)}]  ` +
    `${registro.reservas} reservas`
  );
}

console.log("─".repeat(40));
console.log(`Total reservas: ${totalReservas}`);
console.log(`En meta (≥${META_RESERVAS} reservas): ${asesoresEnMeta}/${reservasPorAsesor.length} asesores`);