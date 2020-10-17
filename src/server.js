// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js')
// iniciando o express
const server = express();
server
    .use(express.static('public'))

    // configurar template engines
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    // criar rotas da aplicação
    .get('/', pages.index)
    .get('/orfanato', pages.orfanato)
    .get('/orfanatos', pages.orfanatos)
    .get('/criar-orfanato', pages.criarOrfanato)


// ligar o servidor
server.listen(5500)