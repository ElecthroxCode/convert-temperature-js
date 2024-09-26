


document.getElementById('btn').addEventListener('click', conversion);

function convertTemp(c) {
    const fahrenheit = (c * 9/5) + 32;
    const kelvin = c + 273.15;
    return { fahrenheit, kelvin };
}

function conversion() {
    const temp = document.getElementById('temp').value;
    const result = document.getElementById('result');
    result.innerHTML = ''; 
    const celsius = parseFloat(temp); 
    if (isNaN(celsius)) {
        result.innerHTML = '<p style="color: red;">Número incorrecto. Intenta de nuevo!</p>';
        return;
    }
    const { fahrenheit, kelvin } = convertTemp(celsius);
    
    result.innerHTML = `
        <p>Grados °Kelvin: ${kelvin.toFixed(2)}</p>
        <p>Grados °Fahrenheit: ${fahrenheit.toFixed(2)}</p>
    `;
    console.log(`Grados °K: ${kelvin.toFixed(2)}`);
    console.log(`Grados °F: ${fahrenheit.toFixed(2)}`);
}

