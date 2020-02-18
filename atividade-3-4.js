/*Faça um programa que recebe um número e imprima todos os números pares de 0 até o número inserido.
Ex: usuário inseriu 8
O programa imprime
0
2
4
6
8
*/

var user = require('readline-sync');
var num = user.question("Qual o seu numero: ");

var x = 0
if(num % 2 != 0){
    num = num -1;
}

while(x <= num){
  if(num % 2== 0){
  console.log(x)
  x = x+2;
 }
  else{
    x = x +1;

  }
}
