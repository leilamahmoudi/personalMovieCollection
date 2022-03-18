const db = require("./db");

const createMovie = async (movieData) => {
  const movieObj = {
    movieId: db.generateMovieId(),
    name: movieData.name,
    isWatched: movieData.isWatched,
    rate: movieData.rate,
    category: movieData.category,
  };

  await db.createNewMovie(movieObj);
  return movieObj;
};

const getMoviesWatched = async () => {
  const watchedObj = await db.getAllMovies({ isWatched: true });
  return watchedObj;
};

const getAllMovies = async () => {
  const watchedObj = await db.getAllMovies();
  return watchedObj;
};

// in ghalate ba erfan check konam
const getMoviesWatchlist = async () => {
  const WatchlistObj = await db.getAllMovies({ isWatched: false });
  console.log("WatchlistObj");
  console.log(WatchlistObj);
  return WatchlistObj;
};

// beporsam
async function updateMovie(movieId, movieData) {
  const movieObj = await db.getMovieById(movieId);
  if (!movieObj) {
    return;
  }
  const updatedMovieObj = { ...movieObj, ...movieData };
  await db.updateMovie(updatedMovieObj);
  return updatedMovieObj;
}

const deleteMovie = async (movieId) => {
  const deletedMovieCount = await db.deleteMovieById(movieId);
  return deletedMovieCount;
};

const getMovie = async (movieId) => {
  const movieObj = await db.getMovieById(movieId);
  return movieObj;
};

module.exports = {
  createMovie,
  getMoviesWatched,
  getMoviesWatchlist,
  getAllMovies,
  updateMovie,
  deleteMovie,
  getMovie,
};
