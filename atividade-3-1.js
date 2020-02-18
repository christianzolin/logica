/*Faça um programa que recebe um número de entrada e repita a mensagem “BIP BIP” de acordo com o número inserido.
EX: usuário inseriu 3
O programa imprime:
 BIP BIP
 BIP BIP
 BIP BIP
*/

var user = require("readline-sync");

var num = user.question("Insira um numero: ")

while(num > 0){
    num = num - 1;
    console.log("BIP BIP")
}