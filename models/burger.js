const orm = require("../config/orm.js");

const burger = {
    all: function(callback) {
        orm.selectAll("burgers", res => callback(res));
    },
    create: function(name, callback) {
        orm.insertOne("burgers", ["burger_name"], [name], res => callback(res));
    },
    update: function(updateVal) {
        orm.updateOne("burgers", "devoured", updateVal, res => callback(res));
    }
}