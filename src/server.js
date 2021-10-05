const express = require("express");
const server = express();
const path = __dirname;
const routes = require("./routes");

//habilitar arquivos statics
server.use(express.static(path + "../../public"));

//usando as rotas
server.use(routes);

server.listen("2508", () => console.log("Servidor inicializado!"));
