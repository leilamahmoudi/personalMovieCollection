/* global db */
db.createUser({
  user: "admin",
  pwd: "pass",
  roles: [
    {
      role: "readWrite",
      db: "movies",
    },
  ],
});
