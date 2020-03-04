// Faça um procedimento que recebe, por parâmetro, um valor N e calcula e escreve a tabuada de 1 até N. Mostre a tabuada na forma:
// 1 x N = N
// 2 x N = 2N
// ...
// N x N = N2
// Após isso solicite o usuário um número e forneça o argumento do usuário para a função.
var user = require('readline-sync')
var num = user.questionInt("Insira um numero: ")
var x = 0
function tabuada(num) {
    while(x <= num ){
        var conta = num*x
        console.log(`${x} x ${num} = ${conta}`)
        x++
    }   
    return "Fim"
}
console.log(tabuada(num))