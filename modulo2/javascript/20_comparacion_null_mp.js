const clienteSeleccionado = null;
let fechaDevolucion;

console.log(clienteSeleccionado === null);
console.log(clienteSeleccionado === undefined);

console.log(fechaDevolucion === undefined);
console.log(fechaDevolucion === null);

console.log(clienteSeleccionado == undefined);
console.log(fechaDevolucion == null);

if (clienteSeleccionado === null) {
  console.log("No hay cliente seleccionado para esta reserva");
}

if (fechaDevolucion === undefined) {
  console.log("Fecha de devolución aún no asignada");
}

if (clienteSeleccionado == null) {
  console.log("Cliente no asignado (null o undefined)");
}