var movies = [{
    title: 'Dark Knight',
    rating: 4
  },
  {
    title: 'Wait Until Dark',
    rating: 5
  },
  {
    title: 'Inception',
    rating: 4
  }
]

$('button').on('click', function () {
  var title = $('#title').val();
  var rating = $('#rating').val();
  var movie = {
    title: title,
    rating: rating
  }
  var existingMovies = JSON.parse(localStorage.getItem('myMovies'));
  existingMovies.push(movie);
  localStorage.setItem('myMovies', JSON.stringify(existingMovies));
  $('list').append('<div><h1>' + title + ...)
})
