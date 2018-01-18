const patternDict = [
    {
        pattern: '\\b(?<saludo>Hola|Hi|Hey)\\b',
        intent: 'Saludo'
    },
    {
        pattern: '\\b(?<despedida>Adios|Bye|Gracias)\\b',
        intent: 'Terminar'
    },
    {
        pattern: '\\b(?<titulo>(.*))\\b',
        intent: 'Busqueda',
        parametro: 'titulo'
    }
];

module.exports = patternDict;
