// Estado de una reserva de alquiler
const estadoReserva = "en_ruta";

switch (estadoReserva) {
  case "pendiente":
    console.log("📋 Reserva registrada. En espera de confirmación de pago.");
    break;
  case "confirmada":
    console.log("✅ Pago confirmado. Preparando el vehículo para entrega.");
    break;
  case "en_ruta":
    console.log("🚗 Vehículo en camino al punto de entrega.");
    break;
  case "entregada":
    console.log("📦 Vehículo entregado al cliente. ¡Gracias por elegir Wheels to go!");
    break;
  case "cancelada":
    console.log("❌ Reserva cancelada. Procesando reverso según políticas.");
    break;
  default:
    console.log(`Estado de reserva desconocido: "${estadoReserva}". Contactar soporte.`);
}

// Horario de atención según día de la semana
const diaSemana = 3; // 1=Lunes ... 7=Domingo

switch (diaSemana) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Día laboral — horario de alquiler: 08:00 a 18:00");
    break;
  case 6:
    console.log("Sábado — horario reducido: 09:00 a 14:00");
    break;
  case 7:
    console.log("Domingo — solo entregas programadas");
    break;
  default:
    console.log("Número de día no válido (usar 1-7)");
}

// Ejemplo: categoría de vehículo y su impuesto/recargo
const tipoVehiculo = "suv";
let tasaRecargo;
let descripcionRecargo;

switch (tipoVehiculo) {
  case "economico":
  case "compacto":
    tasaRecargo = 0;
    descripcionRecargo = "Sin recargo adicional";
    break;
  case "sedan":
    tasaRecargo = 0.05;
    descripcionRecargo = "Recargo 5% por categoría sedán";
    break;
  case "suv":
    tasaRecargo = 0.10;
    descripcionRecargo = "Recargo 10% por categoría SUV";
    break;
  case "premium":
    tasaRecargo = 0.18;
    descripcionRecargo = "Recargo 18% categoría Premium (incluye extras)";
    break;
  default:
    tasaRecargo = 0.10;
    descripcionRecargo = "Recargo estándar (categoría no especificada)";
}

const tarifaBase = 80;
const recargo = tarifaBase * tasaRecargo;

console.log(`Vehículo: ${tipoVehiculo}`);
console.log(`${descripcionRecargo}: $${recargo.toFixed(2)}`);
console.log(`Tarifa final por día: $${(tarifaBase + recargo).toFixed(2)}`);