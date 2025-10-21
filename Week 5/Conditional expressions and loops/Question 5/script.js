function calculateSum() {
  let num = parseInt(document.getElementById("number").value)
  let result = document.getElementById("result")
  if (isNaN(num) || num <= 0) {
    result.textContent = "Please enter a positive integer."
    return
  }
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum += i
  }
  result.textContent = "The sum of natural numbers up to " + num + " is " + sum + "."
}
