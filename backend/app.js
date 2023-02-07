const express = require('express');
const argonautesRoutes = require('./routes/argonautes.routes');
const cors = require('cors')

const app = express();

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, x-access-token, role, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

const helmet = require("helmet");

app.use(helmet());

const rateLimit = require("express-rate-limit");

app.use(
    rateLimit({
        windowMs: 10 * 60 * 1000,
        max: 100,
        message:
            "Vous avez effectué plus de 100 requêtes dans une limite de 10 minutes!",
        headers: true,
    })
);

app.use('/argonautes', argonautesRoutes);

module.exports = app;
