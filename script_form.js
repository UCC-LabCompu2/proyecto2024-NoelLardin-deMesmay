/**
 * Función llamada al enviar el formulario de datos
 * Valida los campos del formulario y muestra mensajes de error si es necesario
 * @return {boolean} - Devuelve false para evitar la subida del formulario si los campos son inválidos
 */
function validarFormulario() {
    const nombre = document.getElementById('input_nombre').value.trim();
    const apellido = document.getElementById('input_apellido').value.trim();
    const edad = document.getElementById('input_edad').value.trim();
    const email = document.getElementById('input_email').value.trim();
    const sexoM = document.getElementById('sexoM').checked;
    const sexoF = document.getElementById('sexoF').checked;

    let isValid = true;

    // Resetear mensajes de error
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => {
        message.textContent = '';
    });

    // Validar nombre
    if (!nombre || /\d/.test(nombre)) {
        isValid = false;
        const nombreError = document.getElementById('nombre_error');
        nombreError.textContent = !nombre ? '¡Error! El campo nombre es obligatorio.' : '¡Error! El nombre no debe contener números.';
        document.getElementById('input_nombre').value = '';
    }

    // Validar apellido
    if (!apellido || /\d/.test(apellido)) {
        isValid = false;
        const apellidoError = document.getElementById('apellido_error');
        apellidoError.textContent = !apellido ? '¡Error! El campo apellido es obligatorio.' : '¡Error! El apellido no debe contener números.';
        document.getElementById('input_apellido').value = '';
    }

    // Validar edad
    if (!edad || !/^\d+$/.test(edad)) {
        isValid = false;
        const edadError = document.getElementById('edad_error');
        edadError.textContent = !edad ? '¡Error! El campo edad es obligatorio.' : '¡Error! La edad debe contener solo números.';
        document.getElementById('input_edad').value = '';
    }

    // Validar email
    if (!email) {
        isValid = false;
        const emailError = document.getElementById('email_error');
        emailError.textContent = '¡Error! El campo email es obligatorio.';
        document.getElementById('input_email').value = '';
    }

    // Validar sexo
    if (!sexoM && !sexoF) {
        isValid = false;
        const sexoError = document.getElementById('sexo_error');
        sexoError.textContent = '¡Error! Por favor, seleccione su sexo.';
    }

    if (isValid) {
        const mensajeDiv = document.getElementById('mensaje');
        mensajeDiv.style.color = 'green';
        mensajeDiv.textContent = 'Formulario enviado con éxito';
        document.getElementById('dataForm').reset();
    }

    return false; // Evita la subida del formulario
}
