const patternDict = [
    {
        pattern: '\\b(Hola|Hi|Hey)\\b',
        intent: 'Saludo'
    },
    {
        pattern: '\\b(Adios|Bye|Gracias)\\b',
        intent: 'Terminar'
    },
    {
        pattern: '',
        intent: ''
    }
];

module.exports = patternDict;
