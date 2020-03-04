// Faça uma função que recebe por parâmetro um valor inteiro e positivo e retorna o valor lógico 
// Verdadeiro caso o valor seja primo e Falso em caso contrário.
// Solicite ao usuário o número e no final imprima se é primo ou não utilizando a função na condição IF.

var user = require('readline-sync')
var num = user.questionInt("Insira um numero: ")

function teste (num) {
var i = 2
var x = 0
    while(i<num){
        if(num%i == 0){
        x++    
    }
    if(x>0){
        return "nao primo"
    }
    i++; 
    }
        return "primo"
}
console.log(`o numero insirido é ${teste(num)}`)