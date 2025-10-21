let numbers = []
let input
do {
  input = prompt("Enter a number (or 'done' to finish):")
  if (input.toLowerCase() !== 'done') {
    let num = parseInt(input)
    if (!isNaN(num)) numbers.push(num)
  }
} while (input.toLowerCase() !== 'done')

let evenNumbers = []
for (let num of numbers) {
  if (num % 2 === 0) evenNumbers.push(num)
}

let result = document.getElementById("result")
if (evenNumbers.length > 0) {
  result.textContent = "Even Numbers: " + evenNumbers.join(", ")
} else {
  result.textContent = "Even Numbers: None"
}
