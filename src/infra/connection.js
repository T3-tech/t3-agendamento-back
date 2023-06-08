const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Lisboa70!",
    port: 3306,
    database: "projeto_integrador",
});

module.exports = connection;
