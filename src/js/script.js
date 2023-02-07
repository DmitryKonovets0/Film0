const numberOfFilms = prompt('How many films you already watched?'); 
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: false
};

const a = prompt('One of last watched films'),
      b = prompt('How match do you rate it'),
      c = prompt('One of last watched films'),
      d = prompt('How match do you rate it');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;


