const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204,
    })
);
app.use(express.urlencoded({ extended: true }));
module.exports = app;
