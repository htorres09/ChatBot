'use strict';
/* API Server */
const Restify = require('restify');
const server = Restify.createServer({
    name: 'TigreBotMessenger'
});
const PORT = process.env.port || 3000;

server.use(Restify.jsonp());
server.use(Restify.bodyParser())

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

server.listen(PORT, () => console.log(`TigreBot running in port: ${PORT}`));
