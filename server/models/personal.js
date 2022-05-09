const mysql = require("mysql");

const config = require('../config/config.json');

  const dbpersonal = mysql.createConnection({
    user: config[2].user,
    host: config[2].host,
    password: config[2].password,
    database: config[2].database,
  });
  module.exports = dbpersonal;