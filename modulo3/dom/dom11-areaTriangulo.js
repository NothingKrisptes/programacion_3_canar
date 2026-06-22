const campoBase = document.getElementById('base');
const campoAltura = document.getElementById('altura');
const btnArea = document.getElementById('btn_area');
const area = document.getElementById('area');

btnArea.addEventListener('click', function() {
   const campoBaset = parseFloat(base.value);
   const campoAlturat = parseFloat(altura.value);
   const resultado = campoBaset * campoAlturat/2;
   area.textContent = `Resultado: ${resultado}` 
});