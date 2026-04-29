const horaActual = 14; // hora en formato 24h

if (horaActual < 12) {
  console.log("Buenos días. Turno de mañana activo.");
} else {
  console.log("Buenas tardes. Turno de tarde activo.");
}
// Buenas tardes. Turno de tarde activo.

const ingresoMensual = 800;
const deudaActual = 200;
const INGRESO_MINIMO = 600;
const RATIO_DEUDA_MAXIMO = 0.4; // la deuda no debe superar el 40% del ingreso

const ratioDeuda = deudaActual / ingresoMensual;

if (ingresoMensual >= INGRESO_MINIMO && ratioDeuda <= RATIO_DEUDA_MAXIMO) {
  console.log("Crédito aprobado.");
  console.log(`Ratio deuda/ingreso: ${(ratioDeuda * 100).toFixed(1)}%`);
} else {
  console.log("Crédito denegado.");
  console.log(`Ingreso mínimo requerido: $${INGRESO_MINIMO}`);
  console.log(`Ratio deuda actual: ${(ratioDeuda * 100).toFixed(1)}% (máximo permitido: 40%)`);
}
// Crédito aprobado.
// Ratio deuda/ingreso: 25.0%

const contrasenaIngresada = "Segura123";
const contrasenaCorrecta  = "Segura123";
let intentosFallidos      = 0;
const MAX_INTENTOS        = 3;

if (contrasenaIngresada === contrasenaCorrecta) {
  console.log("Autenticación exitosa. Bienvenido.");
} else {
  intentosFallidos++;
  const intentosRestantes = MAX_INTENTOS - intentosFallidos;
  console.log(`Contraseña incorrecta. Intentos restantes: ${intentosRestantes}`);
}
// Autenticación exitosa. Bienvenido.


// Pide la cantidad de productos comprados
// Si son 10 o mas, muestra; "Descuento aplicado", si no; "Sin descuento".
const prompt = require("prompt-sync")();

const cantidad = prompt("Ingrese una cantidad de productos: ")
const c_productos = parseFloat(cantidad) || 0;

if (c_productos >= 10){
    console.log("Descuento Aplicado")
}else{
    console.log("Sin descuento")
}
console.log(`La cantidad de sus productos es: ${c_productos}`)

// Solicita una contraseña
// Si es igual a "1234", muestra: "Acceso permitido", si no: "Acceso Denegado".

const contrasenia = prompt("Ingrese la contraseña: ")
const c_usuario = parseFloat(contrasenia) || 0;

if (c_usuario === 1234){
    console.log("Acceso Permitido")
}else{
    console.log("Acceso Denegado")
    console.log(`La contraseña ${c_usuario} es incorrecta`)
}

// Ingresa la hora (formato 0-23)
// Si es menor a 12, muestra: "Buenos dias estrellitas", si no: "Buenas tardes/noches"

const hora = prompt("Ingrese la hora del dia: ")
const h_dia = parseFloat(hora) || 0;

if (h_dia < 12){
    console.log("Buenos dias, estrellitas")
}else{
    console.log("Buenas tardes/noches")
}
console.log(`Son las ${h_dia}h del dia`)