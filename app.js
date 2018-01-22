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
        for(i in data.entities){ console.log(i, data.entities[i]); }
        switch(data.intent){
            case 'Saludo':
                data.phrase(data.entities.saludo);
                rl.prompt();
                break;
            case 'Busqueda' :
<<<<<<< HEAD
                //console.log(data.entities[2]);
                data.phrase(data.entities[2]);
=======
                console.log(data.entities.titulo);
                console.log(data.entities.author);
>>>>>>> 2767485cf39d969ead8430e0c155ab8604736bae
                rl.prompt();
                break;
            case 'Terminar' :
                data.phrase(data.entities.Terminar);
                process.exit(0);
                break;
            default:
                console.log(`Disculpa, aún no aprendo el significado de ${reply}.`);
                console.log("¡Pero pronto lo aprendere para poder ayudarte mejor!");
                rl.prompt();
                break;
        }
    })
});
