/*Faça um algoritmo que receba uma palavra e imprima ela ao contrário.
EX: usuário informou BANANA
Algoritmo imprime:
ANANAB
*/

var user = require('readline-sync');
var palavra = user.question ("Qual a palavra? ");
var tamanho = palavra.length;
var resultado = "";
while(tamanho){
    resultado = resultado + palavra[--tamanho]
}
console.log(resultado)
/*
while(tamanho){
    console.log(palavra.charAt(tamanho));  
    tamanho = tamanho - 1;
}*/