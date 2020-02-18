/*Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo é Acutângulo, Retângulo ou Obtusângulo. 
Sendo que: 
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º) 
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º) 
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
*/

var user = require("readline-sync");

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