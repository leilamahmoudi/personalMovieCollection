const express = require("express");
const movies = require("./movies");

const app = express();
const port = 8080;
app.use(express.json());

app.get("/api", (req, res) => {
  return res.json({ message: "You have reached the Movies API" });
});

if (!module.parent) {
  app.listen(port);
}

module.exports.app = app;
