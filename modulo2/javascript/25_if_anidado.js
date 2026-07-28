const usuarioAutenticado = true;
const rolUsuario         = "editor";
const seccion            = "configuracion";

if (usuarioAutenticado) {
  console.log(`Bienvenido. Rol: ${rolUsuario}`);

  if (rolUsuario === "admin") {
    console.log("Acceso completo concedido.");

    if (seccion === "configuracion") {
      console.log("Cargando panel de configuración del sistema...");
    }
  } else if (rolUsuario === "editor") {
    console.log("Acceso de edición concedido.");

    if (seccion === "configuracion") {
      console.log("⛔ Editores no tienen acceso a configuración del sistema.");
    } else {
      console.log(`Cargando sección: ${seccion}`);
    }
  } else {
    console.log("Rol desconocido. Contacta al administrador.");
  }

} else {
  console.log("Sesión no iniciada. Redirigiendo al login...");
}
// Bienvenido. Rol: editor
// Acceso de edición concedido.
// ⛔ Editores no tienen acceso a configuración del sistema.

const nombre    = "Ana";
const email     = "ana@correo.com";
const password  = "abc";
const MIN_PASS  = 8;

if (nombre.trim().length === 0) {
  console.log("❌ El nombre es obligatorio.");
} else {
  console.log(`✅ Nombre válido: ${nombre}`);

  if (!email.includes("@") || !email.includes(".")) {
    console.log("❌ El email no tiene un formato válido.");
  } else {
    console.log(`✅ Email válido: ${email}`);

    if (password.length < MIN_PASS) {
      console.log(`❌ La contraseña debe tener al menos ${MIN_PASS} caracteres.`);
      console.log(`   Caracteres actuales: ${password.length}`);
    } else {
      console.log("✅ Contraseña válida. Registro completado.");
    }
  }
}
// ✅ Nombre válido: Ana
// ✅ Email válido: ana@correo.com
// ❌ La contraseña debe tener al menos 8 caracteres.
//    Caracteres actuales: 3

const categoria  = "electronica"; // "ropa", "electronica", "alimentos"
const esMiembro  = true;
const precioBase = 200;

let precioFinal = precioBase;
let descuentoAplicado = "";

if (categoria === "electronica") {
  const impuesto = precioBase * 0.15;
  precioFinal = precioBase + impuesto;
  descuentoAplicado = "IVA 15% incluido";

  if (esMiembro) {
    const bonificacion = precioFinal * 0.05;
    precioFinal -= bonificacion;
    descuentoAplicado += " + 5% bonificación miembro";
  }

} else if (categoria === "ropa") {
  if (esMiembro) {
    precioFinal = precioBase * 0.80;  // 20% descuento
    descuentoAplicado = "20% descuento miembro";
  } else {
    precioFinal = precioBase * 0.90;  // 10% descuento en temporada
    descuentoAplicado = "10% descuento temporada";
  }

} else if (categoria === "alimentos") {
  precioFinal = precioBase;           // sin impuesto ni descuento
  descuentoAplicado = "Sin impuesto (alimentos básicos)";
}

console.log(`Categoría:  ${categoria}`);
console.log(`Precio base: $${precioBase.toFixed(2)}`);
console.log(`Detalle:    ${descuentoAplicado}`);
console.log(`Precio final: $${precioFinal.toFixed(2)}`);
// Categoría:  electronica
// Precio base: $200.00
// Detalle:    IVA 15% incluido + 5% bonificación miembro
// Precio final: $218.50

/* Pide el total de compra y si el cliente es miembro:
    Si la compra es mayor a 50:
        Si es miembro:"Descuento especial"
        Si no:"Descuento normal" 
    Si no: "No aplica descuento*/

const prompt = require("prompt-sync")();
const total = prompt("Ingrese el total de la compra: ")
const t_compra = parseFloat(total) || 0;

if (t_compra > 50){
    const miembro = prompt("Es miembro? (1 = si; otro = no): ")
    const s_miembro = parseFloat(miembro);
    if (s_miembro == 1){
        console.log("Descuento especial")
    }else{
        console.log("Descuento normal")
    }
}else{
    console.log("No aplica descuento")
    }