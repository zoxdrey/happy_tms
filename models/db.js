const mysql = require("mysql2");
const config = require("config");

const pool = mysql.createPool({
  connectionLimit: config.get("connectionLimit"),
  host: config.get("host"),
  user: config.get("user"),
  database: config.get("database"),
  password: config.get("password"),
});

module.exports = pool;
