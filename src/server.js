const express = require("express");
const app = express();
const path = __dirname;
const routes = require("./routes");

//habilitar arquivos statics
app.use(express.static(path + "../../public"));

//usando as rotas
app.use(routes);

app.listen("2508", () => console.log("Servidor inicializado!"));
