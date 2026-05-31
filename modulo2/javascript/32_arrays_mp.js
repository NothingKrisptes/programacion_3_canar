// Arrays básicos en el contexto de Wheels to go
const tiposVehiculo = ["Económico", "Sedán", "SUV"];
const diasPromocion = [1, 2, 3, 4, 5];
const mezcla = [1, "W2G-01", true, null]; 
const sinReservas = [];


// Acceso por índice
console.log(tiposVehiculo[0]);
console.log(tiposVehiculo[2]);
console.log(tiposVehiculo[9]); // undefined
console.log(tiposVehiculo.at(-1));
console.log(tiposVehiculo.at(-2));


// Longitud
console.log(tiposVehiculo.length);


// Modificar un elemento
tiposVehiculo[1] = "Sedán Familiar";
console.log(tiposVehiculo);


// Operaciones básicas push/pop/unshift/shift
const codigosReservas = ["R001", "R002", "R003"];

codigosReservas.push("R004");
codigosReservas.push("R005", "R006");
console.log(codigosReservas);

const ultimaReserva = codigosReservas.pop();
console.log(ultimaReserva);
console.log(codigosReservas);

codigosReservas.unshift("R000");
console.log(codigosReservas);

const primeraReserva = codigosReservas.shift();
console.log(primeraReserva);
console.log(codigosReservas);


// splice — insertar/eliminar reservas
const dias = ["lun", "mar", "jue", "vie"];
dias.splice(2, 0, "mié");
console.log(dias);

const eliminados = dias.splice(1, 2);
console.log(eliminados);
console.log(dias);


// Búsqueda
const tarifas = [30, 40, 50, 40, 60];

console.log(tarifas.indexOf(40));
console.log(tarifas.indexOf(99));
console.log(tarifas.lastIndexOf(40));

console.log(tarifas.includes(50));
console.log(tarifas.includes(99));


// forEach en lista de sucursales
const sucursales = ["Norte", "Centro", "Sur"];

sucursales.forEach((sucursal, indice) => {
  console.log(`${indice}: ${sucursal}`);
});

for (const sucursal of sucursales) {
  console.log(`Sucursal: ${sucursal}`);
}


// MAP — transformar datos de vehículos
const diasAlquiler = [1, 3, 5, 7];

const diasConSeguroIncluido = diasAlquiler.map(d => d + 1);
console.log(diasConSeguroIncluido);

const clientes = [
  { nombre: "Ana", reservas: 3 },
  { nombre: "Luis", reservas: 1 },
  { nombre: "Marta", reservas: 5 },
];

const nombresClientes = clientes.map(c => c.nombre);
console.log(nombresClientes);

const resumenClientes = clientes.map(c => ({
  nombre: c.nombre,
  clienteFrecuente: c.reservas >= 3
}));

console.log(resumenClientes);


// FILTER — filtrar reservas largas o clientes activos
const duraciones = [1, 2, 7, 10, 3, 15];

const reservasLargas = duraciones.filter(d => d >= 7);
console.log(reservasLargas);

const clientes2 = [
  { nombre: "Ana",   activo: true,  reservas: 3 },
  { nombre: "Luis",  activo: true,  reservas: 0 },
  { nombre: "Marta", activo: false, reservas: 2 },
  { nombre: "Pedro", activo: true,  reservas: 5 },
];

const clientesActivosConReservas = clientes2.filter(c => c.activo && c.reservas > 0);
console.log(clientesActivosConReservas.map(c => c.nombre));


// REDUCE — sumar ingresos, contar vehículos, etc.
const ingresos = [120, 300, 450, 200];

const ingresoTotal = ingresos.reduce((acum, n) => acum + n, 0);
console.log(ingresoTotal);

const maxIngreso = ingresos.reduce((max, n) => (n > max ? n : max), -Infinity);
console.log(maxIngreso);


// Contar reservas por sucursal
const reservas = ["Norte", "Norte", "Sur", "Centro", "Norte", "Sur"];

const conteoReservas = reservas.reduce((acum, sucursal) => {
  acum[sucursal] = (acum[sucursal] ?? 0) + 1;
  return acum;
}, {});

console.log(conteoReservas);


// Aplanar listas de vehículos por sucursal
const flotaPorSucursal = [
  ["C01", "C02"],
  ["S01", "S02", "S03"],
  ["P01"]
];

const flotaTotal = flotaPorSucursal.reduce((acum, arr) => [...acum, ...arr], []);
console.log(flotaTotal);


// Ejercicio: trabajo con temperaturas para revisar neumáticos (ejemplo didáctico)
const celsius = [0, 15, -5, 22, 37, 100, -10, 28];

const fahrenheit = celsius.map(c => (c * 9 / 5) + 32);
console.log("Fahrenheit:", fahrenheit);

const celsiusEntre0y30 = celsius.filter(t => t >= 0 && t <= 30);
console.log("Entre 0 y 30°C:", celsiusEntre0y30);

const fahrenheitEntre0y30 = celsiusEntre0y30.map(c => (c * 9 / 5) + 32);
console.log("Entre 0 y 30°C en °F:", fahrenheitEntre0y30);