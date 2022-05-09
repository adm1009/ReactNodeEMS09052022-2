const mysql = require("mysql");

const config = require('../config/config.json');

const dblogin = mysql.createConnection({
    user: config[0].user,
    host: config[0].host,
    password: config[0].password,
    database: config[0].database,
  });
  module.exports = dblogin;

  