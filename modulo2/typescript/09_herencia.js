"use strict";
// herencia
// Clase padre
class Animal {
    nombre;
    edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    // Método heredado por todos los hijos
    comer() {
        console.log(`  ${this.nombre} está comiendo.`);
    }
    dormir() {
        console.log(`  ${this.nombre} está durmiendo.`);
    }
    toString() {
        return `${this.nombre} (${this.edad} años)`;
    }
}
// Clase hija — hereda de Animal
class Perro extends Animal {
    raza;
    constructor(nombre, edad, raza) {
        super(nombre, edad); // ← llama al constructor del padre — OBLIGATORIO
        this.raza = raza;
    }
    // Método propio — solo existe en Perro
    ladrar() {
        console.log(`  ${this.nombre}: ¡Guau! ¡Guau!`);
    }
    toString() {
        return `${super.toString()} — ${this.raza}`; // reutiliza el toString del padre
    }
}
class Gato extends Animal {
    esCallejero;
    constructor(nombre, edad, esCallejero) {
        super(nombre, edad);
        this.esCallejero = esCallejero;
    }
    ronronear() {
        console.log(`  ${this.nombre}: Prrrrr...`);
    }
    toString() {
        return `${super.toString()} — ${this.esCallejero ? "callejero" : "doméstico"}`;
    }
}
console.log("=== HERENCIA ===\n");
const rex = new Perro("Rex", 3, "Labrador");
const misi = new Gato("Misi", 5, false);
// Métodos heredados del padre
rex.comer();
misi.comer();
rex.dormir();
// Métodos propios de cada hijo
rex.ladrar();
misi.ronronear();
console.log(`\nRex:  ${rex.toString()}`);
console.log(`Misi: ${misi.toString()}`);
// instanceof — comprobar si un objeto pertenece a una clase
console.log(`\n¿Rex es Perro?  ${rex instanceof Perro}`); // true
console.log(`¿Rex es Animal? ${rex instanceof Animal}`); // true — hereda
console.log(`¿Rex es Gato?   ${rex instanceof Gato}`); // false
