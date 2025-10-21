const point1Input = document.getElementById('point1');
const point2Input = document.getElementById('point2');
const calculateButton = document.getElementById('calculate');
const distanceDisplay = document.getElementById('distance');

calculateButton.addEventListener('click', () => {
  const point1 = point1Input.value.split(',').map(Number);
  const point2 = point2Input.value.split(',').map(Number);

  if (point1.length !== 2 || point2.length !== 2 || point1.some(isNaN) || point2.some(isNaN)) {
    distanceDisplay.textContent = 'Please enter valid coordinates.';
    return;
  }

  const [x1, y1] = point1;
  const [x2, y2] = point2;

  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  distanceDisplay.textContent = `Distance: ${distance.toFixed(2)}`;
});
