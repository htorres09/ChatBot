const patternDict = [
    {
        pattern: '\\b(?<saludo>Hola|Hi|Hey)\\b',
        intent: 'Saludo',
        parametro: 'Null',
        phrase: function (item) {
            console.log(`${item}`.capitalize() + `, mi nombre es TigreBot`);
            console.log("Estoy aquí para ayudarte a encontrar libros en tu biblioteca.");
        }
    },
    {
        pattern: '\\b(?<intro>como|qu. haces)\\b',
        intent: 'Introduccion',
        parametro: 'Null',
        phrase: function () {
            console.log(`Soy un Bot, estoy programado para realizar busquedas simples`);
            setTimeout(function(){
                console.log(`Aún estoy aprendiendo a comprender el lenguaje humano, así que te pedire un poco de apoyo`);
            }, 1000);
            setTimeout(function(){
                console.log(`Para busar un libro por su titulo, escribelo entre comillas. Ej. "Titulo"`);
            }, 2000);
            setTimeout(function(){
                console.log(`Para busar un libro por un autor, escribelo entre <>. Ej. <Autor>`);
            }, 3000);
        }
    },
    {
        pattern: '\\b(?<despedida>Adios|Bye|Gracias)\\b',
        intent: 'Terminar',
        parametro: 'Null',
        phrase: function (item) {
            console.log(`Espero haberte ayudado.`)
            console.log(`¡` + `${item}`.capitalize() + `, nos veremos luego!`);
        }
    },
    {
        pattern: '(?<titulo>\"(.*)\")',
        intent: 'Busqueda',
        parametro: 'titulo',
        phrase: function (item) {
            console.log(`Buscare ` + `${item}`.capitalize() + `, para ti. Dame un momento`);
        }
    },
    {
        pattern: '\\b(enc(.*)ntr(.?)r?)|(busc(.)?(.))\\b\\s\\b(?<titulo>\"(.*)\")',
        intent: 'Busqueda',
        parametro: 'titulo',
        phrase: function (item) {
            console.log(`Buscare ` + `${item}`.capitalize() + `, para ti. Dame un momento`);
        }
    },
    {
        pattern: '(?<author>\<(.*)\>)',
        intent: 'Busqueda',
        parametro: 'autor',
        phrase: function (item) {
            console.log(`Buscare libros de ` + `${item}`.capitalize() + `, para ti. Dame un momento`);
        }
    },
    {
        pattern: '',
        intent: 'None',
        parametro: 'Null',
        phrase: function (item) {
            console.log(`Disculpa, aún no aprendo el significado de ${item}.`);
            console.log("¡Pero pronto lo aprendere para poder ayudarte mejor!");
        }
    }
];

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

module.exports = patternDict;
