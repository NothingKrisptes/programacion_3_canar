const diasTexto = "7";
const diasNumero = Number(diasTexto);
const diasEntero = parseInt("7.5", 10);
const tarifaDecimal = parseFloat("45.99");
const codigoReserva = String(1024);
const reservaCancelada = Boolean(0);

console.log(diasNumero);
console.log(diasEntero);
console.log(tarifaDecimal);
console.log(codigoReserva);
console.log(reservaCancelada);

console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "2");
console.log(true + 1);
console.log(false + 1);

console.log(Number("abc"));
console.log(Number(""));
console.log(Number(null));
console.log(Number(undefined));

console.log(isNaN(Number("abc")));
console.log(isNaN(45));