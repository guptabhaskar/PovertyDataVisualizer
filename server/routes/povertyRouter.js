const express = require('express');

const povertyRouter = express.Router();
povertyRouter.use(express.json());

const Poverty = require("../models/poverty")

povertyRouter.route('/poverty')
    .get((req, res, next) => {
        Poverty.find({ poverty_level: req.query.poverty_level })
            .then((data) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(data);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        console.log(req.body);
        Poverty.insertMany(req.body)
            .then(() => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({ "success": true });
            }, (err) => next(err))
            .catch((err) => next(err));
    })

module.exports = povertyRouter;