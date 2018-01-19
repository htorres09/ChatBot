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
        var i = 0;
        //for(i in data.entities){ console.log(i, data.entities[i]); }
        switch(data.intent){
            case 'Saludo':
                data.phrase(data.entities.saludo);
                rl.prompt();
                break;
            case 'Busqueda' :
                console.log(data.entities[3]);
                data.phrase(data.entities[3]);
                rl.prompt();
                break;
            case 'Terminar' :
                data.phrase(data.entities.Terminar);
                process.exit(0);
                break;
            default:

                rl.prompt();
                break;
        }
    })
});
