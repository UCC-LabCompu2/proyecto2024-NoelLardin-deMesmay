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

    if (!nombre || !apellido || !edad || !email) {
        errorMensaje = '¡Error! Por favor, complete todos los campos.';
    } else if (/\d/.test(nombre) || /\d/.test(apellido)) {
        errorMensaje = '¡Error! El nombre y el apellido no deben contener números.';
    } else if (!/^\d+$/.test(edad)) {
        errorMensaje = '¡Error! La edad debe contener solo números.';
    } else if (!sexoM && !sexoF) {
        errorMensaje = '¡Error! Por favor, seleccione su sexo.';
    }

    if (errorMensaje) {
        mensajeDiv.style.color = 'red';
        mensajeDiv.textContent = errorMensaje;
    } else {
        mensajeDiv.style.color = 'green';
        mensajeDiv.textContent = 'Formulario enviado con éxito';
        document.getElementById('dataForm').reset();
    }
});
