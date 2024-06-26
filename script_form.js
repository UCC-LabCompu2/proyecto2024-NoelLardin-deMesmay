document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('input_nombre').value.trim();
    const apellido = document.getElementById('input_apellido').value.trim();
    const edad = document.getElementById('input_edad').value.trim();
    const email = document.getElementById('input_email').value.trim();
    const sexoM = document.getElementById('sexoM').checked;
    const sexoF = document.getElementById('sexoF').checked;
    const mensajeDiv = document.getElementById('mensaje');

    let errorMensaje = '';
    let invalidFields = [];

    if (!nombre || !apellido || !edad || !email) {
        errorMensaje = '¡Error! Por favor, complete todos los campos.';
        if (!nombre) invalidFields.push('input_nombre');
        if (!apellido) invalidFields.push('input_apellido');
        if (!edad) invalidFields.push('input_edad');
        if (!email) invalidFields.push('input_email');
    } else if (/\d/.test(nombre) || /\d/.test(apellido)) {
        errorMensaje = '¡Error! El nombre y el apellido no deben contener números.';
        if (/\d/.test(nombre)) invalidFields.push('input_nombre');
        if (/\d/.test(apellido)) invalidFields.push('input_apellido');
    } else if (!/^\d+$/.test(edad)) {
        errorMensaje = '¡Error! La edad debe contener solo números.';
        invalidFields.push('input_edad');
    } else if (!sexoM && !sexoF) {
        errorMensaje = '¡Error! Por favor, seleccione su sexo.';
    }

    if (errorMensaje) {
        mensajeDiv.style.color = 'red';
        mensajeDiv.textContent = errorMensaje;

        // Effacer les champs invalides
        invalidFields.forEach(fieldId => {
            document.getElementById(fieldId).value = '';
        });
    } else {
        mensajeDiv.style.color = 'green';
        mensajeDiv.textContent = 'Formulario enviado con éxito';
        document.getElementById('dataForm').reset();
    }
});
