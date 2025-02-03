const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });

const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "stakenew",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = mysqlPool;
