const connection = require("./connection.js");

const orm = {
    selectAll: function(callback) {
        connection.query("SELECT * FROM burgers", (err,result) => {
            if(err) throw err;
        });
        callback(result);
    },
    insertOne: function(name, callback) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [name], (err,result) => {
            if(err) throw err;
        });
        callback(result);
    },
    updateOne: function(id, callback) {
        connection.query("UPDATE burgers SET devoured = NOT devoured WHERE id = ?", [id], (err,result) => {
            if(err) throw err;
        });
        callback(result);
    }
};

module.exports = orm;