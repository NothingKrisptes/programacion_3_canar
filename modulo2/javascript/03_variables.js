// const — no se puede reasignar (equivalente a val en Kotlin, final en Java)
const nombre = "Ana";           // tipo inferido: string
const edad = 28;                // tipo inferido: number
const pi = 3.14159;             // tipo inferido: number

// let — se puede reasignar
let contador = 0;
contador = contador + 1;        // permitido
contador++;                     // también permitido

// nombre = "Luis";             // TypeError en tiempo de ejecución — const no se reasigna

console.log(`${nombre} tiene ${edad} años`);  // template literal

// var — forma antigua, evitar en código moderno
// tiene comportamiento de "hoisting" que puede causar bugs difíciles de detectar
var antiguo = "evitar var";