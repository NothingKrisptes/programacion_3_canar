// === Igualdad estricta (recomendada SIEMPRE)
// Compara valor Y tipo — no hace conversión implícita
console.log(5 === 5);        // true  — mismo valor, mismo tipo
console.log(5 === "5");      // false — mismo valor, DISTINTO tipo
console.log(0 === false);    // false — distinto tipo
console.log(null === undefined); // false — distintos tipos

// == Igualdad débil (con coerción de tipos — EVITAR)
// Convierte ambos valores al mismo tipo antes de comparar
console.log(5 == "5");       // true  ← peligroso: convierte "5" a número
console.log(0 == false);     // true  ← peligroso: false se convierte a 0
console.log(null == undefined); // true ← excepción especial del lenguaje
console.log("" == false);    // true  ← ambos se convierten a 0

// !== Desigualdad estricta (recomendada)
console.log(5 !== "5");      // true  — diferente tipo
console.log(5 !== 5);        // false

// != Desigualdad débil (EVITAR por las mismas razones que ==)
console.log(5 != "5");       // false ← peligroso