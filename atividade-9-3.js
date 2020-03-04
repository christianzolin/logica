// Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna essa idade expressa em dias.
// Solicite a data ao usuário e o algoritmo imprime a quantidade de dias como resultado utilizando a função criada.
var user = require('readline-sync')

function idadeemdias() {
    var anos = user.questionFloat("Quantos anos voce tem: ")
    var meses = user.questionFloat("E meses : ")
    var dias = user.questionFloat("E dias:  ")

    idade = (anos*12*30) + (meses*30) + dias
    return idade
   
}
console.log(`A sua idade em dias é: ${idadeemdias()} dias`)