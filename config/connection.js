const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    const connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Un1c0rnZ!",
        database: "burgers_db"
    });
}

connection.connect(err => {
    if (err) {
        console.error(err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
