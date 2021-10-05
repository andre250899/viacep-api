const express = require("express");
const routes = express.Router();
const path = __dirname;

routes.get("/", (req, res) => res.sendFile(path + "/views/index.html"));

module.exports = routes;
