const mysql = require("mysql");

const config = require('../config/config.json');

  const dbbirthday = mysql.createConnection({
    user: config[1].user,
    host: config[1].host,
    password: config[1].password,
    database: config[1].database,
  });
  module.exports = dbbirthday;