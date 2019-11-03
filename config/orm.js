const connection = require("./connection.js");

const orm = {
    selectAll: function(table, callback) {
        connection.query("SELECT * FROM ??", [table], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: function(table, columns, values, callback) {
        let queryString = "INSERT INTO ?? (";
        for (i = 0; i < columns.length - 1; i++) {
            queryString += "??,";
        }
        queryString += "??) VALUES (";
        for (i = 0; i < values.length - 1; i++) {
            queryString += "?,";
        }
        queryString += "?)";
        connection.query(
            queryString,
            [table].concat(columns).concat(values),
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        );
    },
    updateOne: function(table, updateCol, updateVal, id, callback) {
        connection.query(
            "UPDATE ?? SET ?? = ? WHERE id = ?",
            [table, updateCol, updateVal, id],
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        );
    }
};

module.exports = orm;
