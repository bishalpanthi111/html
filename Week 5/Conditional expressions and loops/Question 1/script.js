const celsiusInput = document.getElementById('celsius');
const convertButton = document.getElementById('convert');
const fahrenheitDisplay = document.getElementById('fahrenheit');
const kelvinDisplay = document.getElementById('kelvin');

convertButton.addEventListener('click', () => {
  const celsius = parseFloat(celsiusInput.value);
  if (isNaN(celsius)) {
    fahrenheitDisplay.textContent = '';
    kelvinDisplay.textContent = 'Please enter a valid number.';
    return;
  }

  const fahrenheit = (celsius * 9 / 5) + 32;
  const kelvin = celsius + 273.15;

  fahrenheitDisplay.textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
  kelvinDisplay.textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
});
