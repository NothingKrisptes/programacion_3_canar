"use strict";
class EmpleadoWheels {
    _nombre;
    _salario;
    _email;
    constructor(nombre, salario, email) {
        this._nombre = nombre;
        this._salario = salario;
        this._email = email;
    }
    get nombre() {
        return this._nombre;
    }
    get salario() {
        return this._salario;
    }
    get email() {
        return this._email;
    }
    set nombre(valor) {
        if (valor.trim().length < 2) {
            throw new Error("El nombre debe tener al menos 2 caracteres.");
        }
        this._nombre = valor.trim();
    }
    set salario(valor) {
        if (valor < 0) {
            throw new Error("El salario no puede ser negativo.");
        }
        this._salario = valor;
    }
    set email(valor) {
        if (!valor.includes("@")) {
            throw new Error("El email no es válido.");
        }
        this._email = valor.toLowerCase();
    }
    toString() {
        return `${this._nombre} — $${this._salario} — ${this._email}`;
    }
}
const empWheels = new EmpleadoWheels("Ana García", 900, "Ana@WheelsToGo.com");
console.log(empWheels.toString());
empWheels.salario = 1000;
empWheels.email = "ana@wheelstogo.com";
console.log(`Nuevo salario: $${empWheels.salario}`);
