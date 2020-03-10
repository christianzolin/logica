var media = require("notas-universitarias-util").default
var user = require('readline-sync');

var nota1 = user.questionFloat('Insira a nota 1: ')
var nota2 = user.questionFloat('Insira a nota 2: ')
var nota3 = user.questionFloat('Insira a nota 3: ')

var notas = {
    g1: nota1,
    g2: nota2,
    g3: nota3
}

console.log(notas)
console.log(media(4).media(notas))