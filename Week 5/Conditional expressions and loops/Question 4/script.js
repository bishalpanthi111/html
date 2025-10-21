function checkGrade() {
  let score = parseFloat(document.getElementById("score").value)
  let result = document.getElementById("result")

  if (isNaN(score) || score < 0 || score > 100) {
    result.textContent = "Please enter a valid score between 0 and 100."
    return
  }

  if (score >= 0 && score <= 39) result.textContent = "Grade: 0"
  else if (score >= 40 && score <= 51) result.textContent = "Grade: 1"
  else if (score >= 52 && score <= 63) result.textContent = "Grade: 2"
  else if (score >= 64 && score <= 75) result.textContent = "Grade: 3"
  else if (score >= 76 && score <= 87) result.textContent = "Grade: 4"
  else if (score >= 88 && score <= 100) result.textContent = "Grade: 5"
}
