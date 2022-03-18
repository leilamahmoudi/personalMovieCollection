import axios from "axios";

export const getWatchlistMovies = async () => {
  const res = await axios.get("http://127.0.0.1:8080/api/movies/watchlist");
  return res.data;
};

export const getWatchedMovies = async () => {
  const res = await axios.get("http://127.0.0.1:8080/api/movies/watched");
  return res.data;
};

export const getMyCollection = async () => {
  const res = await axios.get("http://127.0.0.1:8080/api/movies");
  return res.data;
};

export const getMovie = async (movieId) => {
  const res = await axios.get(`http://127.0.0.1:8080/api/movies/${movieId}`);
  return res.data;
};

export const createMovie = async (movieObj) => {
  const res = await axios.post("http://localhost:8080/api/movies", movieObj);
  return res.data;
};

export const deleteMovie = async (movieId) => {
  const res = await axios.delete(`http://127.0.0.1:8080/api/movies/${movieId}`);
  return res.data;
};

export const updateMovie = async (movieId, movieObj) => {
  const res = await axios.patch(
    `http://localhost:8080/api/movies/${movieId}`,
    movieObj
  );
  return res.data;
};
