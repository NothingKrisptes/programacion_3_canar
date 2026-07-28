const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese su nombre completo: ", (nombreCliente) => {
  console.log(`¡Bienvenido a Wheels To Go, ${nombreCliente}!`);
  rl.close();
});