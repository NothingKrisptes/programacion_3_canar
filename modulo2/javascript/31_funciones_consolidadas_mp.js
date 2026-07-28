const prompt = require("prompt-sync")();

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => {
  if (b === 0) return "Error: división por cero";
  return a / b;
};

function calcularMonto(a, b, operacion) {
  const operaciones = { "+": sumar, "-": restar, "*": multiplicar, "/": dividir };
  const fn = operaciones[operacion];
  if (!fn) return `Operación "${operacion}" no reconocida`;
  return fn(a, b);
}

function leerNumero(mensaje) {
  while (true) {
    const entrada = prompt(mensaje);
    const numero = parseFloat(entrada);
    if (!isNaN(numero)) return numero;
    console.log("Entrada no válida, intenta de nuevo.");
  }
}

console.log("=== Calculadora de montos de alquiler - Wheels to go ===");

const montoBase = leerNumero("Monto base de alquiler: ");
const valorOperacion = leerNumero("Valor adicional/descuento: ");
const operacion = prompt("Operación (+, -, *, /): ");
const resultado = calcularMonto(montoBase, valorOperacion, operacion);

console.log(`${montoBase} ${operacion} ${valorOperacion} = ${resultado}`);