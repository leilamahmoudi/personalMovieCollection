import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddNewMovie from "./components/addNewMovie/AddNewMovie";
import MovieList from "./components/movieList/MovieList";
import MovieDetails from "./components/movies/movieDetail/MovieDetails";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MovieList type="watch-list" />} />
          <Route path="/add-new-movie" element={<AddNewMovie />} />
          <Route
            path="/my-collection"
            element={<MovieList type="my-collection" />}
          />
          <Route path="/watched" element={<MovieList type="watched" />} />
          <Route path="/movie-detail/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
