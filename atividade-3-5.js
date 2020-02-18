/*Faça um programa que calcule a potência (potenciação) de um número. 
Para isso ele deve receber dois números de entrada: o primeiro número é a base da potência, o segundo número será a potência.

EX: usuário inseriu 2 para base e 4 para potência.
O programa imprime : 
16
Lembrando: 24 = 2*2*2*2
*/

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