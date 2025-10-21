let num = parseInt(prompt("Enter a positive integer:"))
let container = document.getElementById("tableContainer")

if (isNaN(num) || num <= 0) {
  container.innerHTML = "Please enter a valid positive integer."
} else {
  let table = "<table>"
  for (let i = 1; i <= num; i++) {
    table += "<tr>"
    for (let j = 1; j <= num; j++) {
      table += "<td>" + (i * j) + "</td>"
    }
    table += "</tr>"
  }
  table += "</table>"
  container.innerHTML = "<h3>Multiplication Table:</h3>" + table
}
