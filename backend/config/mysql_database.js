const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });

const mysqlPool = mysql.createPool({
  host: "b8hx39ruavxxcr4ikqzl-mysql.services.clever-cloud.com",
  user: "udolchrwbssth4w7",
  password: "2Di5RDyWUoSAyJ0LupUj",
  database: "b8hx39ruavxxcr4ikqzl",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = mysqlPool;
