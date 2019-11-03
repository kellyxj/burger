const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
    burger.all(allBurgers => {
        hbsObj = {
            burgers: allBurgers
        };
        res.render("index", hbsObj);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create(req.body.name, result => {
        res.json({ id: result.id });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    burger.update(1, req.params.id, result => {
        res.json({ id: result.id });
    });
});

module.exports = router;
