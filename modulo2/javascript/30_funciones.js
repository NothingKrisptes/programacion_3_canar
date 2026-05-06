// Funcion declarada
function saludo(){
    console.log("Hello World");
}

saludo();

//Funcion Expresada
const saludarHola = function(){
    console.log("Hola con funcion expresada");
}
saludarHola();

// Funcion Flecha
const saludosFlecha=()=>{
    console.log("Hello con Funcion Flecha");
}
saludosFlecha();

//Funcion Anonima
setTimeout(function(){
    console.log("Ejecutando...");
},1000)

// Funcion con parametros
function saludarConParametros(nombre){
    console.log("Hola "+nombre)
}
saludarConParametros("Pedro");

// Sintaxis: function nombre(parámetros) { cuerpo }
function saludar(nombre) {
    return `Hola, ${nombre}!`;
  }
  console.log(saludar("Ana"));   // "Hola, Ana!"
  console.log(saludar("Luis"));  // "Hola, Luis!"
  
function sumar(a,b){
    return a+b;
};
resultado=sumar(45,5);
console.log(resultado);

// Sintaxis completa
const sumar2 = (a, b) => {
  return a + b;
};

// Retorno implícito — cuando el cuerpo es una sola expresión
// se omiten las llaves y la palabra return
const sumarCorto = (a, b) => a + b;

// Un solo parámetro — se pueden omitir los paréntesis
const doblar = n => n * 2;

// Sin parámetros — los paréntesis son obligatorios
const saludarMundo = () => "Hola, mundo!";

console.log(sumar2(3, 4));        // 7
console.log(sumarCorto(3, 4));   // 7
console.log(doblar(5));          // 10
console.log(saludarMundo());     // "Hola, mundo!"


const par = n => n % 2 === 0;
console.log(par(4)); // true
console.log(par(7)); // false

// Parametros por defecto
function saludar(nombre = "mundo", saludo = "Hola") {
  return `${saludo}, ${nombre}!`;
}

console.log(saludar());                     // "Hola, mundo!"
console.log(saludar("Ana"));               // "Hola, Ana!"
console.log(saludar("Ana", "Buenos días")); // "Buenos días, Ana!"

// También funciona con arrow functions
const potencia = (base, exponente = 2) => base ** exponente;

console.log(potencia(3));     // 9   (3²)
console.log(potencia(3, 3));  // 27  (3³)

const areaTriangulo = (base = 4 ,altura = 3 ) => (base * altura)/2;
console.log(areaTriangulo());

// Parametros rest
// ...numeros captura todos los argumentos en un array
function sumarTodos(...numeros) {
  let total = 0;
  for (const n of numeros) {
    total += n;
  }
  return total;
}

console.log(sumarTodos(1, 2, 3));          // 6
console.log(sumarTodos(1, 2, 3, 4, 5));   // 15
console.log(sumarTodos());                 // 0

// Se puede combinar con parámetros normales
// el rest SIEMPRE debe ser el último parámetro
function registrar(categoria, ...mensajes) {
  for (const msg of mensajes) {
    console.log(`[${categoria}] ${msg}`);
  }
}

registrar("INFO", "Inicio", "Conexión OK", "Listo");
// [INFO] Inicio
// [INFO] Conexión OK
// [INFO] Listo

function datosPersona(datos, ... persona){
    for (const msg of persona){
        console.log(`[${datos}] ${msg}`);
    }
}
datosPersona("DATOS", "Nombre: Christian", "Apellido: Cañar", "Email: iancm0168@gmail.com");

// Spread
const numeros = [3, 1, 4, 1, 5, 9, 2, 6];

// Sin spread — Math.max no acepta un array directamente
console.log(Math.max(numeros));       // NaN

// Con spread — expande el array en argumentos
console.log(Math.max(...numeros));    // 9
console.log(Math.min(...numeros));    // 1

// Combinar arrays
const primeros = [1, 2, 3];
const segundos = [4, 5, 6];
const todos    = [...primeros, ...segundos];
console.log(todos);   // [1, 2, 3, 4, 5, 6]

// Copiar un array (copia superficial)
const original = [1, 2, 3];
const copia    = [...original];
copia.push(4);
console.log(original);   // [1, 2, 3]  — no se modifica
console.log(copia);      // [1, 2, 3, 4]

// Spread con objetos
const base     = { nombre: "Ana", edad: 28 };
const ampliado = { ...base, ciudad: "Madrid" };
console.log(ampliado);   // { nombre: 'Ana', edad: 28, ciudad: 'Madrid' }

// Una función sin return devuelve undefined implícitamente
function sinReturn() {
  const x = 42;
  // no hay return
}

console.log(sinReturn());   // undefined

// return detiene la ejecución de la función
function esPar(n) {
  if (n % 2 === 0) {
    return true;    // sale aquí si n es par
  }
  return false;     // solo llega aquí si n es impar
}

// Forma más concisa — devolver la expresión directamente
const esParCorto = n => n % 2 === 0;

console.log(esPar(4));         // true
console.log(esParCorto(7));    // false

// Valores - Callbacks
// operar recibe dos números y una función
function operar(a, b, operacion) {
  return operacion(a, b);
}

const suma   = (a, b) => a + b;
const restar  = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

console.log(operar(10, 3, sumar));        // 13
console.log(operar(10, 3, restar));       // 7
console.log(operar(10, 3, multiplicar));  // 30

// Callback anónimo (arrow function inline)
console.log(operar(10, 3, (a, b) => a ** b));  // 1000

const global = "soy global";   // accesible en todo el archivo

function ejemploScope() {
  const local = "soy local";   // solo accesible dentro de esta función
  console.log(global);         // ✅ puede acceder a la variable global
  console.log(local);          // ✅
}

ejemploScope();
// console.log(local);         // ❌ ReferenceError — local no existe aquí

// Block scope — const y let respetan los bloques { }
{
  const dentroDeBloque = "solo aquí";
  console.log(dentroDeBloque);   // ✅
}
// console.log(dentroDeBloque);  // ❌ ReferenceError

// var NO respeta el block scope — otra razón para no usarlo
{
  var escapó = "estoy en todos lados";
}
console.log(escapó);   // ✅ "estoy en todos lados" — comportamiento inesperado