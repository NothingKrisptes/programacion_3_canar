const prompt = require("prompt-sync")();

console.log("=== Calculadora de Reserva — Wheels To Go ===");

const diasTexto = prompt("¿Cuántos días desea alquilar?: ");
const tarifaTexto = prompt("Tarifa diaria del vehículo: ");

const dias = parseFloat(diasTexto) || 0;
const tarifa = parseFloat(tarifaTexto) || 0;

const subtotal = dias * tarifa;
const descuento = dias >= 7 ? subtotal * 0.10 : 0;
const total = subtotal - descuento;
const conIVA = total * 1.12;

console.log(`
Detalles de la reserva:
Días: ${dias}
Tarifa diaria: $${tarifa}
Subtotal: $${subtotal}
Descuento (≥7 días): $${descuento.toFixed(2)}
Total: $${total.toFixed(2)}
Total + IVA (12%): $${conIVA.toFixed(2)}
`);