const isPrime = require('prime-number')

var user = require('readline-sync')
var num = user.questionInt('Insira um numero para verificar se ele eh prinmo ou nao: \n <<< Primo = True >>> \n')

console.log(isPrime(num)) // true