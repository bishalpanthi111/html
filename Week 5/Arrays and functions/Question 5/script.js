function sortArray(numbers, order) {
  return numbers.slice().sort(function(a, b) {
    if (order === "asc") return a - b
    if (order === "desc") return b - a
  })
}

const numbers1 = [5, 2, 8, 1, 9]
console.log("Original Array:", numbers1)
console.log("Ascending:", sortArray(numbers1, "asc"))
console.log("Descending:", sortArray(numbers1, "desc"))

const numbers2 = [42, 7, 19, 3, 88, 15]
console.log("Original Array:", numbers2)
console.log("Ascending:", sortArray(numbers2, "asc"))
console.log("Descending:", sortArray(numbers2, "desc"))
