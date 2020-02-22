/*Escreva um programa que passe por todos os números de 1 a 50 e para cada um deles imprima na tela se o número é par ou ímpar. 
Caso o número também seja primo, o programa deve dizer que ele é primo. 
(um número primo é um número que só é divisível por ele mesmo e por 1). 
Dica: Neste exercício você pode precisar de ajuda do operador MÓDULO (%). Você também pode precisar criar mais de um loop. */

var user = require('readline-sync');
var x = 0;
var i = 1
var num = 0
var primo = " primo "

while(x < 50){
    var par_impar = " "
    if(x%2 == 0){
    par_impar = "PAR"
    } 
        else{
            par_impar = "impar"
        }

        var i = 2;
        primo = "primo"
        var num = 0

    while(i<x){
        if(x%i == 0){
        num++;
    }
        if(num>0){
            primo = " " 
        }
            i++; 
        }
            console.log(x + " " + par_impar +" " +primo)
            x++
        }
        
    
    