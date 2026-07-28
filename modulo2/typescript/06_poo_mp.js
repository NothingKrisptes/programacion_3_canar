"use strict";
class ClientePersona {
    nombre;
    email;
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
    saludar() {
        return `Hola, soy ${this.nombre} y uso Wheels to go.`;
    }
}
const cliente1 = new ClientePersona("Ana García", "ana@wheelstogo.com");
const cliente2 = new ClientePersona("Luis Pérez", "luis@wheelstogo.com");
console.log(cliente1.saludar());
console.log(cliente2.saludar());
