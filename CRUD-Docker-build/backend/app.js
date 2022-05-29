const express = require('express');
const restful = require("node-restful");
const server = express();
const mongoose = restful.mongoose;

//A biblioteca promise do mongoose não e mais mantida e está deprecate por isso e necessario importar as promises do proprio node
mongoose.Promise = global.Promise
mongoose.connect("mongodb://db/mydb")

server.get("/", (req, res, next) => res.send("BackEnd"))

server.listen(3000)
