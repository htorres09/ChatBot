'use strict'
/* Class FBeamer */

class FBeamer{
    constructor(config){
        try{
            if(!config || config.PAGE_ACCESS_TOKEN === undefined || config.VERIFY_TOKEN === undefined){
                throw new Error("No se puede acceder a los tokens");
            } else {
                this.PAGE_ACCESS_TOKEN = config.PAGE_ACCESS_TOKEN;
                this.VERIFY_TOKEN = config.VERIFY_TOKEN;
            }
        } catch(e){
            console.log(e);
        }
    }

    registerHook(req, res){
        // Sí req.query.hub.mode es 'subscribe' y req.query.hub.VERIFY_TOKEN
        // es el mismo que this.VERIFY_TOKEN entonces manda un HTTP status 200
        // y req.query.hub.challenge
        let {mode, verify_token, challenge} = req.query.hub;
        if(mode === 'subscribe' && verify_token === this.VERIFY_TOKEN){
            return res.end(challenge);
        } else {
            console.log("No se pudo registrar el webhook");
            return res.status(403).end();
        }
    }

    incoming(req, res){
        // Extraer el cuerpo del POST request
        let data = req.body;
        if(data.object === 'page'){
            data.entry.forEach(pageObj => {
                pageObj.messaging.forEach(msgEvent => {
                    let messageObj = {
                        sender: msgEvent.sender.id,
                        timeOfMessage: msgEvent.timestamp,
                        message: msgEvent.message
                    }
                    cb(messageObj);
                });
            });
        }
    }

}

module.exports = FBeamer;
