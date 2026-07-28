// index.js
const prompt = require("prompt-sync")();

console.log("=== Calculadora simple ===");

const aTexto = prompt("Primer número: ");
const bTexto = prompt("Segundo número: ");

const a = parseFloat(aTexto) || 0;
const b = parseFloat(bTexto) || 0;

const suma        = a + b;
const diferencia  = a - b;
const producto    = a * b;
const cociente    = b !== 0 ? a / b : "indefinido";

console.log(`
Resultados para ${a} y ${b}:
  Suma:       ${suma}
  Diferencia: ${diferencia}
  Producto:   ${producto}
  División:   ${cociente}
`);