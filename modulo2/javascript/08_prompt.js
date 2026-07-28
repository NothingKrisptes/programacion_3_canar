const prompt = require("prompt-sync")();

const nombre = prompt("Escribe tu nombre: ");
console.log(`Hola, ${nombre}!`);

const edadTexto = prompt("Escribe tu edad: ");
const edad = parseInt(edadTexto, 10);

if (isNaN(edad)) {
  console.log("Eso no es un número válido.");
} else {
  console.log(`Tienes ${edad} años.`);
}