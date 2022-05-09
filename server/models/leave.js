const mysql = require("mysql");

const config = require('../config/config.json');

const dbleave = mysql.createConnection({
    user: config[3].user,
    host: config[3].host,
    password: config[3].password,
    database: config[3].database,
  });
  module.exports = dbleave;