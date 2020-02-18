/*Escreva um programa para ler o ano de nascimento de uma pessoa e 
escrever uma mensagem que diga se ela poderá ou não votar este ano 
(não é necessário considerar o mês em que ela nasceu).
*/

var user = require('readline-sync');


var ano = user.question("Insira seu ano de nascimento: ");
var anoatual = 2020
var idade = anoatual - ano;

if(idade >=66){
    console.log("Voce pode votar");
} else if(idade >=18 && idade <=65){
    console.log("Voce deve votar este ano")
}else if(idade >=16 && idade <18){
    console.log("Seu voto não é obrigatório")
}else{
    console.log("Voce não pode votar")
}