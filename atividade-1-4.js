/*As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra
var user = require("readline-sync");
*/
var produto = user.question("Qual o numero de maçãs?")

var maca = 0.30;
var maca1 = 0.25;

if(produto >= 12 ){
    console.log("Valor total da compra é " + produto*maca1);

} else if(produto < 12 && produto > 0){
    console.log("Valor total da sua compra é" + produto*maca)
    }