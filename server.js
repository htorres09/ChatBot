'use strict';
/* API Server */
const Restify = require('restify');
const server = Restify.createServer({
    name: 'TigreBotMessenger'
});
const PORT = process.env.port || 3000;

// Tokens
const config = require('./config');

// FBeamer
const FBeamer = require('./fbeamer');
const f = new FBeamer(config);

// Prueba
server.get('/', (req, res, next) => {
    res.send("Hola");
    return next();
});

server.listen(PORT, () => console.log(`TigreBot running in port: ${PORT}`));
