document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var peso = document.getElementById('input_peso').value.trim();
    var talla = document.getElementById('input_talla').value.trim();

    document.getElementById('peso_error').style.display = 'none';
    document.getElementById('talla_error').style.display = 'none';

    if (!validateNumber(peso, 5, 650)) {
        document.getElementById('peso_error').style.display = 'inline';
        return;
    }

    if (!validateNumber(talla, 20, 300)) {
        document.getElementById('talla_error').style.display = 'inline';
        return;
    }

    var pesoNum = parseFloat(peso);
    var tallaNum = parseFloat(talla) / 100;
    var imc = calcularIMC(pesoNum, tallaNum);

    dibujarIMC(imc);
});


/**
 * Valida si un número está dentro de un rango específico
 * @method validateNumber
 * @param {string} input - Valor ingresado por el usuario
 * @param {number} min - Valor mínimo permitido
 * @param {number} max - Valor máximo permitido
 * @return {boolean} - True si el valor es válido, False en caso contrario
 */
const validateNumber = (input, min, max) => {
    if (!/^\d+(\.\d+)?$/.test(input)) {
        return false;
    }
    const num = parseFloat(input);
    return num >= min && num <= max;
};


/**
 * Calcula el Índice de Masa Corporal (IMC)
 * @method calcularIMC
 * @param {number} peso - Peso del usuario en kilogramos
 * @param {number} talla - Talla del usuario en metros
 * @return {number} - Valor del IMC
 */
const calcularIMC = (peso, talla) => {
    const imc = peso / (talla * talla);
    return Math.round(imc);
};

/**
 * Dibuja el valor del IMC en el canvas
 * @method dibujarIMC
 * @param {number} imc - Valor del IMC calculado
 */
const dibujarIMC = (imc) => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Su IMC es: ' + imc, 10, 30);
};

