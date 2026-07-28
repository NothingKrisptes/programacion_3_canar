// Verificar si el cliente cumple con la edad mínima para alquilar

/*
Reglas de negocio para Wheels To Go:
- Edad mínima: 21 años
- Licencia vigente obligatoria
- Tarjeta de crédito requerida para depósito
*/

/**
 * Calcula el total de la reserva incluyendo descuentos aplicables
 * 
 * @param {number} dias - Número de días de alquiler
 * @param {number} tarifaDiaria - Tarifa por día en USD
 * @returns {number} Total a pagar incluyendo descuentos
 */
const dias = 5;
const tarifaDiaria = 40;
function calcularTotal(dias, tarifaDiaria) {
  return dias * tarifaDiaria;
}
console.log(calcularTotal(dias, tarifaDiaria)); // Imprime el total a pagar por la reserva