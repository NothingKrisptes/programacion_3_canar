// Escenario 1: horario de atención de la agencia
const horaActual = 14; // hora en formato 24h

if (horaActual < 12) {
  console.log("Buenos días. Agencia Wheels to go en turno de mañana.");
} else {
  console.log("Buenas tardes. Agencia Wheels to go en turno de tarde.");
}
// Ejemplo de salida: Buenas tardes. Agencia Wheels to go en turno de tarde.


// Escenario 2: evaluación rápida de solicitud de alquiler a crédito
const ingresoMensualCliente = 800;
const cuotaMensualPropuesta = 200;
const INGRESO_MINIMO_ALQUILER = 600;
const RATIO_CUOTA_MAXIMO = 0.4; // la cuota no debe superar el 40% del ingreso

const ratioCuota = cuotaMensualPropuesta / ingresoMensualCliente;

if (ingresoMensualCliente >= INGRESO_MINIMO_ALQUILER && ratioCuota <= RATIO_CUOTA_MAXIMO) {
  console.log("Solicitud de alquiler aprobada.");
  console.log(`Ratio cuota/ingreso: ${(ratioCuota * 100).toFixed(1)}%`);
} else {
  console.log("Solicitud de alquiler rechazada.");
  console.log(`Ingreso mínimo requerido: $${INGRESO_MINIMO_ALQUILER}`);
  console.log(`Ratio de la cuota actual: ${(ratioCuota * 100).toFixed(1)}% (máximo permitido: 40%)`);
}
// Ejemplo: Solicitud de alquiler aprobada.
//          Ratio cuota/ingreso: 25.0%


// Escenario 3: validación de PIN para retirar vehículo en sucursal
const pinIngresado = "W2G-1234";
const pinCorrecto  = "W2G-1234";
let intentosFallidosPin = 0;
const MAX_INTENTOS_PIN = 3;

if (pinIngresado === pinCorrecto) {
  console.log("PIN correcto. Puede retirar el vehículo.");
} else {
  intentosFallidosPin++;
  const intentosRestantes = MAX_INTENTOS_PIN - intentosFallidosPin;
  console.log(`PIN incorrecto. Intentos restantes: ${intentosRestantes}`);
}
// Ejemplo: PIN correcto. Puede retirar el vehículo.


// Escenario 4: descuento por cantidad de días de alquiler
const prompt = require("prompt-sync")();

// Regla de negocio: a partir de 10 días de alquiler se aplica un descuento
const entradaDias = prompt("Ingrese la cantidad de días de alquiler: ");
const diasAlquiler = parseFloat(entradaDias) || 0;

if (diasAlquiler >= 10) {
  console.log("Descuento por larga duración aplicado.");
} else {
  console.log("Sin descuento por larga duración.");
}
console.log(`Días de alquiler reservados: ${diasAlquiler}`);


// Escenario 5: validación de código de reserva
const codigoReservaIngresado = prompt("Ingrese el código de reserva (por ejemplo 4321): ");
const codigoReserva = parseInt(codigoReservaIngresado) || 0;

if (codigoReserva === 4321) {
  console.log("Acceso permitido a los detalles de su reserva.");
} else {
  console.log("Acceso denegado a la reserva.");
  console.log(`El código ${codigoReserva} no corresponde a una reserva válida.`);
}


// Escenario 6: saludo según la hora al abrir la app
const entradaHora = prompt("Ingrese la hora actual (0 - 23): ");
const horaDia = parseFloat(entradaHora) || 0;

if (horaDia < 12) {
  console.log("Buenos días, bienvenido a Wheels to go.");
} else {
  console.log("Buenas tardes/noches, gracias por usar Wheels to go.");
}
console.log(`Hora registrada en el sistema: ${horaDia}h`);