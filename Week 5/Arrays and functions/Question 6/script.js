let numMovies = parseInt(prompt("How many movies do you want to rate?"))
let movies = []

for (let i = 1; i <= numMovies; i++) {
  let title = prompt("Enter the title of movie " + i + ":")
  let rating = parseFloat(prompt("Enter the rating of '" + title + "' (1-5):"))
  movies.push({title: title, rating: rating})
}

movies.sort(function(a, b) {
  return b.rating - a.rating
})

let output = document.getElementById("output")
let movieList = "<h3>Sorted Movies (Highest to Lowest):</h3><ul>"
for (let movie of movies) {
  movieList += "<li>" + movie.title + " - Rating: " + movie.rating + "</li>"
}
movieList += "</ul>"

let highestRated = "<h3>Highest-Rated Movie:</h3><p>" + movies[0].title + " - Rating: " + movies[0].rating + "</p>"

output.innerHTML = movieList + highestRated
