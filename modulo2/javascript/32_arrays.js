// Crear un array — corchetes []
const frutas   = ["manzana", "banana", "cereza"];
const numeros  = [1, 2, 3, 4, 5];
const mixto    = [1, "dos", true, null];          // válido pero poco recomendable
const vacio    = [];

// Acceso por índice — empieza en 0
console.log(frutas[0]);   // "manzana"
console.log(frutas[2]);   // "cereza"
console.log(frutas[9]);   // undefined — no lanza error

// Índice negativo — NO funciona en JS (devuelve undefined)
console.log(frutas[-1]);  // undefined ← en Python sí funciona, en JS no

// at() — acceso con índice negativo (ES2022)
console.log(frutas.at(-1));   // "cereza"  ← el último elemento
console.log(frutas.at(-2));   // "banana"

// Longitud
console.log(frutas.length);   // 3

// Modificar un elemento
frutas[1] = "mango";
console.log(frutas);   // ["manzana", "mango", "cereza"]

const arr = [1, 2, 3];

// push — añade al final, devuelve la nueva longitud
arr.push(4);
arr.push(5, 6);           // se pueden añadir varios a la vez
console.log(arr);          // [1, 2, 3, 4, 5, 6]

// pop — elimina el último, devuelve el elemento eliminado
const ultimo = arr.pop();
console.log(ultimo);       // 6
console.log(arr);          // [1, 2, 3, 4, 5]

// unshift — añade al inicio (más lento que push)
arr.unshift(0);
console.log(arr);          // [0, 1, 2, 3, 4, 5]

// shift — elimina el primero, devuelve el elemento eliminado
const primero = arr.shift();
console.log(primero);      // 0
console.log(arr);          // [1, 2, 3, 4, 5]

// splice — elimina, reemplaza o inserta en cualquier posición
// splice(inicio, cuántos_eliminar, ...elementos_a_insertar)
const meses = ["ene", "feb", "abr", "may"];
meses.splice(2, 0, "mar");          // inserta "mar" en posición 2, elimina 0
console.log(meses);                  // ["ene", "feb", "mar", "abr", "may"]

const eliminados = meses.splice(1, 2);  // elimina 2 desde posición 1
console.log(eliminados);             // ["feb", "mar"]
console.log(meses);                  // ["ene", "abr", "may"]

// BUSQUEDA

const numeros2 = [10, 20, 30, 20, 40];

// indexOf — primera posición del valor, -1 si no existe
console.log(numeros2.indexOf(20));    // 1
console.log(numeros2.indexOf(99));    // -1

// lastIndexOf — última posición del valor
console.log(numeros2.lastIndexOf(20));  // 3

// includes — ¿existe el valor? devuelve boolean
console.log(numeros2.includes(30));   // true
console.log(numeros2.includes(99));   // false

const frutas2 = ["manzana", "banana", "cereza"];

// forEach no devuelve nada (undefined)
frutas2.forEach((fruta, indice) => {
  console.log(`${indice}: ${fruta}`);
});
// 0: manzana
// 1: banana
// 2: cereza

// Equivalente con for...of (más legible en casos simples)
for (const fruta of frutas2) {
  console.log(fruta);
}

// MAP
const numerosMap = [1, 2, 3, 4, 5];

// Doblar cada número
const dobles = numerosMap.map(n => n * 2);
console.log(dobles);    // [2, 4, 6, 8, 10]
console.log(numeros);   // [1, 2, 3, 4, 5] — original intacto

// Extraer una propiedad de cada objeto
const usuarios = [
  { nombre: "Ana",   edad: 28 },
  { nombre: "Luis",  edad: 31 },
  { nombre: "Marta", edad: 25 }
];

const nombres = usuarios.map(u => u.nombre);
console.log(nombres);   // ["Ana", "Luis", "Marta"]

// Transformar la estructura de cada objeto
const resumen = usuarios.map(u => ({
  nombre: u.nombre,
  mayorDeEdad: u.edad >= 18
}));
console.log(resumen);
// [
//   { nombre: 'Ana',   mayorDeEdad: true },
//   { nombre: 'Luis',  mayorDeEdad: true },
//   { nombre: 'Marta', mayorDeEdad: true }
// ]

const numerosFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Solo los pares
const pares = numerosFilter.filter(n => n % 2 === 0);
console.log(pares);   // [2, 4, 6, 8, 10]

// Solo los mayores de 5
const mayores = numerosFilter.filter(n => n > 5);
console.log(mayores); // [6, 7, 8, 9, 10]

// Filtrar objetos
const usuarios2 = [
  { nombre: "Ana",   edad: 28, activo: true  },
  { nombre: "Luis",  edad: 16, activo: true  },
  { nombre: "Marta", edad: 31, activo: false },
  { nombre: "Pedro", edad: 22, activo: true  }
];

const adultosActivos = usuarios2.filter(u => u.edad >= 18 && u.activo);
console.log(adultosActivos.map(u => u.nombre));   // ["Ana", "Pedro"]

// REDUCE
// reduce(callback, valorInicial)
// callback recibe: (acumulador, elementoActual, indice, array)

const numerosReduce = [1, 2, 3, 4, 5];

// Suma total
const suma = numerosReduce.reduce((acum, n) => acum + n, 0);
console.log(suma);   // 15

// Producto
const producto = numerosReduce.reduce((acum, n) => acum * n, 1);
console.log(producto);   // 120

// Máximo sin Math.max
const maximo = numerosReduce.reduce((max, n) => n > max ? n : max, -Infinity);
console.log(maximo);   // 5

// Contar ocurrencias — acumulador es un objeto
const frutasReduce = ["manzana", "banana", "manzana", "cereza", "banana", "manzana"];
const conteo = frutasReduce.reduce((acum, fruta) => {
  acum[fruta] = (acum[fruta] ?? 0) + 1;
  return acum;
}, {});
console.log(conteo);
// { manzana: 3, banana: 2, cereza: 1 }

// Aplanar un array de arrays
const anidado = [[1, 2], [3, 4], [5, 6]];
const plano   = anidado.reduce((acum, arr) => [...acum, ...arr], []);
console.log(plano);   // [1, 2, 3, 4, 5, 6]
// alternativa moderna: anidado.flat()