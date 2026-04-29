const prompt = require("prompt-sync")();
const totalCompra = 150;
const MINIMO_DESCUENTO = 100;
const PORCENTAJE_DESCUENTO = 0.10;

let totalFinal = totalCompra;

if (totalCompra >= MINIMO_DESCUENTO) {
  const descuento = totalCompra * PORCENTAJE_DESCUENTO;
  totalFinal = totalCompra - descuento;
  console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
}

console.log(`Total a pagar: $${totalFinal.toFixed(2)}`);
// Descuento aplicado: $15.00
// Total a pagar: $135.00

const stockDisponible = 3;
const UMBRAL_STOCK_BAJO = 5;

if (stockDisponible <= UMBRAL_STOCK_BAJO) {
  console.log(`⚠️ Stock bajo: quedan ${stockDisponible} unidades. Reabastecer pronto.`);
}

const edadUsuario = 17;
const EDAD_MINIMA = 18;

if (edadUsuario < EDAD_MINIMA) {
  console.log("Acceso denegado: debes ser mayor de edad para registrarte.");
}

console.log("Registro finalizado.");
// Acceso denegado: debes ser mayor de edad para registrarte.
// Registro finalizado.



// Solicita el monto de una compra
// Si el monto es mayor a 100, muestra: "Aplica descuento"

const monto = prompt("Ingrese un monto, por favor: ");
const monto_usuario = parseFloat(monto) || 0;

if (monto_usuario > 100){
    console.log("Aplica descuento")
}

// Pide la velocidad de un vehiculo
// Si supera los 90 km/h, muestra: "Exceso de velocidad"

const velocidad = prompt("Ingrese la velocidad del vehiculo: ")
const v_vehiculo = parseFloat(velocidad) || 0;

if (v_vehiculo > 90){
    console.log("Exceso de Velocidad")
}

// Ingresa el número de asistencias de un estudiante
// Si es menor a 70, muestra: "Pierde la materia por fallas"

const asistencia = prompt("Ingresa el numero de asistencias del estudiante: ")
const a_estudiante = parseFloat(asistencia) || 0;

if (a_estudiante < 70){
    console.log("Pierde la materia por faltas")
}
