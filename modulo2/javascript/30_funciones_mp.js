function saludo() {
  console.log("Bienvenido a Wheels to go - Sistema de alquiler de vehículos");
}

saludo();


const mostrarBienvenida = function () {
  console.log("Inicia sesión para gestionar tus reservas de Wheels to go");
};

mostrarBienvenida();


const mostrarRecordatorio = () => {
  console.log("Recuerda devolver el vehículo con el tanque lleno.");
};

mostrarRecordatorio();


setTimeout(function () {
  console.log("Cargando disponibilidad de vehículos...");
}, 1000);


function saludarCliente(nombre) {
  console.log(`Hola ${nombre}, gracias por elegir Wheels to go.`);
}

saludarCliente("Pedro");


function resumenReserva(nombreCliente) {
  return `Reserva creada para el cliente: ${nombreCliente}`;
}

console.log(resumenReserva("Ana"));
console.log(resumenReserva("Luis"));


function calcularTotalAlquiler(dias, tarifaDiaria) {
  return dias * tarifaDiaria;
}

const total = calcularTotalAlquiler(5, 45);
console.log(`Total alquiler (5 días): $${total}`);


const calcularTotalAlquiler2 = (dias, tarifa) => {
  return dias * tarifa;
};


const calcularTotalAlquilerCorto = (dias, tarifa) => dias * tarifa;


const aplicarDescuentoLargoPlazo = dias => (dias >= 10 ? 0.9 : 1);

const obtenerMensajeSistema = () => "Wheels to go - Sistema en línea";

console.log(calcularTotalAlquiler2(3, 50));
console.log(calcularTotalAlquilerCorto(2, 60));
console.log(aplicarDescuentoLargoPlazo(12));
console.log(obtenerMensajeSistema());


const esStockSuficiente = unidades => unidades > 0;

console.log(esStockSuficiente(4));  // true
console.log(esStockSuficiente(0));  // false


function crearMensajeBienvenida(nombre = "cliente", saludo = "Bienvenido") {
  return `${saludo}, ${nombre}, a Wheels to go.`;
}

console.log(crearMensajeBienvenida());
console.log(crearMensajeBienvenida("Ana"));
console.log(crearMensajeBienvenida("Ana", "Buenos días"));


const calcularSeguro = (montoBase, porcentaje = 0.1) => montoBase * porcentaje;

console.log(calcularSeguro(300));     
console.log(calcularSeguro(300, 0.2)); 


const areaEstacionamiento = (ancho = 2.5, largo = 5) => ancho * largo;
console.log(areaEstacionamiento());


function sumarPagos(...montos) {
  let totalPagos = 0;
  for (const m of montos) {
    totalPagos += m;
  }
  return totalPagos;
}

console.log(sumarPagos(100, 200, 150));
console.log(sumarPagos(50, 75));
console.log(sumarPagos());


function registrarEvento(tipo, ...mensajes) {
  for (const msg of mensajes) {
    console.log(`[${tipo}] ${msg}`);
  }
}

registrarEvento("INFO", "Inicio del sistema", "Flota cargada", "Reservas sincronizadas");


function mostrarDatosCliente(etiqueta, ...datosCliente) {
  for (const linea of datosCliente) {
    console.log(`[${etiqueta}] ${linea}`);
  }
}

mostrarDatosCliente(
  "CLIENTE",
  "Nombre: Christian",
  "Apellido: Cañar",
  "Email: ejemplo@wheelstogo.com"
);


const tarifasCompacto = [30, 32, 35];
const tarifasSUV = [50, 55, 60];

console.log(Math.max(tarifasCompacto)); // NaN

console.log(Math.max(...tarifasCompacto)); // 35
console.log(Math.min(...tarifasSUV));      // 50

const tarifasTodas = [...tarifasCompacto, ...tarifasSUV];
console.log(tarifasTodas);

const codigosBase = ["W2G-01", "W2G-02", "W2G-03"];
const codigosCopia = [...codigosBase];
codigosCopia.push("W2G-04");
console.log(codigosBase);
console.log(codigosCopia);


const clienteBase = { nombre: "Ana", edad: 28 };
const clienteConCiudad = { ...clienteBase, ciudad: "Quito" };
console.log(clienteConCiudad);


function sinReturn() {
  const x = 42;
}

console.log(sinReturn()); 


function aplicaDescuentoPorCategoria(categoria) {
  if (categoria === "suv") {
    return true;
  }
  return false;
}

const aplicaDescuentoPorCategoriaCorto = categoria => categoria === "suv";

console.log(aplicaDescuentoPorCategoria("suv"));
console.log(aplicaDescuentoPorCategoriaCorto("sedan"));


function operarMontos(a, b, operacion) {
  return operacion(a, b);
}

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

console.log(operarMontos(100, 50, sumar));
console.log(operarMontos(100, 50, restar));
console.log(operarMontos(100, 2, multiplicar));

console.log(operarMontos(2, 3, (a, b) => a ** b));


const mensajeGlobal = "Configuración global de Wheels to go";

function ejemploScope() {
  const mensajeLocal = "Configuración local de sucursal";
  console.log(mensajeGlobal);
  console.log(mensajeLocal);
}

ejemploScope();

{
  const soloAqui = "Modo mantenimiento";
  console.log(soloAqui);
}

{
  var variableGlobalizada = "Variable que escapa del bloque";
}
console.log(variableGlobalizada);