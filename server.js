'use strict';
/* API Server */
const Restify = require('restify');
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
        console.log(msg);
    });
    return next();
});

server.listen(PORT, () => console.log(`TigreBot running in port: ${PORT}`));
