// Faça um programa que receba um número via teclado e verifique se este número é par ou ímpar. 


var user = require('readline-sync');

var numero = user.question("Insira um numero:" );

if(numero % 2 === 0){
    console.log("Esté numero é par")
}else{
    console.log("Esté numero é impar")
}