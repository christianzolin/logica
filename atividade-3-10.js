/*Faça um algoritmo que receba um número e imprima todos seus divisores.
EX : usuário informou 21
O algoritmo imprime :
1
3
7
21
DICA: Você pode precisar usar a operação de módulo (a%b)
*/

var user = require('readline-sync')

var num = user.question("Qual o numero: ")
var divi = 0;

while(divi >= 0){
    if(num % divi == 0 ){
        console.log(divi)
    }
    divi = divi +1;
}