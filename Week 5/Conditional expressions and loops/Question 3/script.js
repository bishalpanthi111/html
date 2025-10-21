function checkTriangle() {
  let a = parseFloat(document.getElementById("side1").value)
  let b = parseFloat(document.getElementById("side2").value)
  let c = parseFloat(document.getElementById("side3").value)
  let result = document.getElementById("result")

  if (!(a > 0 && b > 0 && c > 0)) {
    result.textContent = "Please enter valid side lengths."
    return
  }

  if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
    result.textContent = "The given sides do not form a triangle."
    return
  }

  if (a === b && b === c) {
    result.textContent = "Equilateral Triangle"
  } else if ((a === b && b !== c) || (a === c && c !== b) || (b === c && c !== a)) {
    result.textContent = "Isosceles Triangle"
  } else if (a !== b && b !== c && a !== c) {
    result.textContent = "Scalene Triangle"
  } else {
    result.textContent = "Invalid input."
  }
}
