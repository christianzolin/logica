// Fazer um programa que calcule e imprima o fatorial de um número fornecido pelo usuário,
// usando o comando For.. Perguntar ao usuário se ele deseja calcular o fatorial de
// outro número e repetir a execução do programa tantas vezes quantas o usuário indicar.
// Exemplo de tela de saída:
var user = require('readline-sync')

var num = user.questionInt("Insira um numero: ")
while(true){
    var num1 = 3
    var i = 2
for(var x =2;x<num;x++){
  i = num1*i
  num1++
  }
  console.log(i)

var x = user.question("Deseja calcular o fatorial de outro numero? \n(1) SIM \n(2) SAIR \n")
if(x == 1){
    var num = user.questionInt("Insira um numero: ")
} if(x == 2) {
    console.log("Encerrado!")
    break
}
}