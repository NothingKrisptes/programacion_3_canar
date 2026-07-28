// Contador simple: mostrar los primeros 6 días de alquiler
let index = 0;

while (index <= 5) {
  console.log(`Día de alquiler: ${index}`);
  index++;
}

// Ejemplo — procesamiento de cola de reservas pendientes
const reservasPendientes = [
  { id: "R001", prioridad: "alta",   cliente: "Carlos" },
  { id: "R002", prioridad: "media",  cliente: "Ana"    },
  { id: "R003", prioridad: "baja",   cliente: "Luis"   },
  { id: "R004", prioridad: "alta",   cliente: "María"  },
];

let indice = 0;

console.log("=== Procesando cola de reservas ===");

while (indice < reservasPendientes.length) {
  const reserva = reservasPendientes[indice];

  if (reserva.prioridad === "alta") {
    console.log(`🔴 [PRIORIDAD ALTA] ${reserva.id} - Cliente: ${reserva.cliente}`);
  } else if (reserva.prioridad === "media") {
    console.log(`🟡 [PRIORIDAD MEDIA] ${reserva.id} - Cliente: ${reserva.cliente}`);
  } else {
    console.log(`🟢 [PRIORIDAD BAJA] ${reserva.id} - Cliente: ${reserva.cliente}`);
  }

  indice++;
}

console.log(`Total de reservas procesadas: ${reservasPendientes.length}`);

// Ejemplo — acumulación de ingresos hasta alcanzar meta mensual
const META_INGRESOS = 3000;
const ingresosDiarios = [420, 380, 600, 550, 310, 900];
let ingresosAcumulados = 0;
let diasTranscurridos = 0;

while (ingresosAcumulados < META_INGRESOS && diasTranscurridos < ingresosDiarios.length) {
  const ingresoDelDia = ingresosDiarios[diasTranscurridos];
  ingresosAcumulados += ingresoDelDia;
  diasTranscurridos++;

  console.log(`Día ${diasTranscurridos}: +$${ingresoDelDia} → Acumulado: $${ingresosAcumulados}`);

  if (ingresosAcumulados >= META_INGRESOS) {
    console.log(`🎯 Meta de ingresos alcanzada en ${diasTranscurridos} día(s).`);
  }
}

if (ingresosAcumulados < META_INGRESOS) {
  const faltante = META_INGRESOS - ingresosAcumulados;
  console.log(`Meta no alcanzada. Faltan $${faltante.toFixed(2)}.`);
}


console.log("Tabla del 5:");
let tabla = 0;

while (tabla <= 10) {
  const cinco = 5 * tabla;
  console.log(`5 * ${tabla} = ${cinco}`);
  tabla++;
}

// Ejemplo — sistema de reintentos de conexión al servidor de reservas
const MAX_REINTENTOS = 3;
const TIMEOUT_SEGUNDOS = 2;
let reintentos = 0;
let conexionExitosa = false;

do {
  reintentos++;
  console.log(`Intento ${reintentos}/${MAX_REINTENTOS}: conectando al servidor de Wheels to go...`);

  if (reintentos >= 3) {
    conexionExitosa = true;
  }

  if (!conexionExitosa && reintentos < MAX_REINTENTOS) {
    console.log(`  ⏳ Fallo. Reintentando en ${TIMEOUT_SEGUNDOS}s...`);
  }

} while (!conexionExitosa && reintentos < MAX_REINTENTOS);

if (conexionExitosa) {
  console.log("✅ Conexión establecida correctamente con el servidor de reservas.");
} else {
  console.log("❌ No se pudo conectar. Verifique el servidor de Wheels to go.");
}