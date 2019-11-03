const orm = require("../config/orm.js");

const burger = {
    all: function(callback) {
        orm.selectAll("burgers", res => callback(res));
    },
    create: function(name, callback) {
        orm.insertOne("burgers", ["burger_name"], [name], res => callback(res));
    },
    update: function(updateVal, id, callback) {
        orm.updateOne("burgers", "devoured", updateVal, id, res =>
            callback(res)
        );
    }
};

module.exports = burger;
