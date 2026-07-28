const nombre   = "Ana";
const apellido = "García";
const edad     = 28;

// Variable simple
console.log(`Hola, ${nombre}`);

// Expresión dentro de ${ }
console.log(`Nombre completo: ${nombre.toUpperCase()} ${apellido.toUpperCase()}`);
console.log(`El año que viene tendrás ${edad + 1} años`);
console.log(`¿Es mayor de edad? ${edad >= 18 ? "Sí" : "No"}`);

// String multilínea — sin caracteres especiales extra
const tarjeta = `
  Nombre:  ${nombre} ${apellido}
  Edad:    ${edad}
  Acceso:  ${edad >= 18 ? "Permitido" : "Denegado"}
`;

console.log(tarjeta);