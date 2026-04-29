const temperatura = 28; // grados Celsius

if (temperatura >= 35) {
  console.log("🌡️ Calor extremo. Evitar actividad al aire libre.");
} else if (temperatura >= 25) {
  console.log("☀️ Temperatura cálida. Condiciones ideales para exteriores.");
} else if (temperatura >= 15) {
  console.log("🌤️ Temperatura agradable. Llevar una chaqueta ligera.");
} else if (temperatura >= 5) {
  console.log("🧥 Temperatura fría. Abrigarse bien.");
} else {
  console.log("❄️ Temperatura bajo cero. Riesgo de heladas.");
}
// ☀️ Temperatura cálida. Condiciones ideales para exteriores.

const pesoKg = 4.5;
const TARIFA_LIGERO   = 2.50;
const TARIFA_MEDIANO  = 5.00;
const TARIFA_PESADO   = 9.00;
const TARIFA_ESPECIAL = 15.00;

let costoEnvio;
let categoriaPeso;

if (pesoKg <= 1) {
  costoEnvio    = TARIFA_LIGERO;
  categoriaPeso = "Ligero";
} else if (pesoKg <= 5) {
  costoEnvio    = TARIFA_MEDIANO;
  categoriaPeso = "Mediano";
} else if (pesoKg <= 20) {
  costoEnvio    = TARIFA_PESADO;
  categoriaPeso = "Pesado";
} else {
  costoEnvio    = TARIFA_ESPECIAL;
  categoriaPeso = "Especial — requiere gestión manual";
}

console.log(`Paquete: ${pesoKg} kg`);
console.log(`Categoría: ${categoriaPeso}`);
console.log(`Costo de envío: $${costoEnvio.toFixed(2)}`);
// Paquete: 4.5 kg
// Categoría: Mediano
// Costo de envío: $5.00

const nota = 78; // sobre 100

let calificacion;
let aprobado;

if (nota >= 90) {
  calificacion = "A — Excelente";
  aprobado     = true;
} else if (nota >= 80) {
  calificacion = "B — Muy bueno";
  aprobado     = true;
} else if (nota >= 70) {
  calificacion = "C — Bueno";
  aprobado     = true;
} else if (nota >= 60) {
  calificacion = "D — Suficiente";
  aprobado     = true;
} else {
  calificacion = "F — Reprobado";
  aprobado     = false;
}

console.log(`Nota: ${nota}/100`);
console.log(`Calificación: ${calificacion}`);
console.log(`Estado: ${aprobado ? "Aprobado ✅" : "Reprobado ❌"}`);
// Nota: 78/100
// Calificación: C — Bueno
// Estado: Aprobado ✅

// Pide el consumo de energia (kWh):
/* 
    <= 100: "Consumo bajo"
    <= 300: "Consumo medio"
    300: "Consumo alto"
*/

const prompt = require("prompt-sync")();
const consumo = prompt("Ingrese el consumo de energia: ")
const c_energia = parseFloat(consumo) || 0;

if (c_energia <= 100){
    console.log("Consumo bajo")
} else if (c_energia <= 300){
    console.log("Consumo medio")
} else{
    console.log("Consumo alto")
}

/* Solicita el sueldo de un empleado:
    <500: "Sueldo basico"
    entre 500 y 1000: "Sueldo medio"
    1000: "Sueldo alto" 
*/
const sueldo = prompt("Ingrese su sueldo: ")
const s_empleado = parseFloat(sueldo) || 0;

if (s_empleado < 500){
    console.log("Sueldo basico")
}else if (s_empleado >= 500 && s_empleado <=1000 ){
    console.log("Sueldo medio")
}else{
    console.log("Sueldo alto")
}

/* Ingresa el dia de la semana (1-7)
    1-5: "Dia laboral" 
    6:"Sabado
    7:"Domingo
    otro valor: "Dia invalido
*/

const dia = prompt("Ingrese el dia de la semana en numeros: ")
const d_semana = parseFloat(dia) || 0;

if (d_semana >= 1 && d_semana <= 5){
    console.log("Dia laboral")
}else if (d_semana == 6){
    console.log("Sabado")
}else if (d_semana == 7){
    console.log("Domingo")
}else{
    console.log("Dia invalido")
}