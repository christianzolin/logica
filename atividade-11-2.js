var FasamImc = require('fasam-imc-calc')
var user = require('readline-sync');

var alt = user.questionFloat('Insira a altura: ')
var peso = user.questionFloat('Insira o peso: ')

var imc = new FasamImc(peso, alt )
imc.calc()

console.log(`O seu IMC é: ${imc.calc()}`)