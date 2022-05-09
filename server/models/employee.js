const mysql = require("mysql");

const config = require('../config/config.json');

  const dbemployee = mysql.createConnection({
    user: config[4].user,
    host: config[4].host,
    password: config[4].password,
    database: config[4].database,
  });
  module.exports = dbemployee;