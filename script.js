function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsiusInput').value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheitInput').value = fahrenheit.toFixed(2) + '°F';
    document.getElementById("calculationMethod").textContent = `${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

function convertToCelsius() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheitInput').value);
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('celsiusInput').value = celsius.toFixed(2) + '°C';
    document.getElementById("calculationMethod").textContent = `${fahrenheit}°F × (5/9) - 32 = ${celsius.toFixed(2)}°C`;
}

function resetForm() {
    document.getElementById('celsiusInput').value = '';
    document.getElementById('fahrenheitInput').value = '';
}

