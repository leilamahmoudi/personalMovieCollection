const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const { query } = require("express");
require("dotenv").config({
  path: path.resolve(__dirname, "../containerConfig/mongodb.env"),
});

const url = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@localhost:27017`;
const client = new MongoClient(url, { useUnifiedTopology: true });

const generateMovieId = () => uuidv4();

const getCollectionByName = async (collectionName) => {
  await client.connect();
  const db = client.db(process.env.MONGO_INITDB_DATABASE);
  return db.collection(collectionName);
};

const createNewMovie = async (movieObj) => {
  const moviesCollection = await getCollectionByName("movies");
  moviesCollection.insertOne(movieObj);
};

const getAllMovies = async (q = {}) => {
  const moviesCollection = await getCollectionByName("movies");
  const allMovies = await moviesCollection.find(q).toArray();
  return allMovies;
};

// wtf
const updateMovie = async (movieData) => {
  const moviesCollection = await getCollectionByName("movies");
  const updateResult = await moviesCollection.updateOne(
    { movieId: movieData.movieId },
    { $set: movieData }
  );
  return updateResult.modifiedCount;
};

const deleteMovieById = async (movieId) => {
  const moviesCollection = await getCollectionByName("movies");
  const deleteResult = await moviesCollection.deleteMany({ movieId });
  console.log("!!!!!!!!");
  console.log(deleteResult);
  return deleteResult.deletedCount;
};

const getMovieById = async (movieId) => {
  const moviesCollection = await getCollectionByName("movies");
  const filteredMovies = await moviesCollection.find({ movieId }).toArray();
  return filteredMovies[0];
};

module.exports = {
  createNewMovie,
  getAllMovies,
  generateMovieId,
  deleteMovieById,
  updateMovie,
  getMovieById,
};
