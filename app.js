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
        switch(data.intent){
            case 'Saludo':
                data.phrase(data.entities.saludo);
                rl.prompt();
                break;
            case 'Introduccion':
                setTimeout(function () {
                    rl.prompt();
                }, 1050);
            case 'Busqueda' :
                data.phrase(data.entities[2]);
                break;
            case 'Terminar' :
                data.phrase(data.entities.Terminar);
                process.exit(0);
                break;
            default:
                console.log(`Disculpa, aún no aprendo el significado de ${reply}.`);
                setTimeout(function (){
                    console.log("¡Pero pronto lo aprendere para poder ayudarte mejor!");
                }, 1000);
                setTimeout(function () {
                    rl.prompt();
                }, 1050);
                break;
        }
    })
});
