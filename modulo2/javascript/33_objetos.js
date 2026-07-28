// OBJETOS JAVASCRIPT
// Crear un objeto — llaves {}
const persona = {
  nombre: "Ana",        // clave: "nombre", valor: "Ana"
  edad: 28,             // clave: "edad",   valor: 28
  activo: true          // clave: "activo", valor: true
};

// Acceso a propiedades — notación de punto (preferida)
console.log(persona.nombre);   // "Ana"
console.log(persona.edad);     // 28

// Acceso con corchetes — necesario cuando la clave es dinámica o tiene espacios
console.log(persona["nombre"]);         // "Ana"
const clave = "edad";
console.log(persona[clave]);            // 28

// Propiedad que no existe → undefined (no lanza error)
console.log(persona.telefono);          // undefined

// Añadir propiedades después de crear el objeto
persona.ciudad = "Madrid";
console.log(persona.ciudad);            // "Madrid"

// Eliminar propiedades
delete persona.activo;
console.log(persona.activo);            // undefined

// Metodos - Funciones dentro de un objeto
const calculadora = {
  // Forma clásica
  sumar: function(a, b) {
    return a + b;
  },

  // Shorthand de método (ES6) — forma preferida
  restar(a, b) {
    return a - b;
  },

  // Arrow function — ojo con this (lo veremos más adelante)
  multiplicar: (a, b) => a * b
};

console.log(calculadora.sumar(3, 4));        // 7
console.log(calculadora.restar(10, 3));      // 7
console.log(calculadora.multiplicar(2, 5));  // 10

// this dentro de metodos
const persona0 = {
  nombre: "Ana",
  edad: 28,

  // ✅ function o shorthand — this apunta al objeto
  saludar() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  },

  cumpleaños() {
    this.edad++;   // modifica la propiedad del objeto
    return `¡Feliz cumpleaños, ${this.nombre}! Ahora tienes ${this.edad}.`;
  },

  // ❌ Arrow function — this NO apunta al objeto, apunta al scope externo
  saludarArrow: () => {
    return `Hola, soy ${this.nombre}`;   // this.nombre es undefined
  }
};

console.log(persona0.saludar());      // "Hola, soy Ana y tengo 28 años."
console.log(persona0.cumpleaños());   // "¡Feliz cumpleaños, Ana! Ahora tienes 29."
console.log(persona0.saludarArrow()); // "Hola, soy undefined"

// Shorthand properties — sintaxis abreviada
const nombre = "Ana";
const edad   = 28;
const ciudad = "Madrid";

// Sin shorthand — repetitivo
const persona1 = {
  nombre: nombre,
  edad: edad,
  ciudad: ciudad
};

// Con shorthand (ES6) — forma preferida
const persona2 = { nombre, edad, ciudad };

console.log(persona2);
// { nombre: 'Ana', edad: 28, ciudad: 'Madrid' }