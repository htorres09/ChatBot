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
        console.log(data);
        switch(data.intent){
            case 'Saludo':
                console.log(`${data.entities.saludo}, mi nombre es TigreBot`);
                rl.prompt();
                break;
            case 'Busqueda' :
                console.log(`Buscare ${data.entities.titulo} de ${data.entities.autor} para ti`);
                rl.prompt();
                break;
            case 'Terminar' :
                console.log(`¡${data.entities.despedida}, nos veremos luego!`);
                process.exit(0);
                break;
            default:
                console.log(`¿${reply}?, disculpa, aún estoy aprendiendo.`);
                console.log(`Pronto aprendere el significado '${reply}'', para ayudarte.`);
                rl.prompt();
                break;
        }
    })
});
