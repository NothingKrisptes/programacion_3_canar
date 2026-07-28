// calculadora.js
const prompt = require("prompt-sync")();

// Funciones puras para cada operación
const sumar       = (a, b) => a + b;
const restar      = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir     = (a, b) => {
  if (b === 0) return "Error: división por cero";
  return a / b;
};

// Función que agrupa todas las operaciones
function calcular(a, b, operacion) {
  const operaciones = { "+": sumar, "-": restar, "*": multiplicar, "/": dividir };
  const fn = operaciones[operacion];
  if (!fn) return `Operación "${operacion}" no reconocida`;
  return fn(a, b);
}

// Función para leer un número válido
function leerNumero(mensaje) {
  while (true) {
    const entrada = prompt(mensaje);
    const numero  = parseFloat(entrada);
    if (!isNaN(numero)) return numero;
    console.log("Entrada no válida, intenta de nuevo.");
  }
}

// Programa principal
console.log("=== Calculadora con funciones ===");

const a         = leerNumero("Primer número: ");
const b         = leerNumero("Segundo número: ");
const operacion = prompt("Operación (+, -, *, /): ");
const resultado = calcular(a, b, operacion);

console.log(`${a} ${operacion} ${b} = ${resultado}`);