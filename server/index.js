const express = require("express");
const movies = require("./movies");
const { notFound, badInput, validateInput } = require("./helpers");
const cors = require("cors");

const app = express();

app.use(cors());
const port = 8080;
app.use(express.json());

app.get("/api", (req, res) => {
  return res.json({ message: "You have reached the Movies API" });
});

app.post("/api/movies", async (req, res, next) => {
  if (!validateInput(req.body)) {
    badInput(next);
  }

  const createdMovie = await movies.createMovie(req.body);

  return res
    .status(201)
    .location(`/api/movies/${createdMovie.movieId}`)
    .json(createdMovie);
});

app.get("/api/movies", async (req, res) => {
  const moviesList = await movies.getAllMovies();
  return res.json(moviesList);
});

app.get("/api/movies/watched", async (req, res) => {
  const moviesList = await movies.getMoviesWatched();
  return res.json(moviesList);
});

app.get("/api/movies/watchlist", async (req, res) => {
  const moviesList = await movies.getMoviesWatchlist();
  return res.json(moviesList);
});

app.get("/api/movies/:movieId", async (req, res, next) => {
  const movieObj = await movies.getMovie(req.params.movieId);
  if (!movieObj) {
    notFound(next);
  }
  return res.json(movieObj);
});

// wtf stadtus add konam
app.patch("/api/movies/:movieId", async (req, res, next) => {
  if (!validateInput(req.body)) {
    badInput(next);
  }

  const updatedMovie = await movies.updateMovie(req.params.movieId, req.body);
  if (!updatedMovie) {
    notFound(next);
  }
  res.send(updatedMovie);
});

app.delete("/api/movies/:movieId", async (req, res, next) => {
  await movies.deleteMovie(req.params.movieId);
  return res.status(204).json({});
});

app.use((req, res, next) => {
  const err = new Error("Page Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({ message: err.message });
  next();
});

if (!module.parent) {
  app.listen(port);
}

module.exports.app = app;

// Api get all movies mark as watched method get
// GET /api/movies/watched
//
// Api get watchlist method get based on isWatched
// GET /api/movies/watchlist
//
// Api mark movie as watched
// PATCH /api/movies/:movieId
// { isWatche:true, rate:7 }
//
// Add new movie
// POST /api/movies
// { isWatche:false, rate:null , name:'', category:''}
//
// DELETE /api/movies/:movieId
//
// GET /api/movies/:movieId
