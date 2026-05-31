const edadCliente = 19;

if (edadCliente >= 21) {
  console.log("Reserva autorizada — edad mínima cumplida");
}

if (edadCliente < 21) {
  console.log("Reserva denegada — el cliente debe tener al menos 21 años");
}

const diasReserva = 10;

if (diasReserva >= 7) {
  console.log("Descuento del 10% aplicado por semana completa");
} else {
  console.log("Tarifa estándar aplicada");
}

const vehiculoDisponible = false;
const listaEspera = true;

if (vehiculoDisponible) {
  console.log("Reserva confirmada — vehículo disponible");
} else if (listaEspera) {
  console.log("Vehículo no disponible — agregado a lista de espera");
} else {
  console.log("Vehículo no disponible — por favor elija otro modelo");
}

const vehiculoSeleccionado = "Corolla";
const mensaje = vehiculoSeleccionado ? `Ha seleccionado: ${vehiculoSeleccionado}` : "No ha seleccionado ningún vehículo";
console.log(mensaje);