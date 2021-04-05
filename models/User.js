const pool = require("./db");
class User {
  constructor(user) {
    (this.name = user.name), (this.age = user.age);
  }

  createUser(newUser, result) {}

  getAllUsers() {
    pool.query("SELECT * FROM users", function (err, results) {
      if (err) console.log(err);
      return results;
    });
  }
}

module.exports = User;
