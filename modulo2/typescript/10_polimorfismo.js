"use strict";
// polimorfismo
// Clase abstracta — no se puede instanciar directamente
// Solo sirve como base para otras clases
class Forma {
    color;
    constructor(color) {
        this.color = color;
    }
    // Método concreto — igual para todas las formas
    describir() {
        return `${this.constructor.name} ${this.color}: ` +
            `área=${this.area().toFixed(2)}, perímetro=${this.perimetro().toFixed(2)}`;
    }
}
class Circulo extends Forma {
    radio;
    constructor(color, radio) {
        super(color);
        this.radio = radio;
    }
    // Cada clase implementa area() A SU MANERA
    area() { return Math.PI * this.radio ** 2; }
    perimetro() { return 2 * Math.PI * this.radio; }
}
class Rectangulo extends Forma {
    ancho;
    alto;
    constructor(color, ancho, alto) {
        super(color);
        this.ancho = ancho;
        this.alto = alto;
    }
    area() { return this.ancho * this.alto; }
    perimetro() { return 2 * (this.ancho + this.alto); }
}
class Triangulo extends Forma {
    a;
    b;
    c;
    constructor(color, a, b, c) {
        super(color);
        this.a = a;
        this.b = b;
        this.c = c;
    }
    perimetro() { return this.a + this.b + this.c; }
    area() {
        const s = this.perimetro() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
}
console.log("=== POLIMORFISMO ===\n");
// Un array con distintos tipos — todos son Forma
const formas = [
    new Circulo("rojo", 5),
    new Rectangulo("azul", 4, 6),
    new Triangulo("verde", 3, 4, 5),
    new Circulo("naranja", 3),
];
// El mismo bucle llama a describir() en cada forma
// Sin saber si es Círculo, Rectángulo o Triángulo
for (const forma of formas) {
    console.log(`  ${forma.describir()}`);
}
// Calcular el área total — funciona con cualquier tipo de Forma
const areaTotal = formas.reduce((acc, f) => acc + f.area(), 0);
console.log(`\n  Área total: ${areaTotal.toFixed(2)}`);
// new Forma("rojo");  // ❌ Error — Forma es abstracta, no se puede instanciar
