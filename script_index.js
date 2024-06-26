document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var peso = document.getElementById('input_peso').value.trim();
    var talla = document.getElementById('input_talla').value.trim();

    document.getElementById('peso_error').style.display = 'none';
    document.getElementById('talla_error').style.display = 'none';

    if (!validateNumber(peso, 5, 650)) {
        document.getElementById('peso_error').style.display = 'inline';
        alert('Peso inválido. Por favor, ingrese un valor entre 5 y 650 kg (sólo cifras positivas).');
        document.getElementById('input_peso').value = '';
        return;
    }

    if (!validateNumber(talla, 20, 300)) {
        document.getElementById('talla_error').style.display = 'inline';
        alert('Talla inválida. Por favor, ingrese un valor entre 20 y 300 cm (sólo cifras positivas).');
        document.getElementById('input_talla').value = '';
        return;
    }

    var pesoNum = parseFloat(peso);
    var tallaNum = parseFloat(talla) / 100;
    var imc = calcularIMC(pesoNum, tallaNum);
    var categoria = obtenerCategoriaIMC(imc);
    
    dibujarIMC(imc, categoria);
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
 * Obtiene la categoría del IMC
 * @method obtenerCategoriaIMC
 * @param {number} imc - Valor del IMC calculado
 * @return {object} - Categoría del IMC y color asociado
 */
const obtenerCategoriaIMC = (imc) => {
    if (imc < 18.5) {
        return { categoria: 'Bajo peso', color: 'blue' };
    } else if (imc >= 18.5 && imc < 25) {
        return { categoria: 'Peso saludable', color: 'green' };
    } else if (imc >= 25 && imc < 30) {
        return { categoria: 'Sobrepeso', color: 'orange' };
    } else if (imc >= 30 && imc < 35) {
        return { categoria: 'Obesidad Clase 1', color: 'red' };
    } else if (imc >= 35 && imc < 40) {
        return { categoria: 'Obesidad Clase 2', color: 'darkred' };
    } else {
        return { categoria: 'Obesidad Clase 3', color: 'purple' };
    }
};

/**
 * Dibuja el valor del IMC y su categoría en el canvas
 * @method dibujarIMC
 * @param {number} imc - Valor del IMC calculado
 * @param {object} categoria - Categoría del IMC y color asociado
 */
const dibujarIMC = (imc, categoria) => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '20px Arial';
    ctx.fillStyle = categoria.color;
    ctx.fillText('Su IMC es: ' + imc, 10, 30);
    ctx.fillText('Categoría: ' + categoria.categoria, 10, 60);
};
