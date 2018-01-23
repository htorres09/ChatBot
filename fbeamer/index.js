'use strict'
const request = require('request');
/* Class FBeamer */
class FBeamer{
    constructor(config) {
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

    registerHook(req, res) {
        // Sí req.query.hub.mode es 'subscribe' y req.query.hub.VERIFY_TOKEN
        // es el mismo que this.VERIFY_TOKEN entonces manda un HTTP status 200
        // y req.query.hub.challenge
        var mode = req.query['hub.mode'];
        var verify_token = req.query['hub.verify_token'];
        var challenge = req.query['hub.challenge'];

        if(mode === 'subscribe' && verify_token === this.VERIFY_TOKEN){
            console.log("Webhook registrado");
            return res.end(challenge);
        } else {
            console.log("No se pudo registrar el webhook");
            return res.status(403).end();
        }
    }

    /*subscribe() {
        request({
            uri: 'https://graph.facebook.com/v2.11/me/subscribed_apps',

        });
    }*/

    incoming(req, res) {
        // Extraer el cuerpo del POST request
        let data = req.body;
        if(data.object === 'page'){
            //Iterar a traves del arreglo entry
            data.entry.forEach(pageObj => {
                //console.log(pageObj);
                pageObj.changes.forEach(obj => {
                    console.log(obj);
                });

                /*pageObj.messaging.forEach(msgEvent => {
                    //Iterar a traves del arreglo messaging
                    let messageObj = {
                        sender: msgEvent.sender.id,
                        timeOfMessage: msgEvent.timestamp,
                        message: msgEvent.message
                    }
                    cb(messageObj);
                });*/
            });
        }
    }

    sendMessage(payload) {
        return new Promise((resolve, reject) => {
            // Crear un HTTP POST request
            request({
                uri: 'https://graph.facebook.com/v2.11/me/messages',
                qs: {
                    access_token: this.PAGE_ACCESS_TOKEN
                },
                method: 'POST',
                json: payload
            }, (error, response, body) => {
                if(!error && response.statusCode === 200){
                    resolve({
                        messageId: body.message_id
                    });
                } else {
                    reject(error);
                }
            });
        });
    }

    txt(id, url) {
        let obj = {
            recipient: {
                id
            },
            message: {
                text
            }
        }
        this.sendMessage(obj).catch(error => console.log(error));
    }
}

module.exports = FBeamer;
