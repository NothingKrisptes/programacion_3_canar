// Números — un solo tipo para enteros y decimales
const entero = 42;
const decimal = 3.14;
const grande = 9_007_199_254_740_991;     // _ como separador visual (ES2021)
const negativo = -100;

// String — texto entre comillas simples, dobles o backticks
var nombre = 'Melany';
const simple   = 'hola';
const doble    = "mundo";
const template = `hola ${nombre}`;        // template literal — permite expresiones

// Boolean
const verdadero = true;
const falso     = false;

// null y undefined — dos formas de "sin valor"
const sinValor   = null;          // ausencia intencional de valor
let noAsignado;                   // undefined — declarada pero sin valor

// Symbol — identificador único (avanzado)
const id = Symbol("id");

// BigInt — enteros de precisión arbitraria
const enorme = 9999999999999999999n;      // sufijo n

// typeof — conocer el tipo en tiempo de ejecución
console.log(typeof 42);           // "number"
console.log(typeof "hola");       // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" ← bug histórico de JS, null no es un objeto
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"