//Fazer um algoritmo que receba 8 idades do usuário e no final ele imprimir qual é a menor idade.

var user = require('readline-sync');
var x = 0
var num = user.question("Insira uma idade: ")
var num1 = num;

while (x < 7){
    var num = user.question("Insira uma idade: ")    
    if(num <= num1){
        num1 = num;
    }
    x++
}console.log("A menor idade é : " + num1)