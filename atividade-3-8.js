/*
Faça um algoritmo que receba uma palavra e imprima cada caractere da palavra em uma linha.
EX: usuário informou MAÇÃ
O algoritmo imprime: 
M
A
Ç
Ã
*/

var user = require('readline-sync');

var ent = user.question("Insira uma palavra: ");
var tamanho = ent.length;
var x = 0
while(x < tamanho){
    console.log(ent[x++])
}


/* var tamanho = ent.length;
var n = 0;

while(n < tamanho){
    console.log(ent.charAt(n));
    n ++;
} */


