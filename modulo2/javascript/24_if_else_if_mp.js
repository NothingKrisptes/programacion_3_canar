// Escenario 1: recomendaciones según clima para alquilar
const temperaturaActual = 28; 

if (temperaturaActual >= 35) {
  console.log("🌡️ Calor extremo. Recomendar vehículos con buen aire acondicionado.");
} else if (temperaturaActual >= 25) {
  console.log("☀️ Clima cálido. Ideal para alquilar vehículos turísticos.");
} else if (temperaturaActual >= 15) {
  console.log("🌤️ Clima agradable. Cualquier categoría de vehículo es adecuada.");
} else if (temperaturaActual >= 5) {
  console.log("🧥 Clima frío. Recomendar vehículos cerrados y seguros.");
} else {
  console.log("❄️ Riesgo de heladas. Avisar al cliente sobre condiciones de conducción.");
}
// Ejemplo: ☀️ Clima cálido. Ideal para alquilar vehículos turísticos.


// Escenario 2: cálculo de tarifa según categoría de vehículo
const diasAlquilerVehiculo = 4;
const TARIFA_COMPACTO   = 35.00;
const TARIFA_SEDAN      = 45.00;
const TARIFA_SUV        = 60.00;
const TARIFA_PREMIUM    = 90.00;

let costoTotalAlquiler;
let categoriaVehiculo;

if (diasAlquilerVehiculo <= 2) {
  costoTotalAlquiler = diasAlquilerVehiculo * TARIFA_COMPACTO;
  categoriaVehiculo = "Compacto";
} else if (diasAlquilerVehiculo <= 5) {
  costoTotalAlquiler = diasAlquilerVehiculo * TARIFA_SEDAN;
  categoriaVehiculo = "Sedán";
} else if (diasAlquilerVehiculo <= 10) {
  costoTotalAlquiler = diasAlquilerVehiculo * TARIFA_SUV;
  categoriaVehiculo = "SUV";
} else {
  costoTotalAlquiler = diasAlquilerVehiculo * TARIFA_PREMIUM;
  categoriaVehiculo = "Premium — incluye beneficios adicionales";
}

console.log(`Días de alquiler: ${diasAlquilerVehiculo}`);
console.log(`Categoría sugerida: ${categoriaVehiculo}`);
console.log(`Costo estimado: $${costoTotalAlquiler.toFixed(2)}`);


// Escenario 3: clasificación del estado de la licencia del cliente
const puntosLicencia = 78; // puntaje sobre 100

let estadoLicencia;
let clienteApto;

if (puntosLicencia >= 90) {
  estadoLicencia = "Excelente historial de conducción";
  clienteApto = true;
} else if (puntosLicencia >= 80) {
  estadoLicencia = "Muy buen historial de conducción";
  clienteApto = true;
} else if (puntosLicencia >= 70) {
  estadoLicencia = "Buen historial de conducción";
  clienteApto = true;
} else if (puntosLicencia >= 60) {
  estadoLicencia = "Historial aceptable, requiere revisión";
  clienteApto = true;
} else {
  estadoLicencia = "Historial riesgoso, no apto para alquiler";
  clienteApto = false;
}

console.log(`Puntaje licencia: ${puntosLicencia}/100`);
console.log(`Estado: ${estadoLicencia}`);
console.log(`¿Apto para alquilar?: ${clienteApto ? "Sí ✅" : "No ❌"}`);


// Escenario 4: clasificación del consumo de combustible estimado
/*
    <= 5 L/100km: "Consumo muy eficiente"
    <= 8 L/100km: "Consumo moderado"
    > 8 L/100km:  "Consumo alto"
*/
const prompt24 = require("prompt-sync")();
const consumoTexto = prompt24("Ingrese el consumo promedio del vehículo (L/100km): ");
const consumoCombustible = parseFloat(consumoTexto) || 0;

if (consumoCombustible <= 5) {
  console.log("Consumo muy eficiente");
} else if (consumoCombustible <= 8) {
  console.log("Consumo moderado");
} else {
  console.log("Consumo alto");
}


// Escenario 5: clasificación del presupuesto del cliente
/*
    < 40 por día: "Presupuesto básico"
    entre 40 y 70: "Presupuesto estándar"
    > 70: "Presupuesto premium"
*/
const presupuestoTexto = prompt24("Ingrese su presupuesto diario aproximado (USD): ");
const presupuestoDiario = parseFloat(presupuestoTexto) || 0;

if (presupuestoDiario < 40) {
  console.log("Presupuesto básico: recomendar autos compactos.");
} else if (presupuestoDiario >= 40 && presupuestoDiario <= 70) {
  console.log("Presupuesto estándar: recomendar sedanes y SUVs pequeñas.");
} else {
  console.log("Presupuesto premium: recomendar SUVs grandes y categoría lujo.");
}


// Escenario 6: tipo de día para la operación de la agencia
/*
    1-5: "Día laboral de agencia"
    6:   "Sábado, horario reducido"
    7:   "Domingo, solo entregas programadas"
    otro valor: "Día inválido"
*/
const diaTexto = prompt24("Ingrese el día de la semana (1-7): ");
const diaSemana = parseFloat(diaTexto) || 0;

if (diaSemana >= 1 && diaSemana <= 5) {
  console.log("Día laboral de agencia.");
} else if (diaSemana === 6) {
  console.log("Sábado, horario reducido.");
} else if (diaSemana === 7) {
  console.log("Domingo, solo entregas programadas.");
} else {
  console.log("Día inválido.");
}