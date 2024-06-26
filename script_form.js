document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('input_nombre').value;
    const apellido = document.getElementById('input_apellido').value;
    const edad = document.getElementById('input_edad').value;
    const email = document.getElementById('input_email').value;
    const sexoM = document.getElementById('sexoM').checked;
    const sexoF = document.getElementById('sexoF').checked;
    const mensajeDiv = document.getElementById('mensaje');

    let errorMensaje = '';
    let invalidFields = [];

    if (!nombre || !apellido || !edad || !email) {
        errorMensaje = '¡Error! Por favor, complete todos los campos.';
        invalidFields = [nombre, apellido, edad, email];
    } else if (/\d/.test(nombre) || /\d/.test(apellido)) {
        errorMensaje = '¡Error! El nombre y el apellido no deben contener números.';
        invalidFields = [nombre, apellido];
    } else if (!/^\d+$/.test(edad)) {
        errorMensaje = '¡Error! La edad debe contener solo números.';
        invalidFields = [edad];
    } else if (!sexoM && !sexoF) {
        errorMensaje = '¡Error! Por favor, seleccione su sexo.';
    }

    if (errorMensaje) {
        mensajeDiv.style.color = 'red';
        mensajeDiv.textContent = errorMensaje;
        
        // Blanquear campos inválidos
        invalidFields.forEach(field => {
            document.getElementById(`input_${field}`).value = '';
        });
    } else {
        mensajeDiv.style.color = 'green';
        mensajeDiv.textContent = 'Formulario enviado con éxito';
        document.getElementById('dataForm').reset();
    }
});
