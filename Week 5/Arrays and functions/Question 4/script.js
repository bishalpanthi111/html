function sortArray(arr) {
  return arr.slice().sort(function(a, b) { return a - b })
}

let numbers = [42, 7, 19, 3, 88, 15]
console.log("Original Array:", numbers)
let sortedNumbers = sortArray(numbers)
console.log("Sorted Array:", sortedNumbers)
