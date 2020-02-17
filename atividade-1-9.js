var user = require("readline-sync");
ar user = require('readLine-sync')
var angulo1 = user.question("Digite o Angulo: ")
var angulo2 = user.question("Digite o segundo Angulo: ")
var angulo3 = user.question("Digite o terceiro Angulo: ")

if(angulo1 == 90 || angulo2 == 90 || angulo3 == 90){
    console.log(' Triangulo Retangulo')
}else if(angulo1 > 90 || angulo2 > 90 || angulo3 > 90){
    console.log(' Triângulo Obtusangulo')
}else{
    console.log(' Triângulo Acutangulo')
}