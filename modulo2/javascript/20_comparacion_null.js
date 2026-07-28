// Con igualdad estricta: solo son iguales entre sí
console.log(null === null);        // true
console.log(undefined === undefined); // true
console.log(null === undefined);   // false

// Con igualdad débil: null y undefined son "iguales" entre sí (solo entre ellos)
console.log(null == undefined);    // true
console.log(null == 0);            // false ← ¡no se convierte a 0 con ==!
console.log(null == false);        // false

// Con operadores relacionales: null se convierte a 0
console.log(null > 0);    // false
console.log(null == 0);   // false ← inconsistencia famosa de JS
console.log(null >= 0);   // true  ← porque null se convierte a 0

// undefined se convierte a NaN en comparaciones relacionales → siempre false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false
console.log(undefined == 0);  // false