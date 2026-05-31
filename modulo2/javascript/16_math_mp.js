console.log(Math.round(45.6));
console.log(Math.floor(45.9));
console.log(Math.ceil(45.1));
console.log(Math.abs(-20));
console.log(Math.max(30, 45, 58));
console.log(Math.min(30, 45, 58));
console.log(Math.sqrt(625));
console.log(Math.pow(5, 3));
console.log(Math.trunc(45.9));
console.log(Math.random());

function diasAleatorios(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(diasAleatorios(1, 30));