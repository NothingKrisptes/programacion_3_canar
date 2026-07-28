// Valores FALSY — los únicos 6 que existen en JavaScript
false
0
""          // string vacío
null
undefined
NaN

// Todo lo demás es TRUTHY — incluyendo estos casos que sorprenden:
"false"     // truthy — string no vacío (aunque diga "false")
"0"         // truthy — string no vacío
//[]          // truthy — array vacío
{}          // truthy — objeto vacío
-1          // truthy — número distinto de 0

// Verificar con Boolean()
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean("false"));  // true  ← ojo, string no vacío
console.log(Boolean([]));       // true  ← array vacío es truthy

// Uso booleano clásico
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);  // false

// Cortocircuito — devuelve el primer valor falsy o el último si todos son truthy
console.log(1 && 2);          // 2     ← ambos truthy, devuelve el último
console.log(0 && 2);          // 0     ← 0 es falsy, se detiene y devuelve 0
console.log("" && "hola");    // ""    ← "" es falsy, se detiene
console.log("a" && "b");      // "b"   ← ambos truthy, devuelve el último

// Uso práctico: ejecutar algo solo si una condición se cumple
const usuario = { nombre: "Ana", admin: true };

usuario.admin && console.log("Bienvenida, administradora");
// equivale a: if (usuario.admin) { console.log(...) }

// Acceso seguro a propiedades anidadas
const ciudad = usuario.direccion && usuario.direccion.ciudad;
// Si usuario.direccion no existe (falsy), ciudad = undefined (no lanza error)
console.log(ciudad)

// Uso booleano clásico
console.log(true || false);   // true
console.log(false || true);   // true
console.log(false || false);  // false

// Cortocircuito — devuelve el primer valor truthy
console.log(1 || 2);          // 1     ← 1 es truthy, se detiene
console.log(0 || 2);          // 2     ← 0 es falsy, sigue; 2 es truthy
console.log(0 || "");         // ""    ← ambos falsy, devuelve el último
console.log("" || "default"); // "default" ← "" es falsy, devuelve "default"

// Uso práctico: valor por defecto (patrón clásico pre-ES2020)
const nombre = prompt("Tu nombre:") || "Invitado";
// Si prompt devuelve "" o null, nombre = "Invitado"

function saludar(nombre) {
  const n = nombre || "Invitado";
  console.log(`Hola, ${n}`);
}

saludar("Ana");    // Hola, Ana
saludar("");       // Hola, Invitado  (string vacío es falsy)
saludar(null);     // Hola, Invitado


console.log(!true);     // false
console.log(!false);    // true
console.log(!0);        // true   ← 0 es falsy, su negación es true
console.log(!1);        // false  ← 1 es truthy
console.log(!"");       // true   ← string vacío es falsy
console.log(!"hola");   // false  ← string no vacío es truthy
console.log(!null);     // true
console.log(!undefined);// true

// Doble negación !! — convierte cualquier valor a su booleano equivalente
console.log(!!0);       // false — forma idiomática de Boolean(0)
console.log(!!1);       // true
console.log(!!"");      // false
console.log(!!"hola");  // true
console.log(!!null);    // false
console.log(!![]);      // true  ← array vacío es truthy