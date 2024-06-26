/**
 * Fonction appelée lors de la soumission du formulaire IMC
 * Valide les entrées utilisateur, calcule l'IMC et dessine sur le canvas
 * @return {boolean} - Retourne false pour empêcher la soumission du formulaire si les entrées sont invalides
 */
function validarIMC() {
    const peso = document.getElementById('input_peso').value.trim();
    const talla = document.getElementById('input_talla').value.trim();

    document.getElementById('peso_error').style.display = 'none';
    document.getElementById('talla_error').style.display = 'none';

    if (!validateNumber(peso, 5, 650)) {
        document.getElementById('peso_error').style.display = 'inline';
        alert('Peso inválido. Por favor, ingrese un valor entre 5 y 650 kg (sólo cifras positivas).');
        document.getElementById('input_peso').value = '';
        return false; // Empêche la soumission du formulaire
    }

    if (!validateNumber(talla, 20, 300)) {
        document.getElementById('talla_error').style.display = 'inline';
        alert('Talla inválida. Por favor, ingrese un valor entre 20 y 300 cm (sólo cifras positivas).');
        document.getElementById('input_talla').value = '';
        return false; // Empêche la soumission du formulaire
    }

    const pesoNum = parseFloat(peso);
    const tallaNum = parseFloat(talla) / 100;
    const imc = calcularIMC(pesoNum, tallaNum);
    const categoria = obtenerCategoriaIMC(imc);
    
    dibujarIMC(imc, categoria);

    return false; // Empêche la soumission du formulaire
}

/**
 * Valide si un numéro est dans une plage spécifique
 * @param {string} input - Valeur entrée par l'utilisateur
 * @param {number} min - Valeur minimale permise
 * @param {number} max - Valeur maximale permise
 * @return {boolean} - True si la valeur est valide, False sinon
 */
function validateNumber(input, min, max) {
    if (!/^\d+(\.\d+)?$/.test(input)) {
        return false;
    }
    const num = parseFloat(input);
    return num >= min && num <= max;
}

/**
 * Calcule l'Indice de Masse Corporelle (IMC)
 * @param {number} peso - Poids de l'utilisateur en kilogrammes
 * @param {number} talla - Taille de l'utilisateur en mètres
 * @return {number} - Valeur de l'IMC
 */
function calcularIMC(peso, talla) {
    const imc = peso / (talla * talla);
    return Math.round(imc);
}

/**
 * Obtient la catégorie de l'IMC
 * @param {number} imc - Valeur de l'IMC calculée
 * @return {object} - Catégorie de l'IMC et couleur associée
 */
function obtenerCategoriaIMC(imc) {
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
}

/**
 * Dessine la valeur de l'IMC et sa catégorie sur le canvas
 * @param {number} imc - Valeur de l'IMC calculée
 * @param {object} categoria - Catégorie de l'IMC et couleur associée
 */
function dibujarIMC(imc, categoria) {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '20px Arial';
    ctx.fillStyle = categoria.color;
    ctx.fillText('Su IMC es: ' + imc, 10, 30);
    ctx.fillText('Categoría: ' + categoria.categoria, 10, 60);
}
