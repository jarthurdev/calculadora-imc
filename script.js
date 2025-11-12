const calculateButton = document.getElementById('calculate-button');
const resultDiv = document.getElementById('result');
const clearButton = document.getElementById('clear-button');
const themeToggle = document.getElementById('theme-toggle');
const bodyElement = document.body;

calculateButton.addEventListener('click', () => {

    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight-input').value);
    const height = parseFloat(document.getElementById('height-input').value); 

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        resultDiv.textContent = 'Por favor, insira valores válidos para peso e altura.';
        return;
    }

    const imc = weight / (height * height);
    resultDiv.textContent = `Seu IMC é ${imc.toFixed(2)}, classificado como: ${classifyIMC(imc)}`;
    applyIMCColor(imc);


});

function classifyIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        return 'Sobrepeso';
    } else {
        return 'Obesidade';
    }
}

// Classificar o IMC por cores

function getIMCColor(imc) {
    if (imc < 18.5) {
        return 'blue';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'green';
    } else if (imc >= 25 && imc < 29.9) {
        return 'orange';
    } else {
        return 'red';
    }
}

// Aplicar a cor ao resultado

function applyIMCColor(imc) {
    const color = getIMCColor(imc);
    resultDiv.style.color = color;
}

clearButton.addEventListener('click', () => {

    resultDiv.textContent = '';
    document.getElementById('weight-input').value = '';
    document.getElementById('height-input').value = '';
})

themeToggle.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
    if (bodyElement.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙'
    }
});
