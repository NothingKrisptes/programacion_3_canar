const campoBaseM = document.getElementById('baseM');
const campoBasem = document.getElementById('basem');
const campoAltura = document.getElementById('altura');
const btnArea = document.getElementById('btn_area');
const resultado = document.getElementById('resultado');
const error = document.getElementById('error');

btnArea.addEventListener('click', () => {
   const campoBaseMayor = parseFloat(baseM.value);
   const campoBaseMenor = parseFloat(basem.value);
   const campoAlturaT = parseFloat(altura.value);
   if(isNaN(campoBaseMayor) || isNaN(campoBaseMenor)|| isNaN(campoAlturaT)){
        error.textContent="Por favor ingresa valores numericos";
        return;
   }
   if(campoBaseMayor<=0|| campoBaseMenor<=0 || campoAlturaT<=0){
        error.textContent="Por favor ingresa mayores a 0";
        return;
   }
   const area = ((campoBaseMayor + campoBaseMenor)/2) * campoAlturaT;
   resultado.textContent = `Resultado: ${area}`;
});