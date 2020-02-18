//Escreva um programa para ler 3 valores inteiros (considere que  não serão lidos valores iguais) e escrevê-los em ordem crescente. 

function sortfunction(a, b){
    return (a - b)
}    

var user = require('readline-sync');

var um = user.question("Digite primeiro numero: ");
var dois = user.question("Digite segundo numero: ")
var tres = user.question("Digite terceiro numero: ")

var numeros = [um, dois, tres]

console.log(numeros.sort(sortfunction))