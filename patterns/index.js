const patternDict = [
    {
        pattern: '\\b(?<saludo>Hola|Hi|Hey)\\b',
        intent: 'Saludo',
        parametro: 'Null',
        phrase: function (item) {
            console.log(`${item}, mi nombre es TigreBot`);
            console.log("Estoy aquí para ayudarte a encontrar libros en tu biblioteca.");
        }
    },
    {
        pattern: '\\b(?<despedida>Adios|Bye|Gracias)\\b',
        intent: 'Terminar',
        parametro: 'Null',
        phrase: function (item) {
            console.log(`Espero haberte ayudado, ¡${item}, nos veremos luego!`);
        }
    },
    {
        pattern: '(?<titulo>\"(.*)\")',
        intent: 'Busqueda',
        parametro: 'titulo',
        phrase: function (item) {
            console.log(`Buscare ${item}, para ti. Dame un momento`);
        }
    },
    {
        pattern: '\\b(enc(.*)ntr(.?)r?)|(busc(.)?(.))\\b\\s\\b(?<titulo>\"(.*)\")',
        intent: 'Busqueda',
        parametro: 'titulo',
        phrase: function (item) {
            console.log(`Buscare ${item}, para ti. Dame un momento`);
        }
    },
    {
        pattern: '(?<author>\<(.*)\>)',
        intent: 'Busqueda',
        parametro: 'autor',
        phrase: function (item) {
            console.log(`Buscare libros de ${item}, para ti. Dame un momento`);
        }
    },
    {
        pattern: '\\b(enc(.*)ntr(.?)r?)|(busc(.)?(.))\\b\\s\\b(?<titulo>\"(.*)\")',
        intent: 'Busqueda',
        parametro: 'titulo',
        phrase: function (item) {
            console.log(`Disculpa, aún no aprendo el significado de ${item}.`);
            console.log("¡Pero pronto lo aprendere para poder ayudarte mejor!");
        }
    }
];

module.exports = patternDict;
