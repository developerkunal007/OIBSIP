document.getElementById('convertButton').addEventListener('click', function() {
    const tempInput = document.getElementById('temperatureInput').value;
    const unit = document.getElementById('unitSelect').value;
    let result;

    if (isNaN(tempInput) || tempInput === '') {
        alert("Please enter a valid number for temperature.");
        return;
    }

    const temperature = parseFloat(tempInput);

    if (unit === "Fahrenheit") {
        const celsius = ((temperature - 32) * 5 / 9).toFixed(2);
        result = `Result:${celsius} °C`;

    } else if (unit === "Kelvin") {
        const celsius = (temperature - 273.15).toFixed(2);
        result = `Result:${celsius} °C`;
    }

    document.getElementById('resultArea').innerHTML = result;
});
