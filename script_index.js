document.getElementById('imcForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var peso = document.getElementById('input_peso').value.trim();
    var talla = document.getElementById('input_talla').value.trim();

    document.getElementById('peso_error').style.display = 'none';
    document.getElementById('talla_error').style.display = 'none';


    if (!validateNumber(peso)) {
        document.getElementById('peso_error').style.display = 'inline';
        return;
    }


    if (!validateNumber(talla)) {
        document.getElementById('talla_error').style.display = 'inline';
        return;
    }


    var pesoNum = parseFloat(peso);
    var tallaNum = parseFloat(talla) / 100; // Convertir a metros
    var imc = pesoNum / (tallaNum * tallaNum);
    imc = Math.round(imc);

    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Su IMC es: ' + imc, 10, 30);
});


function validateNumber(input) {
    return /^\d+$/.test(input);
}
