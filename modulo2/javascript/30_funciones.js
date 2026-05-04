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
}
resultado=sumar(45,5);
console.log(resultado);