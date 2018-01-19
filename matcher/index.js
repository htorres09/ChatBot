'use strict';
const patterns = require('../patterns');
const XRegExp = require('xregexp');

let createEntities = (str, pattern) => {
    //console.log(">> [Crear Entidades]");
    return XRegExp.exec(str, XRegExp(pattern, "i"));
}

let createParams = (str, param) =>{
    //console.log(">> [Identificar Parametro]");
    //return XRegExp.exec(str, XRegExp(pattern, "i"));
}

let matchPattern = (str, cb) => {
    //console.log(">> [Identificar Patron]");
    let getResult = patterns.find(item => {
        //console.log(item);
        if(XRegExp.test(str, XRegExp(item.pattern, "i"))) {
            return true;
        }
    });

    //console.log(getResult);

    if(getResult) {
        return cb({
            intent: getResult.intent,
            phrase: getResult.phrase,
            entities: createEntities(str, getResult.pattern)
        });
    } else {
        return cb({});
    }
}

module.exports = matchPattern;
