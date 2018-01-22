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
}

module.exports = FBeamer;
