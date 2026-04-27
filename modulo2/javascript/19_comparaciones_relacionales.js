const x = 10;
const y = 20;

console.log(x > y);    // false — mayor que
console.log(x < y);    // true  — menor que
console.log(x >= 10);  // true  — mayor o igual que
console.log(x <= 9);   // false — menor o igual que

// Con strings — se compara por orden Unicode (lexicográfico)
console.log("a" < "b");      // true
console.log("B" < "a");      // true  ← mayúsculas tienen código menor que minúsculas
console.log("10" > "9");     // false ← compara como string, no como número
console.log(10 > 9);         // true  ← correcto: comparando como números

// Comparación mixta (número vs string) — JS convierte a número
console.log("10" > 9);    // true  ← "10" se convierte a 10
console.log("abc" > 1);   // false ← "abc" se convierte a NaN, y NaN devuelve false