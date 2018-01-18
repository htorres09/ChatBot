'use strict';

const ReadLine = require('readline');
const rl = ReadLine.createInterface({
    input:  process.stdin,
    output: process.stdout,
    terminal: false
});

const matcher = require('./matcher');

rl.setPrompt('> ');
rl.prompt();
rl.on('line', reply => {
    matcher(reply, data =>{
        switch(data.intent){
            case 'Saludo':
                console.log(`${reply}, mi nombre es TigreBot`);
                rl.prompt();
                break;
            case 'Terminar' :
                console.log(`¡${reply}, nos veremos luego!`);
                rl.prompt();
                break;
            default:
                console.log(`¿${reply}?, disculpa, aún estoy aprendiendo.`);
                console.log(`Pronto aprendere el significado '${reply}'', para ayudarte.`);
                rl.prompt();
                break;
        }
    })
});
