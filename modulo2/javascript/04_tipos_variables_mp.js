const tarifaDiaria = 45;
const descuento = 0.15;
const diasMaximos = 30;
const tarifaConDescuento = -5;

const modeloVehiculo = 'Toyota Corolla';
const nombreCliente = "Ana García";
const codigoReserva = `RES-2026-${modeloVehiculo.toUpperCase().replace(' ', '-')}`;

const vehiculoDisponible = true;
const reservaConfirmada = false;

const clienteSinReserva = null;
let fechaDevolucion;

const idVehiculo = Symbol("vehiculo-001");

const kmRecorridos = 999999999999999999n;

console.log(typeof tarifaDiaria);
console.log(typeof modeloVehiculo);
console.log(typeof vehiculoDisponible);
console.log(typeof fechaDevolucion);
console.log(typeof clienteSinReserva);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});