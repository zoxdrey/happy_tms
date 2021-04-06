const pool = require("./db");
class User {
  constructor(user) {
    (this.name = user.name), (this.age = user.age);
  }

  createUser(newUser, result) {}

  getAllUsers() {
    return pool.execute("SELECT * FROM users");
  }
}

module.exports = User;
