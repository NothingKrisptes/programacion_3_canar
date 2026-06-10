const campoNumero1 = document.getElementById('campoNumero1');
const campoNumero2 = document.getElementById('campoNumero2');
const btnSumar = document.getElementById('btn_sumar');
const resultado = document.getElementById('resultado');

btnSumar.addEventListener('click', function() {
   const campoNumero1 = parseFloat(numero1.value);
   const campoNumero2 = parseFloat(numero2.value);
   const suma = campoNumero1 + campoNumero2;
   resultado.textContent = `Resultado: ${suma}` ;
});