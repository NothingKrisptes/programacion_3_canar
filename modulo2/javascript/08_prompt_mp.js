const prompt = require("prompt-sync")();

const nombreCliente = prompt("Ingrese su nombre: ");
console.log(`Bienvenido a Wheels To Go, ${nombreCliente}!`);

const diasTexto = prompt("¿Cuántos días desea alquilar el vehículo?: ");
const dias = parseInt(diasTexto, 10);

if (isNaN(dias)) {
  console.log("Por favor ingrese un número válido de días.");
} else {
  console.log(`Ha reservado por ${dias} días.`);
}