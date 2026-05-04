index = 0
while(index<=5){
    console.log(index);
    index++;
}


// Ejemplo — procesamiento de cola de tickets de soporte
const ticketsPendientes = [
    { id: "T001", prioridad: "alta",   asunto: "Sistema caído" },
    { id: "T002", prioridad: "media",  asunto: "Error en reporte" },
    { id: "T003", prioridad: "baja",   asunto: "Actualizar perfil" },
    { id: "T004", prioridad: "alta",   asunto: "Acceso denegado" },
  ];
  
  let indice = 0;
  
  console.log("=== Procesando cola de soporte ===");
  
  while (indice < ticketsPendientes.length) {
    const ticket = ticketsPendientes[indice];
  
    if (ticket.prioridad === "alta") {
      console.log(`🔴 [URGENTE] ${ticket.id}: ${ticket.asunto}`);
    } else if (ticket.prioridad === "media") {
      console.log(`🟡 [NORMAL]  ${ticket.id}: ${ticket.asunto}`);
    } else {
      console.log(`🟢 [BAJO]    ${ticket.id}: ${ticket.asunto}`);
    }
  
    indice++;
  }
  
  console.log(`Total procesados: ${ticketsPendientes.length} tickets`);

// 🔴 [URGENTE] T001: Sistema caído
// 🟡 [NORMAL]  T002: Error en reporte
// 🟢 [BAJO]    T003: Actualizar perfil
// 🔴 [URGENTE] T004: Acceso denegado
// Total procesados: 4 tickets

// Ejemplo — acumulación de ventas hasta alcanzar meta
const META_VENTAS   = 1000;
const ventasDiarias = [120, 85, 200, 310, 95, 250]; // registros de ventas
let totalAcumulado  = 0;
let diasTranscurridos = 0;

while (totalAcumulado < META_VENTAS && diasTranscurridos < ventasDiarias.length) {
  const ventaDelDia = ventasDiarias[diasTranscurridos];
  totalAcumulado   += ventaDelDia;
  diasTranscurridos++;

  console.log(`Día ${diasTranscurridos}: +$${ventaDelDia} → Acumulado: $${totalAcumulado}`);

  if (totalAcumulado >= META_VENTAS) {
    console.log(`🎯 ¡Meta alcanzada en ${diasTranscurridos} día(s)!`);
  }
}

if (totalAcumulado < META_VENTAS) {
    const faltante = META_VENTAS - totalAcumulado;
    console.log(`Meta no alcanzada. Faltan $${faltante.toFixed(2)}`);
}

// Día 1: +$120 → Acumulado: $120
// Día 2: +$85  → Acumulado: $205
// Día 3: +$200 → Acumulado: $405
// Día 4: +$310 → Acumulado: $715
// Día 5: +$95  → Acumulado: $810
// Día 6: +$250 → Acumulado: $1060
// 🎯 ¡Meta alcanzada en 6 día(s)!

console.log('Tabla del 5:')
tabla = 0;
while (tabla <= 10){
    cinco = 5 * tabla;
    console.log(`5 * ${tabla} =`,cinco)
    tabla ++;
}


// Ejemplo — sistema de reintentos de conexión
const MAX_REINTENTOS   = 3;
const TIMEOUT_SEGUNDOS = 2;
let reintentos         = 0;
let conexionExitosa    = false;

do {
  reintentos++;
  console.log(`Intento ${reintentos}/${MAX_REINTENTOS}: conectando al servidor...`);

  // Simulación: la conexión falla en los primeros 2 intentos
  if (reintentos >= 3) {
    conexionExitosa = true;
  }

  if (!conexionExitosa && reintentos < MAX_REINTENTOS) {
    console.log(`  ⏳ Fallo. Reintentando en ${TIMEOUT_SEGUNDOS}s...`);
  }

} while (!conexionExitosa && reintentos < MAX_REINTENTOS);

if (conexionExitosa) {
  console.log("✅ Conexión establecida correctamente.");
} else {
  console.log("❌ No se pudo conectar. Verifique el servidor.");
}
// Intento 1/3: conectando al servidor...
//   ⏳ Fallo. Reintentando en 2s...
// Intento 2/3: conectando al servidor...
//   ⏳ Fallo. Reintentando en 2s...
// Intento 3/3: conectando al servidor...
// ✅ Conexión establecida correctamente.