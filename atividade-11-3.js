const isOdd = require('is-odd');

var user = require('readline-sync')
var num = user.questionInt('Insira um numero para verificar se ele eh impar ou nao: \n Impar = True \n')

console.log(isOdd(num))