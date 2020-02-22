// Crie um programa que peça o usuário n números e, quando o usuário digitar -1, imprima o maior e o menor,
// sem levar em consideração o -1
var user = require('readline-sync')
var n = 0
var num = user.questionInt("Insira um numero: ")
var menor = num
var maior = num

while(num != -1){
    var num = user.questionInt("Insira um numero: ")


    if( num > maior && num != -1  ){
        maior = 0
        maior = maior + num
    }
    if ( num<menor && num != -1){
        menor = 0
        menor = menor + num
    }
    }
console.log("O menor numero : "+ menor)
console.log("O maior numero : "+ maior)