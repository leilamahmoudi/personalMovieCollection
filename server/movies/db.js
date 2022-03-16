const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
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

module.exports = {
  generateMovieId,
};
