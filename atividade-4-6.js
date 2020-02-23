// Crie um programa que peça ao usuário o nome e a idade de n pessoas e os imprima(1 de cada vez). 
// O programa deve ser interrompido quando o usuário digitar o nome “Final”. No final, o programa deve imprimir 
// quantos usuários foram cadastrados.

var user = require('readline-sync')
var x = 0
console.log("Escreva Final para encerrar")
while(true){
    var nome = user.question("Insira um nome: ")
        if(nome == "Final" || nome == "final"){
            break;
        }
    var idade = user.questionInt("Insira a idade: ")
    x++
    console.log(nome + " "+ idade)
}
console.log("O numero de pessoas cadastradas é : "+ x)