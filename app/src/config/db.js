const mysql = require("mysql");

const db = mysql.createConnection({
  host: "login-lecture.c760ftrzvjev.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "success185",
  database: "login_lecture",
});

db.connect();

module.exports = db;
