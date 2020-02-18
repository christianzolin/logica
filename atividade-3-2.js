//Criar um algoritmo que realize a multiplicação de dois números maiores que zero SEM usar o operador de multiplicação (*)

var user = require('readline-sync');


var num1 = user.questionInt("Insira um numero: ")
var num2 = user.questionInt("Insira outro numero: ")
var soma = 0

while(num1 > 0){
    soma = soma + num2 ;
    num1 --;
}
console.log("O resultado da sua multiplicação é :" + soma);