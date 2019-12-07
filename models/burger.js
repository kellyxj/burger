const orm = require("../config/orm.js");

const burger = {
    all: function(callback) {
        orm.selectAll("c0imvegq7bn8ug3p", res => callback(res));
    },
    create: function(name, callback) {
        orm.insertOne("c0imvegq7bn8ug3p", ["burger_name"], [name], res =>
            callback(res)
        );
    },
    update: function(updateVal, id, callback) {
        orm.updateOne("c0imvegq7bn8ug3p", "devoured", updateVal, id, res =>
            callback(res)
        );
    }
};

module.exports = burger;
