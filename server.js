'use strict';
/* API Server */
const Restify = require('restify');
const request = require('request');
const server = Restify.createServer({
    name: 'TigreBotMessenger'
});
const PORT = process.env.port || 3000;

server.use(Restify.plugins.jsonp());
server.use(Restify.plugins.bodyParser());

// Tokens
const config = require('./config');

// FBeamer
const FBeamer = require('./fbeamer');
const f = new FBeamer(config);

// Registrar Webhooks
server.get('/', (req, res, next) => {
    f.registerHook(req, res);
    return next();
});

// Recibe todos los mensajes entrantes
server.post('/', (req, res, next) => {
    f.incoming(req, res, msg =>{
        //procesar los mensajes
        f.txt(msg.sender, `${msg.message.text}, mi nombre es Tigrebot`);
    });
    return next();
});

server.listen(PORT, () => console.log(`TigreBot running in port: ${PORT}`));
