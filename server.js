const express = require('express');
const server = express();
const path = __dirname;

server.listen('2508', () => 
console.log('Servidor inicializado!'))

server.get('/', (req, res) => res.sendFile(path + '/index.html'))