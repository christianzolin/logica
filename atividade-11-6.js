//Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado.


const chalk = require('chalk');
var user = require('readline-sync');

var num = user.questionInt("Insira um numero: ")

if(num >= 0){
    console.log(chalk.blue("O seu numero é positivo: " + num*2))
  }else{
    console.log(chalk.redBright("O seu numero é negativo: " + num*3))
  }