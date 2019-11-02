const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
    //TODO: get all burgers. Split the array of burgers into devoured and not devoured. Render to index.
    burger.all(allBurgers => {
        const eatenBurgers = [];
        const uneatenBurgers = [];
        for (const sandwich of allBurgers) {
            if (sandwich.devoured) {
                eatenBurgers.push(sandwich);
            } else {
                uneatenBurgers.push(sandwich);
            }
        }
        res.render("index", eatenBurgers, uneatenBurgers);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create(req.body.name, result => {
        res.json({ id: result.id });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    burger.update(true, req.params.id, result => {
        res.json({ id: result.id });
    });
});

module.exports = router;
