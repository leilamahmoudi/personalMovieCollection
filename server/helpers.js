const notFound = (next) => {
  const err = new Error("Movie not found");
  err.status = 404;
  next(err);
};

const badInput = (next) => {
  const err = new Error("Validation Error");
  err.status = 400;
  next(err);
};

const validateInput = ({ name, isWatched, rate, category }) => {
  return true;
};

module.exports = {
  notFound,
  badInput,
  validateInput,
};
