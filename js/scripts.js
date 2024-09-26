

function convertirTemperatura(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
    return { fahrenheit, kelvin };
}

function conversion() {
    const tempInput = document.getElementById('temp').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; 
    const celsius = parseFloat(tempInput); 
    if (isNaN(celsius)) {
        resultDiv.innerHTML = '<p style="color: red;">Número incorrecto. Intenta de nuevo!</p>';
        return;
    }
    const { fahrenheit, kelvin } = convertirTemperatura(celsius);
    
    resultDiv.innerHTML = `
        <p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
        <p>Grados Fahrenheit: ${fahrenheit.toFixed(2)}</p>
    `;
    console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
    console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}`);
}

document.getElementById('btn').addEventListener('click', conversion);
