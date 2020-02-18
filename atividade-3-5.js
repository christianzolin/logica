var user = require("readline-sync");

var num = user.questionInt("Insira um numero: ")
var pot = user.questionInt("Inisira a potencia: ")
var soma = num;
var x = 1

while (pot > x){
    soma = soma * num;
    pot --;
  }
  console.log(soma)