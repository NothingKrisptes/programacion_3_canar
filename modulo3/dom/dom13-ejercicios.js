function renderEmpleados(){
    const cuerpoTabla = document.getElementById('cuerpoTabla');
    cuerpoTabla.innerHTML = '';
    empleados.forEach(empleado =>{
        const productoElement = document.createElement('tr');
        productoElement.innerHTML = `
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.descripcion}</td>
        <td>${producto.precio.toFixed(2)}</td>
        <td>
            <button onclick="editarProducto(${producto.id})">Editar</button>
            <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
        </td>
        `;
        cuerpoTabla.appendChild(productoElement);
    });
}
function agregarProducto(){
    const nombreInput = document.getElementById('nombre').value.trim();
    const apellidoInput = document.getElementById('apellido').value.trim();
    const sueldoInput = document.getElementById('sueldo').value.trim();
    if(!nombreInput || !apellidoInput || !sueldoInput) {
        alert('Por favor, complete todos los campos.');
        return;
    }
    const nuevoEmpleado = {
        id: empleados.length > 0 ? 
        Math.max(...empleados.map(p => p.id))+1:1,
        nombre:nombreInput,
        apellido: apellidoInput,
        sueldo: parseFloat(sueldoInput)
    };
    empleados.push(nuevoProducto);
    renderEmpleados();
    limpiarFormulario();
}

function limpiarFormulario(){
    document.getElementById('nombre').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('precio').value = '';
}

const agregarBtn = document.getElementById('btn_agregar');
agregarBtn.addEventListener('click', agregarProducto);