//Fazer um algoritmo que recebe 15 números de entrada e calcule a média dos números fornecidos.

var user = require('readline-sync');
var total = 0
var x = 0

while (x < 15){
    var num = user.questionInt("Insira um numero: ")
    var total = total+num;
    x++;
    
}
var media = total/15;
console.log("Sua média é: " + media)