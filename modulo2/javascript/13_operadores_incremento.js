let contador = 5;

// Incremento
contador++;           // post-incremento: usa el valor actual, luego suma 1
++contador;           // pre-incremento: suma 1 primero, luego usa el valor

// Decremento
contador--;           // post-decremento
--contador;           // pre-decremento

// La diferencia importa cuando el resultado se asigna
let x = 5;
let y = x++;   // y = 5, x = 6 (post: se asigna antes de incrementar)
let z = ++x;   // z = 7, x = 7 (pre: se incrementa antes de asignar)

console.log(x, y, z);  // 7  5  7