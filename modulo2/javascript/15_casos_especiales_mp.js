console.log(100 / 0);
console.log(-100 / 0);
console.log(0 / 0);

console.log(NaN + 50);
console.log(NaN === NaN);

const tarifa1 = 45.10;
const tarifa2 = 45.20;
const diferencia = tarifa1 - tarifa2;
console.log(diferencia);
console.log(Math.abs(diferencia - 0.10) < Number.EPSILON);

const totalConDescuento = (45.10 - 0.20).toFixed(2);
console.log(totalConDescuento);
console.log(typeof totalConDescuento);