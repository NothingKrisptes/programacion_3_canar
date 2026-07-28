class ClientePersona {
  nombre: string;
  email: string;

  constructor(nombre: string, email: string) {
    this.nombre = nombre;
    this.email = email;
  }

  saludar(): string {
    return `Hola, soy ${this.nombre} y uso Wheels to go.`;
  }
}

const cliente1 = new ClientePersona("Ana García", "ana@wheelstogo.com");
const cliente2 = new ClientePersona("Luis Pérez", "luis@wheelstogo.com");

console.log(cliente1.saludar());
console.log(cliente2.saludar());