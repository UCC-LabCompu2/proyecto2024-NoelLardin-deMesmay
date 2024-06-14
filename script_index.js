document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let peso = document.getElementById('input_peso').value.trim();
    let talla = document.getElementById('input_talla').value.trim();

    document.getElementById('peso_error').style.display = 'none';
    document.getElementById('talla_error').style.display = 'none';

    if (!validateNumber(peso, 5, 650)) {
        document.getElementById('peso_error').style.display = 'inline';
        return;
    }

    if (!validateNumber(talla, 30, 250)) {
        document.getElementById('talla_error').style.display = 'inline';
        return;
    }

    let pesoNum = parseFloat(peso);
    let tallaNum = parseFloat(talla) / 100; // Convertir à mètres
    let imc = pesoNum / (tallaNum * tallaNum);
    imc = Math.round(imc);

    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Su IMC es: ' + imc, 10, 30);
});

function validateNumber(input, min, max) {
    if (!/^\d+(\.\d+)?$/.test(input)) {
        return false; 
    }
    let num = parseFloat(input);
    return num >= min && num <= max; 
