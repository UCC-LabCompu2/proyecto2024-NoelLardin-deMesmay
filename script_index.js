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
    var imc = pesoNum / (tallaNum * tallaNum);
    imc = Math.round(imc);

    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

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
}
