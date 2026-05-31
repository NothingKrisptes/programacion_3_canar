const edadCliente = 25;
const tieneLicencia = true;
const diasReserva = 10;
const vehiculoDisponible = true;

if (edadCliente >= 21 && tieneLicencia) {
  console.log("El cliente cumple los requisitos para alquilar");
}

if (diasReserva >= 7 || vehiculoDisponible) {
  console.log("Descuento aplicable o vehículo disponible para reserva inmediata");
}

if (!tieneLicencia) {
  console.log("El cliente no tiene licencia vigente — reserva denegada");
}

const descuentoAplicable = (diasReserva >= 7) && vehiculoDisponible;
console.log("¿Descuento aplicable?", descuentoAplicable);

const nombre = "Carlos" || "Cliente sin nombre";
console.log(nombre);

const clienteVIP = null;
const clienteFinal = clienteVIP || "Cliente regular";
console.log(clienteFinal);

const configuracionPersonalizada = null;
const configuracionPorDefecto = configuracionPersonalizada ?? { tarifa: 45, diasMaximos: 30 };
console.log(configuracionPorDefecto);

const textoVacio = "";
const mensaje = textoVacio || "Sin mensaje";
console.log(mensaje);

const textoVacio2 = "";
const mensaje2 = textoVacio2 ?? "Sin mensaje";
console.log(mensaje2);