let mysql = require('mysql')
require("dotenv").config()

let pool = mysql.createPool(process.env.CLEARDB_GOLD_URL);
module.exports = pool;
  