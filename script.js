const calculateButton = document.getElementById('calculate-button');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', () => {

    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight-input').value);
    const height = parseFloat(document.getElementById('height-input').value); 

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        resultDiv.textContent = 'Por favor, insira valores válidos para peso e altura.';
        return;
    }

    const imc = weight / (height * height);
    resultDiv.textContent = `Seu IMC é ${imc.toFixed(2)}`;


});

