// Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número.
// Solicite dois números para o usuário e forneça como argumento para esta função. 
// Escreva o resultado da função na tela dizendo qual menor número.

var user = require('readline-sync')
var num1 = user.questionInt("Insira um numero: ")
var num2 = user.questionInt("Insira um numero: ")

function Menornumero(num1,num2) {
    if(num1>num2){
        return num2
    }else{
        return num1
    }
}
    if(num1==num2){
    console.log("Os numeros são iguais")
    }else{
        console.log(`O menor numero é: ${Menornumero(num1,num2)}`)
    }
