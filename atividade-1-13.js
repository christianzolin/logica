var user = require('readline-sync');

var num = user.questionInt("Insira um numero: ")

if(num >= 0){
    console.log("O seu numero é positivo: " + num*2)
  }else{
    console.log("O seu numero é negativo: " + num*3)
  }