const campoBase = document.getElementById('base');
const campoAltura = document.getElementById('altura');
const btnArea = document.getElementById('btn_area');
const resultado = document.getElementById('area');

btnArea.addEventListener('click', function() {
   const campoBase = parseFloat(base.value);
   const campoAltura = parseFloat(altura.value);
   const resultado = base * altura/2;
   resultado.textContent = `Resultado: ${area}` 
});