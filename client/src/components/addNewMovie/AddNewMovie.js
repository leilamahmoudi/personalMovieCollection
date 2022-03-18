import React, { useState } from "react";
import "./addNewMovie.css";
import PageTemplate from "../pageTemplate/PageTemplate";
import { createMovie } from "../../api";

const AddNewMovie = () => {
  const [movieName, setMovieName] = useState("");
  const [category, setCategory] = useState("");
  const [isWatched, setIsWatched] = useState(false);
  const [rate, setRate] = useState("");
  const [errors, setErrors] = useState([]);

  const validateMovieObj = (movieObj) => {
    setErrors([]);
    let isValid = true;
    if (!movieObj.name) {
      isValid = false;
      setErrors((prev) => [...prev, "Movie name shouldn't be empty!"]);
    }
    if (!movieObj.category) {
      isValid = false;
      setErrors((prev) => [...prev, "Movie category shouldn't be empty!"]);
    }
    const pattern = /[1-9]|10/;
    if (isWatched && !pattern.test(movieObj.rate)) {
      isValid = false;
      setErrors((prev) => [
        ...prev,
        "Movie rate could be only a number between 1 to 10!",
      ]);
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const movieObj = {
      name: movieName,
      category,
      isWatched,
      rate,
    };

    if (validateMovieObj(movieObj)) {
      createMovie(movieObj);

      setMovieName("");
      setCategory("");
      setIsWatched(false);
      setRate("");
    }
  };

  return (
    <div>
      <PageTemplate currentPage="add-new-movie">
        <div className="AddNewMovie">
          <div className="create-title">Add New Movie</div>
          <form className="create-form" onSubmit={handleSubmit}>
            <input
              className="movie-name"
              placeholder="Add Name Of Movie"
              value={movieName}
              onChange={(e) => {
                setMovieName(e.target.value);
                setErrors([]);
              }}
            />

            <label className="movie-category-label">
              What Is The Category ?
            </label>
            <select
              className="movie-category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setErrors([]);
              }}
            >
              <option value=""> {""}Selet a category</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
              <option value="Thriller">Thriller</option>
            </select>

            <input
              className="movie-isWatched"
              type="checkbox"
              checked={isWatched}
              onChange={(e) => {
                setIsWatched(!isWatched);
                setErrors([]);
              }}
            />
            <label className="movie-isWatched-label">
              Have You Watched This Movie?
            </label>
            {isWatched && (
              <input
                className="movie-rate"
                placeholder="Add Rate"
                value={rate}
                onChange={(e) => {
                  setRate(e.target.value);
                  setErrors([]);
                }}
              />
            )}

            <button type="submit" className="Add-btn">
              Add
            </button>
            {errors && (
              <label className="error-label">
                {errors.map((error) => (
                  <p>{error}</p>
                ))}
              </label>
            )}
          </form>
        </div>
      </PageTemplate>
    </div>
  );
};

export default AddNewMovie;
